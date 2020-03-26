import{
	BASE_HOSTS,
	STORAGE_CSRF_TOKEN_KEY,
	STORAGE_USER_INFO_KEY
} from '../common/config.js';

const LOGINSUCCESS = 10001,
	LOGINFAIL = 10002,
	REQUESTSUCCESS = 10003,
	REQUESTFAIL = 10004,
	USERLOGINED = 10005,
	VALIDATAFAIL = 10006,
	USERNOTLOGIN = 10008;
	
const login = function(_self, res) {
	_self.isLogin = true;
	_self.userInfo = res.data.userInfo
	
	console.log("hey1!")
	
	uni.setStorage({
		key: 'ISLOGIN',
		data: true
	})
	
	uni.setStorage({
		key: STORAGE_CSRF_TOKEN_KEY,
		data: res.data.csrf_token,
		success:function(){
			delete res.data.csrf_token
			console.log("delete1")
		}
	})
	
	uni.setStorage({
		key: STORAGE_USER_INFO_KEY,
		data: res.data.userinfo,
		success:function(){
			delete res.data.userinfo
			console.log("delete2")
		}
	})
}
	
const request = function(options) {
	if(options.baseurl) {
		options.url = options.baseurl + options.api;
	}else {
		options.url = BASE_HOSTS + options.api;
	}
	options.header = {
		'Content-Type': 'application/x-www-form-urlencoded',
		'X-CSRFToken': uni.getStorageSync(STORAGE_CSRF_TOKEN_KEY)
	}
	options.complete = function(response) {
		let res = response.data,
			_self = options.self;
		
		if(res.code == LOGINSUCCESS) {
			login(_self, res)
			console.log("success!")
		}
		
		if(response.statusCode == 200) { 
			options.then(res)
		}else {
			options.err(res)
		}
	}
}

export{ request }