describe('Store', () => {
	var env = {};
	beforeEach(() => {
		env = {};
		env.reducer = {};
		env.redux = {
			createStore: jest.fn(),
	    	compose: jest.fn(),
	        applyMiddleware: jest.fn()
		};
		env.mocks = {
			f1: jest.fn(),
			f2: jest.fn(),
			f3: jest.fn()
		};
		env.redux.applyMiddleware.mockReturnValue(env.mocks.f1);
		env.redux.compose.mockReturnValue(env.mocks.f2);
		env.mocks.f1.mockReturnValue(env.mocks.f3);

		env.reduxthunk = {};
		env.reduxlogger = jest.fn();
		env.logger = {}
		env.reduxlogger.mockReturnValue(env.logger);

		jest.mock('redux', () => env.redux);
		jest.mock('redux-thunk', () => env.reduxthunk);
		jest.mock('redux-logger', () => env.reduxlogger);

		env.Store = require('../src/stores/store');
    });

	describe('export', () => {
		it('should be a function', () => {
			console.log(env.Store);
			expect(env.Store).toEqual(expect.any(Function));
		});
	});

	describe('create', () => {
		describe('development', () => {
			beforeEach(() => {
				env.store = env.Store(env.reducer);
			});

			it.only('should apply the correct middleware', () => {
				expect(env.reduxlogger).toHaveBeenCalledTimes(1);
				expect(env.redux.applyMiddleware).toHaveBeenCalledTimes(1);
				expect(env.redux.applyMiddleware).toHaveBeenCalledWith(env.reduxthunk, env.logger);
			});

			it('should compose the store', () => {
				expect(env.redux.compose).toHaveBeenCalledTimes(1);
				expect(env.redux.compose).toHaveBeenCalledWith(env.mocks.f1);

				expect(env.mocks.f2).toHaveBeenCalledTimes(1);
				expect(env.mocks.f2).toHaveBeenCalledWith(env.redux.createStore);

				expect(env.mocks.f3).toHaveBeenCalledTimes(1);
				expect(env.mocks.f3).toHaveBeenCalledWith(env.reducer);
			});

			it('should return the store', () => {
				expect(env.store).toBeDefined();
			});
		});
	});
});
