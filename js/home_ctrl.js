app.controller('HomeCtrl', [
    '$scope',
    '$http',
    'factory',
    function($scope, $http, factory) {
      $scope.jumbotronWelcome = 'Sup??? welcome to...';
      $scope.jumbotronTitle = 'Outdoor Adventure Crew';

      $scope.advlog = {
        title: "Rappelling Through Yankee Doodle Canyon",
        image: "https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/yankeedoodle%2FUNADJUSTEDNONRAW_thumb_2a8.jpg?alt=media&token=29fabf84-fd67-4095-8315-dac27e07dd7f",
        intro: "It all started late one night, near a middle-of-nowhere town called Leeds, UT. The sleepy town was well past its own bedtime. That didn’t stop a meet up of the best adventure crew around...",
        link: "#/article?id=0"
      };
      $scope.gearrev = {
        title: "Diamond Fork Canyon",
        image: "https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/yankeedoodle%2FUNADJUSTEDNONRAW_thumb_2a8.jpg?alt=media&token=29fabf84-fd67-4095-8315-dac27e07dd7f",
        intro: "What an incredible sunset...",
        link: "#/article?id=1"
      };
      $scope.survtip = {
        title: "An Afternoon in Capitol Reef",
        image: "https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/yankeedoodle%2FUNADJUSTEDNONRAW_thumb_2a8.jpg?alt=media&token=29fabf84-fd67-4095-8315-dac27e07dd7f",
        intro: "Nothing like deciding on a last minute trip from memorial day, we left at 1:00 in the afternoon and arrived by 4:00, to Utah's probably least-known national park...",
        link: "#/article?id=2"
      };
      $scope.blog1 = {
        title: "An Afternoon in Capitol Reef",
        image: "https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/yankeedoodle%2FUNADJUSTEDNONRAW_thumb_2a8.jpg?alt=media&token=29fabf84-fd67-4095-8315-dac27e07dd7f",
        intro: "It all started late one night, near a middle-of-nowhere town called Leeds, UT. The sleepy town was well past its own bedtime. That didn\’t stop a meet up of the best adventure crew around...",
        link: "#/article?id=2"
      };
      $scope.blog2 = {
        title: "Rappelling Through Yankee Doodle Canyon",
        image: "https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/yankeedoodle%2FUNADJUSTEDNONRAW_thumb_2a8.jpg?alt=media&token=29fabf84-fd67-4095-8315-dac27e07dd7f",
        intro: "It all started late one night, near a middle-of-nowhere town called Leeds, UT. The sleepy town was well past its own bedtime. That didn’t stop a meet up of the best adventure crew around...",
        link: "#/article?id=0"
      };
      $scope.blog3 = {
        title: "Rappelling Through Yankee Doodle Canyon",
        image: "https://firebasestorage.googleapis.com/v0/b/outdooradventurecrew-a3400.appspot.com/o/yankeedoodle%2FUNADJUSTEDNONRAW_thumb_2a8.jpg?alt=media&token=29fabf84-fd67-4095-8315-dac27e07dd7f",
        intro: "It all started late one night, near a middle-of-nowhere town called Leeds, UT. The sleepy town was well past its own bedtime. That didn’t stop a meet up of the best adventure crew around...",
        link: "#/article?id=0"
      };
    }
]);
