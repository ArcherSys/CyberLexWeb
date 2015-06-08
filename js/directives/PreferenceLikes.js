ArcherSysOS.Applications[0].directive("PreferenceLikes", function(){
  return {
   restrict: "E",
   scope: {},
   link: function(scope, element, attrs){
       scope.likes = 0;
scopes.dislikes = 0;
       scope.plusOne = function(){
          scope.likes += 1;

};
        scope.minusOne = function(){
              scope.dislikes += 1;
};
},
   templateUrl:"js/directives/PreferenceLikes.html" 
}
});