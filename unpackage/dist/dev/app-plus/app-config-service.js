
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/signin","pages/rectification/rectification","pages/homePage/home","pages/mine/mine","pages/homePage/homeSecond/homeList","pages/mine/mine","pages/investigation/investigation","pages/prospect/prospect","pages/homePage/homeSecond/caseAdmin","pages/prospect/prospectEdit","pages/investigation/investigationEdit","pages/prospect/testindex","pages/index/index"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","rpxCalcMaxDeviceWidth":2000,"rpxCalcBaseDeviceWidth":375,"rpxCalcIncludeWidth":750,"pageOrientation":"landscape","background":"#efeff4"},"tabBar":{"color":"#505050","selectedColor":"#118ee9","borderStyle":"black","backgroundColor":"#F2F2F2","list":[{"pagePath":"pages/homePage/home","iconPath":"./static/img/tabber/01.svg","selectedIconPath":"./static/img/tabber/001.svg","text":"我的案件"},{"pagePath":"pages/prospect/prospect","iconPath":"./static/img/tabber/02.svg","selectedIconPath":"./static/img/tabber/002.svg","text":"现场踏勘"},{"pagePath":"pages/investigation/investigation","iconPath":"./static/img/tabber/03.svg","selectedIconPath":"./static/img/tabber/003.svg","text":"现场调查"},{"pagePath":"pages/mine/mine","iconPath":"./static/img/tabber/04.svg","selectedIconPath":"./static/img/tabber/04.svg","text":"个人中心"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"ZJZHZF","compilerVersion":"3.3.11","entryPagePath":"pages/login/signin","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/signin","meta":{"isQuit":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/rectification/rectification","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/homePage/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/homePage/homeSecond/homeList","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/investigation/investigation","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/prospect/prospect","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom"}},{"path":"/pages/homePage/homeSecond/caseAdmin","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/prospect/prospectEdit","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/investigation/investigationEdit","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/prospect/testindex","meta":{},"window":{"navigationStyle":"custom"}},{"path":"/pages/index/index","meta":{},"window":{"navigationBarTitleText":"uni-app"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
