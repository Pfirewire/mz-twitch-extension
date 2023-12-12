console.log('auto-more.js loaded');
setTimeout(() => {
    console.log('Inside auto-more.js');
    const sidebarCollapseToggleBtn = document.querySelector('.collapse-toggle').querySelector('button');
    console.log(sidebarCollapseToggleBtn);
    let showMoreDiv = !!document.querySelector('.side-nav-show-more-toggle__button');
    console.log(showMoreDiv);
    console.log(!showMoreDiv);
    let userPrefOpen = true;

    if(!showMoreDiv) {
        console.log('!showMoreDiv is false, opening sidebar');
        sidebarCollapseToggleBtn.click();
        userPrefOpen = false;
        console.log(`userPrefOpen is now: ${userPrefOpen}`);
    }
    showMoreDiv = document.querySelector('.side-nav-show-more-toggle__button');
    const showMoreBtn = showMoreDiv.querySelector('button');
    showMoreBtn.click();
    if(!userPrefOpen) sidebarCollapseToggleBtn.click();
}, 1000);