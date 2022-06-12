import { open } from 'fs';

export function addFile(newFile) {
	try {
		open(newFile, 'w', () => {
			console.log('File ' + newFile + ' was created.');
		});
	} catch (err) {
		console.log('Operation failed.');
	}
}