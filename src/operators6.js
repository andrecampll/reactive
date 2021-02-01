const { from, Observable } = require('rxjs');

function createPipeableOperator(nextFn) {
  return function(source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(value) {
          nextFn(subscriber, value);
        }
      });
    });
  }
}

function first() {
  return createPipeableOperator((subscriber, value) => {
    subscriber.next(value);
    subscriber.complete();
  });
}

function last() {
  return function(source) {
    return new Observable((subscriber) => {
      let last;

      source.subscribe({
        next(value) {
          last = value;
        },
        complete() {
          subscriber.next(last);
          subscriber.complete();
        }
      });
    });
  }
}

from([1, 2, 3, 4, 5])
  .pipe(first())
  // .pipe(last())
  .subscribe(console.log);
