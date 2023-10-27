function openMobileMenu() {
    let openButton = document.getElementById('button-open-mobile-menu');
    let mobileMenu = document.getElementById('MobileMenu');
    openButton.classList.toggle('hidden');
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.toggle('block');
}

function closeMobileMenu() {
    let openButton = document.getElementById('button-open-mobile-menu');
    let mobileMenu = document.getElementById('MobileMenu');
    mobileMenu.classList.remove('block');
    mobileMenu.classList.toggle('hidden');
    openButton.classList.remove('hidden');
}