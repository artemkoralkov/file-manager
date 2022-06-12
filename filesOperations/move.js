import { rename } from 'fs';

export const move = async (pathToFile, pathToNewDir) => {
    rename(pathToFile, `${pathToNewDir}/${pathToFile}`, (err) => {
       if (err) {
        console.log('Operation Failed');
       }
    });
};
