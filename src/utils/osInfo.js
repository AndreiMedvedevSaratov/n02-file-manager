import { userInfo, EOL, cpus, homedir } from 'os';

export function osInfo(argument) {
	if (argument === 'username') console.log(userInfo().username);
	if (argument === 'EOL') console.log(JSON.stringify(EOL));
	if (argument === 'homedir') console.log(homedir());
	if (argument === 'architecture') console.log(process.env['PROCESSOR_ARCHITECTURE']);

	if (argument === 'cpu_info') {
		const cpusInfo = cpus();

		console.log(`Amount of CPUS: ${cpusInfo.length}`);

		cpusInfo.forEach(item =>
			console.log(`model: ${item.model}, speed rate: ${item.speed / 1000}GHz`)
		)
	};

	if (!argument) {
		console.log('Invalid input\n');
		return;
	}
}