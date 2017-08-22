//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    tenderway: false,
    shield:false,
    array: ['美国', '中国', '巴西', '日本'],
    objectArray: [
      {
        id: 0,
        name: '美国'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '巴西'
      },
      {
        id: 3,
        name: '日本'
      }
    ],
    index: 0,
    date: '2018-08-08',
    time: '12:00',
    date2: '2018-08-08',
    time2: '12:00',
    region: ['湖北省', '武汉市', '洪山区']
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindDateChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date2: e.detail.value
    })
  },
  bindTimeChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time2: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  chooseImage:function(e){
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        wx.saveFile({
          tempFilePath: tempFilePaths[0],
          success: function (res) {
            var savedFilePath = res.savedFilePath
            console.log(savedFilePath)
          }
        })
      }
    })
  },
  radioChange: function (e) {
    var that = this
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    if (e.detail.value=="邀请招标"){
      that.setData({
        tenderway: true
      })
    }else{
      that.setData({
        tenderway: false
      })
    }
  },
  shield: function (e) {
    var that = this
    that.setData({
      shield: true 
    })
  },
  formSubmit: function (e) {
    console.log(e.detail.value)
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
