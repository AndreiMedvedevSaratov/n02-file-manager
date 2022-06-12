import { resolve } from 'path';
import { createReadStream } from 'fs';
import { createHash } from 'crypto';

export function hashCalculation(argument) {

	const pathToFile = resolve(argument);

	const stream = createReadStream(pathToFile);
	

	stream.on('data', chunk => {
		const hashObject = createHash('sha256');

		hashObject.update(chunk);

		const hex = hashObject.digest('hex');

		console.log(hex);
	});


	stream.on('error', () => console.log('Operation failed.'));
	
	stream.on('end', () => console.log('Hash calculated!'));
}