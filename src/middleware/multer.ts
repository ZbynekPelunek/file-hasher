import { NextFunction } from 'express';
import multer from 'multer';

export function uploadFile(req: any, res: any, next: NextFunction) {
  const upload = multer({ dest: 'uploads/' }).single('file');

  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.error('Multer error: ', err);
      return res.status(500).json({ message: err.message });
    } else if (err) {
      console.error('Unknown error: ', err);
      return res.status(500).json({ message: 'Server error' });
    }

    next();
  })
}