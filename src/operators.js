// #1 Creation Operators
// #2 Pipeable Operators

const { of, from } = require('rxjs'); // Creation

const { last, map } = require('rxjs/operators'); // Pipeable

of(1, 2, 'lol', false, 'last')
  .pipe(last(), map(v => v[0]))
  .subscribe((value) => {
    console.log(`Value: ${value}`);
  });

from([1, 2, 'lol', false, 'last'])
  .pipe(last(), map(v => v[0]))
  .subscribe((value) => {
    console.log(`Value: ${value}`);
  });
