function processLinks() {
    // Get the URL of the current tab
    const currentUrl = window.location.href;
  
    // Find all links on the page that contain "1080p" in the link text
    const links = Array.from(document.querySelectorAll('a'));
  
    // Filter out links that are already open in the current tab
    const filteredLinks = links.filter(link => link.href !== currentUrl);
  
    // Get the URL of the first remaining link that matches the criteria
    const link1080p = filteredLinks.find(link => link.href.includes('pahe.win') && link.innerText.includes('1080p'));
  
    // If we found a link, log its URL to the console and open it in a new tab
    if (link1080p) {
        console.log(`Found link with 1080p: ${link1080p.href}`);
        window.open(link1080p.href, '_blank').focus;
        setTimeout(() => {
            window.close();
        }, timeoutspann);
    }
  
    const linkkwik = filteredLinks.find(link => link.href.includes('kwik.si/f'));
    var timeoutspann=200;
    
    if (linkkwik) {
        console.log(`Found link with kwikcx: ${linkkwik.href}`);
        window.open(linkkwik.href, '_blank').focus;
        setTimeout(() => {
            window.close();
        }, timeoutspann);
        
    }

    
    if (currentUrl.includes('kwik.si')) {
        // Find the button on the page
        const button = document.querySelector('button');

        // If the button exists, simulate a click on it
        if (button) {
            button.click();
            setTimeout(() => {
                window.close();
            }, 5000);
        }
    }

   
}

// Call the function once when the page has finished loading
window.addEventListener('load', processLinks);
