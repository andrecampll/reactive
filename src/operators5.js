const { of, Observable } = require('rxjs');

function endingWith(endPart) {
  return function (source) {
    return new Observable((subscriber) => {
      source.subscribe({
        next(value) {
          if (Array.isArray(value)) {
             subscriber.next(
              value.filter(element => element.endsWith(endPart)),
             );
          } else if (value.endsWith(endPart)) subscriber.next(value);
        },
        error(err) {
          subscriber.error(err);
        },
        complete() {
          subscriber.complete();
        }
      });
    });
  }
}

of(['Naruto Uzumaki', 'Kushina Uzumaki', 'Minato Namikaze'])
  .pipe(endingWith('Uzumaki'))
  .subscribe(console.log);
