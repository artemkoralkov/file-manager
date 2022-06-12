import { createWriteStream } from 'fs';

export const add = async (path) => {
    const writeStream = createWriteStream(path);
    writeStream.on('error', (err) => {
        console.log('Operation Failed');
    });
};