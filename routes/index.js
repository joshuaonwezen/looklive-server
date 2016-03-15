var express = require('express');
var router = express.Router();
var fs = require('fs');


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', { scope: './' })
    .then(function(reg) {
      app.output('registered sw (see console)');
      console.info('registered sw', reg);
    })
    .catch(function(err) {
      app.output('error registering sw (see console)');
      console.error('error registering sw', err);
    });
} else {
  app.output('ServiceWorker is not supported');
}

router.get('/', function(req, res, next) {
    fs.readFile('resources/feed.json', 'utf8', function(err, data) {
        if(err) {
            res.status(404);
            next();
        }
        var slicedArr = JSON.parse(data).slice(0,10);
        res.render('feed', { title: 'Feed', items: slicedArr });
    })
});

router.get('/appearance/:uuid', function(req, res, next) {
    fs.readFile('resources/appearance/'+req.params.uuid+'.json', 'utf8', function(err, data) {
        if(err) {
            res.status(404);
            next();
        }

        var item = JSON.parse(data);
        var products = [];

        item.product_occurrences.forEach(function(occurrence) {
            var product = fs.readFileSync('resources/product/'+occurrence.product.id+'.json', 'utf8');
            products.push(JSON.parse(product));
        });

        console.log(products);

        res.render('appearance', { title: item.title, item: item , products: products});
    })
});

module.exports = router;
