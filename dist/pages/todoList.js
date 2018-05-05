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

var TodoList = function (_wepy$page) {
  _inherits(TodoList, _wepy$page);

  function TodoList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TodoList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: 'My todoList'
    }, _this.components = {}, _this.data = {
      itemActive: 0,
      todoList: [],
      completedNum: 0
    }, _this.computed = {}, _this.watch = {
      todoList: function todoList(newValue, oldValue) {
        var num = 0;
        for (var i = 0; i < newValue.length; i++) {
          var element = newValue[i];
          if (element.isComplete) {
            num += 1;
          }
        }
        this.completedNum = num;
      }
    }, _this.methods = {
      addTodo: function addTodo(e) {
        var todoText = e.type === 'submit' ? e.detail.value.addTodo : e.detail.value;
        console.log(todoText);
        if (todoText == '') {
          _wepy2.default.showToast({
            title: '不能为空',
            icon: 'success_no_circle', //图标
            duration: 800, //延迟时间
            mask: true
          });
        }
        var todoItem = {
          id: this.todoList.length,
          isComplete: false,
          todo: todoText
        };
        console.log(this.todoList);
        this.todoList.push(todoItem);
        this.addLocalTodo(todoItem);
      },
      changeTodo: function changeTodo(todoId, type, e) {
        console.log(type);
        for (var i = 0; i < this.todoList.length; i++) {
          var todoItem = this.todoList[i];
          if (todoItem.id === todoId) {
            if (type === 'select') {
              todoItem.isComplete = !todoItem.isComplete;
            }
            if (type === 'ipt') {
              todoItem.todo = e.detail.value;
            }
            this.addLocalTodo(todoItem);
            return;
          }
        }
      },
      delTodo: function delTodo(todoId) {
        this.removeLocalTodo(todoId);
      },
      todoTab: function todoTab(idx) {
        console.log(idx);
        this.itemActive = parseInt(idx);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TodoList, [{
    key: 'onLoad',
    value: function onLoad() {
      this.todoList = _wepy2.default.getStorageSync('localTodoList') || [];
      this.$apply();
    }
  }, {
    key: 'removeLocalTodo',
    value: function removeLocalTodo(todoId) {
      var localTodoList = _wepy2.default.getStorageSync('localTodoList') || [];
      for (var i = 0; i < localTodoList.length; i++) {
        if (localTodoList[i].id === todoId) {
          localTodoList.splice(i, 1);
          this.todoList = localTodoList;
          this.$apply();
          _wepy2.default.setStorageSync('localTodoList', localTodoList);
          return;
        }
      }
    }
  }, {
    key: 'addLocalTodo',
    value: function addLocalTodo(todoItem) {
      var localTodoList = _wepy2.default.getStorageSync('localTodoList') || [];
      for (var i = 0; i < localTodoList.length; i++) {
        if (localTodoList[i].id === todoItem.id) {
          localTodoList[i].isComplete = todoItem.isComplete;
          localTodoList[i].todo = todoItem.todo;
          console.log(localTodoList);
          _wepy2.default.setStorageSync('localTodoList', localTodoList);
          return;
        }
      }
      localTodoList.push(todoItem);
      _wepy2.default.setStorageSync('localTodoList', localTodoList);
    }
  }]);

  return TodoList;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(TodoList , 'pages/todoList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9MaXN0LmpzIl0sIm5hbWVzIjpbIlRvZG9MaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaXRlbUFjdGl2ZSIsInRvZG9MaXN0IiwiY29tcGxldGVkTnVtIiwiY29tcHV0ZWQiLCJ3YXRjaCIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJudW0iLCJpIiwibGVuZ3RoIiwiZWxlbWVudCIsImlzQ29tcGxldGUiLCJtZXRob2RzIiwiYWRkVG9kbyIsImUiLCJ0b2RvVGV4dCIsInR5cGUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJtYXNrIiwidG9kb0l0ZW0iLCJpZCIsInRvZG8iLCJwdXNoIiwiYWRkTG9jYWxUb2RvIiwiY2hhbmdlVG9kbyIsInRvZG9JZCIsImRlbFRvZG8iLCJyZW1vdmVMb2NhbFRvZG8iLCJ0b2RvVGFiIiwiaWR4IiwicGFyc2VJbnQiLCJnZXRTdG9yYWdlU3luYyIsIiRhcHBseSIsImxvY2FsVG9kb0xpc3QiLCJzcGxpY2UiLCJzZXRTdG9yYWdlU3luYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPO0FBQ0xDLGtCQUFZLENBRFA7QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxvQkFBYztBQUhULEssUUFLUEMsUSxHQUFXLEUsUUFHWEMsSyxHQUFRO0FBQ05ILGNBRE0sb0JBQ0lJLFFBREosRUFDY0MsUUFEZCxFQUN3QjtBQUM1QixZQUFJQyxNQUFNLENBQVY7QUFDQSxhQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUgsU0FBU0ksTUFBN0IsRUFBcUNELEdBQXJDLEVBQTBDO0FBQ3hD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ckIsVUFBSWMsZ0JBQWdCcEIsZUFBS2tCLGNBQUwsQ0FBb0IsZUFBcEIsS0FBd0MsRUFBNUQ7QUFDQSxXQUFJLElBQUkvQixJQUFJLENBQVosRUFBZUEsSUFBSWlDLGNBQWNoQyxNQUFqQyxFQUF5Q0QsR0FBekMsRUFBNkM7QUFDM0MsWUFBR2lDLGNBQWNqQyxDQUFkLEVBQWlCb0IsRUFBakIsS0FBd0JELFNBQVNDLEVBQXBDLEVBQXVDO0FBQ3JDYSx3QkFBY2pDLENBQWQsRUFBaUJHLFVBQWpCLEdBQThCZ0IsU0FBU2hCLFVBQXZDO0FBQ0E4Qix3QkFBY2pDLENBQWQsRUFBaUJxQixJQUFqQixHQUF3QkYsU0FBU0UsSUFBakM7QUFDQVYsa0JBQVFDLEdBQVIsQ0FBWXFCLGFBQVo7QUFDQXBCLHlCQUFLc0IsY0FBTCxDQUFvQixlQUFwQixFQUFvQ0YsYUFBcEM7QUFDQTtBQUNEO0FBQ0Y7QUFDREEsb0JBQWNYLElBQWQsQ0FBbUJILFFBQW5CO0FBQ0FOLHFCQUFLc0IsY0FBTCxDQUFvQixlQUFwQixFQUFvQ0YsYUFBcEM7QUFDRDs7OztFQXBHbUNwQixlQUFLdUIsSTs7a0JBQXRCakQsUSIsImZpbGUiOiJ0b2RvTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ015IHRvZG9MaXN0J1xyXG4gIH1cclxuICBjb21wb25lbnRzID0ge31cclxuICBkYXRhID0ge1xyXG4gICAgaXRlbUFjdGl2ZTogMCxcclxuICAgIHRvZG9MaXN0OiBbXSxcclxuICAgIGNvbXBsZXRlZE51bTogMFxyXG4gIH1cclxuICBjb21wdXRlZCA9IHtcclxuXHJcbiAgfVxyXG4gIHdhdGNoID0ge1xyXG4gICAgdG9kb0xpc3QgKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG4gICAgICBsZXQgbnVtID0gMDtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdWYWx1ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBuZXdWYWx1ZVtpXTtcclxuICAgICAgICBpZihlbGVtZW50LmlzQ29tcGxldGUpe1xyXG4gICAgICAgICAgbnVtICs9IDFcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jb21wbGV0ZWROdW0gPSBudW1cclxuICAgIH1cclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGFkZFRvZG86IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdmFyIHRvZG9UZXh0ID0gZS50eXBlID09PSAnc3VibWl0JyA/IGUuZGV0YWlsLnZhbHVlLmFkZFRvZG8gOiBlLmRldGFpbC52YWx1ZVxyXG4gICAgICBjb25zb2xlLmxvZyh0b2RvVGV4dClcclxuICAgICAgaWYodG9kb1RleHQgPT0gJycpe1xyXG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn5LiN6IO95Li656m6JyxcclxuICAgICAgICAgIGljb246J3N1Y2Nlc3Nfbm9fY2lyY2xlJywvL+Wbvuagh1xyXG4gICAgICAgICAgZHVyYXRpb246ODAwLC8v5bu26L+f5pe26Ze0XHJcbiAgICAgICAgICBtYXNrOnRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIHZhciB0b2RvSXRlbSA9IHtcclxuICAgICAgICBpZDogdGhpcy50b2RvTGlzdC5sZW5ndGgsXHJcbiAgICAgICAgaXNDb21wbGV0ZTogZmFsc2UsXHJcbiAgICAgICAgdG9kbzogdG9kb1RleHRcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnRvZG9MaXN0KVxyXG4gICAgICB0aGlzLnRvZG9MaXN0LnB1c2godG9kb0l0ZW0pXHJcbiAgICAgIHRoaXMuYWRkTG9jYWxUb2RvKHRvZG9JdGVtKVxyXG4gICAgfSxcclxuICAgIGNoYW5nZVRvZG8gKHRvZG9JZCwgdHlwZSxlKXtcclxuICAgICAgY29uc29sZS5sb2codHlwZSlcclxuICAgICAgZm9yKHZhciBpID0gMDsgaTwgdGhpcy50b2RvTGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICB2YXIgdG9kb0l0ZW0gPSB0aGlzLnRvZG9MaXN0W2ldXHJcbiAgICAgICAgaWYodG9kb0l0ZW0uaWQgPT09IHRvZG9JZCl7XHJcbiAgICAgICAgICBpZih0eXBlID09PSAnc2VsZWN0Jyl7XHJcbiAgICAgICAgICAgIHRvZG9JdGVtLmlzQ29tcGxldGUgPSAhdG9kb0l0ZW0uaXNDb21wbGV0ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYodHlwZSA9PT0gJ2lwdCcpe1xyXG4gICAgICAgICAgICB0b2RvSXRlbS50b2RvID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuYWRkTG9jYWxUb2RvKHRvZG9JdGVtKVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGVsVG9kbyh0b2RvSWQpIHtcclxuICAgICAgdGhpcy5yZW1vdmVMb2NhbFRvZG8odG9kb0lkKVxyXG4gICAgfSxcclxuICAgIHRvZG9UYWIoaWR4KXtcclxuICAgICAgY29uc29sZS5sb2coaWR4KVxyXG4gICAgICB0aGlzLml0ZW1BY3RpdmUgPSBwYXJzZUludChpZHgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLnRvZG9MaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnbG9jYWxUb2RvTGlzdCcpIHx8IFtdXHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG4gIHJlbW92ZUxvY2FsVG9kbyAodG9kb0lkKXtcclxuICAgIHZhciBsb2NhbFRvZG9MaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnbG9jYWxUb2RvTGlzdCcpIHx8IFtdXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsb2NhbFRvZG9MaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBpZihsb2NhbFRvZG9MaXN0W2ldLmlkID09PSB0b2RvSWQpe1xyXG4gICAgICAgICAgbG9jYWxUb2RvTGlzdC5zcGxpY2UoaSwgMSlcclxuICAgICAgICAgIHRoaXMudG9kb0xpc3QgPSBsb2NhbFRvZG9MaXN0XHJcbiAgICAgICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdsb2NhbFRvZG9MaXN0Jyxsb2NhbFRvZG9MaXN0KVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGFkZExvY2FsVG9kbyh0b2RvSXRlbSkge1xyXG4gICAgdmFyIGxvY2FsVG9kb0xpc3QgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdsb2NhbFRvZG9MaXN0JykgfHwgW11cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsb2NhbFRvZG9MaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgaWYobG9jYWxUb2RvTGlzdFtpXS5pZCA9PT0gdG9kb0l0ZW0uaWQpe1xyXG4gICAgICAgIGxvY2FsVG9kb0xpc3RbaV0uaXNDb21wbGV0ZSA9IHRvZG9JdGVtLmlzQ29tcGxldGVcclxuICAgICAgICBsb2NhbFRvZG9MaXN0W2ldLnRvZG8gPSB0b2RvSXRlbS50b2RvXHJcbiAgICAgICAgY29uc29sZS5sb2cobG9jYWxUb2RvTGlzdClcclxuICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdsb2NhbFRvZG9MaXN0Jyxsb2NhbFRvZG9MaXN0KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsb2NhbFRvZG9MaXN0LnB1c2godG9kb0l0ZW0pXHJcbiAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdsb2NhbFRvZG9MaXN0Jyxsb2NhbFRvZG9MaXN0KVxyXG4gIH1cclxufVxyXG4iXX0=