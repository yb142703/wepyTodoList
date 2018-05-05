'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Title = function (_wepy$component) {
  _inherits(Title, _wepy$component);

  function Title() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Title);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Title.__proto__ || Object.getPrototypeOf(Title)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.props = {
      title: String,
      syncTitle: {
        type: String,
        default: null
      },
      twoTitle: {
        type: String,
        default: null,
        twoWay: true
      }
    }, _this.methods = {
      btn: function btn() {
        console.log(this.title);
        console.log(this.syncTitle);
        console.log(this.twoTitle);

        this.title = 'Zi-Title';
        console.log(this.$parent.title);
        this.synTitle = '子组件修改了标题';
        console.log(this.$parent.title);
        console.log(this.synTitle);
        this.twoTitle = '双向修改了标题';
        this.$apply();
        console.log(this.twoTitle);
        console.log(this.$parent.title);

        this.$parent.title = '通过子组件事件改编标题';
        this.$parent.$apply();
        console.log(this.title);
        console.log(this.twoTitle);
        console.log(this.synTitle);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Title, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Title;
}(_wepy2.default.component);

exports.default = Title;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpdGxlLmpzIl0sIm5hbWVzIjpbIlRpdGxlIiwiY29uZmlnIiwicHJvcHMiLCJ0aXRsZSIsIlN0cmluZyIsInN5bmNUaXRsZSIsInR5cGUiLCJkZWZhdWx0IiwidHdvVGl0bGUiLCJ0d29XYXkiLCJtZXRob2RzIiwiYnRuIiwiY29uc29sZSIsImxvZyIsIiRwYXJlbnQiLCJzeW5UaXRsZSIsIiRhcHBseSIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVMsRSxRQUNUQyxLLEdBQVE7QUFDTkMsYUFBT0MsTUFERDtBQUVOQyxpQkFBVztBQUNUQyxjQUFNRixNQURHO0FBRVRHLGlCQUFTO0FBRkEsT0FGTDtBQU1OQyxnQkFBVTtBQUNSRixjQUFNRixNQURFO0FBRVJHLGlCQUFTLElBRkQ7QUFHUkUsZ0JBQVE7QUFIQTtBQU5KLEssUUFZUkMsTyxHQUFVO0FBQ1JDLFNBRFEsaUJBQ0Y7QUFDSkMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLVixLQUFqQjtBQUNBUyxnQkFBUUMsR0FBUixDQUFZLEtBQUtSLFNBQWpCO0FBQ0FPLGdCQUFRQyxHQUFSLENBQVksS0FBS0wsUUFBakI7O0FBRUEsYUFBS0wsS0FBTCxHQUFhLFVBQWI7QUFDQVMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLQyxPQUFMLENBQWFYLEtBQXpCO0FBQ0EsYUFBS1ksUUFBTCxHQUFnQixVQUFoQjtBQUNBSCxnQkFBUUMsR0FBUixDQUFZLEtBQUtDLE9BQUwsQ0FBYVgsS0FBekI7QUFDQ1MsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLRSxRQUFqQjtBQUNELGFBQUtQLFFBQUwsR0FBZ0IsU0FBaEI7QUFDQSxhQUFLUSxNQUFMO0FBQ0FKLGdCQUFRQyxHQUFSLENBQVksS0FBS0wsUUFBakI7QUFDQUksZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLQyxPQUFMLENBQWFYLEtBQXpCOztBQUVBLGFBQUtXLE9BQUwsQ0FBYVgsS0FBYixHQUFxQixhQUFyQjtBQUNBLGFBQUtXLE9BQUwsQ0FBYUUsTUFBYjtBQUNBSixnQkFBUUMsR0FBUixDQUFZLEtBQUtWLEtBQWpCO0FBQ0FTLGdCQUFRQyxHQUFSLENBQVksS0FBS0wsUUFBakI7QUFDQUksZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLRSxRQUFqQjtBQUNEO0FBckJPLEs7Ozs7OzZCQXVCRCxDQUFFOzs7O0VBckNzQkUsZUFBS0MsUzs7a0JBQW5CbEIsSyIsImZpbGUiOiJ0aXRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXRsZSBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBjb25maWcgPSB7fVxyXG4gIHByb3BzID0ge1xyXG4gICAgdGl0bGU6IFN0cmluZyxcclxuICAgIHN5bmNUaXRsZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgIH0sXHJcbiAgICB0d29UaXRsZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR3b1dheTogdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgYnRuKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRpdGxlKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN5bmNUaXRsZSlcclxuICAgICAgY29uc29sZS5sb2codGhpcy50d29UaXRsZSlcclxuXHJcbiAgICAgIHRoaXMudGl0bGUgPSAnWmktVGl0bGUnXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuJHBhcmVudC50aXRsZSlcclxuICAgICAgdGhpcy5zeW5UaXRsZSA9ICflrZDnu4Tku7bkv67mlLnkuobmoIfpopgnXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuJHBhcmVudC50aXRsZSlcclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3luVGl0bGUpXHJcbiAgICAgIHRoaXMudHdvVGl0bGUgPSAn5Y+M5ZCR5L+u5pS55LqG5qCH6aKYJ1xyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMudHdvVGl0bGUpXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuJHBhcmVudC50aXRsZSlcclxuXHJcbiAgICAgIHRoaXMuJHBhcmVudC50aXRsZSA9ICfpgJrov4flrZDnu4Tku7bkuovku7bmlLnnvJbmoIfpopgnXHJcbiAgICAgIHRoaXMuJHBhcmVudC4kYXBwbHkoKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRpdGxlKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnR3b1RpdGxlKVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN5blRpdGxlKVxyXG4gICAgfVxyXG4gIH1cclxuICBvbkxvYWQoKSB7fVxyXG59XHJcbiJdfQ==