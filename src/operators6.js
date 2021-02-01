const { from, Observable } = require('rxjs');

function createPipeableOperator(nextGenerator) {
  return function(source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next: nextGenerator(subscriber),
      });
    });
  }
}

function first() {
  return createPipeableOperator((subscriber) => {
    return (value) => {
      subscriber.next(value);
      subscriber.complete();
    };
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
