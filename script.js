/* Set the width of the side navigation to 250px */
$(document).ready(function(){
    $('#mainContent').fadeTo(3400, 1, function(){
        $('#firstWord').fadeTo(1000, 1, function(){
           $('#secondWord').fadeTo(1000, 1, function(){
                $('#thirdWord').fadeTo(1000, 1, function(){
                    $(".socialMedia").fadeTo(1000, 1);
                    $(".showLast").fadeTo(1000, 1);

                });
            }); 
        });
    });
    $('#pageContent').fadeTo(3000, 1);
    /* Loading Resume Page */
    $("#objective").click(function(){
        $('#objectiveContent').slideToggle('slow');
    });
    $("#education").click(function(){
        $('#educationContent').slideToggle('slow');
    });
    $("#experience").click(function(){
        $('#experienceContent').slideToggle('slow');
    });
    $("#skills").click(function(){
        $('#skillsContent').slideToggle('slow');
    });
    $("#snapchat").click(function(){
        $('#snapchatInfo').slideToggle('slow');
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

