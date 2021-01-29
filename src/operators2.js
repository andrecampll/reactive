const { XMLHttpRequest } = require('xmlhttprequest');

const { ajax } = require('rxjs/ajax');
const { map, concatAll } = require('rxjs/operators');

ajax({
  createXHR: () =>  new XMLHttpRequest(),
  url: 'https://api.github.com/users/andrecampll/repos',
})
  .pipe(
    map(response => JSON.parse(response.xhr.responseText)),
    concatAll(),
    map(repo => repo.full_name)
  )
  .subscribe(console.log);
