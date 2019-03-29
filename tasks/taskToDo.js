const fs = require('fs');

let listToDo = [];

const CreateTask = (description) => {
  LoadTasks();
  let task = { description, complete: false };
  listToDo.push(task);
  saveTask();
  return task;
}

const LoadTasks = () => {
  try {
    listToDo = require('../db/data.json');
  } catch (e) {
    console.error('Sorry we can not get the tasks.', e);
    listToDo = [];
  }
}

const GetListTasks = () => {
    LoadTasks();
    return listToDo;
}

const UpdateTask = (description, complete = true) => {
   return ExecuteTask(description, "Update", complete);
}

const DeleteTask = ( description ) => {
  return ExecuteTask(description, "Delete", false);
}

const ExecuteTask = (pDescription, pTaskName, pComplete) => {
  LoadTasks();
  let respond = false;
  let index = listToDo.findIndex( task => task.description === pDescription );

  if ( index >= 0 ){
    (pTaskName === "Delete") ? listToDo.splice( index, 1 ) : listToDo[index].complete = pComplete;
    saveTask();
    respond = true;
  }
  return respond;
}

const saveTask = () => {
  let data = JSON.stringify(listToDo);
  fs.writeFile('db/data.json', data, (err) => {
    if(err) throw new Error('Sorry we can not save the data', err);
  });
}

module.exports = {
  CreateTask, GetListTasks, UpdateTask, DeleteTask
}
