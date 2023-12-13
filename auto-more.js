const startingScreenWidth = window.innerWidth;

if(startingScreenWidth < 1200) {
    console.log("Unable to use this extension, window is less than 1200px");
} else {
    const sidebarCollapseToggleBtn = document.querySelector('.collapse-toggle').querySelector('button');
    let isShowMoreOnScreen = !!document.querySelector('.side-nav-show-more-toggle__button');
    const userPrefOpen = !!document.querySelector('.side-nav__title');
    let isSidePanelOpen = userPrefOpen;

    function checkForLoadedBtns() {
        setTimeout(() => {
            if (!isSidePanelOpen) {
                sidebarCollapseToggleBtn.click();
            }
            isShowMoreOnScreen = !!document.querySelector('.side-nav-show-more-toggle__button');
            if (isShowMoreOnScreen) {
                const showMoreBtn = document.querySelector('.side-nav-show-more-toggle__button').querySelector('button');
                showMoreBtn.click();
                if (!userPrefOpen) sidebarCollapseToggleBtn.click();
                return;
            }
            isSidePanelOpen = !!document.querySelector('.side-nav__title');
            return checkForLoadedBtns();
        }, 100);
    }

    checkForLoadedBtns();
}
