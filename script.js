document.addEventListener('DOMContentLoaded', function () {
    let recognition;
  
    function initSpeechRecognition() {
      recognition = new webkitSpeechRecognition() || new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
  
      recognition.onresult = function (event) {
        const result = event.results[0][0].transcript.toLowerCase();
  
        if (result.includes('open home page')) {
            window.location.href = 'index.html';
          }
          else if (result.includes('open authentication page')) {
            window.location.href = 'login.html';
          }
          else if (result.includes('open contact page')) {
            window.location.href = 'contact.html';
          }
          else if (result.includes('open about page')) {
            window.location.href = 'about.html';
          }
          else if (result.includes('open chat')) {
            window.location.href = 'bot.html';
          }
          
      };
  
      recognition.onerror = function (event) {
        console.error('Speech recognition error:', event.error);
      };
    }
  
    function startListening() {
      if (!recognition) {
        initSpeechRecognition();
      }
  
      recognition.start();
    }
  
    document.getElementById('startListening').addEventListener('click', function () {
      startListening();
    });
  });
  