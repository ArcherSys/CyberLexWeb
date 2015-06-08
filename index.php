<!DOCTYPE HTML>
<html>
<head>
<title>CyberLexWeb</title>
<link rel="stylesheet" href="/core/bootstrap/css/bootstrap.min.css">
<script src="/core/bootstrap/js/bootstrap.js"></script>

<script src="/core/js/jquery.js"></script>
<script src="/core/js/archersysos.js"></script>

<script src="/core/js/archersysos-applications.js"></script>
<script src="/core/js/angularjs/angular.min.js"></script>

<link rel="stylesheet" href="css/style.css">
</head>
<body ng-app="CyberLex">

<div class="container" id="dictionary">
<div class="main" ng-controller="HomeController">
   <h1>{{ title }} - {{ today | date }} </h1>
<div class="form-group">

</div>
<div  ng-repeat="word in dictionary">
  <dictionary info="word"></dictionary>
 </div>  

</div>
</div>
<script  src="js/app.js"></script>
<script  src="js/services/timeserv.js"></script>
<script  src="js/controllers/HomeController.js"></script>


<script  src="js/directives/dictionary.js"></script>

</body>
</html>