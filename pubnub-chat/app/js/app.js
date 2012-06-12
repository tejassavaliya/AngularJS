// Declare app level module which depends on filters, and services
var PubNubChat = angular.module('PubNubChat',[]).directive('coolFade', function() {
    return {
      compile: function(elm) {
        //console.log('compiling');
        $(elm).css('opacity', 0);
        return function(scope, elm, attrs) {
         // console.log('animating');
          $(elm).animate({ opacity : 1.0 }, 1000 );
        };
      }
    };
  });