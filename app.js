$(document).ready(function () {
    $("h1").click(function (e) { 
        e.preventDefault();
        $(this).addClass("die");
    });

    let life = 0;
    $("#me").click(function (e) { 
        e.preventDefault();
        let prelife = $("#yes").html();
        
        while (prelife == life) {
            while (life < 70 || life > 100 ) {
                life = parseInt($("input").val()) +  Math.floor(Math.random() * 100);
            }
            if ((life + Math.floor(Math.random() * 105)) > 200 ) {
                life += Math.floor(Math.random() * 5)
            }
        }
        
        
        $("#yes").html(life);
    });








});

