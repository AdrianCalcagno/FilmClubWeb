
// DarkMode (LocalStorage)

let darkMode;

if(localStorage.getItem('darkMode')) { 
    darkMode = localStorage.getItem('darkMode')
} else {
    localStorage.setItem('darkMode', 'light')
}

let botonDarkMode = document.querySelector('#botonDarkMode')
let botonLightMode = document.querySelector('#botonLightMode')

if(darkMode == 'dark') {
    document.body.classList.add('darkMode')
} 

botonDarkMode.addEventListener('click', ()=> {
    document.body.classList.add('darkMode')
    localStorage.setItem('darkMode', 'dark')
})

botonLightMode.addEventListener('click', ()=> {
    document.body.classList.remove('darkMode')
    localStorage.setItem('darkMode', 'light')
})


/* Info peliculas 

Se que no debe ser la forma mas eficiente de hacer esto pero queria 
extraer info de alguna API y no tuve mucho tiempo para dedicarle lamentablemente */

//variables de la API

let fightClub = "https://api.themoviedb.org/3/movie/550?api_key=d9d59a274ca0f1c98bdcd57989cc98c5"
let wolf = "https://api.themoviedb.org/3/movie/106646?api_key=d9d59a274ca0f1c98bdcd57989cc98c5"
let interestellar = "https://api.themoviedb.org/3/movie/157336?api_key=d9d59a274ca0f1c98bdcd57989cc98c5"
let intensamente = "https://api.themoviedb.org/3/movie/150540?api_key=d9d59a274ca0f1c98bdcd57989cc98c5"
let nomadland = "https://api.themoviedb.org/3/movie/581734?api_key=d9d59a274ca0f1c98bdcd57989cc98c5"
let soul = "https://api.themoviedb.org/3/movie/508442?api_key=d9d59a274ca0f1c98bdcd57989cc98c5"
let coda = "https://api.themoviedb.org/3/movie/776503?api_key=d9d59a274ca0f1c98bdcd57989cc98c5"
let dontLookUp = "https://api.themoviedb.org/3/movie/646380?api_key=d9d59a274ca0f1c98bdcd57989cc98c5"
let godfather = "https://api.themoviedb.org/3/movie/238?api_key=d9d59a274ca0f1c98bdcd57989cc98c5"
let persuit = "https://api.themoviedb.org/3/movie/1402?api_key=d9d59a274ca0f1c98bdcd57989cc98c5"
let lords = "https://api.themoviedb.org/3/movie/120?api_key=d9d59a274ca0f1c98bdcd57989cc98c5"
let star = "https://api.themoviedb.org/3/movie/11?api_key=d9d59a274ca0f1c98bdcd57989cc98c5"

//

let botonPeliculaUno = document.querySelector('#botonPeliculaUno')
let divPeliculaUno = document.querySelector("infoPeliculaRecomendada")

botonPeliculaUno.addEventListener('click', ()=> {
    fetch(fightClub)
    .then(promesa => promesa.json())
    .then(({original_title, runtime, overview, backdrop_path, release_date, id, vote_average}) => {
        infoPeliculaRecomendadaDos.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" class="img-fluid rounded-start" alt="Imagen de ${original_title}">
      <br>
      <br>
       </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${original_title} </h5>
        <p>Sinopsis: ${overview} </p>
        <p>Duracion en minutos: ${runtime} </p>
        <p>Fecha de estreno: ${release_date} </p>
        <p>Ranking: ${vote_average} </p>
        <p>IdIBMd: ${id} </p>

        <p class="card-text"><small class="text-muted">FilmClub</small></p>
            </div>
          </div>
        </div>
      </div>
      `
    })
})

let botonPeliculaDos = document.querySelector('#botonPeliculaDos')
let divPeliculaDos = document.querySelector("infoPeliculaRecomendadaDos")

botonPeliculaDos.addEventListener('click', ()=> {
    fetch(wolf)
    .then(promesa => promesa.json())
    .then(({original_title, runtime, overview, backdrop_path, release_date, id, vote_average}) => {
        infoPeliculaRecomendadaDos.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0 block">
    <div class="col-md-4">
      <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" class="img-fluid rounded-start" alt="Imagen de ${original_title}">
      <br>
      <br>
       </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">${original_title} </h5>
        <p>Sinopsis: ${overview} </p>
        <p>Duracion en minutos: ${runtime} </p>
        <p>Fecha de estreno: ${release_date} </p>
        <p>Ranking: ${vote_average} </p>
        <p>IdIBMd: ${id} </p>

        <p class="card-text"><small class="text-muted">FilmClub</small></p>
            </div>
          </div>
        </div>
      </div>
      `
    })
})

let botonPeliculaTres = document.querySelector('#botonPeliculaTres')
let divPeliculaTres = document.querySelector("infoPeliculaRecomendada")

