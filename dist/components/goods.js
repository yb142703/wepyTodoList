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

var Goods = function (_wepy$component) {
  _inherits(Goods, _wepy$component);

  function Goods() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Goods);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Goods.__proto__ || Object.getPrototypeOf(Goods)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      goods: {
        type: Object,
        default: 'null'
      }
    }, _this.methods = {
      jia: function jia() {
        this.goods.num++;
        console.log(this.$parent.cartList);
      },
      del: function del() {
        this.goods.num--;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Goods, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this.goods);
    }
  }]);

  return Goods;
}(_wepy2.default.component);

exports.default = Goods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2RzLmpzIl0sIm5hbWVzIjpbIkdvb2RzIiwicHJvcHMiLCJnb29kcyIsInR5cGUiLCJPYmplY3QiLCJkZWZhdWx0IiwibWV0aG9kcyIsImppYSIsIm51bSIsImNvbnNvbGUiLCJsb2ciLCIkcGFyZW50IiwiY2FydExpc3QiLCJkZWwiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSyxHQUFRO0FBQ05DLGFBQU87QUFDTEMsY0FBTUMsTUFERDtBQUVMQyxpQkFBUztBQUZKO0FBREQsSyxRQVNSQyxPLEdBQVU7QUFDUkMsU0FEUSxpQkFDRjtBQUNKLGFBQUtMLEtBQUwsQ0FBV00sR0FBWDtBQUNBQyxnQkFBUUMsR0FBUixDQUFZLEtBQUtDLE9BQUwsQ0FBYUMsUUFBekI7QUFDRCxPQUpPO0FBS1JDLFNBTFEsaUJBS0Y7QUFDSixhQUFLWCxLQUFMLENBQVdNLEdBQVg7QUFDRDtBQVBPLEs7Ozs7OzZCQUhEO0FBQ1BDLGNBQVFDLEdBQVIsQ0FBWSxLQUFLUixLQUFqQjtBQUNEOzs7O0VBVGdDWSxlQUFLQyxTOztrQkFBbkJmLEsiLCJmaWxlIjoiZ29vZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZHMgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgcHJvcHMgPSB7XHJcbiAgICBnb29kczoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIGRlZmF1bHQ6ICdudWxsJyxcclxuICAgIH1cclxuICB9XHJcbiAgb25Mb2FkKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5nb29kcylcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGppYSgpIHtcclxuICAgICAgdGhpcy5nb29kcy5udW0rK1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLiRwYXJlbnQuY2FydExpc3QpXHJcbiAgICB9LFxyXG4gICAgZGVsKCkge1xyXG4gICAgICB0aGlzLmdvb2RzLm51bS0tXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==