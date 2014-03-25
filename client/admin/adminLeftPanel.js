
$.throttle_delay = 350;

// The rate at which the menu expands revealing child elements on click
$.menu_speed = 235;

// Note: You will also need to change this variable in the "variable.less" file.
$.navbar_height = 49;

/*
 * APP DOM REFERENCES
 * Description: Obj DOM reference, please try to avoid changing these
 * 여기를 핸들러로 사용하는 아이디어는 좋은데 실제로 미티어가 랜더링하는 시점이 맞지 않아서 어렵다
 */
$.root_ = $('body');
$.left_panel = $('#left-panel');
$.shortcut_dropdown = $('#shortcut');
$.bread_crumb = $('#ribbon ol.breadcrumb');

// desktop or mobile
$.device = null;

/*
 * APP CONFIGURATION
 * Description: Enable / disable certain theme features here
 */
$.navAsAjax = false; // Your left nav in your app will no longer fire ajax calls

// Please make sure you have included "jarvis.widget.js" for this below feature to work
$.enableJarvisWidgets = true;

// Warning: Enabling mobile widgets could potentially crash your webApp if you have too many
// 			widgets running at once (must have $.enableJarvisWidgets = true)
$.enableMobileWidgets = false;


/*
 * DETECT MOBILE DEVICES
 * Description: Detects mobile device - if any of the listed device is detected
 * a class is inserted to $('body') and the variable $.device is decleard.
 */

/* so far this is covering most hand held devices */
var ismobile = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));

if (!ismobile) {
    // Desktop
    $('body').addClass("desktop-detected");
    $.device = "desktop";
} else {
    // Mobile
    $('body').addClass("mobile-loadURLdetected");
    $.device = "mobile";

    // Removes the tap delay in idevices
    // dependency: js/plugin/fastclick/fastclick.js
    //FastClick.attach(document.body);
}

/* ~ END: CHECK MOBILE DEVICE */

/*
 * DOCUMENT LOADED EVENT
 * Description: Fire when DOM is ready
 */

$(document).ready(function() {

    // SHOW & HIDE MOBILE SEARCH FIELD
    $('#search-mobile').click(function() {
        $('body').addClass('search-mobile');
    });

    $('#cancel-search-js').click(function() {
        $('body').removeClass('search-mobile');
    });

/*
    $('button[data-loading-text]').on('click', function() {
        var btn = $(this)
        btn.button('loading')
        setTimeout(function() {
            btn.button('reset')
        }, 3000)
    });
*/

    // NOTIFICATION IS PRESENT

    window.notification_check = function() {
        $this = $('#activity > .badge');

        if (parseInt($this.text()) > 0) {
            $this.addClass("bg-color-red bounceIn animated")
        }
    };

    notification_check();

    // RESET WIDGETS 각자 화면에서 구현
    /*
     $('#refresh').click(function(e) {
     $.SmartMessageBox({
     title : "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
     content : "Would you like to RESET all your saved widgets and clear LocalStorage?",
     buttons : '[No][Yes]'
     }, function(ButtonPressed) {
     if (ButtonPressed == "Yes" && localStorage) {
     localStorage.clear();
     location.reload();
     }

     });
     e.preventDefault();
     });
     */

    // LOGOUT BUTTON
    $('#logout a').click(function(e) {
        //get the link
        var $this = $(this);
        $.loginURL = $this.attr('href');
        $.logoutMSG = $this.data('logout-msg');

        // ask verification
        $.SmartMessageBox({
            title : "<i class='fa fa-sign-out txt-color-orangeDark'></i> Logout <span class='txt-color-orangeDark'><strong>" + $('#show-shortcut').text() + "</strong></span> ?",
            content : $.logoutMSG || "You can improve your security further after logging out by closing this opened browser",
            buttons : '[No][Yes]'

        }, function(ButtonPressed) {
            if (ButtonPressed == "Yes") {
                $('body').addClass('animated fadeOutUp');
                setTimeout(logout, 1000)
            }

        });
        e.preventDefault();
    });

    /*
     * LOGOUT ACTION
     */

    window.logout = function() {
        window.location = $.loginURL;
    }

    /*
     * SHORTCUTS
     */

    // SHORT CUT (buttons that appear when clicked on user name)
    $('#shortcut').find('a').click(function(e) {

        e.preventDefault();

        window.location = $(this).attr('href');
        setTimeout(shortcut_buttons_hide, 300);

    });

    // SHORTCUT buttons goes away if mouse is clicked outside of the area
    $(document).mouseup(function(e) {
        if (!$('#shortcut').is(e.target)// if the target of the click isn't the container...
            && $('#shortcut').has(e.target).length === 0) {
            shortcut_buttons_hide()
        }
    });

    // SHORTCUT ANIMATE HIDE
    window.shortcut_buttons_hide = function() {
        $('#shortcut').animate({
            height : "hide"
        }, 300, "easeOutCirc");
        $('body').removeClass('shortcut-on');

    }

    // SHORTCUT ANIMATE SHOW
    window.shortcut_buttons_show = function() {
        $('#shortcut').animate({
            height : "show"
        }, 200, "easeOutCirc")
        $('body').addClass('shortcut-on');
    }

});

