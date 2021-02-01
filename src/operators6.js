const { from, Observable } = require('rxjs');

function createPipeableOperator(operatorFn) {
  return function(source) {
    return new Observable((subscriber) => {
      source.subscribe(operatorFn(subscriber));
    });
  }
}

function first() {
  return createPipeableOperator((subscriber) => ({
    next(value) {
      subscriber.next(value);
      subscriber.complete();
    }
  }));
}

function last() {
  let last;

  return createPipeableOperator((subscriber) => ({
    next(value) {
      last = value;
    },
    complete() {
      subscriber.next(last);
      subscriber.complete();
    }
  }));
}

function nothing() {
  return createPipeableOperator((subscriber) => ({
    next() {
      subscriber.complete();
    }
  }));
}

from([1, 2, 3, 4, 5])
  .pipe(first())
  .pipe(last())
  .pipe(nothing())
  .subscribe(console.log);
