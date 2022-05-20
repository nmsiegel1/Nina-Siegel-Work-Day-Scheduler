var dateEl = $("#currentDay");
var contentEl = {};
var idArray = [
    {
    time: 9,
    id: "#time-block0900"
    },
    {
    time: 10,
    id: "#time-block1000"
    },
    {
    time: 11,
    id: "#time-block1100"
    },
    {
    time: 12,
    id: "#time-block1200"
    },
    {
    time: 13,
    id: "#time-block1300"
    },
    {
    time: 14,
    id: "#time-block1400"
    },
    {
    time: 15,
    id: "#time-block1500"
    },
    {
    time: 16,
    id: "#time-block1600"
    },
    {
    time: 17,
    id: "#time-block1700"
    }];

// set current date
function setDate () {
    var date = moment().format("dddd, MMMM Do YYYY");
    dateEl.text(date);
};


// function setColor() {
//     var currentTime = moment().format("H");
//     console.log("moment time", currentTime);

//     for (var i=0; i < idArray.length; i++) {
//     if(currentTime == idArray[i].time) {
//         var presentId = idArray[i].id;
//         console.log("present id", presentId);
//         console.log("present time >>", idArray[i].time);

//         presentId.removeClass("past");
//         presentId.addClass("present");

//     }else if (currentTime > idArray[i].time) {
//         var pastId = idArray[i].id;
//         console.log("past time >>", idArray[i].time);
//         console.log("past id", pastId);

//         pastId.removeClass("present");
//         pastId.removeClass("future");
//         pastId.addClass("past");

//     } else {
//         var futureId = idArray[i].id;
//         console.log("future time >>", idArray[i].time);
//         console.log("future id", futureId);

//         futureId.removeClass("present");
//         futureId.removeClass("past");
//         futureId.addClass("future");
//     }
// }
// };

