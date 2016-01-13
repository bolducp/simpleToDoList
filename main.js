"use strict";

$(document).ready(init);

function init(){
  clickHandler();
}

function clickHandler(){
  $('#submit').click(addTaskToList);
  $('.glyphicon-trash').click(deleteTask);
  $('#removeCompleted').click(removeCompleted);
}

function addTaskToList(){
  var taskText = $('#task').val();
  var dueDate = moment($('#date').val()).format('MM-DD-YYYY');
  if (dueDate ==="Invalid date"){
    dueDate = " ";
  }

  var task = $("<div>").addClass('col-xs-6').text(taskText);
  var due = $("<div>").addClass('col-xs-2 due').text(dueDate);
  var completed = $("<div>").addClass('col-xs-2').append($('<input />',{ type: 'checkbox'}).addClass('col-xs-2'));
  var trash = $("<div>").addClass('col-xs-2').append($('<span>').addClass("col-xs-2 glyphicon glyphicon-trash"));

  var newTask = $("<div>").addClass("row").append(task, due, completed, trash);
  $("#itemList").append(newTask);
  $('.glyphicon-trash').click(deleteTask);
}


function deleteTask(){
  var $taskRow = ($(this).closest('.row'));
  $taskRow.addClass("animated fadeOutDown");
  setTimeout(function(){$taskRow.remove();}, 700);
}

function removeCompleted(){
  $("input:checked").parent().parent().remove();
}
