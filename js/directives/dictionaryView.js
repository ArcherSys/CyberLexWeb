ArcherSysOS.Applications[0].directive('dictionary', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateURL: 'js/directives/dictionary.html' 
  }; 
});
