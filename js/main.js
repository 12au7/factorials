function factorial(n){
    if (n < 0){
        return -1;
    }
    else if (n == 0){
        return 1;
    }
    var i = n;
    while (n-- > 2){
    i *= n;
    }
    return i;
}
$(".calculator").submit(function() {
    var n = parseFloat($("#n").val());
    var r = factorial(n);
    $("p.fac-out").fadeIn(200);
    $("#fac-out").text(r).css("color", "#36af42");
});

$(".calculator").on("reset", function() {
    $("p.fac-out").fadeOut(200);
});


