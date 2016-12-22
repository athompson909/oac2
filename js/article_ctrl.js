var lat = 37.236917,
    lng = -113.453889;

var site = {lat: lat, lng: lng};

window.fbAsyncInit = function() {
  FB.init({
    appId: '156803834800667',
    xfbml: true,
    version: 'v2.8'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

app.controller('ArticleCtrl', [
    '$scope',
    'factory',
    '$http',
    function($scope, factory, $http) {
      $scope.article = {};
      $scope.id = getParameterByName('id', null);
      $scope.getArticle = function() {
        var id = $scope.id;
        console.log('id: '+id);

        var ref = firebase.database().ref().child('articles').child(id);
        console.log('ref: '+ref);
        ref.once('value').then(function(obj) {
          console.log(obj.val());
          $scope.article = obj.val();
          // $scope.vm.images = obj.val().images;
          $scope.$apply(function() {
            $scope.article,
            // $scope.vm,
            $scope.setBackgroundImage()

            // initMap(); // this doesn't do anything!
          });
          // $scope.vm.loadImage();
        });
      }
      $scope.getArticle();

      console.log($scope.article);

      $scope.rotateIfPortrait = function(orientation) {
        console.log("img orientation: "+orientation);
        if(orientation == "portrait") {
          return "-ms-transform: rotate(90deg);"+
          "-webkit-transform: rotate(90deg);"+
          "transform: rotate(90deg);"+
          "position: relative; height: auto; width: 100%; margin-top: 120px;";
        }
        else return "position: relative; height: auto; width: 100%;";
      }

      $scope.setBackgroundImage = function() {
        $(".jumbotron").css("background","url('"+$scope.article.jumbotronImageUrl+"') no-repeat center center");
        $(".jumbotron").css("background-size","cover");
      }


      $scope.featured = [
        {
          title: "Rappelling Through Yankee Doodle Canyon",
          intro: "It all started late one night, near a middle-of-nowhere town called Leeds, UT. The sleepy town was well past its own bedtime. That didn’t stop a meet up of the best adventure crew around.",
          link: "#/article?id=0",
          imageSrc: "https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/yankeedoodle%2FUNADJUSTEDNONRAW_thumb_2a8.jpg?alt=media&token=29fabf84-fd67-4095-8315-dac27e07dd7f",
          date: "August 30th, 2016"
        },
        {
          title: "Yellowstone",
          intro: "Yellowstone made the perfect end to a great summer of adventures for our crew.  We were all really excited for this last hurrah before the school year started.",
          link: "#/article?id=1",
          imageSrc: "https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/yankeedoodle%2FUNADJUSTEDNONRAW_thumb_2a8.jpg?alt=media&token=29fabf84-fd67-4095-8315-dac27e07dd7f",
          date: "June 24, 2016"
        },
        {
          title: "Diamond Fork Canyon",
          intro: "What an incredible sunset.",
          link: "#/article?id=2",
          imageSrc: "https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/yankeedoodle%2FUNADJUSTEDNONRAW_thumb_2a8.jpg?alt=media&token=29fabf84-fd67-4095-8315-dac27e07dd7f",
          date: "June 1st, 2016"
        }
      ];
    }
]);

app.directive('dynFbCommentBox', function () {
    function createHTML(href, numposts, colorscheme, width) {
        return '<div class="fb-comments" ' +
                       'data-href="' + href + '" ' +
                       'data-numposts="' + numposts + '" ' +
                       'data-colorsheme="' + colorscheme + '" ' +
                       'data-width="' + width + '">' +
               '</div>';
    }


    return {
        restrict: 'A',
        scope: {},
        link: function postLink(scope, elem, attrs) {
            attrs.$observe('pageHref', function (newValue) {
                var href        = newValue;
                var numposts    = attrs.numposts    || 5;
                var colorscheme = attrs.colorscheme || 'light';
                var width = attrs.width || '100%';
                elem.html(createHTML(href, numposts, colorscheme, width));
                FB.XFBML.parse(elem[0]);
            });
        }
    };
});

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


app.directive("appMap", function () {
    return {
        restrict: "E",
        replace: true,
        template: "<div></div>",
        link: function (scope, element, attrs) {
            var toResize, toCenter;
            var map;
            var currentMarkers;

            updateControl();

            // update zoom and center without re-creating the map
            scope.$watch("zoom", function () {
                if (map && scope.zoom)
                    map.setZoom(scope.zoom * 1);
            });

            scope.$watch("center", function () {
                if (map && scope.center)
                    map.setCenter(getLocation(scope.center));
            });

            // update the control
            function updateControl() {
                // get map options
                var options = {
                    center: new google.maps.LatLng(site.lat, site.lng),
                    zoom: 15
                };

                // create the map
                map = new google.maps.Map(element[0], options);
                var marker = new google.maps.Marker({position: site, map: map});

            }

            // convert current location to Google maps location
            function getLocation(loc) {
                if (loc == null) return new google.maps.LatLng(40, -73);
                if (angular.isString(loc)) loc = scope.$eval(loc);
                return new google.maps.LatLng(loc.lat, loc.lon);
            }
        }
    };
});
