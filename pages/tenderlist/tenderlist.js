//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    tenderway: false,
    shield: false,
    array: ['招标方式', '公开招标', '邀请招标'],
    status: ['招标状态', '全   部', '选 标 中'],
    desgin: ['招标类目', '商务印刷', '写真喷绘',"灯箱标识","广告立体字", "展示器材", "广告定制", "门头招牌", "展览布置"],
    objectArray: [
      {
        id: 0,
        name: '招标方式'
      },
      {
        id: 1,
        name: '公开招标'
      },
      {
        id: 2,
        name: '邀请招标'
      }
    ],
    statusArray: [
      {
        id: 3,
        name: '招标状态'
      },
      {
        id: 4,
        name: '全部'
      },
      {
        id: 5,
        name: '选标中'
      }
    ],
    desginArray: [
      {
        id: 6,
        name: '招标类目'
      },
      {
        id: 7,
        name: '商务印刷'
      },
      {
        id: 8,
        name: '写真喷绘'
      },
      {
        id: 9,
        name: '灯箱标识'
      },
      {
        id: 10,
        name: '广告立体字'
      },
      {
        id: 11,
        name: '展示器材'
      },
      {
        id: 12,
        name: '广告定制'
      },
      {
        id: 13,
        name: '门头招牌'
      },
      {
        id: 14,
        name: '展览布置'
      }
    ],
    index1: 0,
    index2: 1,
    index3: 2,
    index4: 3,
    region: ['选择', '招标', '地区']
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindstatusChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  binddesginChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
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
