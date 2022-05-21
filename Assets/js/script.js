

// function to set the date
function setDate () {
    var dateEl = $("#currentDay");
    var date = moment().format("dddd, MMMM Do YYYY");
    dateEl.text(date);
};



// function to set the changing colors of the rows 
function setColor() {
    var currentTime = moment().format("H");

    if (currentTime == "24") {
        $("#time0900").removeClass("past");
        $("#time0900").addClass("future");
        $("#time1000").removeClass("past");
        $("#time1000").addClass("future");
        $("#time1100").removeClass("past");
        $("#time1100").addClass("future");
        $("#time1200").removeClass("past");
        $("#time1200").addClass("future");
        $("#time1300").removeClass("past");
        $("#time1300").addClass("future");
        $("#time1400").removeClass("past");
        $("#time1400").addClass("future");
        $("#time1500").removeClass("past");
        $("#time1500").addClass("future");
        $("#time1600").removeClass("past");
        $("#time1600").addClass("future");
        $("#time1700").removeClass("past");
        $("#time1700").addClass("future");
    } else if (currentTime == "9") {
        $("#time0900").removeClass("future");
        $("#time0900").addClass("present");
        $("#time1000").removeClass("past");
        $("#time1000").addClass("future");
        $("#time1100").removeClass("past");
        $("#time1100").addClass("future");
        $("#time1200").removeClass("past");
        $("#time1200").addClass("future");
        $("#time1300").removeClass("past");
        $("#time1300").addClass("future");
        $("#time1400").removeClass("past");
        $("#time1400").addClass("future");
        $("#time1500").removeClass("past");
        $("#time1500").addClass("future");
        $("#time1600").removeClass("past");
        $("#time1600").addClass("future");
        $("#time1700").removeClass("past");
        $("#time1700").addClass("future");
    } else if (currentTime == "10") {
        $("#time0900").removeClass("present");
        $("#time0900").addClass("past");
        $("#time1000").removeClass("future");
        $("#time1000").addClass("present");;
        $("#time1100").removeClass("past");
        $("#time1100").addClass("future");
        $("#time1200").removeClass("past");
        $("#time1200").addClass("future");
        $("#time1300").removeClass("past");
        $("#time1300").addClass("future");
        $("#time1400").removeClass("past");
        $("#time1400").addClass("future");
        $("#time1500").removeClass("past");
        $("#time1500").addClass("future");
        $("#time1600").removeClass("past");
        $("#time1600").addClass("future");
        $("#time1700").removeClass("past");
        $("#time1700").addClass("future");
    } else if (currentTime == "11") {
        $("#time1000").removeClass("present");
        $("#time1000").addClass("past");
        $("#time1100").removeClass("future");
        $("#time1100").addClass("present");
        $("#time1200").removeClass("past");
        $("#time1200").addClass("future");
        $("#time1300").removeClass("past");
        $("#time1300").addClass("future");
        $("#time1400").removeClass("past");
        $("#time1400").addClass("future");
        $("#time1500").removeClass("past");
        $("#time1500").addClass("future");
        $("#time1600").removeClass("past");
        $("#time1600").addClass("future");
        $("#time1700").removeClass("past");
        $("#time1700").addClass("future");
    } else if (currentTime == "12") {
        $("#time1100").removeClass("present");
        $("#time1100").addClass("past");
        $("#time1200").removeClass("future");
        $("#time1200").addClass("present");
        $("#time1300").removeClass("past");
        $("#time1300").addClass("future");
        $("#time1400").removeClass("past");
        $("#time1400").addClass("future");
        $("#time1500").removeClass("past");
        $("#time1500").addClass("future");
        $("#time1600").removeClass("past");
        $("#time1600").addClass("future");
        $("#time1700").removeClass("past");
        $("#time1700").addClass("future");
    } else if (currentTime == "13") {
        $("#time1200").removeClass("present");
        $("#time1200").addClass("past");
        $("#time1300").removeClass("future");
        $("#time1300").addClass("present");
        $("#time1400").removeClass("past");
        $("#time1400").addClass("future");
        $("#time1500").removeClass("past");
        $("#time1500").addClass("future");
        $("#time1600").removeClass("past");
        $("#time1600").addClass("future");
        $("#time1700").removeClass("past");
        $("#time1700").addClass("future");
    } else if (currentTime == "14") {
        $("#time1300").removeClass("present");
        $("#time1300").addClass("past");
        $("#time1400").removeClass("future");
        $("#time1400").addClass("present");
        $("#time1500").removeClass("past");
        $("#time1500").addClass("future");
        $("#time1600").removeClass("past");
        $("#time1600").addClass("future");
        $("#time1700").removeClass("past");
        $("#time1700").addClass("future");
    } else if (currentTime == "15") {
        $("#time1400").removeClass("present");
        $("#time1400").addClass("past");
        $("#time1500").removeClass("future");
        $("#time1500").addClass("present");
        $("#time1600").removeClass("past");
        $("#time1600").addClass("future");
        $("#time1700").removeClass("past");
        $("#time1700").addClass("future");
    } else if (currentTime == "16") {
        $("#time1500").removeClass("present");
        $("#time1500").addClass("past");
        $("#time1600").removeClass("future");
        $("#time1600").addClass("present");
        $("#time1700").removeClass("past");
        $("#time1700").addClass("future");
    } else if (currentTime == "17") {
        $("#time1600").removeClass("present");
        $("#time1600").addClass("past");
        $("#time1700").removeClass("future");
        $("#time1700").addClass("present");
    };
};


