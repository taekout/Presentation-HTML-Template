function stepF() {
    var butstr = "#toggleButton1_";
    stepNum++;
    if (stepNum == 4) {
        stepNum = 0;
        for (var i = 0; i < 3; i++) {
            $(butstr + i).hide();
        }
    }
    else {
        $(butstr + stepNum).show();
    }
}

$(document).ready(function () {
    //Show the paging and activate its first link
    $(".paging").show();
    $(".paging a:first").addClass("active");

    //Get size of the image, how many images there are, then determin the size of the image reel.
    var imageWidth = $(".window").width();
    var imageSum = $(".image_reel img").size();
    var imageReelWidth = imageWidth * imageSum;

    //Adjust the image reel to its new size
    $(".image_reel").css({ 'width': imageReelWidth });


    //Paging  and Slider Function
    rotate = function () {
        var triggerID = $active.attr("rel") - 1; //Get number of times to slide
        var image_reelPosition = triggerID * imageWidth; //Determines the distance the image reel needs to slide

        $(".paging a").removeClass('active'); //Remove all active class
        $active.addClass('active'); //Add active class (the $active is declared in the rotateSwitch function)

        //Slider Animation
        $(".image_reel").animate({
            left: -image_reelPosition
        }, 500);

    };

    //Rotation  and Timing Event
    rotateSwitch = function () {
        play = setInterval(function () { //Set timer - this will repeat itself every 7 seconds
            $active = $('.paging a.active').next(); //Move to the next paging
            if ($active.length === 0) { //If paging reaches the end...
                $active = $('.paging a:first'); //go back to first
            }
            rotate(); //Trigger the paging and slider function
        }, 100000); //Timer speed in milliseconds (7 seconds)
    };

    rotateSwitch(); //Run function on launch


    //On Hover
    $(".image_reel a").hover(function () {
        clearInterval(play); //Stop the rotation
    }, function () {
        rotateSwitch(); //Resume rotation timer
    });

    //On Click
    $(".paging a").click(function () {
        $active = $(this); //Activate the clicked paging
        //Reset Timer
        clearInterval(play); //Stop the rotation
        rotate(); //Trigger rotation immediately
        rotateSwitch(); // Resume rotation timer
        return false; //Prevent browser jump to link anchor
    });


    stepNum = 0;
    $('#toggleSection1_1').hide();
    $('#toggleSection1_2').hide();
    $('#toggleSection1_3').hide();
    $('#toggleSection2_1').hide();
    $('#toggleSection2_2').hide();
    $('#toggleSection2_3').hide();
    $('#screenshot1').hide();
    var butstr = "#toggleButton1_";
    $(butstr + '1').hide();
    $(butstr + '2').hide();
    $(butstr + '3').hide();

    $('#screenshot1').hide();

    //    $('#toggleSection1_1').css("border-style", "solid");
    //    $('#toggleSection1_1').css("border-color", "red");
    $('#clickableText div').addClass("descriptorborder");

    $('#toggleSection1_1 ol').css("margin", "0px auto");
    $('#toggleSection1_1 li').addClass("descriptor");

    $('#toggleSection1_2 ol').css("margin", "0px auto");
    $('#toggleSection1_2 li').addClass("descriptor");




    var childnum = new Array(2, 3, 4);
    if ($.browser.msie == true) {
        childnum[0] *= 2; childnum[1] *= 2; childnum[2] *= 2;
        childnum[0] -= 1; childnum[1] -= 1; childnum[2] -= 1;
    }
    $(document).keydown(function (event) {
        switch (event.keyCode) {
            case 49: // 1
                $('#clickableText li:first').click();
                break;
            case 50: // 2
                $('#clickableText li:nth-child(' + childnum[0] + ')').click();
                break;
            case 51: // 3
                $('#clickableText li:nth-child(' + childnum[1] + ')').click();
                break;
            case 52: // 4
                $('#clickableText li:nth-child(' + childnum[2] + ')').click();
                break;
            case 32:  // space
                stepF();
                break;
            case 83:
            case 115:
                $('#screenshot_click').click();
                break;
        }

    });

    var but1 = $('#toggleButton1_1');
    var tog1 = $('#toggleSection1_1');
    but1.click(function () {
        if (tog1.is(':hidden')) {
            but1.css("font-weight", "bold");
        }
        else if (tog1.is(':visible')) {
            but1.css("font-weight", "normal");
        }
        tog1.toggle(400);
        return false;
    });
    var but2 = $('#toggleButton1_2');
    var tog2 = $('#toggleSection1_2');
    but2.click(function () {
        if (tog2.is(':hidden')) {
            but2.css("font-weight", "bold");
        }
        else if (tog2.is(':visible')) {
            but2.css("font-weight", "normal");
        }
        tog2.toggle(400);
        return false;
    });
    var but3 = $('#toggleButton1_3');
    var tog3 = $('#toggleSection1_3');
    but3.click(function () {
        if (tog3.is(':hidden')) {
            but3.css("font-weight", "bold");
        }
        else if (tog3.is(':visible')) {
            but3.css("font-weight", "normal");
        }
        tog3.toggle(400);
        return false;
    });

    $('#screenshot_click').click( function() {
        $('#screenshot1').toggle(1000);
    });
});



// '#toggleSection table tr:first'
// jquery do some cool stuff!
