var app = angular.module('app', []);

app.controller('myCtrl', function ($scope, $http) { 

    $scope.contacts = [];

    $scope.addContact = function () {
        var contact = {
            "name": $scope.newContact.name,
            "phone": $scope.newContact.phone
        };
        $scope.contacts.push(contact)

        console.log(contact);
    }

    $scope.remove = function (index) {
        $scope.contacts.splice(index, 1);        
    };
});

