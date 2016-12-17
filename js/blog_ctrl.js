app.controller('BlogCtrl', [
    '$scope',
    'factory',
    '$http',
    function($scope, factory, $http) {
      $scope.jumbotronTitle = "Adventure Log";
      $scope.innerTitle = "Our adventures";

      $scope.articles = [
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
