import { stdin, stdout, argv } from 'process';
import path from 'path';
import { fileURLToPath } from 'url';
import { createInterface } from 'readline';

import { osInfo } from './utils/osInfo.js';
import { hashCalculation } from './utils/hashCalculation.js';
import { list } from './utils/list.js';
import { readFile } from './utils/readFile.js';
import { addFile } from './utils/addFile.js';
import { renameFile } from './utils/renameFile.js';
import { copyFile } from './utils/copyFile.js';
import { deleteFile } from './utils/deleteFile.js';
import { compress } from './utils/compress.js';
import { decompress } from './utils/decompress.js';

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
		try {
			if (line.startsWith('os')) {
				osInfo(line.split('--')[1]);
			}

			if (line.startsWith('hash')) {
				hashCalculation(line.slice(5));
			}

			if (line.startsWith('ls')) {
				list();
			}

			if (line.startsWith('cat')) {
				readFile(line.slice(4));
			}

			if (line.startsWith('add')) {
				addFile(line.slice(4));
			}

			if (line.startsWith('rn')) {
				renameFile(line.slice(3));
			}

			if (line.startsWith('cp')) {
				copyFile(line.slice(3));
			}

			if (line.startsWith('rm')) {
				deleteFile(line.slice(3));
			}

			if (line.startsWith('compress')) {
				compress(line.slice(9));
			}

			if (line.startsWith('decompress')) {
				decompress(line.slice(11));
			}

		} catch (err) {
			console.log(err)
		}

		// console.log('You are currently in ' + process.cwd());
	});



	// stdin.on('data', data => console.log(data));

	// process.on('exit', code => console.log(code));
}

await app();