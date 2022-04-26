/* eslint-disable */

// GLOBAL LEX ENV
// {
//   'enviromentRecord': {
//     'message': 'Test',
//     'weight': 55,
//     'run': {
//         console.log('RUN');
//      },
//      'createMessenger': { ..},
//      'messanger': ....
//   },
//   'outherLexicalEnv': null
// }

// createMessage();
// {
//   'enviromentRecord': {
//     message: ...
//     sender: ...
//     sendMessage: ...
//     setSender: ...
//     setMessage: ...
//   },
//   'outherLexicalEnv': global
// }

// run();
// {
//   'enviromentRecord': {
//   },
//   'outherLexicalEnv': global
// }

const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

run();

if (false) {
  function sum(a, b) {
    return a + b;
  }
}

// sum(5, 6);

console.log((createMessenger.test = '123'));

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  // console.log(weight);

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  sendMessage('Jack');
  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger = createMessenger();
// messanger.sendMessage('Ann');
messanger.setMessage('Hello world!');
messanger.sendMessage('Hello world!');
createMessenger();
