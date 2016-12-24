app.controller('GearRevArticleCtrl', [
    '$scope',
    'factory',
    function($scope, factory){

      $scope.article = {};
      $scope.id = getParameterByName('id', null);
      $scope.getArticle = function() {
        console.log('id: '+id);

        var ref = firebase.database().ref().child('gearReviews').child(id);
        ref.once('value').then(function(obj) {
          $scope.article = obj.val();
          $scope.$apply(function() {
            $scope.article,
            setBackgroundImage($scope.article.jumbotronImageUrl)
          });
          console.log($scope.article.images[0].orientation);
        });
      }
      $scope.getArticle();

      $scope.featured = [];
      var ref2 = firebase.database().ref().child('featured');
      ref2.once('value').then(function(obj) {
        $scope.featured = obj.val();
        $scope.$apply(function() {$scope.featured});
      });
    }
]);
