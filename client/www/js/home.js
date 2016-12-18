/**
 * Created by home on 2016/12/18.
 */
"use strict"

angular.module('starter', ['ionic'])
  .config(function ($stateProviader,$urlRouterProvider) {
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
