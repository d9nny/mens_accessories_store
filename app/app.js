var app = angular.module('mensAccessories', [
  'ngRoute'
]);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "app/partials/home.html", controller: "PageCtrl"})
    .when("/about", {templateUrl: "app/partials/about.html", controller: "PageCtrl"})
    .when("/contact", {templateUrl: "app/partials/contact.html", controller: "ContactCtrl"})
    .when("/products", {templateUrl: "app/partials/product.html", controller: "ProductCtrl"})
    .when("/products/item", {templateUrl: "app/partials/product-item.html", controller: "ProductCtrl"})
    .when("/blog", {templateUrl: "app/partials/blog.html", controller: "PageCtrl"})
    .otherwise("/404", {templateUrl: "app/partials/404.html", controller: "PageCtrl"});
}]);

app.controller('ContactCtrl', function () {

});

app.controller('ProductCtrl', function () {
	var self = this;

	self.hoverIn = function() {
		self.mouseover = true;
	}

	self.hoverOut = function() {
		self.mouseover = false;
	}

	self.select = function(product) {
		self.product = product;
		self.clicked = true;
	}

	self.closeSelect = function() {
		self.clicked = false;
	}
});