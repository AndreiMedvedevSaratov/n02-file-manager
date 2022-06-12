import { homedir } from 'os';
import { join } from 'path';


export function setHomeDirectory(path) {
	const pathToHomeDirectory = path || homedir();

	try {
		process.chdir(pathToHomeDirectory);
		console.log('You are currently in ' + process.cwd());

	} catch (err) {
		console.log('Operation failed. ' + '\n' + 'You are currently in ' + process.cwd());

	}
}


export async function cd(path) {
	const pathArr = path.split('\\');

	const folder = pathArr.pop();

	const pathToHomeDirectory = process.cwd();

	const updatedPath = join(pathToHomeDirectory, folder);

	setHomeDirectory(updatedPath);
}


export async function up() {
	const pathToHomeDirectory = process.cwd();

	const pathArray = pathToHomeDirectory.split('\\');

	pathArray.pop();

	const updatedPath = join(pathArray.join('\\'), '\\');

	setHomeDirectory(updatedPath);
}