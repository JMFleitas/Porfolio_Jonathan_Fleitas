export default function mouseBlend() {
    $(document).ready(function () {

        $('body').on({
            'mousemove': function (e) {
                console.clear();
                let clientX = e.originalEvent.clientX;
                let clientY = e.originalEvent.clientY;

                $('#cursor').css({
                    'left': (clientX - 40) + 'px',
                    'top': (clientY - 40) + 'px',
                })
                $('#cursor').addClass('active')
            }
        })

        $('.a').on({
            'mouseover': function () {
                $('#cursor').addClass('mini')
            },
            'mouseout': function () {
                $('#cursor').removeClass('mini')
            }
        })

    });

    $(window).on("load", function () {
        // Cuando la ventana esté completamente cargada, desplázate automáticamente al principio
        window.scrollTo(0, 0);
    });
}