// Predefined Mood Settings
const moodSettings = {
    happy: { bgColor: '#ffeb3b', textColor: '#ff5722' },
    calm: { bgColor: '#b3e5fc', textColor: '#01579b' },
    energetic: { bgColor: '#ff8a80', textColor: '#b71c1c' },
    focused: { bgColor: '#263238', textColor: '#eceff1' }
  };
  
  // Change Mood Function
  function changeMood(mood) {
    const { bgColor, textColor } = moodSettings[mood];
    document.body.style.setProperty('--primary-color', bgColor);
    document.body.style.setProperty('--text-color', textColor);
  }
  
  // Custom Mood Creator
  function createCustomMood() {
    const bgColor = document.getElementById('bg-color').value;
    const textColor = document.getElementById('text-color').value;
    document.body.style.setProperty('--primary-color', bgColor);
    document.body.style.setProperty('--text-color', textColor);
  }
  
  // Voice Command Integration
  const voiceBtn = document.getElementById('voice-btn');
  
  voiceBtn.addEventListener('click', () => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
  
      recognition.lang = 'en-US';
      recognition.start();
  
      recognition.onresult = function (event) {
        const command = event.results[0][0].transcript.toLowerCase();
        handleVoiceCommand(command);
      };
  
      recognition.onerror = function (event) {
        alert('Voice recognition error. Please try again.');
      };
  
    } else {
      alert('Your browser does not support voice recognition.');
    }
  });
  
  // Handle Voice Commands
  function handleVoiceCommand(command) {
    if (command.includes('happy')) {
      changeMood('happy');
    } else if (command.includes('calm')) {
      changeMood('calm');
    } else if (command.includes('energetic')) {
      changeMood('energetic');
    } else if (command.includes('focused')) {
      changeMood('focused');
    } else {
      alert(`Mood "${command}" not recognized. Try: Happy, Calm, Energetic, or Focused.`);
    }
  }
  