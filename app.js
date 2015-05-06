
var CyberLexWeb = angular.module("CyberLex",[]);
CyberLexWeb.DictionaryEntry = function(word, definition, picture){
    this.word = word;
    this.definition = definition;
    this.picture = picture; 
    this.edate = new Date();
    this.likes = 0;
    this.dislikes = 0;
    
 
};
CyberLexWeb.controller("HomeController",['$scope',function($scope){
  $scope.title = "My Dictionary";
  $scope.dictionary = [new CyberLexWeb.DictionaryEntry("Trigonometry","The Study of Angles","")];
  $scope.plusOne = function(index){
    $scope.dictionary[index].likes += 1;

};
$scope.minusOne = function(index){
$scope.dictionary[index].dislikes += 1;
}
}]);