/*
 * RESIZER WITH THROTTLE
 * Source: http://benalman.com/code/projects/jquery-resize/examples/resize/
 */

(function($, window, undefined) {

    var elems = $([]), jq_resize = $.resize = $.extend($.resize, {}), timeout_id, str_setTimeout = 'setTimeout', str_resize = 'resize', str_data = str_resize + '-special-event', str_delay = 'delay', str_throttle = 'throttleWindow';

    jq_resize[str_delay] = $.throttle_delay;

    jq_resize[str_throttle] = true;

    $.event.special[str_resize] = {

        setup : function() {
            if (!jq_resize[str_throttle] && this[str_setTimeout]) {
                return false;
            }

            var elem = $(this);
            elems = elems.add(elem);
            $.data(this, str_data, {
                w : elem.width(),
                h : elem.height()
            });
            if (elems.length === 1) {
                loopy();
            }
        },
        teardown : function() {
            if (!jq_resize[str_throttle] && this[str_setTimeout]) {
                return false;
            }

            var elem = $(this);
            elems = elems.not(elem);
            elem.removeData(str_data);
            if (!elems.length) {
                clearTimeout(timeout_id);
            }
        },

        add : function(handleObj) {
            if (!jq_resize[str_throttle] && this[str_setTimeout]) {
                return false;
            }
            var old_handler;

            function new_handler(e, w, h) {
                var elem = $(this), data = $.data(this, str_data);
                data.w = w !== undefined ? w : elem.width();
                data.h = h !== undefined ? h : elem.height();

                old_handler.apply(this, arguments);
            };
            if ($.isFunction(handleObj)) {
                old_handler = handleObj;
                return new_handler;
            } else {
                old_handler = handleObj.handler;
                handleObj.handler = new_handler;
            }
        }
    };

    function loopy() {
        timeout_id = window[str_setTimeout](function() {
            elems.each(function() {
                var elem = $(this), width = elem.width(), height = elem.height(), data = $.data(this, str_data);
                if (width !== data.w || height !== data.h) {
                    elem.trigger(str_resize, [data.w = width, data.h = height]);
                }

            });
            loopy();

        }, jq_resize[str_delay]);

    };

})(jQuery, this);

/*
 * NAV OR #LEFT-BAR RESIZE DETECT
 * Description: changes the page min-width of #CONTENT and NAV when navigation is resized.
 * This is to counter bugs for min page width on many desktop and mobile devices.
 * Note: This script uses JSthrottle technique so don't worry about memory/CPU usage
 */

// Fix page and nav height
window.nav_page_height = function() {

    //alert('nav_page_height');

    var setHeight = $('#main').height();
    //menuHeight = $('#left-panel').height();

    var windowHeight = $(window).height() - $.navbar_height;
    //set height

    if (setHeight > windowHeight) {// if content height exceedes actual window height and menuHeight
        $('#left-panel').css('min-height', setHeight + 'px');
        $('body').css('min-height', setHeight + $.navbar_height + 'px');

    } else {
        $('#left-panel').css('min-height', windowHeight + 'px');
        $('body').css('min-height', windowHeight + 'px');
    }
}

$('#main').resize(function() {
    nav_page_height();
    check_if_mobile_width();
})


window.check_if_mobile_width = function() {
    if ($(window).width() < 979) {
        $('body').addClass('mobile-view-activated')
    } else if ($('body').hasClass('mobile-view-activated')) {
        $('body').removeClass('mobile-view-activated');
    }
}

