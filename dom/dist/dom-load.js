'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = onDOMLoad;
function onDOMLoad(callback) {
  if (document.readyState === 'complete') {
    callback();
  } else {
    var handleDOMLoad = function handleDOMLoad() {
      removeEventListener('load', handleDOMLoad);
      callback();
    };
    addEventListener('load', handleDOMLoad);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kb20tbG9hZC5qcyJdLCJuYW1lcyI6WyJvbkRPTUxvYWQiLCJjYWxsYmFjayIsImRvY3VtZW50IiwicmVhZHlTdGF0ZSIsImhhbmRsZURPTUxvYWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQXdCQSxTO0FBQVQsU0FBU0EsU0FBVCxDQUFtQkMsUUFBbkIsRUFBNkI7QUFDMUMsTUFBSUMsU0FBU0MsVUFBVCxLQUF3QixVQUE1QixFQUF3QztBQUN0Q0Y7QUFDRCxHQUZELE1BRU87QUFDTCxRQUFNRyxnQkFBZ0IsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUJDLDBCQUFvQixNQUFwQixFQUE0QkQsYUFBNUI7QUFDQUg7QUFDRCxLQUhEO0FBSUFLLHFCQUFpQixNQUFqQixFQUF5QkYsYUFBekI7QUFDRDtBQUNGIiwiZmlsZSI6ImRvbS1sb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb25ET01Mb2FkKGNhbGxiYWNrKSB7XG4gIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgY2FsbGJhY2soKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBoYW5kbGVET01Mb2FkID0gKCkgPT4ge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIGhhbmRsZURPTUxvYWQpO1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9O1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoYW5kbGVET01Mb2FkKTtcbiAgfVxufVxuIl19