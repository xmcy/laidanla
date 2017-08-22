
//app.js
var qcloud = require('./vendor/qcloud-weapp-client-sdk/index');
var config = require('./config');

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    qcloud.setLoginUrl(config.service.loginUrl);

    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  // 上传图片
  
  globalData:{
    userInfo:null
  }
})