/* ~ END: NAV OR #LEFT-BAR RESIZE DETECT */

/*
 * DETECT IE VERSION
 * Description: A short snippet for detecting versions of IE in JavaScript
 * without resorting to user-agent sniffing
 * RETURNS:
 * If you're not in IE (or IE version is less than 5) then:
 * //ie === undefined
 *
 * If you're in IE (>=5) then you can determine which version:
 * // ie === 7; // IE7
 *
 * Thus, to detect IE:
 * // if (ie) {}
 *
 * And to detect the version:
 * ie === 6 // IE6
 * ie > 7 // IE8, IE9 ...
 * ie < 9 // Anything less than IE9
 */

// TODO: delete this function later on - no longer needed (?)
var ie = ( function() {

    var undef, v = 3, div = document.createElement('div'), all = div.getElementsByTagName('i');

    while (div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', all[0]);

    return v > 4 ? v : undef;

}()); // do we need this?

/* ~ END: DETECT IE VERSION */

/*
 * CUSTOM MENU PLUGIN
 */

$.fn.extend({

    //pass the options variable to the function
    jarvismenu : function(options) {

        var defaults = {
            accordion : 'true',
            speed : 200,
            closedSign : '[+]',
            openedSign : '[-]'
        };

        // Extend our default options with those provided.
        var opts = $.extend(defaults, options);
        //Assign current element to variable, in this case is UL element
        var $this = $(this);

        $this.data("jarvismenu",true); //기존에 존재 하는지 여부 체크

        //add a mark [+] to a multilevel menu
        $this.find("li").each(function() {
            if ($(this).find("ul").size() != 0) {
                //add the multilevel sign next to the link
                $(this).find("a:first").append("<b class='collapse-sign'>" + opts.closedSign + "</b>");

                //avoid jumping to the top of the page when the href is an #
                if ($(this).find("a:first").attr('href') == "#") {
                    $(this).find("a:first").click(function() {
                        return false;
                    });
                }
            }
        });

        //open active level
        $this.find("li.active").each(function() {
            $(this).parents("ul").slideDown(opts.speed);
            $(this).parents("ul").parent("li").find("b:first").html(opts.openedSign);
            $(this).parents("ul").parent("li").addClass("open")
        });

        $this.find("li a").click(function() {

            if ($(this).parent().find("ul").size() != 0) {

                if (opts.accordion) {
                    //Do nothing when the list is open
                    if (!$(this).parent().find("ul").is(':visible')) {
                        parents = $(this).parent().parents("ul");
                        visible = $this.find("ul:visible");
                        visible.each(function(visibleIndex) {
                            var close = true;
                            parents.each(function(parentIndex) {
                                if (parents[parentIndex] == visible[visibleIndex]) {
                                    close = false;
                                    return false;
                                }
                            });
                            if (close) {
                                if ($(this).parent().find("ul") != visible[visibleIndex]) {
                                    $(visible[visibleIndex]).slideUp(opts.speed, function() {
                                        $(this).parent("li").find("b:first").html(opts.closedSign);
                                        $(this).parent("li").removeClass("open");
                                    });

                                }
                            }
                        });
                    }
                }// end if
                if ($(this).parent().find("ul:first").is(":visible") && !$(this).parent().find("ul:first").hasClass("active")) {
                    $(this).parent().find("ul:first").slideUp(opts.speed, function() {
                        $(this).parent("li").removeClass("open");
                        $(this).parent("li").find("b:first").delay(opts.speed).html(opts.closedSign);
                    });

                } else {
                    $(this).parent().find("ul:first").slideDown(opts.speed, function() {
                        /*$(this).effect("highlight", {color : '#616161'}, 500); - disabled due to CPU clocking on phones*/
                        $(this).parent("li").addClass("open");
                        $(this).parent("li").find("b:first").delay(opts.speed).html(opts.openedSign);
                    });
                } // end else
            } // end if
        });
    } // end function
});

/* ~ END: CUSTOM MENU PLUGIN */

/*
 * ELEMENT EXIST OR NOT
 * Description: returns true or false
 * Usage: $('#myDiv').doesExist();
 */

jQuery.fn.doesExist = function() {
    return jQuery(this).length > 0;
};

/* ~ END: ELEMENT EXIST OR NOT */

/*
 * FULL SCREEN FUNCTION
 */

// Find the right method, call on correct element
window.launchFullscreen = function(element) {

    if (!$('body').hasClass("full-screen")) {

        $('body').addClass("full-screen");

        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }

    } else {

        $('body').removeClass("full-screen");

        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }

    }

}

