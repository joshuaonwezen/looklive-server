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


    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }

    }

    function appearance() {
        var firstProduct = document.querySelector('.product');
        var firstIndicator = document.querySelector(
                '.product-indicator[data-uuid="' + firstProduct.getAttribute('data-uuid') + '"]'
                );
        var indicators = document.querySelectorAll('.product-indicator');

        firstProduct.classList.add('product-active');
        firstIndicator.classList.add('product-indicator-active');

        Array.prototype.forEach.call(indicators, function (btn) {
            btn.addEventListener('click', function (event) {
                var id = event.currentTarget.getAttribute('data-uuid');
                document.querySelector('.product-active').classList.remove('product-active');
                document.querySelector('.product-indicator-active').classList.remove('product-indicator-active');
                document.querySelector('.product[data-uuid="' + id + '"]').classList.add('product-active');
                event.currentTarget.classList.add('product-indicator-active');
            });
        });
    }

    
        function spa() {
        var anchors = document.querySelectorAll('a[href^="/"]');

        Array.prototype.forEach.call(anchors, function (anchor) {
            anchor.addEventListener('click', function (event) {
                event.preventDefault();

                var href = event.currentTarget.getAttribute('href');
                history.pushState(null, null, href);
                fetchHTML(href);
            });
        });

        window.addEventListener('popstate', function() {
            fetchHTML(window.location.pathname);
        });
    }

    /**
     * Fetch the HTML for the href that is passed in.
     *
     * @param  {String} href
     * @return {void}
     */
    function fetchHTML(href) {
       fetch('http://0.0.0.0:3000/api' + href)
           .then(function(response) { return response.text(); })
           .then(function(body) {
               document.querySelector('.inner-wrapper')
                   .innerHTML = body;

               onPageLoad();
           });
    }

    /**
     * Logic that should be invoked on every page load. Also from changing URL
     * with pushstate/popstate.
     *
     * @return {void}
     */
    function onPageLoad() {
        spa();
        appearance();

        
        if ('serviceWorker' in navigator) {

            document.getElementById('register').onclick = function () {
                navigator.serviceWorker.register('sw.js', {scope: './'})
                        .then(function (reg) {
                            app.output('registered sw (see console)');
                            console.info('registered sw', reg);
                        })
                        .catch(function (err) {
                            console.error('error registering sw', err);
                        });
            };

            document.getElementById('unregister').onclick = function () {
                navigator.serviceWorker.getRegistration('./')
                        .then(function (reg) {
                            reg.unregister();
                            app.output('unregistered sw');
                        })
                        .catch(function (err) {
                            app.output('error unregistering sw (see console)');
                            console.error('error unregistering sw', err);
                        });
            };

        } else {
            app.output('ServiceWorker is not supported');
        }
    }

    ready(onPageLoad);

}());