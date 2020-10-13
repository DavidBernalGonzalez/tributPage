document.addEventListener("DOMContentLoaded", () => {
    let path = window.location.pathname;
    let page = path.split("/").pop();
    let res = page.slice(0, page.length-5);

    switch(res) {
        case "index":
            document.getElementsByClassName('menuItem')[0].style.color = "black";
            document.getElementsByClassName('menuItem')[0].style.borderBottom = "solid 2px";
            break;
        case "portfolio":
            document.getElementsByClassName('menuItem')[1].style.color = "black";
            document.getElementsByClassName('menuItem')[1].style.borderBottom = "solid 2px";
            break;
        case "formacion":
            document.getElementsByClassName('menuItem')[2].style.color = "black";
            document.getElementsByClassName('menuItem')[2].style.borderBottom = "solid 2px";
            break;
        case "contacto":
            document.getElementsByClassName('menuItem')[3].style.color = "black";
            document.getElementsByClassName('menuItem')[3].style.borderBottom = "solid 2px";
            break;
    }
});

document.getElementById('me').addEventListener('mouseover', function() {
    document.getElementById('me').src = "img/me2.png";
    document.getElementById('title').style.backgroundColor = "tomato";
});

document.getElementById('me').addEventListener('mouseout', function() {
    document.getElementById('me').src = "img/me.jpg";
    document.getElementById('title').style.backgroundColor = "white";
});