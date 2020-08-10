window.addEventListener('resize', setDiceSize);
setDiceSize();

function setDiceSize() {
    $("#diceView").width($(".container").width());
    $("#diceView").height($("#diceView").width());

    let diceFaceShift = ($("#diceView").width() / 2);

    $("#diceFront").css("transform", "rotateY(0deg) translateZ(" + diceFaceShift + "px)");
    $("#diceRight").css("transform", "rotateY(90deg) translateZ(" + diceFaceShift + "px)");
    $("#diceBack").css("transform", "rotateY(180deg) translateZ(" + diceFaceShift + "px)");
    $("#diceLeft").css("transform", "rotateY(-90deg) translateZ(" + diceFaceShift + "px)");
    $("#diceTop").css("transform", "rotateX(90deg) translateZ(" + diceFaceShift + "px)");
    $("#diceBottom").css("transform", "rotateX(-90deg) translateZ(" + diceFaceShift + "px)");
}

let pageInformation = {
    summary: {
        rotation: "rotateY(360deg)",
    },
    experience: {
        rotation: "rotateY(-90deg)",
    },
    bstprojects: {
        rotation: "rotateY(180deg)",
    },
    projects: {
        rotation: "rotateY(90deg)",
    },
    interests: {
        rotation: "rotateX(-90deg)",
    },
    skills: {
        rotation: "rotateX(90deg)",
    },
}

$(".nav-link").on("click", ShowPage);
$(".switchPageButton").on("click", ClickEquivalentNavPage);
ClickEquivalentNavPage(window.location.hash);


function ShowPage() {
    let queryString = $(this)[0].hash.substr(7);
    $(".nav-item.active").removeClass("active");
    $(this).parent().addClass("active");

    $("#dice").css("transform", pageInformation[queryString].rotation);
}

function ClickEquivalentNavPage(suppliedHash = undefined) {

    let hash = "";

    if (typeof suppliedHash === "string" && suppliedHash.substr(1, 6) === "?page=") {
        hash = suppliedHash;
    } else {
        hash = $(this)[0].hash;
    }


    if (hash === undefined) {
        return;
    }

    $(".nav-link").each(function (index, navItem) {
        if (navItem.hash === hash) {
            navItem.click();
            return false;
        }
    });
}