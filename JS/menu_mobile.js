export default function MenuMobile(ctaMenu, menuMobile, menuLink) {

    document.addEventListener('click', e => {
        if (e.target.matches(`${ctaMenu}`) || e.target.matches(`${ctaMenu} *`)) {
            document.querySelector(ctaMenu).classList.toggle('is-active');
            document.querySelector(menuMobile).classList.toggle('active-menu');
            document.body.classList.toggle('no-scroll');

        }

        if (e.target.matches(`${menuLink}`)) {

            document.querySelector(ctaMenu).classList.remove('is-active');
            document.querySelector(menuMobile).classList.remove('active-menu');
            document.body.classList.remove('no-scroll');

        }
    })

}