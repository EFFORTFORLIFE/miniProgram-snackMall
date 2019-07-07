// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList:[{ "checked": true, "name": "芹菜", "price": 10, "num": 5, "pic": "/image/s5.png", "id": 1 }, { "checked": true, "name": "大米", "price": 5, "num": 5, "pic": "/image/s6.png", "id": 2 }],
    total:0,
    selectAll:true
  },
  itemChecked(e) {
    const curIndex = e.target.dataset.index
    let cartList = this.data.cartList
    cartList[curIndex].checked = !cartList[curIndex].checked
    let total = this.data.total
    if (cartList[curIndex].checked){
      this.setData({
        total: this.data.total + cartList[curIndex].num * cartList[curIndex].price,
        cartList: cartList
      })
    }else{
      this.setData({
        total: this.data.total - cartList[curIndex].num * cartList[curIndex].price,
        cartList: cartList
      })
    }
    this.isMarkSelectAll(cartList)
  },
  //全选按钮是否选中
  isMarkSelectAll(cartList){
    let isCheckedAll = true
    cartList.forEach(item => {
      if (!item.checked) {
        isCheckedAll = false
      }
    })
    if (!isCheckedAll) {
      this.setData({
        selectAll: false
      })
    } else {
      this.setData({
        selectAll: true
      })
    }
  },
  cut(e){
    const curIndex = e.target.dataset.index
    const cartList = this.data.cartList
    if (!cartList[curIndex].checked) return
    if (cartList[curIndex].num <=0 ){
      cartList[curIndex].num = 0
    }else{
      cartList[curIndex].num -= 1
      this.setData({
        cartList: cartList,
        total: this.data.total - this.data.cartList[curIndex].price
      })
    }
  },
  add(e) {
    const curIndex = e.target.dataset.index
    const cartList = this.data.cartList
    if(!cartList[curIndex].checked)return
    cartList[curIndex].num += 1
    this.setData({
      cartList:cartList,
      total:this.data.total+this.data.cartList[curIndex].price
    })
  },
  delItem(e){
    const curIndex = e.target.dataset.index
    const cartList = this.data.cartList
    let curItemTotal = 0
    if(cartList[curIndex].checked){
      curItemTotal = cartList[curIndex].price * cartList[curIndex].num
    }
    cartList.splice(curIndex,1)
    this.setData({
      cartList:cartList,
      total:this.data.total-curItemTotal
    })
    this.isMarkSelectAll(cartList)
  },
  chooseAll(e){
    const cartList = this.data.cartList
    let total = this.data.total
    this.setData({
      selectAll:!this.data.selectAll
    })
    if(this.data.selectAll){
      cartList.forEach(item => {
        item.checked = true
        total += item.price * item.num
      })
      this.setData({
        cartList: cartList,
        total: total
      })
    }else{
      cartList.forEach(item => {
        item.checked = false
      })
      this.setData({
        cartList: cartList,
        total:0
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const cartList = this.data.cartList
    let total=0
    cartList.forEach(item=>{
      total += item.price*item.num
    })
    this.setData({
      total: total
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