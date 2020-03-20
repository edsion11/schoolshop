const app = getApp();
Page({
  data: {
    keyword: '',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    cardCur: 0,
    height1: '70px',
    height2: '70px',
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }, {
      id: 4,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }, {
      id: 5,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
    }, {
      id: 6,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
    }],
    iconList: [{
      icon: 'picfill',
      color: 'red',
      badge: 0,
      name: '策划'
    }, {
      icon: 'cardboardfill',
      color: 'orange',
      badge: 0,
      name: '聚餐'
    }, {
      icon: 'recordfill',
      color: 'black',
      badge: 0,
      name: '摄影'
    }, {
      icon: 'noticefill',
      color: 'olive',
      badge: 0,
      name: '交流会'
    }, {
      icon: 'commandfill',
      color: 'cyan',
      badge: 0,
      name: '住宿'
    }, {
      icon: 'clothesfill',
      color: 'blue',
      badge: 0,
      name: '行程'
    }, {
      icon: 'upstagefill',
      color: 'cyan',
      badge: 0,
      name: '纪念品'
    }, {
      icon: 'brandfill',
      color: 'blue',
      badge: 0,
      name: '礼物定制'
    }],
    ziXun: [{
      title: '不管这世界阴晴圆缺只愿和春天有个约会,管这世界阴晴圆缺只愿和春天有个约会',
      tag: '生活主题',
      url: ''
    }, {
      title: '不管这世界阴晴圆缺只愿和春天有个约会,管这世界阴晴圆缺只愿和春天有个约会',
      tag: '居家攻略',
      url: ''
    }, {
      title: '不管这世界阴晴圆缺只愿和春天有个约会,管这世界阴晴圆缺只愿和春天有个约会',
      tag: '周边好货',
      url: ''
    }],
    gridCol: 4,
    skin: false
  },
  onShow: function (e) {
    this.setData({
      ziXun: [{
        title: '百丽集团童鞋旗舰店，领券直降500元',
        tag: '生活主题',
        url: ''
      }, {
        title: '格力电风扇，家用落地扇',
        tag: '居家攻略',
        url: ''
      }, {
        title: '米其林品牌打折日，品牌直降',
        tag: '周边好货',
        url: ''
      }]
    });
  },
  onLoad() {
    this.towerSwiper('swiperList');
    // 初始化towerSwiper 传已有的数组名即可
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  },
  cardtap1: function () {
    var boxheight1 = this.data.height1 == '70px' ? '140px' : '70px';
    // 设置背景颜色数据
    this.setData({
      height1: boxheight1
    });
  },
  cardtap2: function () {
    var boxheight2 = this.data.height2 == '70px' ? '180px' : '70px';
    // 设置背景颜色数据
    this.setData({
      height2: boxheight2
    });
  },
  tosearch: function () {
    wx.navigateTo({
      url: '/pages/search/search'
    });
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  menuBorder: function (e) {
    this.setData({
      menuBorder: e.detail.value
    });
  },
  menuArrow: function (e) {
    this.setData({
      menuArrow: e.detail.value
    });
  },
  menuCard: function (e) {
    this.setData({
      menuCard: e.detail.value
    });
  },
  switchSex: function (e) {
    this.setData({
      skin: e.detail.value
    });
  },

  // ListTouch触摸开始
  ListTouchStart(e) {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  },

  // ListTouch计算方向
  ListTouchMove(e) {
    this.setData({
      ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    })
  },

  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection == 'left') {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.setData({
      ListTouchDirection: null
    })
  },

})