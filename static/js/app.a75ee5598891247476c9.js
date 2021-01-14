webpackJsonp([0], {
  '/LqZ': function (t, e, s) {
    'use strict'
    var i = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e
        return s('div', {staticClass: 'radiogroup'}, [s('div', {
          staticClass: 'radio', on: {
            click: function (e) {
              return t.changeSelect(0)
            }
          }
        }, [s('span', {staticClass: 'check'}, [t._v(t._s(t.checkMan))]), t._v(' '), s('span', [t._v('男')])]), t._v(' '), s('div', {
          staticClass: 'radio',
          on: {
            click: function (e) {
              return t.changeSelect(1)
            }
          }
        }, [s('span', {staticClass: 'check'}, [t._v(t._s(t.checkWomen))]), t._v(' '), s('span', [t._v('女')])])])
      }, staticRenderFns: []
    }
    var a = s('VU/8')({
      data: function () {
        return {selected: 0, checkMan: '√', checkWomen: ''}
      }, mounted: function () {
        switch (this.selected) {
          case 0:
            this.checkMan = '√', this.checkWomen = ''
            break
          case 1:
            this.checkMan = '', this.checkWomen = '√'
        }
      }, methods: {
        changeSelect: function (t) {
          switch (this.selected = t, this.$emit('changeSelect', this.selected), t) {
            case 0:
              this.checkMan = '√', this.checkWomen = ''
              break
            case 1:
              this.checkMan = '', this.checkWomen = '√'
          }
        }
      }
    }, i, !1, function (t) {
      s('WmRf')
    }, 'data-v-2d983bde', null)
    e.a = a.exports
  }, '6OZJ': function (t, e) {
  }, '8e66': function (t, e) {
  }, 'A9/y': function (t, e) {
  }, BNdt: function (t, e) {
  }, E4SP: function (t, e, s) {
    'use strict';
    (function (t) {
      var i = s('yF88')
      e.a = {
        name: 'BookPostil', components: {MyTitle: i.a}, data: function () {
          return {
            selectedType: '全部批注',
            postils: [{
              content: '巴学园这种教学方式对于少部分有钱人可以。推广到整个教育都用巴学园的方式能行...',
              type: 5,
              time: '2018-08-02'
            }, {
              content: '这段话应用了拟人的手法，"头发在迎风唱歌"，表现了孩子们此时愉快的心情。',
              type: 3,
              time: '2018-08-01'
            }, {content: '"巴学园"有着与众不同的教育方式，每一天的第一节课，老师就把当天要上的课和每天...', type: 4, time: '2018-07-25'}, {
              content: '眼花缭乱',
              type: 2,
              time: '2018-07-25'
            }],
            types: [{typeName: '全部批注', icon: ''}, {typeName: '符号批注', icon: './static/postil2.png'}, {
              typeName: '赏析批注',
              icon: './static/postil3.png'
            }, {typeName: '感想批注', icon: './static/postil4.png'}, {
              typeName: '疑问批注',
              icon: './static/postil5.png'
            }, {typeName: '自定义批注', icon: './static/postil6.png'}]
          }
        }, methods: {
          downToogle: function () {
            t('.down-box').slideToggle(300), t('.mask').fadeToggle(300)
          }, selectClass: function (t) {
            this.selectedType = this.types[t].typeName, this.downToogle()
          }, toBookDetail: function (t) {
            this.$router.push('/bookdetail')
          }
        }
      }
    }).call(e, s('7t+N'))
  }, 'Ge/q': function (t, e) {
  }, GsCJ: function (t, e) {
  }, HKw6: function (t, e) {
  }, JJT7: function (t, e, s) {
    'use strict';
    (function (t) {
      e.a = {
        name: 'Register', date: function () {
          return {number: '', password: '', repPassword: '', name: '', errorMsg: ''}
        }, mounted: function () {
          this.createCode(4)
        }, methods: {
          createCode: function (t) {
            for (var e = '', s = parseInt(t), i = document.getElementById('checkCode'), a = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'), o = 0; o < s; o++) {
              e += a[Math.floor(62 * Math.random())]
            }
            i && (i.className = 'code', i.innerHTML = e)
          }, validateCode: function () {
            var e = document.getElementById('checkCode').innerHTML, s = document.getElementById('inputCode').value
            return console.log(e), console.log(s), s.length <= 0 ? (register.errorMsg = '请输入验证码！', t('.dialog').fadeIn(1500), t('.dialog').fadeOut(1500), !1) : s.toUpperCase() == e.toUpperCase() || (register.errorMsg = '验证码输入有误！', t('.dialog').fadeIn(1500), t('.dialog').fadeOut(1500), createCode(4), !1)
          }, cancel: function () {
            this.$router.push('/login')
          }, register: function () {
            console.log(this.number), console.log(this.password), console.log(this.name)
          }
        }
      }
    }).call(e, s('7t+N'))
  }, KBAF: function (t, e, s) {
    'use strict';
    (function (t) {
      var i = s('yF88')
      e.a = {
        name: 'AllBook', components: {MyTitle: i.a}, data: function () {
          return {
            selectedState: '全部状态',
            activities: [{
              icon: './static/good_book1.png',
              title: '假如我在巴学园上学',
              name: '窗边的小豆豆',
              state: '1',
              people_join: '240'
            }, {
              icon: './static/good_book2.png',
              title: '为你编织童年的网',
              name: '爱的教育',
              state: '2',
              people_join: '407'
            }, {
              icon: './static/good_book1.png',
              title: '《窗边的小豆豆》导读',
              name: '窗边的小豆豆',
              state: '2',
              people_join: '1455'
            }, {
              icon: './static/good_book3.png',
              title: '如何写好成长日记？',
              name: '雾都孤儿',
              state: '3',
              people_join: '2958'
            }, {icon: './static/good_book1.png', title: '跟我读小豆豆', name: '窗边的小豆豆', state: '3', people_join: '1024'}],
            states: [{className: '全部状态', color: ''}, {className: '尚未开始', color: 'red'}, {
              className: '正在进行',
              color: 'green'
            }, {className: '已经结束', color: 'grey'}]
          }
        }, methods: {
          downToogle: function () {
            t('.down-box').slideToggle(300), t('.mask').fadeToggle(300)
          }, selectClass: function (t) {
            this.selectedState = this.states[t].className, this.downToogle()
          }, toBookDetail: function (t) {
            this.$router.push('/bookdetail')
          }
        }
      }
    }).call(e, s('7t+N'))
  }, NHnr: function (t, e, s) {
    'use strict'
    Object.defineProperty(e, '__esModule', {value: !0})
    var i = s('7+uW'), a = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t
        return e('div', {attrs: {id: 'app'}}, [e('router-view')], 1)
      }, staticRenderFns: []
    }
    var o = s('VU/8')({name: 'App'}, a, !1, function (t) {
      s('QyRy')
    }, null, null).exports, n = s('/ocq'), c = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e
        return s('div', {staticClass: 'container'}, [s('div', {staticClass: 'content'}, [s('div', {staticClass: 'row'}, [s('img', {attrs: {src: './static/login_num.png'}}), t._v(' '), s('input', {
          directives: [{
            name: 'model',
            rawName: 'v-model',
            value: t.number,
            expression: 'number'
          }], attrs: {placeholder: '请输入账号', type: 'number'}, domProps: {value: t.number}, on: {
            input: function (e) {
              e.target.composing || (t.number = e.target.value)
            }
          }
        })]), t._v(' '), s('div', {staticClass: 'row'}, [s('img', {attrs: {src: './static/login_pwd.png'}}), t._v(' '), s('input', {
          directives: [{
            name: 'model',
            rawName: 'v-model',
            value: t.password,
            expression: 'password'
          }], attrs: {placeholder: '请输入密码', type: 'password'}, domProps: {value: t.password}, on: {
            input: function (e) {
              e.target.composing || (t.password = e.target.value)
            }
          }
        })]), t._v(' '), t._m(0), t._v(' '), s('div', {staticClass: 'row'}, [s('button', {
          staticStyle: {
            'background-color': 'white',
            color: '#79c0e6'
          }, on: {
            click: function (e) {
              return t.register()
            }
          }
        }, [t._v('注册')]), t._v(' '), s('button', {
          staticStyle: {'background-color': '#79c0e6', color: 'white'},
          on: {
            click: function (e) {
              return t.login()
            }
          }
        }, [t._v('登录')])])])])
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t
        return e('div', {staticClass: 'row'}, [e('div', {
          staticStyle: {
            width: '100%',
            'text-align': 'right',
            'font-size': '13px',
            color: '#c8c8c9'
          }
        }, [this._v('忘记密码？')])])
      }]
    }
    var r = s('VU/8')({
      name: 'Login', data: function () {
        return {number: '', password: ''}
      }, methods: {
        login: function () {
          '22051120' === this.number && '123456' === this.password ? this.$router.push('/index') : this.$toast('账号或密码错误')
        }, register: function () {
          this.$router.push('/register')
        }
      }
    }, c, !1, function (t) {
      s('iCfh')
    }, 'data-v-2682556a', null).exports, l = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e
        return s('div', {staticClass: 'container'}, [s('div', {
          staticStyle: {
            width: '100%',
            flex: '1',
            overflow: 'auto'
          }
        }, [s('router-view')], 1), t._v(' '), s('div', {staticClass: 'bottom-nav'}, [s('ul', t._l(t.items, function (e, i) {
          return s('router-link', {
            staticClass: 'li', attrs: {tag: 'div', to: e.url}, nativeOn: {
              click: function (e) {
                return t.setTab(i)
              }
            }
          }, [s('img', {attrs: {src: e.title === t.selcted_title ? e.selected_img : e.unselect_img}}), t._v(' '), s('div', {class: {text_selected: t.selcted_title == e.title}}, [t._v(t._s(e.title))])])
        }), 1)])])
      }, staticRenderFns: []
    }
    var d = s('VU/8')({
      name: 'Index', data: function () {
        return {
          selcted_title: '首页',
          items: [{
            title: '首页',
            unselect_img: './static/home_unselected.png',
            selected_img: './static/home_selected.png',
            url: '/index/home'
          }, {
            title: '活动',
            unselect_img: './static/activity_unselected.png',
            selected_img: './static/activity_selected.png',
            url: '/index/activity'
          }, {
            title: '阅读',
            unselect_img: './static/read_unselected.png',
            selected_img: './static/read_selected.png',
            url: '/index/read'
          }, {
            title: '作业',
            unselect_img: './static/homework_unselected.png',
            selected_img: './static/homework_selected.png',
            url: '/index/homework'
          }, {
            title: '我的',
            unselect_img: './static/me_unselected.png',
            selected_img: './static/me_selected.png',
            url: '/index/me'
          }]
        }
      }, methods: {
        setTab: function (t) {
          this.selcted_title = this.items[t].title
        }
      }
    }, l, !1, function (t) {
      s('Ge/q')
    }, 'data-v-f2e133c0', null).exports, v = {
      name: 'Home', data: function () {
        return {
          items: [{
            icon: './static/good_book1.png',
            title: '假如我在巴学园上学',
            book: '窗边的小豆豆',
            good: '240'
          }, {
            icon: './static/good_book3.png',
            title: '为你编织童年的网',
            book: '夏洛的网',
            good: '407'
          }, {
            icon: './static/good_book2.png',
            title: '如何写好成长日记',
            book: '爱的教育',
            good: '1207'
          }, {
            icon: './static/good_book1.png',
            title: '假如我在巴学园上学',
            book: '窗边的小豆豆',
            good: '240'
          }, {
            icon: './static/good_book3.png',
            title: '为你编织童年的网',
            book: '夏洛的网',
            good: '407'
          }, {icon: './static/good_book2.png', title: '如何写好成长日记', book: '爱的教育', good: '1207'}],
          pages: [{img: './static/banner1.png'}, {img: './static/banner2.png'}, {img: './static/banner3.png'}, {img: './static/banner1.png'}, {img: './static/banner2.png'}, {img: './static/banner3.png'}]
        }
      }, methods: {
        toBookList: function (t) {
          0 === t ? this.$router.push('/allbook') : alert('暂无最近在读')
        }
      }
    }, p = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e
        return s('div', [t._m(0), t._v(' '), s('div', {staticClass: 'container'}, [s('div', {staticStyle: {height: '50px'}}), t._v(' '), s('mt-swipe', {
          staticStyle: {
            width: '100%',
            height: '150px'
          }, attrs: {auto: 4e3, 'show-indicators': !0}
        }, t._l(t.pages, function (t) {
          return s('mt-swipe-item', [s('img', {staticStyle: {width: '100%', height: '100%'}, attrs: {src: t.img}})])
        }), 1), t._v(' '), s('div', {staticClass: 'double-button'}, [s('a', {
          on: {
            click: function (e) {
              return t.toBookList(0)
            }
          }
        }, [s('img', {attrs: {src: './static/home_all_book.png'}}), t._v(' '), t._m(1)]), t._v(' '), s('div', {
          staticStyle: {
            width: '2px',
            height: '40px',
            'background-color': '#78C1E4'
          }
        }), t._v(' '), s('a', {
          on: {
            click: function (e) {
              return t.toBookList(1)
            }
          }
        }, [s('img', {attrs: {src: './static/home_recend_read.png'}}), t._v(' '), t._m(2)])]), t._v(' '), t._m(3), t._v(' '), t._m(4), t._v(' '), t._m(5), t._v(' '), s('ul', {
          staticClass: 'nice-activity',
          attrs: {id: 'activity'}
        }, t._l(t.items, function (e) {
          return s('li', {staticClass: 'item'}, [s('img', {attrs: {src: e.icon}}), t._v(' '), s('div', [s('p', {staticStyle: {color: '#96979a'}}, [t._v(t._s(e.title) + '...')]), t._v(' '), s('p', {staticStyle: {color: '#e3e3e3'}}, [t._v('《' + t._s(e.book) + '》')]), t._v(' '), s('span', [t._v('已有' + t._s(e.good) + '人参加')])])])
        }), 0)], 1)])
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t
        return e('div', {staticClass: 'title'}, [e('img', {attrs: {src: './static/logo.png'}}), this._v(' '), e('div', {staticClass: 'input'}, [e('input', {attrs: {placeholder: '请输入需要搜索的书籍'}}), this._v(' '), e('img', {
          staticClass: 'search',
          attrs: {src: './static/home_find.png'}
        })]), this._v(' '), e('img', {attrs: {src: './static/home_msg.png'}})])
      }, function () {
        var t = this.$createElement, e = this._self._c || t
        return e('span', [this._v('全部'), e('br'), this._v('书籍')])
      }, function () {
        var t = this.$createElement, e = this._self._c || t
        return e('span', [this._v('最近'), e('br'), this._v('在读')])
      }, function () {
        var t = this.$createElement, e = this._self._c || t
        return e('div', {staticClass: 'litter-title'}, [e('div'), this._v('\n      好书推荐\n    ')])
      }, function () {
        var t = this, e = t.$createElement, s = t._self._c || e
        return s('div', {staticClass: 'books'}, [s('div', {staticClass: 'book'}, [s('img', {attrs: {src: './static/good_book1.png'}}), t._v(' '), s('span', [t._v('窗边的小豆豆')])]), t._v(' '), s('div', {staticClass: 'book'}, [s('img', {attrs: {src: './static/good_book2.png'}}), t._v(' '), s('span', [t._v('爱的教育')])]), t._v(' '), s('div', {staticClass: 'book'}, [s('img', {attrs: {src: './static/good_book3.png'}}), t._v(' '), s('span', [t._v('夏洛的网')])]), t._v(' '), s('div', {staticClass: 'book'}, [s('img', {attrs: {src: './static/good_book4.png'}}), t._v(' '), s('span', [t._v('雾都孤儿')])])])
      }, function () {
        var t = this.$createElement, e = this._self._c || t
        return e('div', {staticClass: 'litter-title'}, [e('div'), this._v('\n      精彩活动\n    ')])
      }]
    }
    var m = s('VU/8')(v, p, !1, function (t) {
      s('TUa/')
    }, 'data-v-7e64dd97', null).exports, _ = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e
        return s('div', [t._m(0), t._v(' '), s('div', {staticClass: 'container'}, [s('div', {staticStyle: {height: '50px'}}), t._v(' '), t._m(1), t._v(' '), s('div', {staticClass: 'double-button'}, [s('a', {on: {click: t.toAllActivity}}, [s('img', {attrs: {src: './static/activity_all_activity.png'}}), t._v('全部'), s('br'), t._v('活动')]), t._v(' '), s('div', {
          staticStyle: {
            width: '2px',
            height: '35px',
            'background-color': '#75bfe3'
          }
        }), t._v(' '), t._m(2)]), t._v(' '), t._m(3), t._v(' '), s('ul', {
          staticClass: 'nice-activity',
          attrs: {id: 'activity'}
        }, t._l(t.items, function (e) {
          return s('li', {staticClass: 'item'}, [s('img', {attrs: {src: e.icon}}), t._v(' '), s('div', [s('p', {staticStyle: {color: '#96979a'}}, [t._v(t._s(e.title) + '...')]), t._v(' '), s('p', {staticStyle: {color: '#e3e3e3'}}, [t._v('《' + t._s(e.book) + '》')]), t._v(' '), s('span', [t._v('已有' + t._s(e.good) + '人参加')])])])
        }), 0)])])
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t
        return e('div', {staticClass: 'title'}, [e('div'), this._v('\n    阅读活动\n  ')])
      }, function () {
        var t = this.$createElement, e = this._self._c || t
        return e('div', {staticClass: 'offical-activity'}, [e('img', {attrs: {src: './static/official_activity.png'}})])
      }, function () {
        var t = this.$createElement, e = this._self._c || t
        return e('a', [e('img', {attrs: {src: './static/activity_my_activity.png'}}), this._v('我的'), e('br'), this._v('活动')])
      }, function () {
        var t = this.$createElement, e = this._self._c || t
        return e('div', {staticClass: 'litter-title'}, [e('div'), this._v('\n      精彩活动\n    ')])
      }]
    }
    var u = s('VU/8')({
      name: 'Activity', data: function () {
        return {
          items: [{
            icon: './static/good_book1.png',
            title: '假如我在巴学园上学',
            book: '窗边的小豆豆',
            good: '240'
          }, {
            icon: './static/good_book3.png',
            title: '为你编织童年的网',
            book: '夏洛的网',
            good: '407'
          }, {
            icon: './static/good_book2.png',
            title: '如何写好成长日记',
            book: '爱的教育',
            good: '1207'
          }, {
            icon: './static/good_book1.png',
            title: '假如我在巴学园上学',
            book: '窗边的小豆豆',
            good: '240'
          }, {
            icon: './static/good_book3.png',
            title: '为你编织童年的网',
            book: '夏洛的网',
            good: '407'
          }, {icon: './static/good_book2.png', title: '如何写好成长日记', book: '爱的教育', good: '1207'}]
        }
      }, methods: {
        toAllActivity: function () {
          this.$router.push('/allactivity')
        }
      }
    }, _, !1, function (t) {
      s('HKw6')
    }, 'data-v-2a061491', null).exports, g = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e
        return s('div', {staticClass: 'container'}, [t._m(0), t._v(' '), s('div', {staticStyle: {height: '50px'}}), t._v(' '), s('div', {staticClass: 'tab'}, [s('div', {
          staticClass: 'tab-item',
          class: {tab_selected: 0 == t.seleted},
          on: {
            click: function (e) {
              return t.filter(0)
            }
          }
        }, [t._v('全部')]), t._v(' '), s('div', {
          staticClass: 'tab-item',
          class: {tab_selected: 1 == t.seleted},
          on: {
            click: function (e) {
              return t.filter(1)
            }
          }
        }, [t._v('在线')]), t._v(' '), s('div', {
          staticClass: 'tab-item',
          class: {tab_selected: 2 == t.seleted},
          on: {
            click: function (e) {
              return t.filter(2)
            }
          }
        }, [t._v('本地')])]), t._v(' '), s('div', {staticClass: 'book-shelter'}, t._l(t.items, function (e) {
          return 0 == t.seleted || t.seleted == e.local || 0 == e.local ? s('div', {staticClass: 'item'}, [s('img', {attrs: {src: e.icon}}), t._v(' '), s('div', {staticClass: 'bookName'}, [t._v(t._s(e.name))]), t._v(' '), s('div', {staticClass: 'progress'}, [t._v(t._s(e.progress))])]) : t._e()
        }), 0), t._v(' '), s('div', {
          staticStyle: {
            'font-size': '15px',
            'margin-top': '10px'
          }
        }, [t._v('- 共 ' + t._s(t.bookNum) + ' 本 -')])])
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t
        return e('div', {staticClass: 'title'}, [e('div'), this._v('\n    我的书架\n    '), e('span', {staticStyle: {flex: '1'}}), this._v(' '), e('img', {attrs: {src: './static/book_scan.png'}}), this._v(' '), e('img', {attrs: {src: './static/book_delete.png'}})])
      }]
    }
    var h = s('VU/8')({
      name: 'Read', data: function () {
        return {
          seleted: 0,
          items: [{icon: './static/add_new_book.png', name: '', progress: '', local: 0}, {
            icon: './static/good_book1.png',
            name: '窗边的小豆豆',
            progress: '已读87%',
            local: 1
          }, {
            icon: './static/good_book2.png',
            name: '爱的教育',
            progress: '已读90%',
            local: 2
          }, {
            icon: './static/good_book3.png',
            name: '夏洛的网',
            progress: '已读55%',
            local: 2
          }, {
            icon: './static/good_book4.png',
            name: '雾都孤儿',
            progress: '已读97%',
            local: 2
          }, {
            icon: './static/good_book5.png',
            name: '解忧杂货店',
            progress: '已读81%',
            local: 1
          }, {icon: './static/good_book6.png', name: '小王子', progress: '已读76%', local: 1}]
        }
      }, methods: {
        filter: function (t) {
          this.seleted = t
        }
      }, computed: {
        bookNum: function () {
          return this.items.length - 1
        }
      }
    }, g, !1, function (t) {
      s('X4Pg')
    }, 'data-v-51b2bc46', null).exports, f = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e
        return s('div', {staticClass: 'container'}, [t._m(0), t._v(' '), s('div', {staticStyle: {height: '50px'}}), t._v(' '), s('mt-navbar', {
          staticStyle: {width: '80%'},
          model: {
            value: t.selected, callback: function (e) {
              t.selected = e
            }, expression: 'selected'
          }
        }, [s('mt-tab-item', {
          staticClass: 'tab',
          attrs: {id: 'first'}
        }, [t._v('班级')]), t._v(' '), s('mt-tab-item', {
          staticClass: 'tab',
          attrs: {id: 'second'}
        }, [t._v('作业')])], 1), t._v(' '), s('mt-tab-container', {
          staticStyle: {width: '100%', 'margin-top': '10px'},
          model: {
            value: t.selected, callback: function (e) {
              t.selected = e
            }, expression: 'selected'
          }
        }, [s('mt-tab-container-item', {attrs: {id: 'first'}}, [s('div', {
          staticStyle: {
            display: 'flex',
            'flex-direction': 'column',
            'align-items': 'center'
          }
        }, [s('div', {staticClass: 'class-head'}, [s('div', {
          staticStyle: {
            margin: '0 15px',
            'font-size': '1.1em',
            color: '#3d85a9'
          }
        }, [s('span', [t._v('浙理三班')]), t._v(' '), s('span', {staticStyle: {'margin-left': '10px'}}, [t._v('班级成员：3人')])]), t._v(' '), s('div', {
          staticStyle: {
            margin: '2px 15px',
            'font-size': '0.9em',
            color: '#5893b3'
          }
        }, [t._v('这是一个热爱阅读的班级')])]), t._v(' '), s('div', {
          staticStyle: {
            width: '90%',
            'text-align': 'left',
            display: 'flex',
            'flex-direction': 'row',
            'align-items': 'center',
            'margin-top': '20px',
            color: '#77c0e6',
            'font-size': '0.9em'
          }
        }, [s('div', {
          staticStyle: {
            width: '2px',
            height: '18px',
            'background-color': '#77c0e6',
            'margin-right': '20px'
          }
        }), t._v('\n          同学名单\n          '), s('div', {staticStyle: {flex: '1'}}), t._v(' '), s('div', {staticStyle: {color: '#D0D0D0'}}, [t._v('负责老师：陈老师')])]), t._v(' '), t._l(t.students, function (e) {
          return s('div', {staticClass: 'student-list'}, [s('img', {attrs: {src: './static/user_icon.jpg'}}), t._v(' '), s('div', {
            staticStyle: {
              'margin-left': '10px',
              color: '#9c9b9f'
            }
          }, [t._v(t._s(e.name))]), t._v(' '), s('div', {staticStyle: {flex: '1'}}), t._v(' '), s('div', {staticStyle: {color: '#9c9ba0'}}, [t._v('最近在读')]), t._v(' '), s('div', {staticStyle: {color: '#1bbb9b'}}, [t._v('《' + t._s(e.book) + '》')])])
        })], 2)]), t._v(' '), s('mt-tab-container-item', {attrs: {id: 'second'}}, [s('div', {
          staticStyle: {
            display: 'flex',
            'flex-direction': 'column',
            'align-items': 'center'
          }
        }, t._l(t.homeworks, function (e) {
          return s('div', {staticClass: 'homework'}, [s('div', [s('span', {
            staticStyle: {
              'font-size': '1em',
              color: '#4085a8'
            }
          }, [t._v(t._s(e.name))]), t._v(' '), s('span', {
            staticStyle: {'font-size': '1em'},
            style: {color: e.state_color1}
          }, [t._v('[' + t._s(e.state1) + ']')])]), t._v(' '), s('div', [s('span', {
            staticStyle: {
              'font-size': '0.9em',
              color: '#878c91'
            }
          }, [t._v('《' + t._s(e.bookName) + '》')]), t._v(' '), s('span', {
            staticStyle: {'font-size': '0.9em'},
            style: {color: e.state_color2}
          }, [t._v(t._s(e.state2))])])])
        }), 0)])], 1)], 1)
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t
        return e('div', {staticClass: 'title'}, [e('div'), this._v('\n    阅读作业\n  ')])
      }]
    }
    var b = s('VU/8')({
      name: 'HomeWork', data: function () {
        return {
          selected: 0,
          students: [{icon: '', name: 'xiaoWu', book: '窗边的小豆豆'}, {icon: '', name: 'xiaoCheng', book: '红楼梦'}, {
            icon: '',
            name: 'xiaoZhou',
            book: '丁丁历险记'
          }],
          homeworks: [{
            name: '撰写读后感',
            state1: '未提交',
            state_color1: 'red',
            bookName: '窗边的小豆豆',
            state2: '距离结束还有3天',
            state_color2: '#878c91'
          }, {
            name: '谈谈你最佩服书中的哪个人物',
            state1: '已提交',
            state_color1: '#27a105',
            bookName: '爱的教育',
            state2: '教师未批改',
            state_color2: 'red'
          }, {
            name: '用不多于200字简述这个故事',
            state1: '未通过',
            state_color1: 'red',
            bookName: '夏洛的网',
            state2: '教师已批改',
            state_color2: '#27a105'
          }, {
            name: '摘录10处好句好段并简要分析',
            state1: '已通过',
            state_color1: '#27a105',
            bookName: '雾都孤儿',
            state2: '教师已批改',
            state_color2: '#27a105'
          }]
        }
      }
    }, f, !1, function (t) {
      s('GsCJ')
    }, 'data-v-f2ec6ad2', null).exports, k = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e
        return s('div', {staticClass: 'container'}, [t._m(0), t._v(' '), s('div', {staticStyle: {height: '50px'}}), t._v(' '), s('div', {staticClass: 'head'}, [s('div', [s('img', {
          staticClass: 'icon',
          attrs: {src: './static/user_icon.jpg'}
        }), t._v(' '), s('span', {staticStyle: {flex: '1'}}), t._v(' '), s('span', [t._v('xiaoLiu')]), t._v(' '), s('img', {
          staticClass: 'icon',
          attrs: {src: './static/user_right.png'},
          on: {click: t.toUserInfo}
        })])]), t._v(' '), t._m(1), t._v(' '), t._m(2), t._v(' '), s('div', {
          staticClass: 'row',
          on: {click: t.toReadPlan}
        }, [s('img', {
          staticClass: 'row-left',
          attrs: {src: './static/yuedujihua.png'}
        }), t._v(' '), s('span', {staticClass: 'row-middle'}, [t._v('阅读计划')]), t._v(' '), s('div', {staticStyle: {flex: '1'}}), t._v(' '), s('span', {staticClass: 'row-right'}, [t._v('今天的阅读计划完成了吗？')])]), t._v(' '), t._m(3)])
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t
        return e('div', {staticClass: 'title'}, [e('div'), this._v('\n    我的\n    '), e('span', {staticStyle: {flex: '1'}}), this._v(' '), e('img', {attrs: {src: './static/fragment_title_setting.png'}})])
      }, function () {
        var t = this, e = t.$createElement, s = t._self._c || e
        return s('div', {staticClass: 'mid'}, [s('div', {staticClass: 'item'}, [s('span', {
          staticStyle: {
            'font-size': '15px',
            color: '#bdbdbe'
          }
        }, [t._v('阅读本数')]), t._v(' '), s('span', {
          staticStyle: {
            'font-size': '14px',
            color: '#ebebea',
            'margin-top': '10px'
          }
        }, [t._v('5本')])]), t._v(' '), s('div', {
          staticStyle: {
            width: '1px',
            height: '60px',
            'background-color': '#d6d6d6'
          }
        }), t._v(' '), s('div', {staticClass: 'item'}, [s('span', {
          staticStyle: {
            'font-size': '15px',
            color: '#bdbdbe'
          }
        }, [t._v('阅读字数')]), t._v(' '), s('span', {
          staticStyle: {
            'font-size': '14px',
            color: '#ebebea',
            'margin-top': '10px'
          }
        }, [t._v('56.2W字')])]), t._v(' '), s('div', {
          staticStyle: {
            width: '1px',
            height: '60px',
            'background-color': '#d6d6d6'
          }
        }), t._v(' '), s('div', {staticClass: 'item'}, [s('span', {
          staticStyle: {
            'font-size': '15px',
            color: '#bdbdbe'
          }
        }, [t._v('阅读时间')]), t._v(' '), s('span', {
          staticStyle: {
            'font-size': '14px',
            color: '#ebebea',
            'margin-top': '10px'
          }
        }, [t._v('52.3小时')])])])
      }, function () {
        var t = this.$createElement, e = this._self._c || t
        return e('div', {staticClass: 'row'}, [e('img', {
          staticClass: 'row-left',
          attrs: {src: './static/chengzhangzhilv.png'}
        }), this._v(' '), e('span', {staticClass: 'row-middle'}, [this._v('成长之旅')]), this._v(' '), e('div', {staticStyle: {flex: '1'}}), this._v(' '), e('img', {
          staticClass: 'row-right',
          staticStyle: {'max-width': '70px', height: '90%'},
          attrs: {src: './static/boy.png'}
        })])
      }, function () {
        var t = this.$createElement, e = this._self._c || t
        return e('div', {staticClass: 'row'}, [e('img', {
          staticClass: 'row-left',
          attrs: {src: './static/jiazhangguanzhu.png'}
        }), this._v(' '), e('span', {staticClass: 'row-middle'}, [this._v('家长关注')]), this._v(' '), e('div', {staticStyle: {flex: '1'}}), this._v(' '), e('span', {staticClass: 'row-right'}, [this._v('随时了解孩子的阅读')])])
      }]
    }
    var y = s('VU/8')({
      name: 'Me', methods: {
        toUserInfo: function () {
          this.$router.push('/userinfo')
        }, toReadPlan: function () {
          this.$router.push('/readplan')
        }
      }
    }, k, !1, function (t) {
      s('Yzw4')
    }, 'data-v-39286b82', null).exports, x = s('OTr+'), w = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e
        return s('div', {staticClass: 'container'}, [s('my-title', {
          attrs: {
            title: '个人信息',
            'right-img': './static/save.png'
          }
        }), t._v(' '), s('div', {staticClass: 'bg'}, [t._m(0), t._v(' '), s('div', {staticClass: 'row'}, [s('span', [t._v('用户名')]), t._v(' '), s('span', {staticStyle: {flex: '1'}}), t._v(' '), s('span', {staticStyle: {width: '70%'}}, [t._v(t._s(t.number))])]), t._v(' '), s('div', {staticClass: 'row'}, [s('span', [t._v('姓名')]), t._v(' '), s('span', {staticStyle: {flex: '1'}}), t._v(' '), s('input', {
          directives: [{
            name: 'model',
            rawName: 'v-model',
            value: t.name,
            expression: 'name'
          }], attrs: {placeholder: '请输入姓名'}, domProps: {value: t.name}, on: {
            input: function (e) {
              e.target.composing || (t.name = e.target.value)
            }
          }
        })]), t._v(' '), s('div', {staticClass: 'row'}, [s('span', [t._v('新密码')]), t._v(' '), s('span', {staticStyle: {flex: '1'}}), t._v(' '), s('input', {
          directives: [{
            name: 'model',
            rawName: 'v-model',
            value: t.userPwd,
            expression: 'userPwd'
          }], attrs: {placeholder: '请输入密码', type: 'password'}, domProps: {value: t.userPwd}, on: {
            input: function (e) {
              e.target.composing || (t.userPwd = e.target.value)
            }
          }
        })]), t._v(' '), s('div', {staticClass: 'row'}, [s('span', [t._v('重复密码')]), t._v(' '), s('span', {staticStyle: {flex: '1'}}), t._v(' '), s('input', {
          directives: [{
            name: 'model',
            rawName: 'v-model',
            value: t.userPwdRep,
            expression: 'userPwdRep'
          }],
          attrs: {placeholder: '请重复密码', type: 'password'},
          domProps: {value: t.userPwdRep},
          on: {
            input: function (e) {
              e.target.composing || (t.userPwdRep = e.target.value)
            }
          }
        })]), t._v(' '), s('div', {staticClass: 'row'}, [s('span', [t._v('出生年月')]), t._v(' '), s('span', {staticStyle: {flex: '1'}}), t._v(' '), s('input', {
          directives: [{
            name: 'model',
            rawName: 'v-model',
            value: t.birthdate,
            expression: 'birthdate'
          }], attrs: {placeholder: '请输入出生年月'}, domProps: {value: t.birthdate}, on: {
            input: function (e) {
              e.target.composing || (t.birthdate = e.target.value)
            }
          }
        })]), t._v(' '), s('div', {staticClass: 'row'}, [s('span', [t._v('性别')]), t._v(' '), s('span', {staticStyle: {flex: '1'}}), t._v(' '), s('sex-radio', {
          staticStyle: {width: '60%'},
          on: {changeSelect: t.changeSex}
        })], 1)])], 1)
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t
        return e('div', {
          staticStyle: {
            width: '100%',
            height: '200px',
            position: 'relative'
          }
        }, [e('img', {staticClass: 'userIcon', attrs: {src: './static/user_icon.jpg'}})])
      }]
    }
    var C = function (t) {
      s('uTqo')
    }, S = s('VU/8')(x.a, w, !1, C, 'data-v-4364c2a4', null).exports, N = s('hc5V'), $ = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e
        return s('div', {staticClass: 'container'}, [s('my-title', {
          attrs: {
            title: '全部书籍',
            rightImg: './static/home_find.png'
          }
        }), t._v(' '), s('div', {staticClass: 'filter'}, [s('div', {
          staticClass: 'filter-down',
          on: {click: t.downToogle}
        }, [t._v(t._s(t.selectedClass))]), t._v(' '), s('div', {staticClass: 'filter-read'}, [t._v('最多阅读')]), t._v(' '), s('div', {staticClass: 'filter-postil'}, [t._v('最多批注')])]), t._v(' '), s('div', {staticClass: 'body'}, [s('div', {
          staticClass: 'mask',
          on: {click: t.downToogle}
        }, [s('div', {staticClass: 'down-box'}, t._l(t.classes, function (e, i) {
          return s('div', {
            staticStyle: {width: '30%', padding: '10px 5px', color: '#3e83a9', 'font-size': '0.9em'},
            on: {
              click: function (e) {
                return e.stopPropagation(), t.selectClass(i)
              }
            }
          }, [t._v('\n          ' + t._s(e.className) + '\n        ')])
        }), 0)]), t._v(' '), t._l(t.books, function (e, i) {
          return s('div', {staticClass: 'bookList'}, [s('img', {
            staticClass: 'left',
            attrs: {src: e.icon}
          }), t._v(' '), s('div', {staticClass: 'mid'}, [s('div', {
            staticStyle: {
              'font-size': '0.9em',
              color: '#222'
            }
          }, [t._v(t._s(e.name))]), t._v(' '), s('div', {
            staticStyle: {
              'font-size': '0.8em',
              'margin-top': '5px',
              color: '#989898'
            }
          }, [t._v(t._s(e.writer))]), t._v(' '), s('div', {
            staticStyle: {
              'font-size': '0.7em',
              'margin-top': '10px',
              color: '#84cdf3'
            }
          }, [t._v('已有' + t._s(e.readPeopleNum) + '人阅读')])]), t._v(' '), s('button', {
            staticClass: 'right',
            on: {
              click: function (e) {
                return t.toBookDetail(i)
              }
            }
          }, [t._v('查看详情')])])
        })], 2)], 1)
      }, staticRenderFns: []
    }
    var E = function (t) {
      s('mvQ1')
    }, P = s('VU/8')(N.a, $, !1, E, 'data-v-5205272c', null).exports, R = s('yF88'), T = {
      name: 'ReadPlan', components: {MyTitle: R.a}, data: function () {
        return {
          plans: [{
            id: '',
            number: '',
            book: '',
            start_time: '',
            end_time: '',
            progress: '',
            state: '',
            is_parent: ''
          }, {
            id: '1',
            number: '2016329621104',
            book: '窗边的小豆豆',
            start_time: '',
            end_time: '',
            progress: '40%',
            state: '0',
            is_parent: '0'
          }, {
            id: '2',
            number: '2016329621104',
            book: '爱的教育',
            start_time: '',
            end_time: '',
            progress: '100%',
            state: '1',
            is_parent: '1'
          }, {
            id: '3',
            number: '2016329621104',
            book: '雾都孤儿',
            start_time: '',
            end_time: '',
            progress: '90%',
            state: '2',
            is_parent: '0'
          }, {
            id: '4',
            number: '2016329621104',
            book: '解忧杂货店',
            start_time: '',
            end_time: '',
            progress: '70%',
            state: '0',
            is_parent: '0'
          }]
        }
      }, methods: {
        toPlanDetail: function (t) {
          0 == t ? alert('添加书籍') : alert('阅读计划：' + this.plans[t].book)
        }
      }
    }, z = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e
        return s('div', {staticClass: 'container'}, [s('my-title', {attrs: {title: '阅读计划'}}), t._v(' '), s('div', {staticClass: 'body'}, [s('div', {staticClass: 'planList'}, t._l(t.plans, function (e, i) {
          return s('div', {
            staticClass: 'item', on: {
              click: function (e) {
                return t.toPlanDetail(i)
              }
            }
          }, [s('img', {
            staticClass: 'bg',
            attrs: {src: './static/item_read_plan.png'}
          }), t._v(' '), s('div', {
            directives: [{
              name: 'show',
              rawName: 'v-show',
              value: 0 != i,
              expression: 'index!=0'
            }], staticClass: 'center'
          }, [s('div', {
            staticStyle: {
              'font-size': '14px',
              color: '#a5a7aa'
            }
          }, [t._v('《' + t._s(e.book) + '》')]), t._v(' '), s('div', {
            staticStyle: {
              'font-size': '13px',
              'margin-top': '5%',
              color: '#a5a7aa'
            }
          }, [t._v('完成度为' + t._s(e.progress))])]), t._v(' '), s('img', {
            directives: [{
              name: 'show',
              rawName: 'v-show',
              value: 0 == i,
              expression: 'index==0'
            }],
            staticStyle: {
              position: 'absolute',
              left: '0',
              top: '0',
              right: '0',
              bottom: '0',
              margin: 'auto',
              width: '30%'
            },
            attrs: {src: './static/read_plan_add.png'}
          }), t._v(' '), s('img', {
            directives: [{
              name: 'show',
              rawName: 'v-show',
              value: 1 == e.state,
              expression: 'plan.state==1'
            }], staticClass: 'state', attrs: {src: './static/read_plan_complete.png'}
          }), t._v(' '), s('img', {
            directives: [{
              name: 'show',
              rawName: 'v-show',
              value: 2 == e.state,
              expression: 'plan.state==2'
            }], staticClass: 'state', attrs: {src: './static/read_plan_uncomplete.png'}
          }), t._v(' '), s('img', {
            directives: [{
              name: 'show',
              rawName: 'v-show',
              value: 1 == e.is_parent,
              expression: 'plan.is_parent==1'
            }], staticClass: 'parent', attrs: {src: './static/parent_plan.png'}
          })])
        }), 0)])], 1)
      }, staticRenderFns: []
    }
    var A = s('VU/8')(T, z, !1, function (t) {
      s('8e66')
    }, 'data-v-5594bca8', null).exports, U = {
      name: 'BookDetail', components: {MyTitle: R.a}, data: function () {
        return {
          name: '窗边的小豆豆',
          icon: './static/good_book1.png',
          bookDescribe: '《窗边的小豆豆》是日本作家、主持人黑柳彻字创建的一个儿童文学作品，首次出版于1981年。这本书讲述了作者小时候的一段真实故事',
          functions: [{icon: './static/detail_read.png', name: '阅读'}, {
            icon: './static/detail_postil.png',
            name: '批注'
          }, {icon: './static/detail_note.png', name: '小报'}, {icon: './static/detail_activity.png', name: '活动'}],
          postils: [{
            id: '6',
            type: '',
            number: '',
            name: 'xiaoZhou',
            book: '',
            content: '\'巴学园\'有着与众不同的教育方法，每天的第一节课，老师就把当天要上的课和每一节的学习重点，都写在黑板上，然后说：\'下面开始上课了，从你喜欢的那门课开始吧。\'，慢慢老师就会知道每一个同学的兴趣所在，和他感兴趣的方式。',
            teacher_remark: '',
            book_location: '',
            time: '2019-06-07'
          }, {
            id: '7',
            type: '',
            number: '',
            name: 'xiaoChen',
            book: '',
            content: '这个叫小豆豆的女孩眼里所展现的童真世界是我们曾经忽略和淡忘的美好事物，这种忽略通常是一生的，那些生命中非常宝贵的东西',
            teacher_remark: '',
            book_location: '',
            time: '2019-06-08'
          }, {
            id: '8',
            type: '',
            number: '',
            name: 'xiaoZhou',
            book: '',
            content: '这段话应用了拟人的手法，"头发在迎风唱歌"，表现了孩子们此时愉快的心情。',
            teacher_remark: '',
            book_location: '',
            time: '2019-06-09'
          }]
        }
      }, methods: {
        funcClick: function (t) {
          switch (t) {
            case 1:
              this.$router.push('/bookpostil')
              break
            default:
              this.$toast(this.functions[t].name)
          }
        }
      }
    }, F = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e
        return s('div', {staticClass: 'container'}, [s('my-title', {
          attrs: {
            title: t.name,
            rightImg: './static/share.png'
          }
        }), t._v(' '), s('div', {staticClass: 'head'}, [s('div', {
          staticStyle: {
            width: '90%',
            height: '100px',
            'background-color': 'white',
            'border-radius': '8px',
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            margin: '0 auto'
          }
        }, [s('button', [t._v('加入书架')]), t._v(' '), s('div', {
          staticStyle: {
            height: '55px',
            overflow: 'hidden'
          }
        }, [s('div', {
          staticStyle: {
            'text-align': 'left',
            'font-size': '13px',
            margin: '5px 15px'
          }
        }, [t._v(t._s(t.bookDescribe))])]), t._v(' '), s('img', {
          staticStyle: {
            width: '60px',
            position: 'absolute',
            left: '10%',
            top: '-45%'
          }, attrs: {src: t.icon}
        })])]), t._v(' '), s('div', {staticClass: 'body'}, [s('div', {staticClass: 'mid'}, t._l(t.functions, function (e, i) {
          return s('div', {
            staticClass: 'function', on: {
              click: function (e) {
                return t.funcClick(i)
              }
            }
          }, [s('img', {
            staticStyle: {width: '40%'},
            attrs: {src: e.icon}
          }), t._v(' '), s('span', {staticStyle: {'margin-top': '2px', 'font-size': '13px'}}, [t._v(t._s(e.name))])])
        }), 0), t._v(' '), s('div', {staticClass: 'bottom'}, [t._m(0), t._v(' '), t._l(t.postils, function (e) {
          return s('div', {
            staticStyle: {
              width: '100%',
              display: 'flex',
              'flex-direction': 'row',
              margin: '7px',
              'border-bottom': '1px solid grey'
            }
          }, [s('img', {
            staticStyle: {'border-radius': '50%', width: '40px', height: '40px', 'margin-left': '7px'},
            attrs: {src: './static/user_icon.jpg'}
          }), t._v(' '), s('div', {
            staticStyle: {
              flex: '1',
              margin: '0 5px',
              display: 'flex',
              'flex-direction': 'column',
              'margin-top': '10px'
            }
          }, [s('div', {
            staticStyle: {
              'font-size': '13px',
              'text-align': 'left'
            }
          }, [t._v(t._s(e.name))]), t._v(' '), s('div', {
            staticStyle: {
              'font-size': '13px',
              'text-align': 'left',
              'margin-top': '2px',
              color: '#b0b0b0'
            }
          }, [t._v(t._s(e.content))]), t._v(' '), s('div', {
            staticStyle: {
              'font-size': '13px',
              'text-align': 'left',
              'margin-top': '10px',
              'margin-bottom': '5px',
              color: '#222'
            }
          }, [t._v(t._s(e.time))])])])
        }), t._v(' '), s('div', {staticStyle: {'font-size': '13px'}}, [t._v('\n        查看全部\n      ')])], 2)])], 1)
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t
        return e('div', {
          staticStyle: {
            width: '100%',
            display: 'flex',
            'flex-direction': 'row',
            'align-items': 'center'
          }
        }, [e('div', {
          staticStyle: {
            height: '15px',
            width: '2px',
            'background-color': 'grey',
            margin: '0 10px'
          }
        }), this._v(' '), e('div', {staticStyle: {'font-size': '14px'}}, [this._v('精彩批注')]), this._v(' '), e('div', {staticStyle: {flex: '1'}}), this._v(' '), e('div', {
          staticStyle: {
            'font-size': '12px',
            color: '#1ca9ff'
          }
        }, [this._v('如何成为精彩批注?')])])
      }]
    }
    var M = s('VU/8')(U, F, !1, function (t) {
      s('Vqv3')
    }, 'data-v-54d3f7db', null).exports, I = s('KBAF'), B = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e
        return s('div', {staticClass: 'container'}, [s('my-title', {
          attrs: {
            title: '全部活动',
            rightImg: './static/home_find.png'
          }
        }), t._v(' '), s('div', {staticClass: 'filter'}, [s('div', {
          staticClass: 'filter-down',
          on: {click: t.downToogle}
        }, [t._v(t._s(t.selectedState))]), t._v(' '), s('div', {staticClass: 'filter-read'}, [t._v('最新发布')]), t._v(' '), s('div', {staticClass: 'filter-postil'}, [t._v('最多参与')])]), t._v(' '), s('div', {staticClass: 'body'}, [s('div', {
          staticClass: 'mask',
          on: {click: t.downToogle}
        }, [s('div', {staticClass: 'down-box'}, t._l(t.states, function (e, i) {
          return s('div', {
            staticClass: 'class-item', on: {
              click: function (e) {
                return e.stopPropagation(), t.selectClass(i)
              }
            }
          }, [s('div', {staticStyle: {'margin-left': '10px'}}, [t._v(t._s(e.className))]), t._v(' '), s('div', {staticStyle: {flex: '1'}}), t._v(' '), s('div', {staticStyle: {'margin-right': '10px'}}, [t._v('√')])])
        }), 0)]), t._v(' '), t._l(t.activities, function (e, i) {
          return '全部状态' == t.selectedState || t.states[e.state].className == t.selectedState ? s('div', {staticClass: 'bookList'}, [s('img', {
            staticClass: 'left',
            attrs: {src: e.icon}
          }), t._v(' '), s('div', {staticClass: 'mid'}, [s('div', {
            staticStyle: {
              'font-size': '0.9em',
              color: '#222'
            }
          }, [t._v(t._s(e.title))]), t._v(' '), s('div', {
            staticStyle: {
              'font-size': '0.8em',
              'margin-top': '5px',
              color: '#989898'
            }
          }, [t._v('《' + t._s(e.name) + '》')]), t._v(' '), s('div', {
            staticStyle: {
              'font-size': '0.7em',
              'margin-top': '10px',
              color: '#84cdf3'
            }
          }, [t._v('已有' + t._s(e.people_join) + '人参与')])]), t._v(' '), s('button', {
            staticClass: 'right',
            style: {background: t.states[e.state].color},
            on: {
              click: function (e) {
                return t.toBookDetail(i)
              }
            }
          }, [t._v('\n        ' + t._s(t.states[e.state].className) + '\n      ')])]) : t._e()
        })], 2)], 1)
      }, staticRenderFns: []
    }
    var V = function (t) {
      s('VQmb')
    }, j = s('VU/8')(I.a, B, !1, V, 'data-v-789cf7ae', null).exports, L = s('JJT7'), D = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e
        return s('div', {staticClass: 'container'}, [s('div', {staticClass: 'content'}, [s('img', {
          staticStyle: {'margin-top': '20px'},
          attrs: {src: './static/logo.png'}
        }), t._v(' '), s('div', {
          staticClass: 'row',
          staticStyle: {'margin-top': '20px'}
        }, [s('span', [t._v('账号')]), t._v(' '), s('input', {
          directives: [{
            name: 'model',
            rawName: 'v-model',
            value: t.number,
            expression: 'number'
          }], attrs: {placeholder: '请输入账号', type: 'number'}, domProps: {value: t.number}, on: {
            input: function (e) {
              e.target.composing || (t.number = e.target.value)
            }
          }
        })]), t._v(' '), s('div', {staticClass: 'row'}, [s('span', [t._v('密码')]), t._v(' '), s('input', {
          directives: [{
            name: 'model',
            rawName: 'v-model',
            value: t.password,
            expression: 'password'
          }], attrs: {placeholder: '请输入密码', type: 'password'}, domProps: {value: t.password}, on: {
            input: function (e) {
              e.target.composing || (t.password = e.target.value)
            }
          }
        })]), t._v(' '), s('div', {staticClass: 'row'}, [s('span', [t._v('重复密码')]), t._v(' '), s('input', {
          directives: [{
            name: 'model',
            rawName: 'v-model',
            value: t.repPassword,
            expression: 'repPassword'
          }],
          staticClass: 'repeat',
          attrs: {placeholder: '请输入账号', type: 'password'},
          domProps: {value: t.repPassword},
          on: {
            input: function (e) {
              e.target.composing || (t.repPassword = e.target.value)
            }
          }
        })]), t._v(' '), s('div', {staticClass: 'row'}, [s('span', [t._v('用户名')]), t._v(' '), s('input', {
          directives: [{
            name: 'model',
            rawName: 'v-model',
            value: t.name,
            expression: 'name'
          }], attrs: {placeholder: '请输入账号', type: 'text'}, domProps: {value: t.name}, on: {
            input: function (e) {
              e.target.composing || (t.name = e.target.value)
            }
          }
        })]), t._v(' '), s('div', {staticClass: 'row'}, [s('input', {
          attrs: {
            id: 'inputCode',
            placeholder: '请输入验证码',
            type: 'text'
          }
        }), t._v(' '), s('div', {
          staticClass: 'code', attrs: {id: 'checkCode'}, on: {
            click: function (e) {
              return t.createCode(4)
            }
          }
        })]), t._v(' '), s('div', {staticClass: 'row'}, [s('button', {
          staticStyle: {
            'background-color': 'white',
            color: '#79c0e6'
          }, on: {
            click: function (e) {
              return t.register()
            }
          }
        }, [t._v('注册')]), t._v(' '), s('button', {
          staticStyle: {'background-color': '#79c0e6', color: 'white'},
          on: {
            click: function (e) {
              return t.cancel()
            }
          }
        }, [t._v('取消')])]), t._v(' '), s('div', {staticClass: 'dialog'}, [t._v('\n      ' + t._s(t.errorMsg) + '\n    ')])])])
      }, staticRenderFns: []
    }
    var O = function (t) {
      s('6OZJ')
    }, W = s('VU/8')(L.a, D, !1, O, 'data-v-bd1df664', null).exports, q = s('E4SP'), H = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e
        return s('div', {staticClass: 'container'}, [s('my-title', {
          attrs: {
            title: '我的批注',
            rightImg: './static/postil_scan.png'
          }
        }), t._v(' '), s('div', {staticClass: 'filter'}, [s('div', {
          staticClass: 'filter-down',
          on: {click: t.downToogle}
        }, [t._v(t._s(t.selectedType))]), t._v(' '), t._m(0)]), t._v(' '), s('div', {staticClass: 'body'}, [s('div', {
          staticClass: 'mask',
          on: {click: t.downToogle}
        }, [s('div', {staticClass: 'down-box'}, t._l(t.types, function (e, i) {
          return s('div', {
            staticClass: 'class-item', on: {
              click: function (e) {
                return e.stopPropagation(), t.selectClass(i)
              }
            }
          }, [s('div', {staticStyle: {'margin-left': '10px'}}, [t._v(t._s(e.typeName))]), t._v(' '), s('div', {staticStyle: {flex: '1'}}), t._v(' '), s('div', {staticStyle: {'margin-right': '10px'}}, [t._v('√')])])
        }), 0)]), t._v(' '), t._l(t.postils, function (e, i) {
          return '全部批注' == t.selectedType || t.types[e.type - 1].typeName == t.selectedType ? s('div', {staticClass: 'bookList'}, [s('img', {
            staticClass: 'left',
            attrs: {src: t.types[e.type - 1].icon}
          }), t._v(' '), s('div', {staticClass: 'mid'}, [s('div', {
            staticStyle: {
              'font-size': '0.8em',
              color: '#222'
            }
          }, [t._v(t._s(e.content))]), t._v(' '), s('div', {
            staticStyle: {
              'font-size': '0.7em',
              'margin-top': '10px',
              color: '#a4a4a4'
            }
          }, [s('span', [t._v(t._s(t.types[e.type - 1].typeName))]), t._v(' '), s('span', {staticStyle: {'margin-left': '20px'}}, [t._v(t._s(e.time))])])])]) : t._e()
        })], 2)], 1)
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t
        return e('div', {
          staticStyle: {
            flex: '1',
            'margin-right': '15px',
            display: 'flex',
            background: 'white',
            'border-radius': '5px',
            padding: '5px 10px'
          }
        }, [e('input', {
          staticStyle: {flex: '1', border: 'none'},
          attrs: {placeholder: '请输入需要搜索的批注关键字'}
        }), this._v(' '), e('img', {attrs: {src: './static/activity_find.png'}})])
      }]
    }
    var J = function (t) {
      s('BNdt')
    }, Q = s('VU/8')(q.a, H, !1, J, 'data-v-0d0de25e', null).exports
    i.default.use(n.a)
    var Z = new n.a({
      mode: 'hash',
      routes: [{path: '/', redirect: '/login'}, {path: '/login', name: 'Login', component: r}, {
        path: '/index',
        redirect: '/index/home',
        name: 'Index',
        component: d,
        children: [{path: 'home', name: 'Home', component: m, meta: {keepAlive: !0}}, {
          path: 'activity',
          name: 'Activity',
          component: u,
          meta: {keepAlive: !0}
        }, {path: 'read', name: 'Read', component: h, meta: {keepAlive: !0}}, {
          path: 'homework',
          name: 'HomeWork',
          component: b,
          meta: {keepAlive: !0}
        }, {path: 'me', name: 'Me', component: y, meta: {keepAlive: !0}}],
        meta: {keepAlive: !0}
      }, {path: '/userInfo', name: 'UserInfo', component: S}, {
        path: '/allbook',
        name: 'AllBook',
        component: P
      }, {path: '/readplan', name: 'ReadPlan', component: A}, {
        path: '/bookdetail',
        name: 'BookDetail',
        component: M
      }, {path: '/allactivity', name: 'AllActivity', component: j}, {
        path: '/register',
        name: 'Register',
        component: W
      }, {path: '/bookpostil', name: 'BookPostil', component: Q}]
    }), G = s('Au9i'), K = s.n(G), Y = (s('d8/S'), s('ydGU'))
    Object(Y.a)(Object({NODE_ENV: 'production'}).BASE_URL + 'service-worker.js', {
      ready: function () {
        console.log('App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB')
      }, registered: function () {
        console.log('Service worker has been registered.')
      }, cached: function () {
        console.log('Content has been cached for offline use.')
      }, updatefound: function () {
        console.log('New content is downloading.')
      }, updated: function () {
        console.log('New content is available; please refresh.')
      }, offline: function () {
        console.log('No internet connection found. App is running in offline mode.')
      }, error: function (t) {
        console.error('Error during service worker registration:', t)
      }
    })
    s('7t+N')
    var X = {
      login: 'http://127.0.0.1:8880/login',
      getUserInfo: 'http://127.0.0.1:8880/getuserinfo',
      updateUser: 'http://127.0.0.1:8880/updateuser',
      getallbook: 'http://127.0.0.1:8880/getallbook',
      getallactivity: 'http://127.0.0.1:8880/getallactivity',
      getbookpostil: 'http://127.0.0.1:8880/getbookpostil',
      getbook: 'http://127.0.0.1:8880/getbook',
      getrecommendbook: 'http://127.0.0.1:8880/getrecommendbook',
      getrecommendactivity: 'http://127.0.0.1:8880/getrecommendactivity'
    }, tt = {
      render: function () {
        var t = this.$createElement
        return (this._self._c || t)('div')
      }, staticRenderFns: []
    }
    var et = s('VU/8')(X, tt, !1, function (t) {
      s('wjQI')
    }, 'data-v-c55251da', null).exports
    i.default.use(K.a), i.default.prototype.GLOBAL = et, i.default.config.productionTip = !1, new i.default({
      el: '#app',
      router: Z,
      components: {App: o},
      template: '<App/>'
    })
  }, 'OTr+': function (t, e, s) {
    'use strict';
    (function (t) {
      var i = s('yF88'), a = s('/LqZ')
      Date.prototype.format = function (t) {
        var e = {
          'M+': this.getMonth() + 1,
          'd+': this.getDate(),
          'h+': this.getHours(),
          'm+': this.getMinutes(),
          's+': this.getSeconds(),
          'q+': Math.floor((this.getMonth() + 3) / 3),
          S: this.getMilliseconds()
        }
        for (var s in/(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))), e) {
          var i = e[s]
          new RegExp('(' + s + ')').test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i : ('00' + i).substr(('' + i).length)))
        }
        return t
      }, e.a = {
        name: 'UserInfo', components: {MyTitle: i.a, SexRadio: a.a}, data: function () {
          return {number: '0001', name: 'xiaoZhou', userPwd: '', userPwdRep: '', birthdate: '2004-06-20', sex: 0}
        }, methods: {
          changeSex: function (t) {
            this.sex = t
          }, titleRightImgClick: function () {
            if (this.userPwd == this.userPwdRep) {
              var e = this
              t.ajax({
                url: e.GLOBAL.updateUser,
                data: {number: e.number, password: e.userPwd, birthdate: e.birthdate, sex: e.sex},
                success: function () {
                  e.$toast('修改成功！')
                }
              })
            } else {
              e.$toast('两次密码不一致！')
            }
          }
        }
      }
    }).call(e, s('7t+N'))
  }, QyRy: function (t, e) {
  }, 'TUa/': function (t, e) {
  }, VQmb: function (t, e) {
  }, Vqv3: function (t, e) {
  }, WmRf: function (t, e) {
  }, X4Pg: function (t, e) {
  }, Yzw4: function (t, e) {
  }, 'd8/S': function (t, e) {
  }, hc5V: function (t, e, s) {
    'use strict';
    (function (t) {
      var i = s('yF88')
      e.a = {
        name: 'AllBook', components: {MyTitle: i.a}, data: function () {
          return {
            selectedClass: '全部类型',
            books: [{
              icon: './static/good_book1.png',
              name: '窗边的小豆豆',
              writer: '黑柳彻子',
              readPeopleNum: '999+'
            }, {
              icon: './static/good_book2.png',
              name: '爱的教育',
              writer: '爱迪蒙托.德.亚米美斯',
              readPeopleNum: '999+'
            }, {
              icon: './static/good_book3.png',
              name: '夏洛的网',
              writer: 'E.B.怀特',
              readPeopleNum: '823'
            }, {
              icon: './static/good_book4.png',
              name: '雾都孤儿',
              writer: '查尔斯.狄更斯',
              readPeopleNum: '417'
            }, {icon: './static/good_book5.png', name: '解忧杂货店', writer: '东圭野吾', readPeopleNum: '392'}],
            classes: [{className: '全部类型'}, {className: '图画文学类'}, {className: '童话类'}, {className: '小说类'}, {className: '科学文艺类'}, {className: '故事类'}, {className: '寓言类'}, {className: '儿童曲艺类'}]
          }
        }, methods: {
          downToogle: function () {
            t('.down-box').slideToggle(300), t('.mask').fadeToggle(300)
          }, selectClass: function (t) {
            this.selectedClass = this.classes[t].className, this.downToogle()
          }, toBookDetail: function (t) {
            sessionStorage.bookId = this.books[t].id, this.$router.push('/bookdetail')
          }
        }
      }
    }).call(e, s('7t+N'))
  }, iCfh: function (t, e) {
  }, mvQ1: function (t, e) {
  }, uTqo: function (t, e) {
  }, wjQI: function (t, e) {
  }, yF88: function (t, e, s) {
    'use strict'
    var i = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e
        return s('div', {staticClass: 'title'}, [s('img', {
          staticClass: 'left',
          attrs: {src: './static/left_unpressed.png'},
          on: {click: t.back}
        }), t._v(' '), s('div', [t._v(t._s(t.title))]), t._v(' '), s('img', {
          staticClass: 'right',
          attrs: {src: t.rightImg},
          on: {click: t.titleRightImgClick}
        })])
      }, staticRenderFns: []
    }
    var a = s('VU/8')({
      props: ['title', 'rightImg'], methods: {
        back: function () {
          this.$router.back(-1)
        }, titleRightImgClick: function () {
          this.$parent.titleRightImgClick()
        }
      }
    }, i, !1, function (t) {
      s('A9/y')
    }, 'data-v-4f4d7670', null)
    e.a = a.exports
  }
}, ['NHnr'])
//# sourceMappingURL=app.a75ee5598891247476c9.js.map
