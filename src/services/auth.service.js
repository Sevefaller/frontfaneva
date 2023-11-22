const TOKEN_NAME = 'user';

export const AuthService = () => {
	return {
		user: () => JSON.parse(localStorage.getItem(TOKEN_NAME)),
		storeUser: (userData) =>
			localStorage.setItem(TOKEN_NAME, JSON.stringify(userData)),
	};
};
