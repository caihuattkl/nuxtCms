const userInfo = 'userInfo'

export function getUserInfo() {
	if (sessionStorage.userInfo) {
		return JSON.parse(sessionStorage.userInfo);
	}
	return '';
}

export function setUserInfo(UserInfo) {
	sessionStorage.userInfo = stringify(UserInfo);
	return UserInfo;
}

export function removeUserInfo() {
	sessionStorage.removeItem(userInfo)
}


export function getToken() {
	if (sessionStorage.userInfo) {
		let data = JSON.parse(sessionStorage.userInfo)
		return data.token;
	}
	return '';
}


function stringify(val) {
	return val === undefined || typeof val === "function" ? val + '' : JSON.stringify(val);
}