//
function addInsertListener(){
  var target = $('#add');
  target.click(insertTask);
}


//aggiunta elementi alla lista

function insertTask() {
  var target = $ ('#task-text');
  var text = target.val();

  $.ajax({
    url:'http://157.230.17.132:3024/todos',
    method: 'POST',
    data: {
      text: text
    },

    success: function(data) {
      console.log('data', data);

    },
    error: function(err) {
      console.log('err', err);
    }

  })

}

// chiamata ajax per avere i dati
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


// stampa dei dati nella lista su foglio html
function printTasks(tasks){
  var target = $('#tasks');
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    target.append(`<li>${task.text} </li>`);
  }

}





function init() {

  console.log("hello world");
  getTasks();
  addInsertListener();



}
$(document).ready(init);
