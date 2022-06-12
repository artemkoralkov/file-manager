import { createReadStream, createWriteStream } from 'fs';
import { parse } from 'path';

export const copy = async (pathToFile, pathToNewDir ) => {
    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(`${pathToNewDir}/${parse(pathToFile).base}`);
    readStream.on('error', (err) => {
        console.log('Operation Failed');
    });
    writeStream.on('error', (err) => {
        console.log('Operation Failed');
    });

    readStream.pipe(writeStream);
};