import { createReadStream } from 'fs';

export function readFile(path) {
	const stream = createReadStream(path);

	stream.on('data', chunk => console.log(chunk.toString()));

	stream.on('error', () => console.log('Operation failed'));
}