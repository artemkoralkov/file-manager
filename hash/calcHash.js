import { createReadStream } from 'fs';
import { createHash } from 'crypto';

export const calculateHash = async (pathToFile) => {
    try {
        createReadStream(pathToFile).on('data', (chunk) => {
            console.log(createHash('sha256').update(chunk).digest('hex'));
        });
    }
    catch {
        console.log('Operation failed');
    }
    
};