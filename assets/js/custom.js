$(document).ready(function() {
    $(".all").click(function() {
        $("a").removeClass("active");
        $(this).addClass("active");
        $(".hepsi").hide();
        $(".hepsi").show();
    });
    $(".mobile-apps").click(function() {
        $(".category a").removeClass("active");
        $(this).addClass("active");
        $(".hepsi").hide();
        $(".mobile-app").show();
    });
    $(".web-sites").click(function() {
        $(".category a").removeClass("active");
        $(this).addClass("active");
        $(".hepsi").hide();
        $(".web-site").show();
    });
    $(".mock-ups").click(function() {
        $(".category a").removeClass("active");
        $(this).addClass("active");
        $(".hepsi").hide();
        $(".mock-up").show();
    });
});