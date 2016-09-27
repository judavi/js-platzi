var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx,next) {
  title('Judavigram');
  var main = document.getElementById('main-container');

  var pictures = [
    {
      user: {
        username: 'judavi',
        avatar: 'https://s.gravatar.com/avatar/3bd169775e61041490d076bcd7ad86bf?s=80&r=g'
      },
      url: 'office.jpg',
      likes: 10,
      liked: true,
      createdAt: new Date()
    },
    {
      user: {
        username: 'judavi',
        avatar: 'https://s.gravatar.com/avatar/3bd169775e61041490d076bcd7ad86bf?s=80&r=g'
      },
      url: 'office.jpg',
      likes: 2,
      liked: false,
      createdAt: new Date().setDate(new Date().getDate()-10)
    }
  ];

  empty(main).appendChild(template(pictures));
});
