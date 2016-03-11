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

    ready(function () {
        if (/appearance/.test(window.location.href)) {
            appearance();
        }
    });
}());