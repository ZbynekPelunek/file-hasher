import { DataTypes, Sequelize } from 'sequelize';

export const UploadedFile = (sequelize: Sequelize) => {
  sequelize.define('UploadedFile', {
    sha1: DataTypes.TEXT,
    totalSizeInBytes: DataTypes.STRING,
  })
};