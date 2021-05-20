$(document).ready(function () {
    $("h1").click(function (e) { 
        e.preventDefault();
        $(this).addClass("die");
    });


    $("#me").click(function (e) { 
        e.preventDefault();
        

        let life = 20 +  Math.floor(Math.random() * 80) + parseInt($("input").val());

        $("#yes").html(life);
    });








});

