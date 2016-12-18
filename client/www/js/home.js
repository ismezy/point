/**
 * Created by home on 2016/12/18.
 */
"use strict"
console.log(app)
app
  .config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
      .state('tabs.home', {
        url: "/home",
        views: {
          'home-tab': {
            templateUrl: "templates/home.html"
          }
        }
      })
  })
