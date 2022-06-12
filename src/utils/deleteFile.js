import { rm } from 'fs/promises';

export async function deleteFile(path) {

	try {
		await rm(path);
		console.log('File was deleted.');
	} catch (err) {
		console.log(err + 'Operation failed ');
		return;
	}
}