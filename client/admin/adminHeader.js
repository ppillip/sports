Template.adminHeader.events({
    // HIDE MENU
    'click #hide-menu >:first-child > a' : function(e,tmpl) {
        console.log('hiall');
        $('body').toggleClass("hidden-menu");
        e.preventDefault();
    }
    ,'click #activity' : function(e,tmpl) {

        var $this = $(e.target);

        if ($this.find('.badge').hasClass('bg-color-red')) {
            $this.find('.badge').removeClassPrefix('bg-color-');
            $this.find('.badge').text("0");
            // console.log("Ajax call for activity")
        }

        if (!$this.next('.ajax-dropdown').is(':visible')) {
            $this.next('.ajax-dropdown').fadeIn(150);
            $this.addClass('active');
        } else {
            $this.next('.ajax-dropdown').fadeOut(150);
            $this.removeClass('active')
        }

        var mytest = $this.next('.ajax-dropdown').find('.btn-group > .active > input').attr('id');
        //console.log(mytest)

        e.preventDefault();
    }
    ,'change input[name="activity"]' : function() {
        //alert($(this).val())
        var $this = $(this);

        url = $this.attr('id');
        container = $('.ajax-notifications');

        loadURL(url, container);

    }
    ,
    'click button[data-loading-text]' : function(e) {
        alert( 'click button[data-loading-text]' ) ;
        var btn = $(e.target);
        btn.button('loading')
        setTimeout(function() {
            btn.button('reset');
        }, 3000)
    }
})