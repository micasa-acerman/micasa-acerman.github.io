$(function() {
    // Sticky menu
    window.onscroll = function() { onScrollListener() };


    let navbar = document.getElementsByClassName("menu")[0];
    let sticky = navbar.offsetTop;

    function onScrollListener() {
        if (window.pageYOffset > sticky) {
            navbar.classList.add("menu-sticky");
            $('body').css('paddingTop', $('.menu').height() + 'px');
        } else {
            navbar.classList.remove("menu-sticky");
            $('body').css('paddingTop', 0);
        }
        if (window.pageYOffset < 400) {
            $('#scrollup').stop(true, true).fadeOut(1000);
        } else {
            $('#scrollup').stop(true, true).fadeIn(1000);
        }
    }

    // ScrollUp
    $("#scrollup").click(function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })


    $('.dropdown').hover(function() {
        let inner = $(this).find('.dropdown__inner')
        inner.stop(true, true).slideDown(100);
    }, function() {
        let inner = $(this).find('.dropdown__inner')
        inner.stop(true, true).slideUp(100);
    });

    // Searcbar
    $('.searchbar-toggle').click(function(e) {
        let target = $(this).attr("data-target");
        if (target)
            $(target).fadeToggle();
    })

    // Mobile menu
    $("#menu").mmenu({
        "extensions": [
            "pagedim-black",
            "theme-dark"
        ],
        "navbar": {
            "title": "Навигационная панель",
            "sticky": false
        },
        "searchfield": {
            'placeholder': "Поиск",
            'noResults': "Нет подходящих вариантов"
        },
        "offCanvas": {
            pageSelector: "#wrapper"
        },
        "navbars": [{
                "position": "top",
                "content": [
                    "searchfield",
                ]
            },
            {
                "position": "top",
                "content": [
                    "prev",
                    "title"
                ]
            },
            {
                "position": "bottom",
                "content": [
                    "<a class='fa fa-envelope' href='#/'></a>",
                    "<a class='fa fa-twitter' href='#/'></a>",
                    "<a class='fa fa-facebook' href='#/'></a>"
                ]
            }
        ]
    });
});