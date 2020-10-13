
document.getElementById('linkedIn').addEventListener('mouseover', function() {
    document.getElementById('linkedIn').src = "img/icons/linkedinColor.svg";
});

document.getElementById('linkedIn').addEventListener('mouseout', function() {
    document.getElementById('linkedIn').src = "img/icons/linkedin.svg";
});

document.getElementById('form').addEventListener('mouseover', function() {
    document.getElementById('form').src = "img/icons/formColor.svg";
});

document.getElementById('form').addEventListener('mouseout', function() {
    document.getElementById('form').src = "img/icons/form.svg";
});

document.getElementById('correo').addEventListener('mouseover', function() {
    document.getElementById('correo').src = "img/icons/correoColor.svg";
});

document.getElementById('correo').addEventListener('mouseout', function() {
    document.getElementById('correo').src = "img/icons/correo.svg";
});

document.getElementById('form').addEventListener('click', function() {
    document.getElementsByClassName('wrapper')[0].classList.remove>('wrapper');
    document.getElementsByClassName('wrapper')[0].classList.add('wrapperVisible');
    document.getElementById('correoSpan').innerHTML = " ";
});

document.getElementById('correo').addEventListener('click', function() {
    document.getElementsByClassName('wrapper')[0].classList.add>('wrapper');
    document.getElementsByClassName('wrapper')[0].classList.remove('wrapperVisible');
    document.getElementById('correoSpan').innerHTML = "dabernalgo@gmail.com";
});

document.getElementById('linkedIn').addEventListener('click', function() {
    document.getElementById('correoSpan').innerHTML = " ";
    document.getElementsByClassName('wrapper')[0].classList.add>('wrapper');
    document.getElementsByClassName('wrapper')[0].classList.remove('wrapperVisible');
});