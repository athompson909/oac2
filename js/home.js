function scrollToTop() {
  location.reload();
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}


function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


setBackgroundImage = function(imgUrl) {
  $(".jumbotron").css("background","url('"+imgUrl+"') no-repeat center center");
  $(".jumbotron").css("background-size","cover");
}

var app = angular.module('OutdoorAdvCrew', ['ui.router', 'ngSanitize'])
.factory('factory', [function() {
    var o = {
        displayvalue: []
    };
    return o;
}]);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/home.html',
                controller: 'HomeCtrl'
            })
            .state('blog', {
                url: '/blog',
                templateUrl: '/blog.html',
                controller: 'BlogCtrl'
            })
            .state('article', {
                url: '/article',
                templateUrl: '/article.html',
                controller: 'ArticleCtrl'
            })
            .state('gearrev', {
                url: '/gearrev',
                templateUrl: '/gearrev.html',
                controller: 'GearRevCtrl'
            })
            .state('gearrev_article', {
                url: '/gearrev_article',
                templateUrl: '/gearrev_article.html',
                controller: 'GearRevArticleCtrl'
            })
            .state('gallery', {
                url: '/gallery',
                templateUrl: '/gallery.html',
                controller: 'GalleryCtrl'
            })
            .state('survival', {
                url: '/survival',
                templateUrl: '/survival.html',
                controller: 'SurvivalCtrl'
            })
            .state('survival_article', {
                url: '/survival_article',
                templateUrl: '/survival_article.html',
                controller: 'SurvivalArticleCtrl'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '/contact.html',
                controller: 'ContactCtrl'
            })
            .state('promote', {
                url: '/promote',
                templateUrl: '/promote.html',
                controller: 'ContactCtrl'
            })
        $urlRouterProvider.otherwise('home');
    }
]);

app.directive('dynamic', function ($compile) {
  return {
    restrict: 'A',
    replace: true,
    link: function (scope, ele, attrs) {
      scope.$watch(attrs.dynamic, function(html) {
        ele.html(html);
        $compile(ele.contents())(scope);
      });
    }
  };
});
