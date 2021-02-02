const { Observable, Subject } = require('rxjs');

function getObservable() {
  return new Observable((subscriber) => {
    setTimeout(() => {
      subscriber.next(Math.random());
      subscriber.complete();
    }, 1000);
  });
}

const obs = getObservable();

obs.subscribe(console.log);
obs.subscribe(console.log);

function getSubject() {
  const subject = new Subject();

  setTimeout(() => {
    subject.next(Math.random());
    subject.complete();
  }, 1000);
  
  return subject;
}

const sub = getSubject();

sub.subscribe(console.log);
sub.subscribe(console.log);

