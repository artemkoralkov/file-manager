import { unlink } from 'fs';

export const remove = async (path) => {
        unlink(path, (err) => {
            if (err) {
                console.log('Operation Failed: No Such File');
            }
        }); 
};