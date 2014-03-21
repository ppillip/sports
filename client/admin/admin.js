

Template.adminLeftPanel.rendered = function(){

    if (!null) {
        $('nav ul').jarvismenu({
            accordion : true,
            speed : $.menu_speed,
            closedSign : '<em class="fa fa-expand-o"></em>',
            openedSign : '<em class="fa fa-collapse-o"></em>'
        });
    } else {
        alert("Error - menu anchor does not exist");
    }

}

/**
 * Created by ppillip on 2014. 3. 21..
 */
