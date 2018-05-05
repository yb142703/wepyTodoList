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
      todoList: []
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG9MaXN0LmpzIl0sIm5hbWVzIjpbIlRvZG9MaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwiaXRlbUFjdGl2ZSIsInRvZG9MaXN0IiwibWV0aG9kcyIsImFkZFRvZG8iLCJlIiwidG9kb1RleHQiLCJ0eXBlIiwiZGV0YWlsIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwid2VweSIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwibWFzayIsInRvZG9JdGVtIiwiaWQiLCJsZW5ndGgiLCJpc0NvbXBsZXRlIiwidG9kbyIsInB1c2giLCJhZGRMb2NhbFRvZG8iLCJjaGFuZ2VUb2RvIiwidG9kb0lkIiwiaSIsImRlbFRvZG8iLCJyZW1vdmVMb2NhbFRvZG8iLCJ0b2RvVGFiIiwiaWR4IiwicGFyc2VJbnQiLCJnZXRTdG9yYWdlU3luYyIsIiRhcHBseSIsImxvY2FsVG9kb0xpc3QiLCJzcGxpY2UiLCJzZXRTdG9yYWdlU3luYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPO0FBQ0xDLGtCQUFZLENBRFA7QUFFTEMsZ0JBQVU7QUFGTCxLLFFBSVBDLE8sR0FBVTtBQUNSQyxlQUFTLGlCQUFTQyxDQUFULEVBQVk7QUFDbkIsWUFBSUMsV0FBV0QsRUFBRUUsSUFBRixLQUFXLFFBQVgsR0FBc0JGLEVBQUVHLE1BQUYsQ0FBU0MsS0FBVCxDQUFlTCxPQUFyQyxHQUErQ0MsRUFBRUcsTUFBRixDQUFTQyxLQUF2RTtBQUNBQyxnQkFBUUMsR0FBUixDQUFZTCxRQUFaO0FBQ0EsWUFBR0EsWUFBWSxFQUFmLEVBQWtCO0FBQ2hCTSx5QkFBS0MsU0FBTCxDQUFlO0FBQ2JDLG1CQUFPLE1BRE07QUFFYkMs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Y1osSUFBZCxDQUFtQkwsUUFBbkI7QUFDQU4scUJBQUt5QixjQUFMLENBQW9CLGVBQXBCLEVBQW9DRixhQUFwQztBQUNEOzs7O0VBbkZtQ3ZCLGVBQUswQixJOztrQkFBdEIxQyxRIiwiZmlsZSI6InRvZG9MaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnTXkgdG9kb0xpc3QnXHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7fVxyXG4gIGRhdGEgPSB7XHJcbiAgICBpdGVtQWN0aXZlOiAwLFxyXG4gICAgdG9kb0xpc3Q6IFtdXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBhZGRUb2RvOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHZhciB0b2RvVGV4dCA9IGUudHlwZSA9PT0gJ3N1Ym1pdCcgPyBlLmRldGFpbC52YWx1ZS5hZGRUb2RvIDogZS5kZXRhaWwudmFsdWVcclxuICAgICAgY29uc29sZS5sb2codG9kb1RleHQpXHJcbiAgICAgIGlmKHRvZG9UZXh0ID09ICcnKXtcclxuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+S4jeiDveS4uuepuicsXHJcbiAgICAgICAgICBpY29uOidzdWNjZXNzX25vX2NpcmNsZScsLy/lm77moIdcclxuICAgICAgICAgIGR1cmF0aW9uOjgwMCwvL+W7tui/n+aXtumXtFxyXG4gICAgICAgICAgbWFzazp0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICB2YXIgdG9kb0l0ZW0gPSB7XHJcbiAgICAgICAgaWQ6IHRoaXMudG9kb0xpc3QubGVuZ3RoLFxyXG4gICAgICAgIGlzQ29tcGxldGU6IGZhbHNlLFxyXG4gICAgICAgIHRvZG86IHRvZG9UZXh0XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2codGhpcy50b2RvTGlzdClcclxuICAgICAgdGhpcy50b2RvTGlzdC5wdXNoKHRvZG9JdGVtKVxyXG4gICAgICB0aGlzLmFkZExvY2FsVG9kbyh0b2RvSXRlbSlcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VUb2RvICh0b2RvSWQsIHR5cGUsZSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKHR5cGUpXHJcbiAgICAgIGZvcih2YXIgaSA9IDA7IGk8IHRoaXMudG9kb0xpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgdmFyIHRvZG9JdGVtID0gdGhpcy50b2RvTGlzdFtpXVxyXG4gICAgICAgIGlmKHRvZG9JdGVtLmlkID09PSB0b2RvSWQpe1xyXG4gICAgICAgICAgaWYodHlwZSA9PT0gJ3NlbGVjdCcpe1xyXG4gICAgICAgICAgICB0b2RvSXRlbS5pc0NvbXBsZXRlID0gIXRvZG9JdGVtLmlzQ29tcGxldGVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmKHR5cGUgPT09ICdpcHQnKXtcclxuICAgICAgICAgICAgdG9kb0l0ZW0udG9kbyA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmFkZExvY2FsVG9kbyh0b2RvSXRlbSlcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRlbFRvZG8odG9kb0lkKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlTG9jYWxUb2RvKHRvZG9JZClcclxuICAgIH0sXHJcbiAgICB0b2RvVGFiKGlkeCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGlkeClcclxuICAgICAgdGhpcy5pdGVtQWN0aXZlID0gcGFyc2VJbnQoaWR4KTtcclxuICAgIH1cclxuICB9XHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy50b2RvTGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2xvY2FsVG9kb0xpc3QnKSB8fCBbXVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxuICByZW1vdmVMb2NhbFRvZG8gKHRvZG9JZCl7XHJcbiAgICB2YXIgbG9jYWxUb2RvTGlzdCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2xvY2FsVG9kb0xpc3QnKSB8fCBbXVxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9jYWxUb2RvTGlzdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaWYobG9jYWxUb2RvTGlzdFtpXS5pZCA9PT0gdG9kb0lkKXtcclxuICAgICAgICAgIGxvY2FsVG9kb0xpc3Quc3BsaWNlKGksIDEpXHJcbiAgICAgICAgICB0aGlzLnRvZG9MaXN0ID0gbG9jYWxUb2RvTGlzdFxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnbG9jYWxUb2RvTGlzdCcsbG9jYWxUb2RvTGlzdClcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxuICBhZGRMb2NhbFRvZG8odG9kb0l0ZW0pIHtcclxuICAgIHZhciBsb2NhbFRvZG9MaXN0ID0gd2VweS5nZXRTdG9yYWdlU3luYygnbG9jYWxUb2RvTGlzdCcpIHx8IFtdXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9jYWxUb2RvTGlzdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgIGlmKGxvY2FsVG9kb0xpc3RbaV0uaWQgPT09IHRvZG9JdGVtLmlkKXtcclxuICAgICAgICBsb2NhbFRvZG9MaXN0W2ldLmlzQ29tcGxldGUgPSB0b2RvSXRlbS5pc0NvbXBsZXRlXHJcbiAgICAgICAgbG9jYWxUb2RvTGlzdFtpXS50b2RvID0gdG9kb0l0ZW0udG9kb1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsVG9kb0xpc3QpXHJcbiAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnbG9jYWxUb2RvTGlzdCcsbG9jYWxUb2RvTGlzdClcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbG9jYWxUb2RvTGlzdC5wdXNoKHRvZG9JdGVtKVxyXG4gICAgd2VweS5zZXRTdG9yYWdlU3luYygnbG9jYWxUb2RvTGlzdCcsbG9jYWxUb2RvTGlzdClcclxuICB9XHJcbn1cclxuIl19