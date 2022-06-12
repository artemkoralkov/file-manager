export const cd = (path) => {
    try {
        process.chdir(path);
        
    }
    catch {
        console.log('Operation Failed');
    }
    return process.cwd();
};