import { stdin, stdout, argv } from 'process';
import path, { format } from 'path';
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
import { setHomeDirectory, cd, up } from './utils/navigation.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const userName = async (args) =>
	args.pop().split('=').pop();


const app = async () => {
	process.stdin.setEncoding('utf8');

	const homeDirectory = setHomeDirectory();

	stdout.write(`Welcome to the File Manager, ${await userName(argv)}!\n`);

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

		if (line === 'up') {
			up();
		}

		if (line.startsWith('cd')) {
			cd(line.slice(3), homeDirectory);
		}

		stdout.write('Invalid input\n');
	});

	process.on('SIGINT', () => { process.exit(); });
	process.on('exit', () => stdout.write(`Thank you for using File Manager!`));
}

await app();