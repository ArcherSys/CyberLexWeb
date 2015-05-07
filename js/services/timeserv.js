CyberLexWeb.factory("timeserv", ['$http', function($http) {
  return $http.get('http://localhost:80/core/config/time-config.json')
     .success(function(data){
              return data;
          }).error(function(err){
                return err;
           });

}]);
   