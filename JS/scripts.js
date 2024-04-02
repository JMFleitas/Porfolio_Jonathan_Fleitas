import mouseBlend from "./app.js"
import MenuMobile from "./menu_mobile.js";
import scrollSpy from "./observer.js";

document.addEventListener("DOMContentLoaded", e => {
    mouseBlend();
    MenuMobile(".cta-menu-mobile", ".nav-mobile", ".nav-mobile .a");
    scrollSpy();
})