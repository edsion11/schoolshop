const conf = {
  data: {
    calendarConfig: {
      showLunar: true,
      firstDayOfWeek: 'Mon',
      disableMode: {
        type: 'after',
        date: '2020-03-9',
      },
      defaultDay: '2020-3-6',
      // multi: true
    },
  },
  afterTapDay(e) {
    console.log('afterTapDay', e.detail)
  },
  whenChangeMonth(e) {
    console.log('whenChangeMonth', e.detail)
  },
  whenChangeWeek(e) {
    console.log('whenChangeWeek', e.detail)
  },
  setTodoLabels(e) {
    const { action, disable } = e.currentTarget.dataset
    if (disable) {
      this.showToast('抱歉，还不支持～😂')
    }
    this.setData({
      rst: [],
    })
    const calendar = this.calendar
    const { year, month } = calendar.getCurrentYM()
    const days = [
      {
        year,
        month,
        day: this.generateRandomDate('date'),
        todoText: Math.random() * 10 > 5 ? '已签到' : '',
      },
    ]
    calendar[action]({
      showLabelAlways: true,
      days,
    })
    console.log('set todo labels: ', days)
  },
  onTapDay(e) {
    console.log('onTapDay', e.detail)
  },
  afterCalendarRender(e) {
    console.log('afterCalendarRender', e)
    // this.calendar.switchView('week').then(() => {
    //   this.calendar.jump(2020, 3, 1).then(date => {}); // 跳转至某日
    // });
  },
  onSwipe(e) {
    console.log('onSwipe', e)
  },
  showToast(msg) {
    if (!msg || typeof msg !== 'string') return
    wx.showToast({
      title: msg,
      icon: 'none',
      duration: 1500,
    })
  },
  generateRandomDate(type) {
    let random = ~~(Math.random() * 10)
    switch (type) {
      case 'year':
        random = 201 * 10 + ~~(Math.random() * 10)
        break
      case 'month':
        random = (~~(Math.random() * 10) % 9) + 1
        break
      case 'date':
        random = (~~(Math.random() * 100) % 27) + 1
        break
      default:
        break
    }
    return random
  },
}

Page(conf)
