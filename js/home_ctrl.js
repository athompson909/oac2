app.controller('HomeCtrl', [
    '$scope',
    '$http',
    'factory',
    function($scope, $http, factory) {
      $scope.jumbotronWelcome = 'Sup??? welcome to...';
      $scope.jumbotronTitle = 'Outdoor Adventure Crew';

      $scope.advlog = {
        title: "Rappelling Through Yankee Doodle Canyon",
        image: "https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/yankeedoodle1.png?alt=media&token=7ebdc95d-ee6c-494a-be9f-9df871c1c7bc",
        intro: "It all started late one night, near a middle-of-nowhere town called Leeds, UT. The sleepy town was well past its own bedtime. That didn’t stop a meet up of the best adventure crew around...",
        link: "file:///Users/adamthompson/Documents/personal/oac/articles/09172016yankeedoodlecanyon.html"
      };
      $scope.gearrev = {
        title: "Diamond Fork Canyon",
        image: "https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/sfhotpots.png?alt=media&token=928713db-3960-466d-9137-d44b0f85a92f",
        intro: "What an incredible sunset...",
        link: "file:///Users/adamthompson/Documents/personal/oac/articles/09172016yankeedoodlecanyon.html"
      };
      $scope.survtip = {
        title: "An Afternoon in Capitol Reef",
        image: "https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/capitolreef1.png?alt=media&token=2aa160d6-47e5-4969-8476-015aa3c27b4c",
        intro: "Nothing like deciding on a last minute trip from memorial day, we left at 1:00 in the afternoon and arrived by 4:00, to Utah's probably least-known national park...",
        link: "file:///Users/adamthompson/Documents/personal/oac/articles/09172016yankeedoodlecanyon.html"
      };
      $scope.blog1 = {
        title: "An Afternoon in Capitol Reef",
        image: "https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/capitolreef1.png?alt=media&token=2aa160d6-47e5-4969-8476-015aa3c27b4c",
        intro: "It all started late one night, near a middle-of-nowhere town called Leeds, UT. The sleepy town was well past its own bedtime. That didn\’t stop a meet up of the best adventure crew around...",
        link: "file:///Users/adamthompson/Documents/personal/oac/articles/09172016yankeedoodlecanyon.html"
      };
      $scope.blog2 = {
        title: "Rappelling Through Yankee Doodle Canyon",
        image: "https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/yankeedoodle1.png?alt=media&token=7ebdc95d-ee6c-494a-be9f-9df871c1c7bc",
        intro: "It all started late one night, near a middle-of-nowhere town called Leeds, UT. The sleepy town was well past its own bedtime. That didn’t stop a meet up of the best adventure crew around...",
        link: "file:///Users/adamthompson/Documents/personal/oac/articles/09172016yankeedoodlecanyon.html"
      };
      $scope.blog3 = {
        title: "Rappelling Through Yankee Doodle Canyon",
        image: "https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/yankeedoodle1.png?alt=media&token=7ebdc95d-ee6c-494a-be9f-9df871c1c7bc",
        intro: "It all started late one night, near a middle-of-nowhere town called Leeds, UT. The sleepy town was well past its own bedtime. That didn’t stop a meet up of the best adventure crew around...",
        link: "file:///Users/adamthompson/Documents/personal/oac/articles/09172016yankeedoodlecanyon.html"
      };
    }
]);
