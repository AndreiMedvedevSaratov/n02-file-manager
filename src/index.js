import { stdin, stdout, argv } from 'process';
import path from 'path';
import { fileURLToPath } from 'url';
import { createInterface } from 'readline';

import { osInfo } from './utils/osInfo.js';
import { hashCalculation } from './utils/hashCalculation.js';
import { list } from './utils/list.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const userName = async (args) =>
	args.pop().split('=').pop();


const app = async () => {
	process.stdin.setEncoding('utf8');

	stdout.write(`Welcome to the File Manager, ${await userName(argv)}!\n`);
	stdout.write(`You are currently in ${__dirname}\n`);


	const mainInterface = createInterface(stdin, stdout);

	mainInterface.on('line', (line) => {
		if (line.startsWith('os')) {
			osInfo(line.split('--')[1]);
		}

		if (line.startsWith('hash')) {
			hashCalculation(line.slice(5));
		}

		if (line.startsWith('ls')) {
			list();
		}

		console.log('You are currently in ' + process.cwd());
	});



	// stdin.on('data', data => console.log(data));

	// process.on('exit', code => console.log(code));
}

await app();