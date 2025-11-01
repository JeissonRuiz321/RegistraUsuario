document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        document.getElementById('message').textContent = '¡Usuario registrado con éxito!';
        document.getElementById('message').style.color = 'green';

        // Aquí puedes agregar lógica para enviar los datos al servidor
        console.log({ username, email, password });
    } else {
        document.getElementById('message').textContent = 'Por favor, completa todos los campos.';
        document.getElementById('message').style.color = 'red';
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        document.getElementById('message').textContent = '¡Usuario registrado con éxito!';
        document.getElementById('message').style.color = 'green';

        // Aquí puedes agregar lógica para enviar los datos al servidor
        console.log({ username, email, password });
    } else {
        document.getElementById('message').textContent = 'Por favor, completa todos los campos.';
        document.getElementById('message').style.color = 'red';
    }
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const username  = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('message').textContent = 'Por favor, ingresa un correo válido.';
        document.getElementById('message').style.color = 'red';
        return;
    }
        // Aquí puedes agregar lógica para enviar los datos al servidor
       
    const passwordRegex = /^(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {    
        document.getElementById('login-message').textContent = 'La contraseña debe tener al menos 8 caracteres y un número.';
        document.getElementById('login-message').style.color = 'red';
        return;
    }
        // guardar datos en LocalStorage
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        document.getElementById('login-message').textContent = '¡Usuario registrado con éxito!';
        document.getElementById('login-message').style.color = 'green';

        // Redirigir al perfil del usuario
        setTimeout(() => {
            window.location.href = 'profile.html';
        }   
        , 2000);
    });
        
    


