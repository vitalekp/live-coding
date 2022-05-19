const formElem = document.querySelector('.login-form');

const serverUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users';

function createUserHandler(event) {
  event.preventDefault();

  // validate
  // read form

  const user = {
    email: 'test@gmail.com',
    name: 'Vitalii',
    password: '12345',
  };

  // console.log(JSON.stringify(newUser));

  // in: string, options
  // out: promise

  const promise = fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  // in: callback, callback(optional) (для невдалих кейсів є catch)
  // out: promise

  // 'then' callback
  // in: result of prev promise
  // out: ANY (але сам then, обертає результат func в promise)

  promise
    .then(response => {
      console.log('response is here');

      // in: none
      // out: promise
      return response.json();
    })
    .then(body => {
      console.log('body is here');

      // in string
      // out undef
      alert(JSON.stringify(body));
    });
}

formElem.addEventListener('submit', createUserHandler);

//
