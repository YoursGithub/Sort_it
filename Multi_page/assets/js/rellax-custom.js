

/*==========
----- JS INDEX -----
1.Rellax
==========*/

var rellax = new Rellax(".rellax");

jQuery(window).on("load resize", function() {
    var win = $(this); //this = window
    if (win.width() <= 991) {
        rellax.destroy();
    } else {
        rellax.refresh();
    }
});