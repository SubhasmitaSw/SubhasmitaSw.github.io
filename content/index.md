
<div id="typewriter">
  <p id="intro-text"></p>
</div>

<script>
  var texts = [
    'Howdy, people?',
    'This is Subhasmita Swain.'
  ];
  var speed = 90; /* Adjust typing speed as needed */
  var currentTextIndex = 0;
  var currentCharIndex = 0;
  var introTextElement = document.getElementById("intro-text");

  function typeWriter() {
    if (currentCharIndex < texts[currentTextIndex].length) {
      introTextElement.innerHTML += texts[currentTextIndex].charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(typeWriter, speed);
    } else {
      // Clear the current text after a brief pause
      setTimeout(clearText, 2000); // Adjust pause time before clearing as needed
    }
  }

  function clearText() {
    // Clear the current text
    introTextElement.innerHTML = "";

    // Move to the next text if available
    currentTextIndex++;
    if (currentTextIndex >= texts.length) {
      currentTextIndex = 0; // Reset index to loop through texts
    }

    // Reset character index
    currentCharIndex = 0;

    // Start typing next text
    typeWriter();
  }

  // Start typing the first text
  typeWriter();
</script>

<style>
  /* Add CSS styles for typewriter effect */
  #typewriter {
    overflow: hidden; /* Ensures text overflow is hidden */
  }
  
  #intro-text {
    border-right: 2px solid transparent; /* Creates the blinking cursor effect */
    animation: blink-caret 0.75s step-end infinite;
  }
  
  @keyframes blink-caret {
    from, to {
      border-color: transparent;
    }
    50% {
      border-color: white; /* Adjust cursor color as needed */
    }
  }
</style>
