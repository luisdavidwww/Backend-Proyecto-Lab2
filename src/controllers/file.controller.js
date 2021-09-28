import File from "../models/File";
import path from 'path'
import multer from 'multer';

import { fileURLToPath } from 'url';
import { __basedir } from 'path';


const fs = require("fs");
const baseUrl = 'src/public/files/';


export const getListFiles = (req, res) => {
  const directoryPath = 'src/public/files/';

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }
    console.log(files)

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: baseUrl + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

export const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPathh = 'src/public/files/';
  res.download(directoryPathh + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};