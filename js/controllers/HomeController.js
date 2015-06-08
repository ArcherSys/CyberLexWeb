ArcherSysOS.Applications[0].controller("HomeController",['$scope','timeserv',function($scope,timeserv){
  $scope.title = "My Dictionary";
  $scope.dictionary = [new ArcherSysOS.Applications[0].DictionaryEntry("Trigonometry","The Study of Angles",""),
  new ArcherSysOS.Applications[0].DictionaryEntry("Relation","A correspondence between two sets of data",""),
   new ArcherSysOS.Applications[0].DictionaryEntry("Logarithmic","A continuos function with a vertical asymptote at x=h",""),
   new ArcherSysOS.Applications[0].DictionaryEntry("Marbury v. Madison","Marbury v. Madison is pretty much the OG of Landmark Supreme Court Cases. In this decsion, Chief Justice John Marshall claimed for the Court the power of judicial review",""),
new ArcherSysOS.Applications[0].DictionaryEntry("Sinusoidal Function","A function in the Form of f(x) = Asin(b(x-c)) + d ",""),
  new ArcherSysOS.Applications[0].DictionaryEntry("Dred Scott v. Sanford","'A case in which will live in infamy, FDR didn't really say this, but it would be cool if he had. 1) Blacks cannot be citizens of the United States(although some free blacks had excersied right of citizenship in some states at the time that the Constitution was drafed) and 2) Congress cannot restrict slavery in the territories, as to do so would undermine property rights \n This decision was nullified  by the Fourteenth Amendment",""),
new ArcherSysOS.Applications[0].DictionaryEntry("Amplitude"," the hieght of a wave from its middle to its top",""),
  new ArcherSysOS.Applications[0].DictionaryEntry("Plessy v. Ferguson","The 'sperate but equal'decision. The Supreme Court upheld a Lousiana Law that required boxcars to be segregated by race. The Court held that states may segregate races as long as the segregated facilities are of equal quality ( as if this was ever the case)",""),
new ArcherSysOS.Applications[0].DictionaryEntry("Frequency","The number of cycles completed in a 360 degree or 2pi radians interval",""),
new ArcherSysOS.Applications[0].DictionaryEntry("The Stamp Act","When the British taxed glass, tea and stamps on the American colonists.",""),
new ArcherSysOS.Applications[0].DictionaryEntry("Deforestation","The conversion of forested areas to non-forest land for use such as arable land , pasture , urban use, logged area or wasteland",""),
new ArcherSysOS.Applications[0].DictionaryEntry("Piecewise Functions","A Function with at least 2 or more expressions that are true for certain x-values","")];
  

$scope.plusOne = function(index){
          $scope.dictionary[index].likes += 1;

};
        $scope.minusOne = function(index){
              $scope.dictionary[index].dislikes += 1;
};
timeserv.success(function(data){
$scope.today = eval(data.today);
});

}]); 