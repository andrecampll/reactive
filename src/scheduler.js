const { from, asyncScheduler } = require('rxjs');
const { observeOn } = require('rxjs/operators');

console.log('Start...');

from([1, 2, 3, 4])
  .pipe(observeOn(asyncScheduler))
  .subscribe(console.log);

console.log('End...');
