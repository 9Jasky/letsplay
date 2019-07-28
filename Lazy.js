for(var imgEl=document.getElementsByTagName("img"),i=0;i<imgEl.length;i++)imgEl[i].getAttribute("src")&&(imgEl[i].setAttribute("data-src",imgEl[i].getAttribute("src")),imgEl[i].className+=" lazyload",imgEl[i].setAttribute("src","data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="));
$(document).ready(function() {
    }).addClass("lazyload").each(function() {
        $(this).attr("data-src", $(this).attr("src"));
        $(this).removeAttr("src", "")
});