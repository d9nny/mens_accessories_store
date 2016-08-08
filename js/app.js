app.js

var app = angular.module('mensAccessories', [
  'ngRoute'
]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    .when("/products", {templateUrl: "partials/products.html", controller: "PageCtrl"})
    .when("/blog", {templateUrl: "partials/blog.html", controller: "PageCtrl"})
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller");
  })
});