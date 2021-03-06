require('colors')
const Fs = require('fs')
const Path = require('path')
global.modulePath = Path.resolve('./') + '/node_modules/clinodelucas/'
console.log(global.modulePath)
const routesjs = global.modulePath + './files/route.js'


//utils
console.error = (m) => console.log(m.red)
console.succes = (m) => console.log(m.green)
//

let [, , ...args] = process.argv


switch (args[0]) {
  case 'new':
    newCategory();
    break;

  default:
    console.error('Command: ' + args[0] + ' not found.')
    break;
}

// command reader

function newCategory() {
  switch (args[1]) {
    case 'route':
      createRoute()
      break;

    case undefined:
      console.error('You must precise a second argument.')
      break;
    default:
      console.error(args[1] + ' is not a command.')
      break;
  }
}




// Functions spécifiques

function createRoute() {
  if (args[2] && args[2] !== 'index') {
    Fs.exists('./routes/' + args[2] + '.js', (exists) => {
      if (!exists) {
        Fs.copyFile(routesjs, './routes/' + args[2] + '.js', (err) => {
          if (err) throw err;
          console.log('source.txt was copied to destination.txt');
        })
      }
    })
  }
}
