function scrollToTop() {
  location.reload();
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

var app = angular.module('OutdoorAdvCrew', ['ui.router'])
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
        $urlRouterProvider.otherwise('home');
    }
]);
