import { rename } from 'fs/promises';

export async function renameFile(args) {

	if (!args) {
		console.log('Operation failed.');
		return;
	}

	const argsArr = args.split(' ');

	if (argsArr.length !== 2) {
		console.log('Operation failed.');
		return;
	}

	const pathToFile = argsArr[0];
	const newName = argsArr[1];

	try {
		await rename(pathToFile, newName);
	} catch (err) {
		console.log('Operation failed.');
		return;
	}

	console.log('New File name is ' + newName);
}