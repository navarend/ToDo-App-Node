
const colors = require('colors');
const argv = require('./config/yargs').argv;
const task = require('./tasks/taskToDo');


let comand = argv._[0];

switch (comand) {
  case "Create":
    let resp = task.CreateTask(argv.description);
    console.log(resp);
    break;
    case "List":
      let listOfTask = task.GetListTasks();
      for (let objTask of listOfTask) {
      console.log('================ Tasks ================'.green);
      console.log(objTask.description);
      console.log('Status:',objTask.complete);
      console.log('======================================='.green);
      }
    break;
    case "Update":
     let update = task.UpdateTask(argv.description,argv.complete);
      console.log(update);
    break;
    case "Delete":
    let respond = task.DeleteTask(argv.description,argv.complete);
     console.log(respond);
      break;
  default:
    console.log("Command is not recognized.", comand.toUpperCase());
}
