var lat, lng;

window.fbAsyncInit = function() {
  FB.init({
    appId      : '156803834800667',
    xfbml      : true,
    version    : 'v2.8'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

// window.FB = {
//     XFBML: {
//         parse: function (elem) {
//             // var pre = document.createElement('pre');
//             // pre.textContent = elem.innerHTML;
//             // document.getElementById('fb-comment-box').innerHTML = pre.outerHTML;
//         }
//     }
// };

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
            $scope.rotateIfPortrait(),
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

      // $scope.vm = {
      //     currentImagesIndex: 0,
      //     images: [{url:'https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/yankeedoodle1.png?alt=media&token=7ebdc95d-ee6c-494a-be9f-9df871c1c7bc',orientation:''}],
      //     currentImgSrc: 'https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/yankeedoodle1.png?alt=media&token=7ebdc95d-ee6c-494a-be9f-9df871c1c7bc',
      //     loadImage: function () {
      //         this.currentImgSrc = this.images[this.currentImagesIndex].url;
      //     },
      //     navigateNext: function () {
      //         this.currentImagesIndex++;
      //         if (this.currentImagesIndex >= this.images.length) {
      //             this.currentImagesIndex = 0;
      //         }
      //         this.loadImage();
      //     },
      //     navigatePrevious: function () {
      //         this.currentImagesIndex--;
      //         if (this.currentImagesIndex <= 0) {
      //             this.currentImagesIndex = 0;
      //         }
      //         this.loadImage();
      //     }
      // };
      // $scope.vm.loadImage();




      $scope.featured = [
        {
          title: "Rappelling Through Yankee Doodle Canyon",
          intro: "It all started late one night, near a middle-of-nowhere town called Leeds, UT. The sleepy town was well past its own bedtime. That didn’t stop a meet up of the best adventure crew around.",
          link: "#/article?id=0",
          imageSrc: "https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/yankeedoodle1.png?alt=media&token=7ebdc95d-ee6c-494a-be9f-9df871c1c7bc",
          date: "August 30th, 2016"
        },
        {
          title: "An Afternoon in Capitol Reef",
          intro: "Nothing like deciding on a last minute trip from memorial day, we left at 1:00 in the afternoon and arrived by 4:00, to Utah's probably least-known national park.",
          link: "#/article?id=1",
          imageSrc: "https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/capitolreef1.png?alt=media&token=2aa160d6-47e5-4969-8476-015aa3c27b4c",
          date: "June 24, 2016"
        },
        {
          title: "Diamond Fork Canyon",
          intro: "What an incredible sunset.",
          link: "#/article?id=2",
          imageSrc: "https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/sfhotpots.png?alt=media&token=928713db-3960-466d-9137-d44b0f85a92f",
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

// app.directive('myFbCommentBox', function () {
//     function createHTML(href, numposts, colorscheme) {
//         return '<div class="fb-comments" ' +
//                        'data-href="' + href + '" ' +
//                        'data-numposts="' + numposts + '" ' +
//                        'data-colorsheme="' + colorscheme + '">' +
//                '</div>';
//     }
//
//     return {
//         restrict: 'A',
//         scope: {},
//         link: function postLink(scope, elem, attrs) {
//             attrs.$observe('pageHref', function (newValue) {
//                 var href        = newValue;
//                 var numposts    = attrs.numposts    || 5;
//                 var colorscheme = attrs.colorscheme || 'light';
//
//                 elem.html(createHTML(href, numposts, colorscheme));
//                 FB.XFBML.parse(elem[0]);
//             });
//         }
//     };
// });

// TODO: uncomment when ready
// function initMap() {
//   var site = {lat: 37.236917, lng: -113.453889};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 15,
//     center: site
//   });
//   var marker = new google.maps.Marker({
//     position: site,
//     map: map
//   });
// }

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
