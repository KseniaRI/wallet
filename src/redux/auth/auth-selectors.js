export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsAuthorising = state => state.auth.isAuthorising;
export const getIsRefreshingUser = state => state.auth.isRefreshingUser;
export const getUserName = state => state.auth.user.name;
export const getCurrentBalance = state => state.auth.user.balance;