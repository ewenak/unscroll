var endread_element = null
var reels_element = null

var adjustScrollPosition = () => {
    var imageElement = document.querySelector('img[src="/images/instagram/xig/web/illo-confirm-refresh-light.png"]');
    endread_element = imageElement.parentElement.parentElement;
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
    reels_element = document.querySelector('a[href="/reels/"]').parentElement;
    if(reels_element) {
    	reels_element.remove();
    }
}

var remExplores = () =>  {
  if (window.location.href === 'https://www.instagram.com/explore/') {
    var proposedPosts = document.querySelectorAll('a[href*="/p/"]');
    if(!proposedPosts) {return}
    proposedPosts.forEach(function(link) {
        link.remove();
    });
}
}

var onPageUpdate = () => {
  remReels();
  remExplores();
}

// Gestionnaire d'événements pour ajuster la position lors du défilement
document.addEventListener('scroll', adjustScrollPosition);
document.addEventListener('DOMNodeInserted', remReels);
document.addEventListener('DOMNodeInserted', remExplores);
onPageUpdate();

console.log("Unscroll active")