botonPeliculaTres.addEventListener('click', ()=> {
    fetch(interestellar)
    .then(promesa => promesa.json())
    .then(({original_title, runtime, overview, backdrop_path, release_date, id, vote_average}) => {
        infoPeliculaRecomendadaDos.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0 block">
    <div class="col-md-4">
      <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" class="img-fluid rounded-start" alt="Imagen de ${original_title}">
      <br>
      <br>
       </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">${original_title} </h5>
        <p>Sinopsis: ${overview} </p>
        <p>Duracion en minutos: ${runtime} </p>
        <p>Fecha de estreno: ${release_date} </p>
        <p>Ranking: ${vote_average} </p>
        <p>IdIBMd: ${id} </p>

        <p class="card-text"><small class="text-muted">FilmClub</small></p>
            </div>
          </div>
        </div>
      </div>
      `
    })
})

let botonPeliculaCuatro = document.querySelector('#botonPeliculaCuatro')
let divPeliculaCuatro = document.querySelector("infoPeliculaRecomendada")

botonPeliculaCuatro.addEventListener('click', ()=> {
    fetch(intensamente)
    .then(promesa => promesa.json())
    .then(({original_title, runtime, overview, backdrop_path, release_date, id, vote_average}) => {
    infoPeliculaRecomendadaDos.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0 block">
    <div class="col-md-4">
      <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" class="img-fluid rounded-start" alt="Imagen de ${original_title}">
      <br>
      <br>
       </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">${original_title} </h5>
        <p>Sinopsis: ${overview} </p>
        <p>Duracion en minutos: ${runtime} </p>
        <p>Fecha de estreno: ${release_date} </p>
        <p>Ranking: ${vote_average} </p>
        <p>IdIBMd: ${id} </p>
        <p class="card-text"><small class="text-muted">FilmClub</small></p>
            </div>
          </div>
        </div>
      </div>
      `
    })
})

let botonPeliculaCinco = document.querySelector('#botonPeliculaCinco')
let divPeliculaCinco = document.querySelector("infoPeliculaTendencia")

botonPeliculaCinco.addEventListener('click', ()=> {
    fetch(nomadland)
    .then(promesa => promesa.json())
    .then(({original_title, runtime, overview, backdrop_path, release_date, id, vote_average}) => {
    infoPeliculaTendenciaDos.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0 block">
    <div class="col-md-4">
      <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" class="img-fluid rounded-start" alt="Imagen de ${original_title}">
      <br>
      <br>
       </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">${original_title} </h5>
        <p>Sinopsis: ${overview} </p>
        <p>Duracion en minutos: ${runtime} </p>
        <p>Fecha de estreno: ${release_date} </p>
        <p>Ranking: ${vote_average} </p>
        <p>IdIBMd: ${id} </p>
        <p class="card-text"><small class="text-muted">FilmClub</small></p>
            </div>
          </div>
        </div>
      </div>
      `
    })
})
let botonPeliculaSeis = document.querySelector('#botonPeliculaSeis')
let divPeliculaSeis = document.querySelector("infoPeliculaTendencia")

botonPeliculaSeis.addEventListener('click', ()=> {
    fetch(soul)
    .then(promesa => promesa.json())
    .then(({original_title, runtime, overview, backdrop_path, release_date, id, vote_average}) => {
    infoPeliculaTendenciaDos.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0 block">
    <div class="col-md-4">
      <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" class="img-fluid rounded-start" alt="Imagen de ${original_title}">
      <br>
      <br>
       </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">${original_title} </h5>
        <p>Sinopsis: ${overview} </p>
        <p>Duracion en minutos: ${runtime} </p>
        <p>Fecha de estreno: ${release_date} </p>
        <p>Ranking: ${vote_average} </p>
        <p>IdIBMd: ${id} </p>
        <p class="card-text"><small class="text-muted">FilmClub</small></p>
            </div>
          </div>
        </div>
      </div>
      `
    })
})
let botonPeliculaSiete = document.querySelector('#botonPeliculaSiete')
let divPeliculaSiete = document.querySelector("infoPeliculaTendencia")

botonPeliculaSiete.addEventListener('click', ()=> {
    fetch(coda)
    .then(promesa => promesa.json())
    .then(({original_title, runtime, overview, backdrop_path, release_date, id, vote_average}) => {
    infoPeliculaTendenciaDos.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0 block">
    <div class="col-md-4">
      <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" class="img-fluid rounded-start" alt="Imagen de ${original_title}">
      <br>
      <br>
       </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">${original_title} </h5>
        <p>Sinopsis: ${overview} </p>
        <p>Duracion en minutos: ${runtime} </p>
        <p>Fecha de estreno: ${release_date} </p>
        <p>Ranking: ${vote_average} </p>
        <p>IdIBMd: ${id} </p>
        <p class="card-text"><small class="text-muted">FilmClub</small></p>
            </div>
          </div>
        </div>
      </div>
      `
    })
})
let botonPeliculaOcho = document.querySelector('#botonPeliculaOcho')
let divPeliculaOcho = document.querySelector("infoPeliculaTendencia")

botonPeliculaOcho.addEventListener('click', ()=> {
    fetch(dontLookUp)
    .then(promesa => promesa.json())
    .then(({original_title, runtime, overview, backdrop_path, release_date, id, vote_average}) => {
    infoPeliculaTendenciaDos.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0 block">
    <div class="col-md-4">
      <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" class="img-fluid rounded-start" alt="Imagen de ${original_title}">
      <br>
      <br>
       </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">${original_title} </h5>
        <p>Sinopsis: ${overview} </p>
        <p>Duracion en minutos: ${runtime} </p>
        <p>Fecha de estreno: ${release_date} </p>
        <p>Ranking: ${vote_average} </p>
        <p>IdIBMd: ${id} </p>
        <p class="card-text"><small class="text-muted">FilmClub</small></p>
            </div>
          </div>
        </div>
      </div>
      `
    })
})

