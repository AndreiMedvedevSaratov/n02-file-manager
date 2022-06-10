import { stdin, stdout, argv } from 'process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const userName = async (args) =>
	args.pop().split('=').pop();


const app = async () => {
	process.stdin.setEncoding('utf8');

	stdout.write(`Welcome to the File Manager, ${await userName(argv)}!\n`);

	stdout.write(`You are currently in ${__dirname}\n`);

	stdin.on('data', data => console.log(data));

	process.on('exit', code => console.log(code));
}

await app();