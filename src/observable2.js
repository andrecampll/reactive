const { Observable } = require('rxjs');

// .create is deprecated
const observable = Observable.create((subscriber) => {
  subscriber.next('RxJS');
  subscriber.next('is');
  subscriber.next('powerful');

  if (Math.random() > 0.5) {
    subscriber.complete()
  } else {
    subscriber.error('There is an error...');
  }
});

observable.subscribe(
  (value) => console.log(`Value: ${value}`),
  (error) => console.log(`Error: ${error}`),
  () => console.log(`Completed!`),
);

observable.subscribe({
  next(value) {
    console.log(`Value: ${value}`);
  },
  error(error) {
    console.log(`Error: ${error}`)
  },
  complete() {
    console.log(`Completed!`);
  },
});
