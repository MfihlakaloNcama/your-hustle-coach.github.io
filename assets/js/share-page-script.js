  //  JavaScript for sharing blogs stars here
    // Get the meta tag values
    var title = document.querySelector('meta[property="og:title"]').content;
    var description = document.querySelector('meta[property="og:description"]').content;
    var image = document.querySelector('meta[property="og:image"]').content;
    var url = document.querySelector('meta[property="og:url"]').content;

    // Share on WhatsApp
    document.getElementById('whatsappShareBtn').addEventListener('click', function() {
      var whatsappUrl = 'whatsapp://send?text=' + encodeURIComponent('*' + title + '*\n\n' + url + '\n\n');
      window.open(whatsappUrl, '_blank');
    });

    // Share on LinkedIn
    document.getElementById('linkedinShareBtn').addEventListener('click', function() {
      var linkedinUrl = 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(title) + '&summary=' + encodeURIComponent(description) + '&source=' + encodeURIComponent(document.location.origin) + '&thumbnailUrl=' + encodeURIComponent(image);
      window.open(linkedinUrl, '_blank');
    });

    // Share on Twitter
    document.getElementById('twitterShareBtn').addEventListener('click', function() {
      var hashtags = 'yourhustlecoach';
      var twitterUrl = 'https://twitter.com/intent/tweet?url=' + '&text=' + encodeURIComponent(title + '\n\n' + description + '\n\n' + url + '\n\n') + '&hashtags=' + encodeURIComponent(hashtags);
      window.open(twitterUrl, '_blank');
    });

    
const copyLinkIcon = document.getElementById('copy-link-icon');
const copyLinkNotification = document.getElementById('copy-link-notification');

copyLinkIcon.addEventListener('click', () => {
  const currentURL = window.location.href;
  const tempInput = document.createElement('input');
  tempInput.value = currentURL;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  copyLinkIcon.classList.add('copied');
  setTimeout(() => {
    copyLinkIcon.classList.remove('copied');
  }, 2000);

  copyLinkNotification.classList.add('show');
  setTimeout(() => {
    copyLinkNotification.classList.remove('show');
  }, 2000);
});