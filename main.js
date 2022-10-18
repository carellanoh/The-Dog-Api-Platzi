const URL = 'https://api.thedogapi.com/v1/images/search';

fetch(URL)
    .then(res => res.json())
    .then(data => {

        const img = document.querySelector('img');
        img.src = data[0].url;
    });

// Video Youtube Platzi Apis, creamos una api rest para ver imagenes aleatorias de perritos
// usamos la api https://thedogapi.com/
// buscar apis libres en github public apis
// Instalar json viewer en chrome para ver la respuesta de las apis