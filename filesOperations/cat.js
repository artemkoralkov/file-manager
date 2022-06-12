import { createReadStream } from 'fs';

export const cat = async (path) => {
    const readStream = createReadStream(path);
    readStream.on('error', (err) => {
        console.log('Operation Failed');
    });
    readStream.on('data', (chunk) => {
        console.log(chunk.toString());
    });
   //readStream.pipe(process.stdout);
};