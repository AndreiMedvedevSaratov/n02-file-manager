import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';

export async function compress(args) {

	const argsArr = args.split(' ');

	if (argsArr.length !== 2) {
		console.log('Operation failed.');
		return;
	}

	const [sourceFile, destinationFile] = argsArr;

	const sourceStream = createReadStream(sourceFile);
	const destinationStream = createWriteStream(destinationFile);
	
	sourceStream.on('error', () => {
		console.log('Operation failed.');
		return;
	});

	destinationStream.on('error', () => {
		console.log('Operation failed.');
	});

	const resultFile = createBrotliCompress();

	pipeline(
		sourceStream,
		resultFile,
		destinationStream,
		() => { }
	);

	console.log('File compressed.');
}
