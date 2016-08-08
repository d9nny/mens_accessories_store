var app = angular.module('mensAccessories', [
  'ngRoute'
]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "app/partials/home.html", controller: "PageCtrl"})
    .when("/about", {templateUrl: "app/partials/about.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "app/partials/contact.html", controller: "PageCtrl"})
    .when("/products", {templateUrl: "app/partials/product.html", controller: "ProductCtrl"})
    .when("/products/item", {templateUrl: "app/partials/product-item.html", controller: "ProductCtrl"})
    .when("/blog", {templateUrl: "app/partials/blog.html", controller: "PageCtrl"})
    .otherwise("/404", {templateUrl: "app/partials/404.html", controller: "PageCtrl"});
}]);

app.controller('PageCtrl', function () {

});

app.controller('ProductCtrl', function () {

});