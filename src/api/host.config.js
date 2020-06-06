let port
let _localEnv = localStorage.getItem("setEnv")
const env = _localEnv || process.env.NODE_ENV;
console.log('env is ', env)
// 测试环境接口
const devPort = {
    BASE_URL_ZMLEARN: 'https://x-chat-test.zmlearn.com'
}
// fat环境接口
const fatPort = {
    BASE_URL_ZMLEARN: 'https://x-chat-test.zmlearn.com'
}
// uat环境接口
const uatProt = {
    BASE_URL_ZMLEARN: 'https://chat.uat.zmops.cc'
}
// 生产环境接口
const proProt = {
    BASE_URL_ZMLEARN: 'https://chat.zmlearn.com'
}

switch(env){
    // 测试环境
    case 'development':
        port = devPort;
        break;
    case 'fat':
        // fat环境
        port = fatPort;
        break;
    case 'uat':
        // uat环境
        port = uatProt;
        break;
    case 'production':
        // 生产环境
        port = proProt;
        break;
    default:
        // 默认本地开发
        port = devPort;
}

export default port