$( document ).ready(function() {
  getData()
});

function getData(){
  $.ajax({
    url: 'http://localhost:3000/api/todos',
    type: 'GET',
    success: function(data) {
      data.forEach(function(data){
        if(data.done == false){
          $('#todos').prepend(`
            <div id="todo-${data._id}" class="col s6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">${data.title}</span>
                  <p>${data.content}</p>
                </div>
                <div class="card-action">
                  <a href="#" onclick="doneTodo('${data._id}')">Done</a>
                  <a href="#" onclick="deleteTodo('${data._id}')">Delete</a>
                </div>
              </div>
            </div>
          `)
        } else {
          $('#done').prepend(`
            <div id='done-${data._id}' class="col s6">
              <div class="card blue-grey lighten-2">
                <div class="card-content white-text">
                  <span class="card-title">${data.title}</span>
                  <p>${data.content}</p>
                </div>
                <div class="card-action">
                  <a href="#" onclick="undoneTodo('${data._id}')">Undone</a>
                  <a href="#" onclick="deleteTodo('${data._id}')">Delete</a>
                </div>
              </div>
            </div>
          `)
        }
      })
    }
  })
}

function createTodo(){
  $.ajax({
    url: 'http://localhost:3000/api/todos',
    type: 'POST',
    data: {
      title: $('#title').val(),
      content: $('#content').val()
    },
    success: function(data) {
      $('#title').val("")
      $('#content').val("")
      $('#todos').prepend(`
        <div id="todo-${data._id}" class="col s6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${data.title}</span>
              <p>${data.content}</p>
            </div>
            <div class="card-action">
              <a href="#" onclick="doneTodo('${data._id}')">Done</a>
              <a href="#" onclick="deleteTodo('${data._id}')">Delete</a>
            </div>
          </div>
        </div>
      `)
    }
  })
}

function doneTodo(id){
  $.ajax({
    url: `http://localhost:3000/api/todos/${id}/done`,
    type: 'PUT',
    success: function(data) {
      $(`#todo-${id}`).remove()
      $('#done').prepend(`
        <div id='done-${data._id}' class="col s6">
          <div class="card blue-grey lighten-2">
            <div class="card-content white-text">
              <span class="card-title">${data.title}</span>
              <p>${data.content}</p>
            </div>
            <div class="card-action">
              <a href="#" onclick="undoneTodo('${data._id}')">Undone</a>
              <a href="#" onclick="deleteTodo('${data._id}')">Delete</a>
            </div>
          </div>
        </div>
      `)
    }
  })
}

function undoneTodo(id){
  $.ajax({
    url: `http://localhost:3000/api/todos/${id}/undone`,
    type: 'PUT',
    success: function(data) {
      $(`#done-${id}`).remove()
      $('#todos').prepend(`
        <div id='todo-${data._id}' class="col s6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${data.title}</span>
              <p>${data.content}</p>
            </div>
            <div class="card-action">
              <a href="#" onclick="doneTodo('${data._id}')">Done</a>
              <a href="#" onclick="deleteTodo('${data._id}')">Delete</a>
            </div>
          </div>
        </div>
      `)
    }
  })
}

function deleteTodo(id) {
  $.ajax({
    url: `http://localhost:3000/api/todos/${id}`,
    type: 'DELETE',
    success: function(data) {
      $(`#done-${id}`).remove()
      $(`#todo-${id}`).remove()
    }
  })
}
