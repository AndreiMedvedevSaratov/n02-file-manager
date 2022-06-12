import { readdir } from 'fs/promises';

export async function list() {
	try {
		const items = await readdir(process.cwd());

		items.forEach(item => console.log(item));
		
	} catch (err) {
		console.log(err + 'Operation failed.');
	}
}