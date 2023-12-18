if (annyang) {
    // Let's define our first command. First the text we expect, and then the function it should call
    var commands = {
      'show tps report': function() {
        $('#tpsreport').animate({bottom: '-100px'});
      },
      'write login username *tag': function(variable){
        let unamel=document.getElementById("userl");
        unamel.value=variable;
      },
      'write login password *tag': function(variable){
        let passl=document.getElementById("passl");
        passl.value=variable;
      },
      'write password *tag': function(variable){
        let pass=document.getElementById("pass");
        pass.value=variable;
      },
      'write username *tag': function(variable){
        let unames=document.getElementById("users");
        unames.value=variable;
      },
      'write name *tag': function(variable){
        let f=document.getElementById("f");
      f.value=variable;
      },
     'write email *tag': function(variable){
        let e=document.getElementById("email");
        e.value=variable;
      }
    };
  
    // Add our commands to annyang
    annyang.addCommands(commands);
  
    // Start listening. You can call this here, or attach this call to an event, button, etc.
    annyang.start();
}