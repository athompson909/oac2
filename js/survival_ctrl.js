app.controller('SurvivalCtrl', [
    '$scope',
    'factory',
    function($scope, factory){
      $scope.jumbotronTitle = 'Survival Guide';
      $scope.articles = [];
      var ref = firebase.database().ref().child('allSurvivalArticles');
      ref.once('value').then(function(obj) {
        $scope.articles = obj.val();
        $scope.$apply(function() {$scope.articles});
      });

      $scope.featured = [];
      var ref2 = firebase.database().ref().child('featured');
      ref2.once('value').then(function(obj) {
        $scope.featured = obj.val();
        $scope.$apply(function() {$scope.featured});
      });
    }
]);
