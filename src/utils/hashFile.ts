import { createHash } from 'crypto';
import { Blob, Buffer } from 'node:buffer';
import { ReadableStream } from 'node:stream/web';

export async function hashFileData(bufferData: Buffer): Promise<string> {
  const hash = createHash('sha1');

  // TRY WITH JUST BUFFER
  const blobSize = bufferData.byteLength;
  const maxSize = 10000000;
  if (blobSize < maxSize) {
    hash.update(bufferData);
  } else {
    let startIndex = 0;
    let endIndex = maxSize;

    let parts = Math.ceil(blobSize / maxSize);

    console.log('parts: ', parts);

    for (let i = 0; i < parts; i++) {
      let slicedBufferData = bufferData.subarray(startIndex, endIndex);
      hash.update(slicedBufferData);
      startIndex = endIndex;
      endIndex += maxSize;
    }
  }

  // const blob = new Blob([bufferData]);

  // TRY WITH FOR AWAIT ON BLOBSTREAM:

  // const blobStream = blob.stream();
  // for await (const chunk of blobStream) {
  //   hash.update(chunk);
  // }

  // ------------------------------------
  // TRY WITH READER:

  //const reader = blobStream.getReader();
  // let result;
  // do {
  //   result = await reader.read();
  //   if (result.value !== undefined)
  //     hash.update(result.value);
  // } while (!result.done);

  // ------------------------------------
  // TRY WITH BLOB:

  // const blobSize = blob.size;
  // const maxSize = 1000000;
  // if (blobSize < maxSize) {
  //   hash.update(bufferData);
  // } else {
  //   let startIndex = 0;
  //   let endIndex = maxSize;

  //   let parts = Math.ceil(blobSize / maxSize);

  //   console.log('parts: ', parts);

  //   let finalBlobLength = 0;
  //   for (let i = 0; i < parts; i++) {
  //     const blobSlice = blob.slice(startIndex, endIndex, 'buffer');
  //     finalBlobLength += blobSlice.size;
  //     const blobData = await blobSlice.arrayBuffer();
  //     hash.update(Buffer.from(blobData));
  //     startIndex = endIndex;
  //     endIndex += maxSize;
  //   }

  //   console.log('final blob size: ', finalBlobLength);
  // }

  // ------------------------------------------------------------
  // TRY WITH JUST READABLE STREAM

  // const stream = new ReadableStream({});
  // const reader = stream.getReader();

  // let result;
  // do {
  //   result = await reader.read(bufferData);
  //   if (result.value !== undefined)
  //     hash.update(result.value);
  // } while (!result.done);

  return hash.digest('hex');
}

/*
/ I have tried several options, all of them uses too much memory when a large file (1 GB+) is uploaded
*/