/*
 * ~ END: FULL SCREEN FUNCTION
 */

/*
 * INITIALIZE FORMS
 * Description: Select2, Masking, Datepicker, Autocomplete
 */



/*
 * INITIALIZE JARVIS WIDGETS
 */

// Setup Desktop Widgets
function setup_widgets_desktop() {

    if ($.fn.jarvisWidgets && $.enableJarvisWidgets) {

        $('#widget-grid').jarvisWidgets({

            grid : 'article',
            widgets : '.jarviswidget',
            localStorage : true,
            deleteSettingsKey : '#deletesettingskey-options',
            settingsKeyLabel : 'Reset settings?',
            deletePositionKey : '#deletepositionkey-options',
            positionKeyLabel : 'Reset position?',
            sortable : true,
            buttonsHidden : false,
            // toggle button
            toggleButton : true,
            toggleClass : 'fa fa-minus | fa fa-plus',
            toggleSpeed : 200,
            onToggle : function() {
            },
            // delete btn
            deleteButton : true,
            deleteClass : 'fa fa-times',
            deleteSpeed : 200,
            onDelete : function() {
            },
            // edit btn
            editButton : true,
            editPlaceholder : '.jarviswidget-editbox',
            editClass : 'fa fa-cog | fa fa-save',
            editSpeed : 200,
            onEdit : function() {
            },
            // color button
            colorButton : true,
            // full screen
            fullscreenButton : true,
            fullscreenClass : 'fa fa-resize-full | fa fa-resize-small',
            fullscreenDiff : 3,
            onFullscreen : function() {
            },
            // custom btn
            customButton : false,
            customClass : 'folder-10 | next-10',
            customStart : function() {
                alert('Hello you, this is a custom button...')
            },
            customEnd : function() {
                alert('bye, till next time...')
            },
            // order
            buttonOrder : '%refresh% %custom% %edit% %toggle% %fullscreen% %delete%',
            opacity : 1.0,
            dragHandle : '> header',
            placeholderClass : 'jarviswidget-placeholder',
            indicator : true,
            indicatorTime : 600,
            ajax : true,
            timestampPlaceholder : '.jarviswidget-timestamp',
            timestampFormat : 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
            refreshButton : true,
            refreshButtonClass : 'fa fa-refresh',
            labelError : 'Sorry but there was a error:',
            labelUpdated : 'Last Update:',
            labelRefresh : 'Refresh',
            labelDelete : 'Delete widget:',
            afterLoad : function() {
            },
            rtl : false, // best not to toggle this!
            onChange : function() {

            },
            onSave : function() {

            },
            ajaxnav : $.navAsAjax // declears how the localstorage should be saved

        });

    }

}

// Setup Desktop Widgets
function setup_widgets_mobile() {

    if ($.enableMobileWidgets && $.enableJarvisWidgets) {
        setup_widgets_desktop();
    }

}

/* ~ END: INITIALIZE JARVIS WIDGETS */

/*
 * GOOGLE MAPS
 * description: Append google maps to head dynamically
 */

var gMapsLoaded = false;
window.gMapsCallback = function() {
    gMapsLoaded = true;
    $(window).trigger('gMapsLoaded');
}
window.loadGoogleMaps = function() {
    if (gMapsLoaded)
        return window.gMapsCallback();
    var script_tag = document.createElement('script');
    script_tag.setAttribute("type", "text/javascript");
    script_tag.setAttribute("src", "http://maps.google.com/maps/api/js?sensor=false&callback=gMapsCallback");
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
}
/* ~ END: GOOGLE MAPS */

/*
 * LOAD SCRIPTS
 * Usage:
 * Define function = myPrettyCode ()...
 * loadScript("js/my_lovely_script.js", myPrettyCode);
 */

var jsArray = {};


