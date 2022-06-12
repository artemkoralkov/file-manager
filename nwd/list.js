import { promises } from 'fs';

export const list = async (path) => {
    // Write your code here 
    promises.readdir(path)
    .then((files) => {
       console.dir(files, {'maxArrayLength': null});
    })
    .catch((err) => {
       console.log('Operation Failed');
    })
};