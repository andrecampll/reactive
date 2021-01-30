const { Observable } = require('rxjs');

function elementsWithDealy(time, ...elements) {
  return new Observable((subscriber) => {
    (elements || []).forEach((element, index) => {
      setTimeout(() => {
        subscriber.next(element);

        if (elements.length === index + 1) subscriber.complete();
      }, time * (index + 1));
    });
  });
}

elementsWithDealy(1000, 1, 2, 3, 5, 6 , 7, 8)
  .subscribe(console.log);
