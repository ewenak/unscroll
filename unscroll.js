var endread_element = null
var reels_element = null

var adjustScrollPosition = () => {
    var imageElement = document.querySelector('img[src="/images/instagram/xig/web/illo-confirm-refresh-light.png"]');
    endread_element = imageElement?.parentElement?.parentElement;
    if(!endread_element) {
    	return;
    }
    var elementRect = endread_element.getBoundingClientRect();

    // Si l'élément sort de la vue par le haut, scroll vers le haut pour qu'il réapparaisse
    if (elementRect.top < 500) {
        window.scrollTo(0, window.scrollY + elementRect.top -500);
    }
}

var remReels = () => {
    reels_link = document.querySelector('a[href="/reels/"]');
    if(reels_link) {
    	reels_link.parentElement.remove();
    }
}

var remExplores = () =>  {
  if (window.location.pathname === '/explore/') {
    let postContainer = document.querySelector('main > :not(nav)');
    if (!!postContainer) {
      postContainer.remove();
    }

    // Gardons l'ancien code pour le cas où
    var proposedPosts = document.querySelectorAll('a[href*="/p/"]');
    if(!!proposedPosts) {
      proposedPosts.forEach(function(link) {
        link.remove();
      });
    }
  }
}

function onPageUpdate() {
  remReels();
  remExplores();
}

const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      onPageUpdate();
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Gestionnaire d'événements pour ajuster la position lors du défilement
document.addEventListener('scroll', adjustScrollPosition);
onPageUpdate();

console.log("Unscroll active")
