var app = angular.module("ApplicationModule", ["ngRoute"]);

//The Factory used to define the value to
//Communicate and pass data across controllers

app.factory("ShareData", function () {
    return { value: 0 }
});

//Defining Routing
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/showemployees',
        {
            templateUrl: 'EmployeeInfo/ShowEmployees',
            controller: 'ShowEmployeesController'
        });
    $routeProvider.when('/addemployee',
        {
            templateUrl: 'EmployeeInfo/AddNewEmployee',
            controller: 'AddEmployeeController'
        });
    $routeProvider.when("/editemployee",
        {
            templateUrl: 'EmployeeInfo/EditEmployee',
            controller: 'EditEmployeeController'
        });
    $routeProvider.when('/deleteemployee',
        {
            templateUrl: 'EmployeeInfo/DeleteEmployee',
            controller: 'DeleteEmployeeController'
        });
    $routeProvider.otherwise(
        {
            redirectTo: '/'
        });
    // $locationProvider.html5Mode(true);
    $locationProvider.html5Mode(true).hashPrefix('!')
}]);


app.service("SinglePageCRUDService", function ($http) {

    //Function to Read All Employees
    this.getEmployees = function () {
        return $http.get("/api/EmployeeInfoAPI");
    };

    //Fundction to Read Employee based upon id
    this.getEmployee = function (id) {
        return $http.get("/api/EmployeeInfoAPI/" + id);
    };

    //Function to create new Employee
    this.post = function (Employee) {
        var request = $http({
            method: "post",
            url: "/api/EmployeeInfoAPI",
            data: Employee
        });
        return request;
    };

    //Function  to Edit Employee based upon id 
    this.put = function (id, Employee) {
        var request = $http({
            method: "put",
            url: "/api/EmployeeInfoAPI/" + id,
            data: Employee
        });
        return request;
    };

    //Function to Delete Employee based upon id
    this.delete = function (id) {
        var request = $http({
            method: "delete",
            url: "/api/EmployeeInfoAPI/" + id
        });
        return request;
    };
});