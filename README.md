# MoviesLoc

MoviesLoc es una aplicación web que permite buscar películas y series usando la [API de TMDB](https://developer.themoviedb.org/docs/getting-started). Los usuarios pueden ver información detallada como descripción, imagen, año, etc. Ademas de añadir los diferentes contenidos a favoritos.

## Demo en línea

Puedes ver el proyecto desplegado en Netlify aquí:

[https://moviesloc.netlify.app](https://moviesloc.netlify.app)

## Screenshots

### Desktop

#### Pantalla principal

![Home page](/public/screenshots/moviesloc-netlify-app-desktop.jpg)

#### Resultados de búsqueda

![Search results](/public/screenshots/moviesloc-netlify-app-search-desktopjpg.jpg)

#### Detalles de pelicula

![Movie details](/public/screenshots/moviesloc-netlify-app-movies-detail-desktop.jpg)

### Mobile

#### Pagina principal

![Home page](/public/screenshots/moviesloc-netlify-app-home-page-phone.jpg)

#### Detalles de pelicula

![Movie details](/public/screenshots/moviesloc-netlify-app-movie-description-phone.jpg)

## Tecnologias utilizadas

- Next Js / React (App Router)
- CSS Modules
- Bootstrap
- API: TMDB

## Instalación

Importante. Antes de iniciar la instalación, es deseable que accedas a [TMDB](https://developer.themoviedb.org/docs/getting-started), te registres y solicites una API key para el funcionamiento correcto del sitio.

1. Clonar el repositorio

```bash
git clone https://github.com/rodrigocattebeke/moviesworld.git
```

   <br>

2. Entrar a la carpeta del proyecto

```bash
cd moviesworld
```

   <br>

3. Instalar todas las dependencias (importante tener npm)

```bash
npm install
```

   <br>

4. Crear un archivo `.env` para la API key con el siguiente formato

```env
TMDB_ACCESS_KEY = aqui_va_tu_API_key
ALLOWED_HOSTS = ["localhost:3000"]
```

> En la variable ALLOWED_HOST añade sólo rutas de confianza, ya que son las que podrán acceder a la API creada en Next Js. Se pone localhost:300 por defecto, pero tú pondrás el que te salga al iniciar el servidor con npm run.

<br>

5. Iniciar el servidor de desarrollo

```bash
npm run dev
```

   <br>

## Funcionalidades

- Búsqueda de peliculas y series por nombre.
- Ver detalles como sinopsis, fecha, imagen, géneros y puntuación.
- Registro básico de usuarios mediante localStorage.
- Apartado de "Favoritos" del usuario.
- Responsive design para móviles y escritorio.
- Detalles y búsqueda en tiempo real gracias a la [API de TMDB](https://developer.themoviedb.org/docs/getting-started).

## Consideraciones y errores conocidos

- La [API de TMDB](https://developer.themoviedb.org/docs/getting-started) tiene límites de peticiones por segundo. Si se recibe más peticiones de la que soporta, devuelve error 429.
- La consultas a la [API de TMDB](https://developer.themoviedb.org/docs/getting-started) devuelven resultados en español. Si quieres recibir los resultados en otro idioma disponible en la API, debes de ir a `src/lib/fetchFromTMDB` y modificar el parametro de búsqueda `language=es-ES` por el lenguaje que quieras.
- Asegurate de ocultar tu clave API en producción usando .env y no subirla al repositorio.
- Si desplegás el proyecto, recordá añadir TMDB_ACCESS_KEY, y el dominio a ALLOWED_HOSTS en tu entorno remoto (ej: [Netlify](https://www.netlify.com/)).
