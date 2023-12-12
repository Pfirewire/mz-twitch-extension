const sidebarCollapseToggleBtn = document.querySelector('.collapse-toggle').querySelector('button');
const showMoreBtn = document.querySelector('.side-nav-show-more-toggle__button').querySelector('button');
let userPrefOpen = false;

if(!showMoreBtn) {
    sidebarCollapseToggleBtn.click();
    userPrefOpen = true;
}
showMoreBtn.click();
if(!userPrefOpen) sidebarCollapseToggleBtn.click();