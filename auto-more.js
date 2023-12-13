const startingScreenWidth = window.innerWidth;

if(startingScreenWidth < 1200) {
    console.log("Unable to use this extension, window is less than 1200px");
} else {
    const sidebarCollapseToggleBtn = document.querySelector('.collapse-toggle').querySelector('button');
    let isShowMoreOnScreen = isElTruthy('.side-nav-show-more-toggle__button');
    const userPrefOpen = !!document.querySelector('.side-nav__title');
    let isSidePanelOpen = userPrefOpen;

    function isElTruthy(query) {
        return !!document.querySelector(query)
    }
    function openSidebarIfClosed() {
        if (!isSidePanelOpen) {
            sidebarCollapseToggleBtn.click();
        }
    }
    function showMoreIfAble() {
        if (isShowMoreOnScreen) {
            const showMoreBtn = document.querySelector('.side-nav-show-more-toggle__button').querySelector('button');
            showMoreBtn.click();
            if (!userPrefOpen) sidebarCollapseToggleBtn.click();
        } else {
            isSidePanelOpen = !!document.querySelector('.side-nav__title');
            checkForLoadedBtns();
        }
    }

    function checkForLoadedBtns() {
        setTimeout(() => {
            openSidebarIfClosed();
            isShowMoreOnScreen = isElTruthy('.side-nav-show-more-toggle__button');
            showMoreIfAble();
        }, 100);
    }

    checkForLoadedBtns();
}
