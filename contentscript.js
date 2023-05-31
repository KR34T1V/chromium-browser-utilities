// Content Script: This script runs in the context of the web page being viewed

// Create a div element to display the character count
const countDiv = document.createElement('div');
countDiv.style.position = 'fixed';
countDiv.style.backgroundColor = 'black';
countDiv.style.color = 'white';
countDiv.style.padding = '0px';

// Append the countDiv to the document body
document.body.appendChild(countDiv);

// Function to update the countDiv position and content based on the mouse cursor position
function updateCountDivPosition(event) {
  console.log(event);
  const x = event.clientX - window.scrollX;
  const y = event.clientY - window.scrollY;
  countDiv.style.left = `${x + 10}px`; // Add 10 pixels offset to the right of the cursor
  countDiv.style.top = `${y}px`;

  // Adjust the countDiv position based on the scroll position
  countDiv.style.transform = `translate(${window.pageXOffset}px, ${window.pageYOffset}px)`;
}

// Function to update the countDiv content with the number of highlighted characters
function updateCharacterAndWordCount() {
  const selectedText = window.getSelection().toString();
  const charCount = selectedText.length;
  
  // Count the number of words in the selected text
  const wordCount = Math.floor(selectedText.trim().split(/\s+/).length);
  
  countDiv.textContent = `C:${charCount} | W:${wordCount}`;
}

// Event listeners for mousemove and selectionchange events
document.addEventListener('mousemove', updateCountDivPosition);
document.addEventListener('scroll', updateCountDivPosition);
document.addEventListener('selectionchange', updateCharacterAndWordCount);
