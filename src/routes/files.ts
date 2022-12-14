import express, { Request, Response } from 'express';

import { errorMessage, fileResponse } from '../interface/apiResponse';
import { uploadFile } from '../middleware/multer';
import { sequelize } from '../sequelize';
import { hashFileData } from '../utils/hashFile';


export const filesRouter = express.Router();

filesRouter.post('/upload', uploadFile, async (req: Request, res: Response<fileResponse | errorMessage>) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ message: 'Missing file' });
  }

  const hashedFileData = await hashFileData(file.buffer);

  const responseData: fileResponse = {
    sha1: hashedFileData,
    totalSizeInBytes: file.size
  }

  console.log('Saving to db...');
  await sequelize.models.UploadedFile.create({
    sha1: responseData.sha1,
    totalSizeInBytes: responseData.totalSizeInBytes.toString()
  });
  console.log('Saved to db');

  return res.status(200).json(responseData);
})