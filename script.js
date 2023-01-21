<script>
var button = document.getElementById("btn");

window.onscroll = function() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        button.style.transform = "scale(1)";
        button.style.opacity = "1";
    } else {
        button.style.transform = "scale(0)";
        button.style.opacity = "0";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
</script>
