import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress } from 'zlib';
import { parse } from 'path';

export const decompress = async (pathToFile, pathToNewDir) => {
    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(`${pathToNewDir}/${parse(pathToFile).name}`);

    readStream.on('error', (err) => {
        console.log('Operation Failed');
    });
    writeStream.on('error', (err) => {
        console.log('Operation Failed');
    }); 
    readStream
    .pipe(createBrotliDecompress())
    .pipe(writeStream);
};
