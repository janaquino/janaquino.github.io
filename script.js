/* Set the width of the side navigation to 250px */
$(document).ready(function(){
    $('#mainContent').fadeTo(3000, 1);
    $('#pageContent').fadeTo(3000, 1);
    $("#education").click(function(){
        $('#educationContent').slideToggle('slow');
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

