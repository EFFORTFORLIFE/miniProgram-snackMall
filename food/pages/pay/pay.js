// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList: [{ "checked": true, "name": "芹菜", "price": 10, "num": 5, "pic": "/image/s5.png", "id": 1 }, { "checked": true, "name": "大米", "price": 5, "num": 5, "pic": "/image/s6.png", "id": 2 }],
    total:0,
    name:'',
    phone:null,
    address:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      total:options.total
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      name: wx.getStorageSync('name'),
      phone: wx.getStorageSync('phone'),
      address: wx.getStorageSync('address')
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})