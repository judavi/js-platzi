var express = require('express');
var multer  = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.' + ext(file.originalname))
  }
});

var upload = multer({ storage: storage }).single('picture');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index', { title : "Judavigram"});
});

app.get('/signup', function(req, res){
  res.render('index');
});

app.get('/signin', function(req, res){
  res.render('index');
});

app.get('/api/pictures', function(req,res){
  var pictures = [
    {
      user: {
        username: 'judavi',
        avatar: 'https://s.gravatar.com/avatar/3bd169775e61041490d076bcd7ad86bf?s=80&r=g'
      },
      url: 'office.jpg',
      likes: 10,
      liked: true,
      createdAt: new Date().getTime()
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

  setTimeout(function (){
      res.send(pictures);
  }, 2000);

});

app.post('/api/pictures', function (req, res) {
  upload(req, res, function (err){
    if(err){
      return res.send(500,err);
    }
      res.send('Good!');
  })
})

app.listen(3000, function(err){
  if(err){
    console.log('Hubo un error');
    process.exit(1);
  }
  console.log('Escuchando en 3000');
});
