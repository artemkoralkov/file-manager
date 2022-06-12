import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress } from 'zlib';
import { parse } from 'path';

export const compress = async (pathToFile, pathToNewDir) => {
    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(`${pathToNewDir}/${parse(pathToFile).base}.br`);

    readStream.on('error', (err) => {
        console.log('Operation Failed');
    });
    writeStream.on('error', (err) => {
        console.log('Operation Failed');
    }); 
    readStream
    .pipe(createBrotliCompress())
    .pipe(writeStream);
};
