
var CyberLexWeb = angular.module("CyberLex",[]);
CyberLexWeb.DictionaryEntry = function(word, definition, picture){
    this.word = word;
    this.definition = definition;
    this.picture = picture; 
    this.edate = new Date();
    this.likes = 0;
    this.dislikes = 0;
    
 
};

          