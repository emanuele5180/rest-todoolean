function getTasks() {
  $.ajax({
    url: 'http://157.230.17.132:3024/todos',
    method: 'GET',

    success: function(data) {
      console.log('data', data);
      printTasks(data)
    },
    error: function(err) {
      console.log('err', err);
    }

  })
}

function printTasks(tasks){
  var target = $('#tasks');
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    target.append('<li>${task.text} </li>');
  }

}


function init() {

  console.log("hello world");
  getTasks();



}
$(document).ready(init);
