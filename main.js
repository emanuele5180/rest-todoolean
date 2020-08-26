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
      getTasks();

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
      printTasks(data);
    },
    error: function(err) {
      console.log('err', err);
    }

  })
}


// stampa dei dati nella lista su foglio html
function printTasks(tasks){
  var target = $('#tasks');
  target.text('');
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    target.append(`<li>${task.text} - <span data-id="${task.id}" class="click"><b> x </b></span> </li>`);
  }

}

function addDeleteListener() {
  $(document).on('click', '.click', deleteTask)
}

function deleteTask() {
  var button = $(this);
  var id =button.data('id');

  console.log('id', id);

  $.ajax({
    url: `http://157.230.17.132:3024/todos/${id}`,
    method: 'DELETE',

    success: function(data) {
      console.log('data', data);
      getTasks();

    },
    error: function(err) {
      console.log('err', err);
    }
  })
}


function init() {

  console.log("hello world");
  getTasks();
  addInsertListener();
  addDeleteListener();



}
$(document).ready(init);
