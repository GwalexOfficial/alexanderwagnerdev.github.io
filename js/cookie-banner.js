/*
Cookie Banner by AlexanderWagnerDev.at
*/
var footerCookie = document.querySelector("#awdev-footer-cookie");
var footerCookieAccept = document.querySelector("#accept");

if (document.cookie.indexOf("awdevCookieBanner=") == -1) {
    footerCookie.style.display = "block";
}

footerCookieAccept.onclick = function(e) {
    var cookieDate = new Date();
    cookieDate.setTime(new Date().getTime() + 31104000000);

    document.cookie = "awdevCookieBanner = 1; path=/; secure; expires=" + cookieDate.toUTCString();

    footerCookie.style.display = "none";
};