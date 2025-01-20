let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop = 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function openModal(title, imageSrc, description, githubLink, certificadoLink) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalGitHubLink = document.getElementById('modalGitHubLink');
    const modalCertificadoLink = document.getElementById('modalCertificadoLink');

    modalTitle.textContent = title;
    modalImage.src = imageSrc;
    modalDescription.textContent = description;

    // Configura los enlaces
    modalGitHubLink.href = githubLink;
    modalGitHubLink.style.display = githubLink ? 'inline-block' : 'none';

    modalCertificadoLink.href = certificadoLink;
    modalCertificadoLink.style.display = certificadoLink ? 'inline-block' : 'none';

    modal.style.display = 'flex';
}


function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('fade-out'); // Añade una clase para la animación de salida
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('fade-out'); // Quita la clase después de ocultar
    }, 400); // Duración de la animación de salida
}

// Cierra el modal si se hace clic fuera de su contenido
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};
function mandarMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
        number : document.getElementById("number").value,
    }

    emailjs.send("service_rsbv578", "template_su7rf1i",parms).then(alert("Email Enviado!!/Email sent!!"))
}

function validarFormulario(event) {
    // Obtener los valores de los campos
    let nombre = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let numero = document.getElementById('number').value;
    let asunto = document.getElementById('subject').value;
    let mensaje = document.getElementById('message').value;

    // Verificar si todos los campos requeridos están llenos
    if (nombre === "" || email === "" || numero === "" || asunto === "" || mensaje === "") {
        alert("Por favor, completa todos los campos requeridos.");
        event.preventDefault(); // Evita que el formulario se envíe
        return false; // Impide que el formulario sea enviado
    }

    // Si todo está bien, entonces ejecutar la función para mandar el email
    mandarMail();
    event.preventDefault(); // Evita que el formulario se envíe por defecto
    return false; // Impide que el formulario se envíe
}