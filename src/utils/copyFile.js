import { createReadStream, createWriteStream } from 'fs';


export async function copyFile(args) {

	const argsArr = args.split(' ');

	if (argsArr.length !== 2) {
		console.log('Operation failed.');
		return;
	}

	const [ sourceFile, destinationDirectory ] = argsArr;

	try {
		const readStream = createReadStream(sourceFile);

		readStream.on('open', () => {
			const writeStream = createWriteStream(destinationDirectory);
			readStream.pipe(writeStream);
		});

		readStream.on('error', () => {
			console.log('Operation failed.');
			return;
		});

		readStream.on('end', () => {
			console.log('File was successfully copied');
		});

	} catch (err) {
		console.log('Operation failed.');
		return;
	}
}