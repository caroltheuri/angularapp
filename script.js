var app= angular.module('firstapp',[]);
app.controller('header', function($scope){
   $scope.header="Houses and rental property";
});
app.controller('formhtml', function($scope){
    $scope.name=" ";
});
app.controller('houses',function($scope){
    $scope.houselist= function() {
        $scope.list=[
           {name:"Alma", 
            location:"ngong road",
            price:"400"},
           { name:"Situ", 
            location:"mpaka road",
            price:"700"},
            {name:"ct towers", 
            location:"kenyatta avenue",
            price:"300"},
            {name:"fedha", 
            location:"westlands",
            price:"500"}
        ]
    }
    $scope.orderBy1=function(y) {
$scope.ordertble=y;
    }
});
app.factory('discounts',function(){
 var discount={};
 var amnt= Math.floor(Math.discounts()*10);
 discount.generate=()=>{
     return amnt;
 };
 return discount;
});
app.controller('generatediscount',function($scope,discounts){
$scope.generateRandom=function(){
    $scope.randomno1=discounts.generate();
    $scope.randomno2=discounts.generate();
};
});

