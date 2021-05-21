$(document).ready(function () {
    $("h1").click(function (e) { 
        e.preventDefault();
        $(this).addClass("die");
    });

    
    $("#me").click(function (e) { 
        e.preventDefault();
        let prelife = parseInt($("#yes").html())
        let life = 0 ;
        function run() {
            while (life < 70 || life > 100 ) {
                life = parseInt($("input").val()) +  Math.floor(Math.random() * 100);
            }
            if ((life + Math.floor(Math.random() * 105)) > 200 ) {
                life += Math.floor(Math.random() * 5)
            }
        }
        run();
        let count = 0;
        while (prelife == life) {
            count++;
            run();
        }
        console.log(count)
        $("#yes").html(life);
    });








});

