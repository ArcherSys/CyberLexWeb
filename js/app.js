
ArcherSysOS.Applications[0] = angular.module("CyberLex",[]);
ArcherSysOS.Applications[0].DictionaryEntry = ArcherSysOS.defineClass(function(word,definition,picture){
    this.word = word;
    this.definition = definition;
    this.picture = picture; 
    this.edate = new Date();
    this.likes = 0;
    this.dislikes = 0;
    
 
},{},{});

          