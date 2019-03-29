
const description = {
    demand: true,
    alias: 'd',
    desc: 'Describe the task to do'
  };

const complete = {
  default: true,
  alias: 'c',
  desc: 'Check complete or pending the task'
};

const argv = require('yargs')
      .command('Create','Create a new task', { description })
      .command('Delete','Delete a specific task', { description })
      .command('List','Get all the tasks')
      .command('Update','Update the status task',  { description , complete })
      .help()
      .argv;

module.exports = {
  argv
}
