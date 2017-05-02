var app = angular.module('ourModule',[]);

app.controller('ourController',function($scope){
    $scope.todoList=[];
$scope.addTask= function(newTask){
$scope.todoList.push({name: newTask.name});
   $scope.task=null;
}
    $scope.removeTask= function(){
        $scope.todoList.pop()
    }
    
});