let botonPeliculaNueve = document.querySelector('#botonPeliculaNueve')
let divPeliculaNueve = document.querySelector("infoPeliculaClasica")

botonPeliculaNueve.addEventListener('click', ()=> {
    fetch(godfather)
    .then(promesa => promesa.json())
    .then(({original_title, runtime, overview, backdrop_path, release_date, id, vote_average}) => {
    infoPeliculaClasicaDos.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0 block">
    <div class="col-md-4">
      <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" class="img-fluid rounded-start" alt="Imagen de ${original_title}">
      <br>
      <br>
       </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">${original_title} </h5>
        <p>Sinopsis: ${overview} </p>
        <p>Duracion en minutos: ${runtime} </p>
        <p>Fecha de estreno: ${release_date} </p>
        <p>Ranking: ${vote_average} </p>
        <p>IdIBMd: ${id} </p>
        <p class="card-text"><small class="text-muted">FilmClub</small></p>
            </div>
          </div>
        </div>
      </div>
      `
    })
})
let botonPeliculaDiez = document.querySelector('#botonPeliculaDiez')
let divPeliculaDiez = document.querySelector("infoPeliculaClasica")

botonPeliculaDiez.addEventListener('click', ()=> {
    fetch(persuit)
    .then(promesa => promesa.json())
    .then(({original_title, runtime, overview, backdrop_path, release_date, id, vote_average}) => {
    infoPeliculaClasicaDos.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0 block">
    <div class="col-md-4">
      <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" class="img-fluid rounded-start" alt="Imagen de ${original_title}">
      <br>
      <br>
       </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">${original_title} </h5>
        <p>Sinopsis: ${overview} </p>
        <p>Duracion en minutos: ${runtime} </p>
        <p>Fecha de estreno: ${release_date} </p>
        <p>Ranking: ${vote_average} </p>
        <p>IdIBMd: ${id} </p>
        <p class="card-text"><small class="text-muted">FilmClub</small></p>
            </div>
          </div>
        </div>
      </div>
      `
    })
})
let botonPeliculaOnce = document.querySelector('#botonPeliculaOnce')
let divPeliculaOnce = document.querySelector("infoPeliculaClasica")

botonPeliculaOnce.addEventListener('click', ()=> {
    fetch(lords)
    .then(promesa => promesa.json())
    .then(({original_title, runtime, overview, backdrop_path, release_date, id, vote_average}) => {
    infoPeliculaClasicaDos.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0 block">
    <div class="col-md-4">
      <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" class="img-fluid rounded-start" alt="Imagen de ${original_title}">
      <br>
      <br>
       </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">${original_title} </h5>
        <p>Sinopsis: ${overview} </p>
        <p>Duracion en minutos: ${runtime} </p>
        <p>Fecha de estreno: ${release_date} </p>
        <p>Ranking: ${vote_average} </p>
        <p>IdIBMd: ${id} </p>
        <p class="card-text"><small class="text-muted">FilmClub</small></p>
            </div>
          </div>
        </div>
      </div>
      `
    })
})
let botonPeliculaDoce = document.querySelector('#botonPeliculaDoce')
let divPeliculaDoce = document.querySelector("infoPeliculaClasica")

botonPeliculaDoce.addEventListener('click', ()=> {
    fetch(star)
    .then(promesa => promesa.json())
    .then(({original_title, runtime, overview, backdrop_path, release_date, id, vote_average}) => {
    infoPeliculaClasicaDos.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0 block">
    <div class="col-md-4">
      <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" class="img-fluid rounded-start" alt="Imagen de ${original_title}">
      <br>
      <br>
       </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">${original_title} </h5>
        <p>Sinopsis: ${overview} </p>
        <p>Duracion en minutos: ${runtime} </p>
        <p>Fecha de estreno: ${release_date} </p>
        <p>Ranking: ${vote_average} </p>
        <p>IdIBMd: ${id} </p>
        <p class="card-text"><small class="text-muted">FilmClub</small></p>
            </div>
          </div>
        </div>
      </div>
      `
    })
})

// Fin