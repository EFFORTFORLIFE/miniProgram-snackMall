// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:'',
    name:'',
    phone:null
  },
  chooseLocation(){
    wx.chooseLocation({
      success: (res)=> {
        this.setData({
          address:res.address
        })
      },
      fail:()=>{
        wx.showToast({
          title: '也可以手动输入',
          icon:'none'
        })
      }
    })
  },
  confirm(e){
    wx.setStorageSync('name', e.detail.value.name)
    wx.setStorageSync('phone', e.detail.value.phone)
    wx.setStorageSync('address', e.detail.value.address)
    wx.navigateBack({
      delta:1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: wx.getStorageSync('name'),
      phone: wx.getStorageSync('phone'),
      address: wx.getStorageSync('address')
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