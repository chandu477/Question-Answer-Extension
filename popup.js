// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const askButton = document.getElementById('askButton');
    const questionInput = document.getElementById('questionInput');
    const answerContainer = document.getElementById('answerContainer');
  
    askButton.addEventListener('click', function() {
      const question = questionInput.value;
      chrome.runtime.sendMessage({ type: 'askQuestion', question });
    });
  
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      if (request.type === 'displayAnswer') {
        answerContainer.innerHTML = `<p><strong>Answer:</strong> ${request.answer}</p>`;
      }
    });
  });
  