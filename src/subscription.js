const { timer, Subscription } = require('rxjs');

const obs = timer(3000, 500);

const sub1 = obs.subscribe((number) => {
  console.log(number);
});

setTimeout(() => {
  sub1.unsubscribe();
}, 1000);
