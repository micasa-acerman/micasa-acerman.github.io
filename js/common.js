$(function() {
    // Меню
    $('.top-menu > li').click(function() {
        $('.top-menu > li').removeClass('top-item-opened');
        $(this).addClass('top-item-opened');
        return false;
    });
    // Социальные сети
    $('#social-toggle').click(function() {
        const parent = $(this).parent();
        const el = parent.find('.social-bar-links');
        const contacts = parent.find('.social-bar-contact');

        if (el.is(':visible')) {
            parent.removeClass('social-bar--opened');
            $('.help, .order-status').fadeIn();
        } else {
            parent.addClass('social-bar--opened');
            $('.help, .order-status').fadeOut();
        }
        el.toggle('slide');
        contacts.toggle('slide', function() {

        });
    });
    // Выпадающие меню
    $('.toolbar-dropdown')
        .on('mouseout', function() {
            $(this).removeClass('toolbar-dropdown--opened');
        }).on('mouseover', function() {
            $(this).addClass('toolbar-dropdown--opened');
        });

    // Кнопки корзины
    $('.prev').click(function() {
        const input_count = $(this).parent().find('.count');
        const c = parseInt(input_count.val());
        if (c != 1) {
            input_count.val(c - 1);
        }
    });
    $('.next').click(function() {
        const input_count = $(this).parent().find('.count');
        const c = parseInt(input_count.val());
        input_count.val(c + 1);
    });

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
    $('.searchbar-mobile-toggle').click(function(e) {
        let target = $(this).attr("data-target");
        if (target)
            $(target).fadeToggle();
    })

    // Полная версия
    $('#searchbar__back').click(function() {
        $('#topbar__search').fadeOut('fast', function() {
            $('#topbar__default').fadeIn('fast');
        })
    })
    $('#search-toggle').click(function() {
        $('#topbar__default').fadeOut('fast', function() {
            $('#topbar__search').fadeIn('fast');
        })
    })

    // Autocomplete
    var countries = ["Каталог", "Тест", "Минишопоголик"];

    function autocomplete(inp, arr) {
        var currentFocus;
        inp.addEventListener("input", function(e) {
            var a, b, i, val = this.value;
            closeAllLists();
            if (!val) { return false; }
            currentFocus = -1;
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            this.parentNode.appendChild(a);
            for (i = 0; i < arr.length; i++) {
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                    b = document.createElement("DIV");
                    b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                    b.innerHTML += arr[i].substr(val.length);
                    b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                    b.addEventListener("click", function(e) {
                        inp.value = this.getElementsByTagName("input")[0].value;
                        closeAllLists();
                    });
                    a.appendChild(b);
                }
            }
        });

        inp.addEventListener("keydown", function(e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
                currentFocus++;
                addActive(x);
            } else if (e.keyCode == 38) {
                currentFocus--;
                addActive(x);
            } else if (e.keyCode == 13) {
                e.preventDefault();
                if (currentFocus > -1) {
                    if (x) x[currentFocus].click();
                }
            }
        });

        function addActive(x) {
            if (!x) return false;
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            x[currentFocus].classList.add("autocomplete-active");
        }

        function removeActive(x) {
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
            }
        }

        function closeAllLists(elmnt) {
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (elmnt != x[i] && elmnt != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }
        document.addEventListener("click", function(e) {
            closeAllLists(e.target);
        });
    }

    autocomplete(document.getElementById("msearch-input"), countries);
    autocomplete(document.getElementById("search-input"), countries);

    // Слайдер
    $("#fbanner").owlCarousel({
        items: 1,
        margin: 2
    });
    $("#mbanner").owlCarousel({
        items: 1,
        margin: 20,
        dots: true,
    });
    $('#reviews').owlCarousel({
        margin: 20,
        dots: false,
        loop: true,
        nav: true,
        navigation: true,
        navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            }
        }
    });

    $('.banner-topbar__close').click(function() {
        $(this).parent().slideUp();
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