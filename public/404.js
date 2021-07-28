document.addEventListener("DOMContentLoaded", () => {
    let element = document.getElementById("error");
    let path = window.location.pathname.split("?")[0];
    let errorMsg = `<code>${window.location.host}${path}</code> was not found. Please ensure you typed
    the URL correctly, or <a href="/" style="text-decoration: underline;">return home</a>.`;

    element.innerHTML = errorMsg;
});