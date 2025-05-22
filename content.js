function processLinks() {

    const currentUrl = window.location.href;
    const links = Array.from(document.querySelectorAll('a'));
    const filteredLinks = links.filter(link => link.href !== currentUrl);
    let selectedLink = null;

    // Try to find a 1080p link first
    selectedLink = filteredLinks.find(link =>
        link.href.includes('pahe.win') && link.innerText.includes('1080p')
    );

    // If 1080p not found, try to find a 720p link
    if (!selectedLink) {
        selectedLink = filteredLinks.find(link =>
            link.href.includes('pahe.win') && link.innerText.includes('720p')
        );
    }

    // If 720p not found, try to find a 480p link
    if (!selectedLink) {
        selectedLink = filteredLinks.find(link =>
            link.href.includes('pahe.win') && link.innerText.includes('480p')
        );
    }
    var foundlinkkwik = filteredLinks.find(link => link.href.includes('kwik.si/f'));

    const timeoutspann = 1000;

    if (selectedLink) {
        console.log(`Found link with 1080p: ${selectedLink.href}`);
        window.open(selectedLink.href, '_blank').focus;
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


    if (currentUrl.includes('pahe.win')) {
        setInterval(() => {
            foundlinkkwik = filteredLinks.find(link => link.href.includes('kwik.si/f'));
            if (foundlinkkwik) {
                console.log(`Found link with kwikcx: ${foundlinkkwik.href}`);
                window.open(foundlinkkwik.href, '_blank').focus;
                setTimeout(() => {
                    window.close();
                }, timeoutspann);
            }
            else {
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
