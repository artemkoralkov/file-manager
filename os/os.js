import { EOL, cpus, homedir, userInfo, arch} from 'os';

export const osResolve = async (command) => {
    if (command.includes('EOL')) {
        console.log(JSON.stringify(EOL));
    }
    else if (command.includes('cpus'))  {
        console.log(cpus().map((v) => {
            return {'model': v.model, 'speed': Number((v.speed / 1000).toFixed(2))};
        }));
    }
    else if (command.includes('homedir'))  {
        console.log(homedir());
    }
    else if (command.includes('username'))  {
        console.log(userInfo().username);
    }
    else if (command.includes('architecture'))  {
        console.log(arch());
    }
    else {
        console.log('Invalid input');
    }
    


}