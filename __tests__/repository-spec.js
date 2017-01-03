describe('Repository', () => {
	var env = {};
	beforeEach(() => {
		env = {};
		env.log = {
			trace: jest.fn(),
	    	debug: jest.fn(),
	        info: jest.fn(),
			warn: jest.fn(),
			error: jest.fn(),
			fatal: jest.fn()
			/*
			trace: (s) => console.log('trace',s),
	    	debug: (s) => console.log('debug',s),
	        info: (s) => console.log('info',s),
	        warn: (s) => console.log('warn',s),
	        error: (s) => console.log('error',s),
	        fatal: (s) => console.log('fatal',s)
			*/
		};
		env.rnfs = {
			DocumentDirectoryPath: '/path/to/doc',
			readFile: jest.fn(),
			writeFile: jest.fn(),
			unlink: jest.fn()
		};
		env.filename = 'test.json';
		env.data = {
			a: {
				b: 1,
				c: {
					d: [
						'1','2','3'
					]
				}
			}
		};
		env.datastr = JSON.stringify(env.data);
		jest.mock('react-native-fs', () => env.rnfs);
		jest.mock('../src/services/log', () => env.log);

		env.Repository = require('../src/services/repository');
		env.repos = env.Repository(env.filename);
    });

	describe('load', () => {
		describe('found', () => {
			beforeEach(() => {
				env.rnfs.readFile.mockReturnValue(new Promise((resolve,reject) => resolve(env.datastr)));
				return env.repos.load()
				.then((data) => {
					env.result = data;
				});
			});

			it('should read the proper file', () => {
				expect(env.rnfs.readFile).toHaveBeenCalledTimes(1);
				expect(env.rnfs.readFile).toHaveBeenCalledWith(env.rnfs.DocumentDirectoryPath + '/' + env.filename);
			});

			it('should parse the result into json', () => {
				expect(env.result).toBeDefined();
				expect(env.result).toEqual(env.data);
			});
		});

		describe('not found', () => {
			beforeEach(() => {
				env.rnfs.readFile.mockReturnValue(new Promise((resolve,reject) => reject('no file found')));
				return env.repos.load()
				.then((data) => {
					env.result = data;
				});
			});

			it('should read the proper file', () => {
				expect(env.rnfs.readFile).toHaveBeenCalledTimes(1);
				expect(env.rnfs.readFile).toHaveBeenCalledWith(env.rnfs.DocumentDirectoryPath + '/' + env.filename);
			});

			it('should return null', () => {
				expect(env.result).toBeNull();
			});
		});
	});

	describe('save', () => {
		beforeEach(() => {
			env.rnfs.writeFile.mockReturnValue(new Promise((resolve,reject) => resolve()));
			return env.repos.save(env.data);
		});

		it('should write the proper file', () => {
			expect(env.rnfs.writeFile).toHaveBeenCalledTimes(1);
			expect(env.rnfs.writeFile).toHaveBeenCalledWith(env.rnfs.DocumentDirectoryPath + '/' + env.filename);
		});

		it('should convert the json to a string', () => {
			expect(env.rnfs.writeFile).toHaveBeenCalledWith(env.rnfs.DocumentDirectoryPath + '/' + env.filename, env.datastr);
		});
	});

	describe('remove', () => {
		beforeEach(() => {
			env.rnfs.unlink.mockReturnValue(new Promise((resolve,reject) => resolve()));
			return env.repos.remove();
		});

		it('should remove the proper file', () => {
			expect(env.rnfs.unlink).toHaveBeenCalledTimes(1);
			expect(env.rnfs.unlink).toHaveBeenCalledWith(env.rnfs.DocumentDirectoryPath + '/' + env.filename);
		});
	});

	describe('sorter', () => {
		beforeEach(() => {
			env.list = [
				{a: 1, b: 2},
				{a: 1, b: 3},
				{a: 2, b: 2},
				{a: 3, b: 1}
			];
			env.orderby = ['b','a'];
			env.expected = [
				{a: 3, b: 1},
				{a: 1, b: 2},
				{a: 2, b: 2},
				{a: 1, b: 3}
			];

			env.actual = env.list.sort(env.repos.sorter(env.orderby));
		});

		it('should order the list', () => {
			expect(env.actual).toEqual(env.expected);
		});
	});

	describe('comparer', () => {
		beforeEach(() => {
			env.list = [
				{a: 1, b: 2},
				{a: 1, b: 3},
				{a: 2, b: 2},
				{a: 3, b: 1}
			];
			env.filter = {b: 2};
			env.expected = [
				{a: 1, b: 2},
				{a: 2, b: 2}
			];

			env.actual = env.list.filter(env.repos.comparer(env.filter));
		});

		it('should filter the list', () => {
			expect(env.actual).toEqual(env.expected);
		});
	});

	describe('select', () => {
		beforeEach(() => {
			env.data = [
				{a: 1, b: 2},
				{a: 1, b: 3},
				{a: 2, b: 2},
				{a: 3, b: 1}
			];
			env.datastr = JSON.stringify(env.data);
			env.orderby = ['b','a'];
			env.filter = {b: 2};
			env.expected = [
				{a: 1, b: 2},
				{a: 2, b: 2}
			];

			env.rnfs.readFile.mockReturnValue(new Promise((resolve,reject) => resolve(env.datastr)));

			return env.repos.select(env.filter, env.orderby)
			.then((result) => {
				env.actual = result;
			});
		});

		it('should read the proper file', () => {
			expect(env.rnfs.readFile).toHaveBeenCalledTimes(1);
			expect(env.rnfs.readFile).toHaveBeenCalledWith(env.rnfs.DocumentDirectoryPath + '/' + env.filename);
		});

		it('should parse the result into json, order, and filter the data', () => {
			expect(env.actual).toEqual(env.expected);
		});
	});
});
