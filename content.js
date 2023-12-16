// content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'displayAnswer') {
      // Display the answer on the page (modify this based on your video player and subtitle structure)
      const answerDiv = document.createElement('div');
      answerDiv.innerHTML = `<p><strong>Answer:</strong> Video ID: ${request.videoId}</p>`;
      document.body.appendChild(answerDiv);
    }
  });
  