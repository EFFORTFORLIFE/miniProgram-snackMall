// pages/sort/sort.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[
      { label: '果味', id: 'fruit' }, { label: '蔬菜', id: 'vagetable' }, { label: '爆炒', id: 'fire' }, { label: '点心', id: 'refreshment' }, { label: '粗茶', id: 'tea' }, { label: '淡饭', id: 'rice' }
    ],
    swiperList:[
      { id: 'fruit', title: '果味' }, { id: 'vagetable', title: '蔬菜' }, { id: 'fire', title: '爆炒' }, { id: 'refreshment', title: '点心' }, { id: 'tea', title: '粗茶' }, { id: 'rice', title: '淡饭'}
    ],
    productList:[
      { pic: '/image/c2.png', detail: '梨子' }, { pic: '/image/c3.png', detail: '枣子' }, { pic: '/image/c4.png', detail: '奇异果' }
    ],
    curIndex:0,
    curView:'fruit',
    windowHeight:null
  },
  getIndex(e){
    this.setData({
      curIndex: e.target.dataset.index,
      curView:e.target.dataset.id
    })
  },
  atTop(){
    console.log("到达顶部")
  },
  scrolling(e){
    if (e.detail.scrollTop >= this.data.windowHeight*5) {
      this.setData({
        curIndex: 5
      })
    } else if (e.detail.scrollTop >= this.data.windowHeight*4) {
      this.setData({
        curIndex: 4
      })
    } else if (e.detail.scrollTop >= this.data.windowHeight*3) {
      this.setData({
        curIndex: 3
      })
    } else if (e.detail.scrollTop >= this.data.windowHeight*2) {
      this.setData({
        curIndex: 2
      })
    } else if (e.detail.scrollTop >= this.data.windowHeight){
      this.setData({
        curIndex:1
      })
    } else if (e.detail.scrollTop >= 0) {
      this.setData({
        curIndex: 0
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res)=> {
        this.setData({
          windowHeight: res.windowHeight
        })
      },
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