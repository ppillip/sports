openPOP = function (theURL, pageName, theWidth, theHeight, scollbarsYN) { //v2.0
    var screen_width = parent.screen.width;
    var screen_height = parent.screen.height;
    w_top = (screen_width - theWidth) / 2;          // 화면 가운데 띄우기(가로)
    h_left = (screen_height - theHeight) / 2;           // 화면 가운데 띄우기(세로)

    window.open(theURL, pageName, 'width=' + theWidth + ', height=' + theHeight + ', top=' + w_top + ', left=' + h_left + ', toolbar=no, location=no, directories=no, status=no, menubar=no, resizable=no, scrollbars=' + scollbarsYN + ', copyhistory=no');
};
