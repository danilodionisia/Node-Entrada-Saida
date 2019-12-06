const Express = require('express');
const app = new Express();
const handlebars = require('express-handlebars');
const Entrada = require('./models/Entrada');
const bodyParser = require('body-parser');



app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.render('home');
});

app.get('/cadastro-entrada', function(req, res){
    res.render('form-entrada');
})

app.post('/add-entrada', function(req, res){
    
    Entrada.create({
        
        data: req.body.data,
        empresa: req.body.empresa,
        produto: req.body.produto,
        notaFiscal:req.body.notafiscal,
        transportadora: req.body.transportadora,
        caixas: req.body.caixas,
        hora: req.body.hora

    }).then(function(){
        
        res.redirect('/');
        
    }).catch(function(erro){
        res.send('Ocorreu um erro: ' + erro);
    });
    
});

app.listen(8080, function(){
    console.log('Server running on door 8080');
});


