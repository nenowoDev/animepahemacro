function processLinks() {
    
    const currentUrl = window.location.href;  
    const links = Array.from(document.querySelectorAll('a'));  
    const filteredLinks = links.filter(link => link.href !== currentUrl);
    const foundlink1080p = filteredLinks.find(link => link.href.includes('pahe.win') && link.innerText.includes('1080p'));
    const foundlinkkwik = filteredLinks.find(link => link.href.includes('kwik.si/f'));

    const timeoutspann=1000;

    if (foundlink1080p) {
        console.log(`Found link with 1080p: ${foundlink1080p.href}`);
        window.open(foundlink1080p.href, '_blank').focus;
        setTimeout(() => {
            window.close();
        }, timeoutspann);
    }
     
    
    if (foundlinkkwik) {
        console.log(`Found link with kwikcx: ${foundlinkkwik.href}`);
        window.open(foundlinkkwik.href, '_blank').focus;
        setTimeout(() => {
            window.close();
        }, timeoutspann); 
        
    }


    if(currentUrl.href.includes('pahe.win')){
        setInterval(() => {
            foundlinkkwik = filteredLinks.find(link => link.href.includes('kwik.si/f'));
            if (foundlinkkwik) {
                clearInterval(intervalId);
                console.log('Link found:', linkkwik.href);
            } else {
                console.log('Link not found. Retrying in 5 seconds...');
            }
        }, 5000); 
    }

    //download
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
