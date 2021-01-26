const { Observable } = require('rxjs');

const promise = new Promise((resolve) => {
  resolve('This is a nice promisse.');
});

promise.then(console.log);

const observable = new Observable((subscriber) => {
  subscriber.next('This');
  subscriber.next('is a');
  subscriber.next('nice');
  subscriber.next('observable.');
});

observable.subscribe(console.log);
