import { createReadStream } from 'fs';

export const cat = async (path) => {
    const readStream = createReadStream(path);
    readStream.on('error', (err) => {
        console.log('Operation Failed');
    });
    readStream.pipe(process.stdout);
};