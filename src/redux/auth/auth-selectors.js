export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsAuthorising = state => state.auth.isAuthorising;
export const getIsRefreshingUser = state => state.auth.isRefreshingUser;
export const getUserName = state => state.auth.user.name;
export const getAvatarURL = state => state.auth.user.avatarURL;
export const getCurrentBalance = state => state.auth.user.balance;