function checkURL() {

    //get the url by removing the hash
    var url = location.hash.replace(/^#/, '');

    container = $('#content');
    // Do this if url exists (for page refresh, etc...)
    if (url) {
        // remove all active class
        $('nav li.active').removeClass("active");
        // match the url and add the active class
        $('nav li:has(a[href="' + url + '"])').addClass("active");
        var title = ($('nav a[href="' + url + '"]').attr('title'))

        // change page title from global var
        document.title = (title || document.title);
        //console.log("page title: " + document.title);

        // parse url to jquery
        loadURL(url + location.search, container);
    } else {

        // grab the first URL from nav
        var $this = $('nav > ul > li:first-child > a[href!="#"]');

        //update hash
        window.location.hash = $this.attr('href');

    }

}

// LOAD AJAX PAGES

// UPDATE BREADCRUMB
function drawBreadCrumb() {

    console.log(drawBreadCrumb);

    var nav_elems = $('nav li.active > a'), count = nav_elems.length;

    //console.log("breadcrumb")
    $('#ribbon ol.breadcrumb').empty();
    $('#ribbon ol.breadcrumb').append($("<li>Home</li>"));
    nav_elems.each(function() {
        $('#ribbon ol.breadcrumb').append($("<li></li>").html($.trim($(this).clone().children(".badge").remove().end().text())));
        // update title when breadcrumb is finished...
        if (!--count) document.title = $('#ribbon ol.breadcrumb').find("li:last-child").text();
    });

}

/* ~ END: APP AJAX REQUEST SETUP */

/*
 * PAGE SETUP
 * Description: fire certain scripts that run through the page
 * to check for form elements, tooltip activation, popovers, etc...
 */
function pageSetUp() {

    if ($.device === "desktop"){
        // is desktop

        // activate tooltips
        $("[rel=tooltip]").tooltip();

        // activate popovers
        $("[rel=popover]").popover();

        // activate popovers with hover states
        $("[rel=popover-hover]").popover({
            trigger : "hover"
        });

        // activate inline charts
        runAllCharts();

        // setup widgets
        setup_widgets_desktop();

        //setup nav height (dynamic)
        nav_page_height();

        // run form elements
        //runAllForms();

    } else {

        // is mobile

        // activate popovers
        $("[rel=popover]").popover();

        // activate popovers with hover states
        $("[rel=popover-hover]").popover({
            trigger : "hover"
        });

        // activate inline charts
        runAllCharts();

        // setup widgets
        setup_widgets_mobile();

        //setup nav height (dynamic)
        nav_page_height();

        // run form elements
        //runAllForms();

    }

}

// Keep only 1 active popover per trigger - also check and hide active popover if user clicks on document
$('body').on('click', function(e) {
    $('[rel="popover"]').each(function() {
        //the 'is' for buttons that trigger popups
        //the 'has' for icons within a button that triggers a popup
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});

Template.adminLeftPanel.rendered = function(){

    $('nav').resize(function() {
        nav_page_height();
    });

    console.log( 'before', $('nav ul').data( "jarvismenu" ) );

    $('nav ul').jarvismenu({
        accordion : true,
        speed : 235,
        closedSign : '<em class="fa fa-expand-o"></em>',
        openedSign : '<em class="fa fa-collapse-o"></em>'
    });

    console.log( 'before', $('nav ul').data( "jarvismenu" ) );


    if ($("[rel=tooltip]").length) {
        $("[rel=tooltip]").tooltip();
    }

    //TODO: was moved from window.load due to IE not firing consist
    nav_page_height();

    /* 현재 Template 에 맞게 메뉴를 열기 */
    currentTemplate = $("a[href^='/"+Router.current().template+"']");
    currentTemplate && currentTemplate.closest('li').addClass('active')
      .closest('ul').attr('style', 'display: block')
      .closest('li').addClass('open');
};

Template.adminLeftPanel.events({
    'click #show-shortcut' : function(e,tmpl) {
        if ($('#shortcut').is(":visible")) {
            $('#shortcut').animate({
                height : "hide"
            }, 300, "easeOutCirc");
            $('body').removeClass('shortcut-on');
        } else {
            $('#shortcut').animate({
                height : "show"
            }, 200, "easeOutCirc")
            $('body').addClass('shortcut-on');
        }
        e.target.preventDefault();
    }
    ,
    'click .minifyme' : function(e) {
        $('body').toggleClass("minified");
        $(e.target).effect("highlight", {}, 500);
        e.preventDefault();
    }
    ,
    'click nav>ul>li' : function(e){
        console.log(e.target.preventDefault);
    }

});

