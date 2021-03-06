module.exports = (settings, ...args) => {
	const [log, file, spawn] = args;

	const commandType = 'test';

	const test = roboRoot => new Promise((resolve, reject) => {
		const commands = file.generateCommands(roboRoot, commandType);

		// console.log(commands);
		// process.exit();

		spawn.stack(commands).then(results => {
			log.report(results);
			resolve(results);
		}).catch(err => {
			throw new Error('ROBONAUT TESTS FAILED!');
			console.error('TEST: Failed!');
			console.log(err);
			reject(err);
		});
	});

	return test;
};

