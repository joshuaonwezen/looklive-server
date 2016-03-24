/*$(document).ready(function(){
 $('.product').first().addClass('product-active');
 $(".product-indicator[data-uuid='"+$('.product').first().data('uuid')+"']").addClass('product-indicator-active');
 
 $('.product-indicator').on('click', function(e){
 var id = $(e.currentTarget).data('uuid');
 $('.product-indicator-active').removeClass('product-indicator-active');
 $(e.currentTarget).addClass('product-indicator-active');
 $('.product.product-active').removeClass('product-active');
 $(".product[data-uuid='"+id+"']").addClass('product-active');
 });
 });*/



(function () {
    'use strict';


    function ready(event) {
        if (document.readyState !== 'loading') {
            event();
        } else {
            document.addEventListener('DOMContentLoaded', event);
        }

    }
    
    function onLoad() {
        route();
        renderAppereance();
        
        var observer = new FontFaceObserver('Raleway');

        observer.check(null, 5000).then(function () {
            document.body.classList.add('fonts-loaded');
        }, function () {
            console.log('Font is not available');
        });
    }

    function renderAppereance() {
        var product = document.querySelector('.product');
        if(product == undefined){
            return false;
        }
        var indicator = document.querySelector('.product-indicator[data-uuid="' + product.getAttribute('data-uuid') + '"]');
        var allIndicators = document.querySelectorAll('.product-indicator');

        product.classList.add('product-active');
        indicator.classList.add('product-indicator-active');

        Array.prototype.forEach.call(allIndicators, function (btn) {
            btn.addEventListener('click', function (event) {
                    var id = event.currentTarget.getAttribute('data-uuid');
                    document.querySelector('.product-active').classList.remove('product-active');
                    document.querySelector('.product-indicator-active').classList.remove('product-indicator-active');
                    document.querySelector('.product[data-uuid="' + id + '"]').classList.add('product-active');
                    event.currentTarget.classList.add('product-indicator-active');
            });
        });
    }


    function route() {
        //Credits robert
        var allRoutes = document.querySelectorAll('a[href^="/"]');

        Array.prototype.forEach.call(allRoutes, function (route) {
            route.addEventListener('click', function (event) {
                event.preventDefault();
                var href = event.currentTarget.getAttribute('href');
                history.pushState(null, null, href);
                fetchHTML(href);
            });
        });

        window.addEventListener('popstate', function () {
            fetchHTML(window.location.pathname);
        });
    }


    function fetchHTML(href) {
        fetch('http://localhost:3000/api' + href).then(function (response) {
            return response.text();
        }).then(function (body) {
            document.querySelector('.inner-wrapper').innerHTML = body;
            onLoad();
        });
    }

    ready(onLoad);

}());