
import { userInfo } from 'os';
import { createInterface } from 'readline';
import { stdin as input, stdout as output } from 'process';
import { list, cd } from './nwd/index.js';
import { osResolve } from './os/index.js';
import { calculateHash } from './hash/index.js';
import { add, cat, copy, move, remove, rename } from './filesOperations/index.js';
import { compress, decompress } from './zip/index.js';


const rl = createInterface({ input, output });
const [args] = process.argv.slice(2);
const ROOT_DIR = userInfo().homedir;
process.chdir(ROOT_DIR);
let currentDir = ROOT_DIR;
const username = args.slice(args.indexOf('=') + 1);

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${currentDir}`);

rl.on('line', (msg) => {
    const inputMessage = msg.toString().trim();
    let command, path, payload;
    if (inputMessage.includes('\'') || inputMessage.includes('"')){
        [command, path, payload] = Array.from(inputMessage.match(/(?:[^\s\'"]+|["\'][^"\']*["\'])+/g) 
        )
       .map(v => v.replaceAll(/["']/g, ''));
    }
    else {
        [command, path, payload] = inputMessage.split(' ');
    }
    

    switch (command) {
    case 'add': 
        add(path);
        console.log(`You are currently in ${currentDir}`);
        break;
    case 'cd':
        if (payload) {
            console.log('Invalid input');
        }
        else {
            currentDir = cd(path);
        }
        console.log(`You are currently in ${currentDir}`);
        break;
    case 'cat':
        if (payload) {
            console.log('Invalid input');
        }
        else {
           cat(path); 
        }
        console.log(`You are currently in ${currentDir}`); 
    break;
    case 'ls':
        if (path) {
            console.log('Invalid input');
        }
        else {
            list(currentDir);
        }
        console.log(`You are currently in ${currentDir}`);
        break;
    case 'up':
        if (path) {
            console.log('Invalid input');
        }
        else {
            currentDir = cd('../');
        }
        console.log(`You are currently in ${currentDir}`);
        break;
    case 'rn':
        rename(path, payload);
        console.log(`You are currently in ${currentDir}`);
    break;
    case 'mv':
        move(path, payload);
        console.log(`You are currently in ${currentDir}`);
        break;
    case 'cp':
        copy(path, payload);
        console.log(`You are currently in ${currentDir}`);
    break;
    case'rm':
        if (payload) {
            console.log('Invalid input');
        }
        else {
            remove(path); 
        }
        console.log(`You are currently in ${currentDir}`);
        break;
    case 'os':
        osResolve(msg.toString().split('--')[1].trim());
        console.log(`You are currently in ${currentDir}`);
        break;
    case 'hash':
        if (payload) {
            console.log('Invalid input');
        }
        else {
            calculateHash(path);
        }
        console.log(`You are currently in ${currentDir}`);
        break;
    case 'compress':
        compress(path, payload);
        console.log(`You are currently in ${currentDir}`);
        break;
    case 'decompress':
        decompress(path, payload);
        console.log(`You are currently in ${currentDir}`);
        break;
    case '.exit':
        rl.close();
        break;
    default:
        console.log('Invalid input');
    }
})
    
    
rl.on('SIGINT', () => {
    rl.close();
});

rl.on('close', () => {
    console.log(`Thank you for using File Manager, ${username}!`);
})

