// background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'askQuestion') {
      // Send the question to the YouTube Data API (replace API_KEY with your YouTube Data API key)
      const apiKey = 'AIzaSyAdy29uIzUEi_j0MM_sX8sjoZ-aRVgNxhE';
      const apiUrl = 'https://www.googleapis.com/youtube/v3/search';
  
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const videoTitle = tabs[0].title.replace(' - YouTube', '');
  
        fetch(`${apiUrl}?q=${request.question} ${videoTitle}&key=${apiKey}&part=snippet&type=video&maxResults=1`)
          .then(response => response.json())
          .then(data => {
            if (data.items && data.items.length > 0) {
              const videoId = data.items[0].id.videoId;
              chrome.tabs.sendMessage(tabs[0].id, { type: 'displayAnswer', videoId });
            } else {
              chrome.tabs.sendMessage(tabs[0].id, { type: 'displayAnswer', answer: 'No answer found.' });
            }
          })
          .catch(error => console.error('Error:', error));
      });
    }
  });
  