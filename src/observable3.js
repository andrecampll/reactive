const { Observable, noop } = require('rxjs');

function between(min, max) {
  if (min > max) [min, max] = [max, min];

  return new Observable((subscriber) => {
    Array(max - min).fill().map((_, index) => {
      subscriber.next(min + index);
    });

    subscriber.complete();
  });
}

between(1, 10).subscribe(
  num => console.log(`Number: ${num}`),
  noop,
  () => console.log('End!'),
);