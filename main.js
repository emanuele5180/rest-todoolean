function getTasks() {
  $.ajax({
    url: 'http://157.230.17.132:3024/todos',
    method: 'GET',

    success: function(data) {
      console.log('data', data);
    },
    error: function(err) {
      console.log('err', err);
    }

  })
}


function init() {

  console.log("hello world");
  getTasks();




}
$(document).ready(init);
