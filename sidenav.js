/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function gruppen() {
    if( isMobile.any() ){
        window.open('gruppen.html',"_self");
    }
    else{
        window.open('gruppen-desk.html',"_self");
    }

}
function beratung() {
    if( isMobile.any() ){
        window.open('beratung.html',"_self");
    }
    else{
        window.open('beratung-desk.html',"_self");
    }

}

function veran() {
    if( isMobile.any() ){
        window.open('veranstaltungen.html',"_self");
    }
    else{
        window.open('veranstaltungen-desk.html',"_self");
    }

}

function vort() {
    if( isMobile.any() ){
        window.open('vortbildungen.html',"_self");
    }
    else{
        window.open('vortbildungen-desk.html',"_self");
    }

}

function kon() {
    if( isMobile.any() ){
        window.open('kontakt.html',"_self");
    }
    else{
        window.open('kontakt-desk.html',"_self");
    }

}

window.onload = function() {
    if( isMobile.any() ){
        closeNav();
    }
    else{
        openNav();
    }
};
