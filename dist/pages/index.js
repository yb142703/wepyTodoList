'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _goods = require('./../components/goods.js');

var _goods2 = _interopRequireDefault(_goods);

var _title = require('./../components/title.js');

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'test'
    }, _this.$repeat = { "cartList": { "com": "goodsItem", "props": "goods.sync" } }, _this.$props = { "goodsItem": { "xmlns:v-bind": { "value": "", "for": "cartList", "item": "item", "index": "index", "key": "index" }, "v-bind:goods.sync": { "value": "item", "type": "item", "for": "cartList", "item": "item", "index": "index", "key": "index" } }, "title": { "v-bind:title.once": "title", "v-bind:syncTitle.sync": "title", "v-bind:twoTitle.sync": "title" } }, _this.$events = {}, _this.components = {
      goodsItem: _goods2.default,
      title: _title2.default,
      title1: _title2.default
    }, _this.data = {
      title: '父传子标题',
      priceTotal: 0,
      cartList: [{
        id: 2,
        name: '桂圆干2',
        num: 0,
        price: 30,
        oldPrice: 18
      }, {
        id: 3,
        name: '桂圆干3',
        num: 10,
        price: 8.88,
        oldPrice: 18
      }]
    }, _this.methods = {
      tagTitel: function tagTitel() {
        this.title = '修改了标题啊啊';
      },
      jia: function jia(id) {
        // var id = event.currentTarget.dataset.id
        var goodsList = this.cartList;
        for (var i = 0; i < goodsList.length; i++) {
          if (goodsList[i].id === id) {
            goodsList[i].num++;
            this.cartList = goodsList;
            return;
          }
        }
      },
      tapV: function tapV() {
        var total = 0;
        var goodsList = this.cartList;
        for (var i = 0; i < goodsList.length; i++) {
          total += goodsList[i].num * goodsList[i].price;
        }
        this.priceTotal = total;
      },
      del: function del(id) {
        // var id = event.currentTarget.dataset.id
        var goodsList = this.cartList;
        for (var i = 0; i < goodsList.length; i++) {
          if (goodsList[i].id === id) {
            if (goodsList[i].num > 0) {
              goodsList[i].num--;
              this.cartList = goodsList;
              return;
            } else {
              _wepy2.default.showModal({
                content: '是否删除该商品',
                success: function success(res) {
                  if (res.confirm) {
                    console.log('用户点击确定');
                  } else if (res.cancel) {
                    console.log('用户点击取消');
                  }
                }
              });
            }
          }
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImdvb2RzSXRlbSIsImdvb2RzIiwidGl0bGUiLCJ0aXRsZTEiLCJkYXRhIiwicHJpY2VUb3RhbCIsImNhcnRMaXN0IiwiaWQiLCJuYW1lIiwibnVtIiwicHJpY2UiLCJvbGRQcmljZSIsIm1ldGhvZHMiLCJ0YWdUaXRlbCIsImppYSIsImdvb2RzTGlzdCIsImkiLCJsZW5ndGgiLCJ0YXBWIiwidG90YWwiLCJkZWwiLCJ3ZXB5Iiwic2hvd01vZGFsIiwiY29udGVudCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25maXJtIiwiY29uc29sZSIsImxvZyIsImNhbmNlbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFQUFDLFlBQVcsRUFBQyxPQUFNLFdBQVAsRUFBbUIsU0FBUSxZQUEzQixFQUFaLEUsUUFDWEMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxVQUFsQixFQUE2QixRQUFPLE1BQXBDLEVBQTJDLFNBQVEsT0FBbkQsRUFBMkQsT0FBTSxPQUFqRSxFQUFoQixFQUEwRixxQkFBb0IsRUFBQyxTQUFRLE1BQVQsRUFBZ0IsUUFBTyxNQUF2QixFQUE4QixPQUFNLFVBQXBDLEVBQStDLFFBQU8sTUFBdEQsRUFBNkQsU0FBUSxPQUFyRSxFQUE2RSxPQUFNLE9BQW5GLEVBQTlHLEVBQWIsRUFBd04sU0FBUSxFQUFDLHFCQUFvQixPQUFyQixFQUE2Qix5QkFBd0IsT0FBckQsRUFBNkQsd0JBQXVCLE9BQXBGLEVBQWhPLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLGlCQUFXQyxlQUREO0FBRVZDLDRCQUZVO0FBR1ZDLGNBQU9EO0FBSEcsSyxRQUtaRSxJLEdBQU87QUFDTEYsYUFBTyxPQURGO0FBRUxHLGtCQUFZLENBRlA7QUFHTEMsZ0JBQVUsQ0FDUjtBQUNFQyxZQUFJLENBRE47QUFFRUMsY0FBTSxNQUZSO0FBR0VDLGFBQUssQ0FIUDtBQUlFQyxlQUFPLEVBSlQ7QUFLRUMsa0JBQVU7QUFMWixPQURRLEVBUVI7QUFDRUosWUFBSSxDQUROO0FBRUVDLGNBQU0sTUFGUjtBQUdFQyxhQUFLLEVBSFA7QUFJRUMsZUFBTyxJQUpUO0FBS0VDLGtCQUFVO0FBTFosT0FSUTtBQUhMLEssUUFxQlBDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNHO0FBQ1QsYUFBS1gsS0FBTCxHQUFhLFNBQWI7QUFDRCxPQUhPO0FBSVJZLFNBSlEsZUFJSlAsRUFKSSxFQUlBO0FBQ047QUFDQSxZQUFJUSxZQUFZLEtBQUtULFFBQXJCO0FBQ0EsYUFBSyxJQUFJVSxJQUFJLENBQWIsRUFBZ0JBLElBQUlELFVBQVVFLE1BQTlCLEVBQXNDRCxHQUF0QyxFQUEyQztBQUN6QyxjQUFJRCxVQUFVQyxDQUFWLEVBQWFULEVBQWIsS0FBb0JBLEVBQXhCLEVBQTRCO0FBQzFCUSxzQkFBVUMsQ0FBVixFQUFhUCxHQUFiO0FBQ0EsaUJBQUtILFFBQUwsR0FBZ0JTLFNBQWhCO0FBQ0E7QUFDRDtBQUNGO0FBQ0YsT0FkTztBQWVSRyxVQWZRLGtCQWVEO0FBQ0wsWUFBSUMsUUFBUSxDQUFaO0FBQ0EsWUFBSUosWUFBWSxLQUFLVCxRQUFyQjtBQUNBLGFBQUssSUFBSVUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxVQUFVRSxNQUE5QixFQUFzQ0QsR0FBdEMsRUFBMkM7QUFDekNHLG1CQUFTSixVQUFVQyxDQUFWLEVBQWFQLEdBQWIsR0FBbUJNLFVBQVVDLENBQVYsRUFBYU4sS0FBekM7QUFDRDtBQUNELGFBQUtMLFVBQUwsR0FBa0JjLEtBQWxCO0FBQ0QsT0F0Qk87QUF1QlJDLFNBdkJRLGVBdUJKYixFQXZCSSxFQXVCQTtBQUNOO0FBQ0EsWUFBSVEsWUFBWSxLQUFLVCxRQUFyQjtBQUNBLGFBQUssSUFBSVUsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRCxVQUFVRSxNQUE5QixFQUFzQ0QsR0FBdEMsRUFBMkM7QUFDekMsY0FBSUQsVUFBVUMsQ0FBVixFQUFhVCxFQUFiLEtBQW9CQSxFQUF4QixFQUE0QjtBQUMxQixnQkFBSVEsVUFBVUMsQ0FBVixFQUFhUCxHQUFiLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3hCTSx3QkFBVUMsQ0FBVixFQUFhUCxHQUFiO0FBQ0EsbUJBQUtILFFBQUwsR0FBZ0JTLFNBQWhCO0FBQ0E7QUFDRCxhQUpELE1BSU87QUFDTE0sNkJBQUtDLFNBQUwsQ0FBZTtBQUNiQyx5QkFBUyxTQURJO0FBRWJDLHlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsc0JBQUlBLElBQUlDLE9BQVIsRUFBaUI7QUFDZkMsNEJBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsbUJBRkQsTUFFTyxJQUFJSCxJQUFJSSxNQUFSLEVBQWdCO0FBQ3JCRiw0QkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDtBQUNGO0FBUlksZUFBZjtBQVVEO0FBQ0Y7QUFDRjtBQUNGO0FBOUNPLEs7Ozs7OzZCQWdERDtBQUNQRCxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEOzs7O0VBbkZnQ1AsZUFBS1MsSTs7a0JBQW5CckMsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBnb29kcyBmcm9tICcuLi9jb21wb25lbnRzL2dvb2RzJ1xuaW1wb3J0IHRpdGxlIGZyb20gJy4uL2NvbXBvbmVudHMvdGl0bGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICd0ZXN0J1xuICB9XG4gJHJlcGVhdCA9IHtcImNhcnRMaXN0XCI6e1wiY29tXCI6XCJnb29kc0l0ZW1cIixcInByb3BzXCI6XCJnb29kcy5zeW5jXCJ9fTtcclxuJHByb3BzID0ge1wiZ29vZHNJdGVtXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJjYXJ0TGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9LFwidi1iaW5kOmdvb2RzLnN5bmNcIjp7XCJ2YWx1ZVwiOlwiaXRlbVwiLFwidHlwZVwiOlwiaXRlbVwiLFwiZm9yXCI6XCJjYXJ0TGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImluZGV4XCJ9fSxcInRpdGxlXCI6e1widi1iaW5kOnRpdGxlLm9uY2VcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6c3luY1RpdGxlLnN5bmNcIjpcInRpdGxlXCIsXCJ2LWJpbmQ6dHdvVGl0bGUuc3luY1wiOlwidGl0bGVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIGdvb2RzSXRlbTogZ29vZHMsXG4gICAgdGl0bGUsXG4gICAgdGl0bGUxOnRpdGxlXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB0aXRsZTogJ+eItuS8oOWtkOagh+mimCcsXG4gICAgcHJpY2VUb3RhbDogMCxcbiAgICBjYXJ0TGlzdDogW1xuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgbmFtZTogJ+ahguWchuW5sjInLFxuICAgICAgICBudW06IDAsXG4gICAgICAgIHByaWNlOiAzMCxcbiAgICAgICAgb2xkUHJpY2U6IDE4XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgbmFtZTogJ+ahguWchuW5sjMnLFxuICAgICAgICBudW06IDEwLFxuICAgICAgICBwcmljZTogOC44OCxcbiAgICAgICAgb2xkUHJpY2U6IDE4XG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICB0YWdUaXRlbCgpIHtcbiAgICAgIHRoaXMudGl0bGUgPSAn5L+u5pS55LqG5qCH6aKY5ZWK5ZWKJ1xuICAgIH0sXG4gICAgamlhKGlkKSB7XG4gICAgICAvLyB2YXIgaWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWRcbiAgICAgIHZhciBnb29kc0xpc3QgPSB0aGlzLmNhcnRMaXN0XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdvb2RzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZ29vZHNMaXN0W2ldLmlkID09PSBpZCkge1xuICAgICAgICAgIGdvb2RzTGlzdFtpXS5udW0rK1xuICAgICAgICAgIHRoaXMuY2FydExpc3QgPSBnb29kc0xpc3RcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdGFwVigpIHtcbiAgICAgIHZhciB0b3RhbCA9IDBcbiAgICAgIHZhciBnb29kc0xpc3QgPSB0aGlzLmNhcnRMaXN0XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdvb2RzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0b3RhbCArPSBnb29kc0xpc3RbaV0ubnVtICogZ29vZHNMaXN0W2ldLnByaWNlXG4gICAgICB9XG4gICAgICB0aGlzLnByaWNlVG90YWwgPSB0b3RhbFxuICAgIH0sXG4gICAgZGVsKGlkKSB7XG4gICAgICAvLyB2YXIgaWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWRcbiAgICAgIHZhciBnb29kc0xpc3QgPSB0aGlzLmNhcnRMaXN0XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdvb2RzTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZ29vZHNMaXN0W2ldLmlkID09PSBpZCkge1xuICAgICAgICAgIGlmIChnb29kc0xpc3RbaV0ubnVtID4gMCkge1xuICAgICAgICAgICAgZ29vZHNMaXN0W2ldLm51bS0tXG4gICAgICAgICAgICB0aGlzLmNhcnRMaXN0ID0gZ29vZHNMaXN0XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICBjb250ZW50OiAn5piv5ZCm5Yig6Zmk6K+l5ZWG5ZOBJyxcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGNvbnNvbGUubG9nKCdvbkxvYWQnKVxuICB9XG59XG4iXX0=