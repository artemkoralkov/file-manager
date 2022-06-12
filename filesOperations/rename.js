import { rename as rn} from 'fs';

export const rename = async (pathToFile, newFileName) => {
    rn(pathToFile, newFileName, (err) => {
       if (err) {
        console.log('Operation Failed');
       }

    });
};