function setColor() {
    var currentTime = moment().format("H");

    if (currentTime == "24") {
        $("#time-block0900").removeClass("past");
        $("#time-block0900").addClass("future");
        $("#time-block1000").removeClass("past");
        $("#time-block1000").addClass("future");
        $("#time-block1100").removeClass("past");
        $("#time-block1100").addClass("future");
        $("#time-block1200").removeClass("past");
        $("#time-block1200").addClass("future");
        $("#time-block1300").removeClass("past");
        $("#time-block1300").addClass("future");
        $("#time-block1400").removeClass("past");
        $("#time-block1400").addClass("future");
        $("#time-block1500").removeClass("past");
        $("#time-block1500").addClass("future");
        $("#time-block1600").removeClass("past");
        $("#time-block1600").addClass("future");
        $("#time-block1700").removeClass("past");
        $("#time-block1700").addClass("future");
    } else if (currentTime == "9") {
        $("#time-block0900").removeClass("future");
        $("#time-block0900").addClass("present");
        $("#time-block1000").removeClass("past");
        $("#time-block1000").addClass("future");
        $("#time-block1100").removeClass("past");
        $("#time-block1100").addClass("future");
        $("#time-block1200").removeClass("past");
        $("#time-block1200").addClass("future");
        $("#time-block1300").removeClass("past");
        $("#time-block1300").addClass("future");
        $("#time-block1400").removeClass("past");
        $("#time-block1400").addClass("future");
        $("#time-block1500").removeClass("past");
        $("#time-block1500").addClass("future");
        $("#time-block1600").removeClass("past");
        $("#time-block1600").addClass("future");
        $("#time-block1700").removeClass("past");
        $("#time-block1700").addClass("future");
    } else if (currentTime == "10") {
        $("#time-block0900").removeClass("present");
        $("#time-block0900").addClass("past");
        $("#time-block1000").removeClass("future");
        $("#time-block1000").addClass("present");;
        $("#time-block1100").removeClass("past");
        $("#time-block1100").addClass("future");
        $("#time-block1200").removeClass("past");
        $("#time-block1200").addClass("future");
        $("#time-block1300").removeClass("past");
        $("#time-block1300").addClass("future");
        $("#time-block1400").removeClass("past");
        $("#time-block1400").addClass("future");
        $("#time-block1500").removeClass("past");
        $("#time-block1500").addClass("future");
        $("#time-block1600").removeClass("past");
        $("#time-block1600").addClass("future");
        $("#time-block1700").removeClass("past");
        $("#time-block1700").addClass("future");
    } else if (currentTime == "11") {
        $("#time-block1000").removeClass("present");
        $("#time-block1000").addClass("past");
        $("#time-block1100").removeClass("future");
        $("#time-block1100").addClass("present");
        $("#time-block1200").removeClass("past");
        $("#time-block1200").addClass("future");
        $("#time-block1300").removeClass("past");
        $("#time-block1300").addClass("future");
        $("#time-block1400").removeClass("past");
        $("#time-block1400").addClass("future");
        $("#time-block1500").removeClass("past");
        $("#time-block1500").addClass("future");
        $("#time-block1600").removeClass("past");
        $("#time-block1600").addClass("future");
        $("#time-block1700").removeClass("past");
        $("#time-block1700").addClass("future");
    } else if (currentTime == "12") {
        $("#time-block1100").removeClass("present");
        $("#time-block1100").addClass("past");
        $("#time-block1200").removeClass("future");
        $("#time-block1200").addClass("present");
        $("#time-block1300").removeClass("past");
        $("#time-block1300").addClass("future");
        $("#time-block1400").removeClass("past");
        $("#time-block1400").addClass("future");
        $("#time-block1500").removeClass("past");
        $("#time-block1500").addClass("future");
        $("#time-block1600").removeClass("past");
        $("#time-block1600").addClass("future");
        $("#time-block1700").removeClass("past");
        $("#time-block1700").addClass("future");
    } else if (currentTime == "13") {
        $("#time-block1200").removeClass("present");
        $("#time-block1200").addClass("past");
        $("#time-block1300").removeClass("future");
        $("#time-block1300").addClass("present");
        $("#time-block1400").removeClass("past");
        $("#time-block1400").addClass("future");
        $("#time-block1500").removeClass("past");
        $("#time-block1500").addClass("future");
        $("#time-block1600").removeClass("past");
        $("#time-block1600").addClass("future");
        $("#time-block1700").removeClass("past");
        $("#time-block1700").addClass("future");
    } else if (currentTime == "14") {
        $("#time-block1300").removeClass("present");
        $("#time-block1300").addClass("past");
        $("#time-block1400").removeClass("future");
        $("#time-block1400").addClass("present");
        $("#time-block1500").removeClass("past");
        $("#time-block1500").addClass("future");
        $("#time-block1600").removeClass("past");
        $("#time-block1600").addClass("future");
        $("#time-block1700").removeClass("past");
        $("#time-block1700").addClass("future");
    } else if (currentTime == "15") {
        $("#time-block1400").removeClass("present");
        $("#time-block1400").addClass("past");
        $("#time-block1500").removeClass("future");
        $("#time-block1500").addClass("present");
        $("#time-block1600").removeClass("past");
        $("#time-block1600").addClass("future");
        $("#time-block1700").removeClass("past");
        $("#time-block1700").addClass("future");
    } else if (currentTime == "16") {
        $("#time-block1500").removeClass("present");
        $("#time-block1500").addClass("past");
        $("#time-block1600").removeClass("future");
        $("#time-block1600").addClass("present");
        $("#time-block1700").removeClass("past");
        $("#time-block1700").addClass("future");
    } else if (currentTime == "17") {
        $("#time-block1600").removeClass("present");
        $("#time-block1600").addClass("past");
        $("#time-block1700").removeClass("future");
        $("#time-block1700").addClass("present");
    };
};



$(".saveBtn").on("click", function() {
    var userContent = document.querySelector(".content");
    var hourBlock = document.querySelector(".time-block");
    localStorage.setItem(hourBlock, JSON.stringify(userContent));
});

// function loadContent() {
//     var loadContent = localStorage.getItem(userContent);
// }

// function loadContent() {
//     $(".#time-block").each(funciton() {
//         var contentEl = $(this).children(".content").children();
//         console.log(contentEl);
//         var hour = $(this).children(".content").children().attr("id").split("-")[1];
//         console.log(hour);
//         var loadContent = localStorage.getItem(hour);
//         $(contentEl).val(loadContent);
//     });
// };

// function loadContent() {
//     $(".content").each(function(){
//         var contentEl = $(this).children(".content").children();
//         console.log(contentEl);
//         var hour = $(this).children(".content").children().attr("id").split("-")[1];
//         console.log(hour);
//         var loadContent = localStorage.getItem(hour);
//         $(contentEl).val(loadContent);
//     })
//     };

setDate();
setColor();
// loadContent();