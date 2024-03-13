function processLinks() {
    
    const currentUrl = window.location.href;  
    const links = Array.from(document.querySelectorAll('a'));  
    const filteredLinks = links.filter(link => link.href !== currentUrl);
    const link1080p = filteredLinks.find(link => link.href.includes('pahe.win') && link.innerText.includes('1080p'));
    const linkkwik = filteredLinks.find(link => link.href.includes('kwik.si/f'));

    const timeoutspann=200;

    if (link1080p) {
        console.log(`Found link with 1080p: ${link1080p.href}`);
        window.open(link1080p.href, '_blank').focus;
        setTimeout(() => {
            window.close();
        }, timeoutspann);
    }
  
    
    
    
    if (linkkwik) {
        console.log(`Found link with kwikcx: ${linkkwik.href}`);
        window.open(linkkwik.href, '_blank').focus;
        setTimeout(() => {
            window.close();
        }, timeoutspann);
        
    }

    
    if (currentUrl.includes('kwik.si')) {
        const button = document.querySelector('button');

        if (button) {
            button.click();
            setTimeout(() => {
                window.close();
            }, 5000);
        }
    }

   
}


window.addEventListener('load', processLinks);
