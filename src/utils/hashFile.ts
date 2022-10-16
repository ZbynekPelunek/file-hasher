import { createHash } from 'crypto';
import * as fs from 'fs';

export async function hashFile(filePath: fs.PathLike): Promise<string> {
  const hash = createHash('sha1');

  await new Promise<void>((res) => {
    let readStream = fs.createReadStream(filePath);
    readStream.on('readable', () => {
      let chunk;
      while ((chunk = readStream.read())) {
        hash.update(chunk);
      }
    })

    readStream.on('close', () => {
      if (fs.existsSync(filePath)) {
        fs.rmSync(filePath, { recursive: true });
      }
      res();
    })
  })

  return hash.digest('hex');
}