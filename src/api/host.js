
// Test: https://hightalkssoapi-test.azurewebsites.net/
//     Stage: https://hightalkssoapi-staging.azurewebsites.net
//         Product:https://api-sso.hightalk.ai(https://hightalkssoapi.azurewebsites.net)




// const test = "https://hightalkssoapi-test.azurewebsites.net";
// const Product = "https://hightalkssoapi.azurewebsites.net";
//
//
//
//
// export default test


const TEST_URL = {
    registerUrl:"https://hightalkssoapi-test.azurewebsites.net", // 注册页面
    baseUrl:'https://portal-test.hightalk.ai',
    SSOWebUrl:{
        zh:"https://hightalkssoweb-test.azurewebsites.net/zh-cn",
        en:'/'
    },
    SSOServerApi:"https://hightalkssoapi-test.azurewebsites.net",
    requestHost: 'https://hightalkadminapi-test.azurewebsites.net',
}
const UAT_URL = {
    baseUrl:'https://htadminweb-uat.azurewebsites.net',
    SSOWebUrl:{
        zh:"https://hightalkssoweb-test.azurewebsites.net/zh-cn",
        en:'/'
    },
    SSOServerApi:"https://hightalkssoapi-test.azurewebsites.net",
    requestHost: 'https://htadminapi-uat.azurewebsites.net',
}
const STAGING_URL = {
    baseUrl:'https://portal-staging.hightalk.ai',
    SSOWebUrl:{
        zh:"https://login-staging.hightalk.ai/zh-cn",
        en:'/'
    },
    SSOServerApi:"https://hightalkssoapi-staging.azurewebsites.net",
    requestHost: 'https://hightalkadminapi-staging.azurewebsites.net'
}
export default  TEST_URL






