// the functions for each of the save buttons 
function save9() {
    var content = $("#9am").val().trim();
    localStorage.setItem("9am", content)
}
$("#btn-time0900").on("click", save9);

function save10() {
    var content = $("#10am").val().trim();
    localStorage.setItem("10am", content)
}
$("#btn-time1000").on("click", save10);

function save11() {
    var content = $("#11am").val().trim();
    localStorage.setItem("11am", content)
}
$("#btn-time1100").on("click", save11);

function save12() {
    var content = $("#12pm").val().trim();
    localStorage.setItem("12pm", content)
}
$("#btn-time1200").on("click", save12);

function save1() {
    var content = $("#1pm").val().trim();
    localStorage.setItem("1pm", content)
}
$("#btn-time1300").on("click", save1);

function save2() {
    var content = $("#2pm").val().trim();
    localStorage.setItem("2pm", content)
}
$("#btn-time1400").on("click", save2);

function save3() {
    var content = $("#3pm").val().trim();
    localStorage.setItem("3pm", content)
}
$("#btn-time1500").on("click", save3);

function save4() {
    var content = $("#4pm").val().trim();
    localStorage.setItem("4pm", content)
}
$("#btn-time1600").on("click", save4);

function save5() {
    var content = $("#5pm").val().trim();
    localStorage.setItem("5pm", content)
}
$("#btn-time1700").on("click", save5);


// the function to load the saved content from localStorage
function loadContent () {
    var getContent9 = localStorage.getItem("9am");
    $("#9am").val(getContent9);

    var getContent10 = localStorage.getItem("10am");
    $("#10am").val(getContent10);

    var getContent11 = localStorage.getItem("11am");
    $("#11am").val(getContent11);

    var getContent12 = localStorage.getItem("12pm");
    $("#12pm").val(getContent12);

    var getContent1 = localStorage.getItem("1pm");
    $("#1pm").val(getContent1);

    var getContent2 = localStorage.getItem("2pm");
    $("#2pm").val(getContent2);

    var getContent3 = localStorage.getItem("3pm");
    $("#3pm").val(getContent3);

    var getContent4 = localStorage.getItem("4pm");
    $("#4pm").val(getContent4);

    var getContent5 = localStorage.getItem("5pm");
    $("#5pm").val(getContent5);
}

// call functions
setDate();
setColor();
loadContent();