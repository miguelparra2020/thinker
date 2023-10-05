---
publishDate: 1899-12-27T00:00:00Z
title: Exportar variables CSS o SCSS 
description: Este método es muy útil cuando tienes estilos que se pueden llegar a repetir en otras hojas de estilo, lo más común son colores, fuentes, box shadows, etc, por ende para tener uniformidad podemos crear un archivo ya sea global o separado por nuestro propósito y este reutilizarlo en diferentes hojas de estilo
excerpt: Este método es muy útil cuando tienes estilos que se pueden llegar a repetir en otras hojas de estilo, lo más común son colores, fuentes, box shadows, etc, por ende para tener uniformidad podemos crear un archivo ya sea global o separado por nuestro propósito y este reutilizarlo en diferentes hojas de estilo
image: ~/assets/images/exportar_variables_css_scss.png
category: cursos-y-contenido-en-desarrollo-web
tags:
  - desarrollo_web
  - html
  - css
canonical: https://thinker-cursos.vercel.app/exportar_variables_css_scss
---
<!-- 
1- Rutas academicas del 2000 - 2050 
2- Cursos del 1950 - 1999
3- Diplomados  del 1900 - 1949
4- Publicaciones instagram de 1850 - 1899
5- Libros 1800 - 1849
 -->

 <!-- Estilos de la hoja -->
<style>
    .contenedor_creador{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .contorno_creador{
    display: flex;
    flex-direction: row;
    align-items: center;
    border-width: 2px;
    border-color: rgb(0, 7, 130);
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
}
.div_img_creador{
    width: 100px;
    height: 100px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.img_creador{
    width: 96px;
    height: 96px;
}
.nombre_creador{
    font-weight: 700;
}
.div_button_perfil{
 background-color: rgb(8 145 178);
 margin-bottom: 2px;
 margin-bottom: 2px;
 margin-left: 10px;
 margin-right: 10px;
 display: flex;
 align-items: center;
 justify-content: center;
 border-radius: 5px;
 box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
 color:white;
 cursor: pointer;
 text-decoration: none;
}
.div_button_perfil:hover{
    background-color: rgb(7, 98, 120);
}
.div_button_perfil_vaki{
 background-color: rgb(8, 178, 107);
 margin-bottom: 2px;
 margin-bottom: 2px;
 margin-left: 10px;
 margin-right: 10px;
 display: flex;
 align-items: center;
 justify-content: center;
 border-radius: 5px;
 box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
 color:white;
 cursor: pointer;
 text-decoration: none;
}
.div_button_perfil_vaki:hover{
    background-color: rgb(7, 120, 64);
}
a{
    text-decoration: none;
}
.contenedor_certificado{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.div_img_qr_certificado{
    max-width:25rem;
}
    @media screen and (max-width: 600px) {
        iframe {
            width: 100%;
            height: 34000px;
        }
    }
</style>
 <!-- Estilos de la hoja -->

<!-- Creador del curso -->
<div class="contenedor_creador">
    <div class="contorno_creador">
        <div class="div_img_creador">
            <img src="https://res.cloudinary.com/dvey7dssc/image/upload/v1688870165/Thinker%20files/Foto_de_perfil_profesional3_xqhaz9.png" alt="Imagen del creador de contenido" class="img_creador">
        </div>
        <div>
            <div class="div_titulo_creador">
                Editor del contenido
            </div>
            <div class="div_nombre_creador">
                <span class="nombre_creador">Miguel Á Páez</span>
            </div>
            <a href="https://www.miguelpaez.vercel.app/" target="_blank" rel="noopener noreferrer" class="div_button_perfil">
            <div class="div_button_perfil">
                Ver perfil &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
</svg>
            </div>
            </a>
        </div>
    </div>
</div>
<!-- Creador del curso -->

<!-- Donación a la plataforma -->
<div class="contenedor_creador">
    <div class="contorno_creador">
        <div class="div_img_creador">
            <img src="https://res.cloudinary.com/dvey7dssc/image/upload/v1688778269/Thinker%20files/Vaki_guwr7h.png" alt="Imagen del creador de contenido" class="img_creador">
        </div>
        <div>
            <div class="div_titulo_creador">
                ¡Ayudanos a ayudar!
            </div>
            <div class="div_nombre_creador">
                <span class="nombre_creador">Donación en Vaki</span>
            </div>
            <a href="/donacion" rel="noopener noreferrer" class="div_button_perfil_vaki">
            <div class="div_button_perfil_vaki">
                Donar &nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-wallet2" viewBox="0 0 16 16">
  <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>
</svg>
            </div>
            </a>
        </div>
    </div>
</div>
<!-- Donación a la plataforma -->

por ejemplo crear el archivo: global.css ó colors.css ó fonts.css 

Así dejamos declarado estas variables que vamos a utilizarlas constantemente en otras hojas de estilo y ahorramos tiempo, ahorramos líneas de código y también uniformidad en nuestro desarrollo.

Vamos  a hacer un ejemplo con un archivo: colors.css

```css
:root {
    --color-1: #007bff;
    --color-2: #ff5733;
    --color-3: #f1f1f1;
    --color-4: red;
    --color-5: yellow;
    --color_6: orange;
    --color-white: white;
    --color-black: black;
  }
```

En este se creo una paleta de colores que posiblemente utilicemos en todas las páginas

por ende en la página inicial o home page creamos el archivo index.css

```css
@import './colors.css';

.div{
    width: 100%;
    height: 50vh;
    background-color: var(--color-1);
}
```

Lo que hicimos en este fue importar el archivo de colores y utilizamos sus variables con: 

var(—color-1);

Si vamos a utilizar scss sería así:

en scss se crean las variables y luego se exportan, aquí sería desde el archivo colors.scss

```scss
$color_1: #333333;
$color_2: #9ea0a2;
$color_3: #7a7a7a;
$color_4: #575655;
$color_white: #ffffff;
$color_black: #000000;

:export {
    color_1: $color_1;
    color_2: $color_2;
    color_3: $color_3;
    color_4: $color_4;
    color_white: $color_white;
    color_black: $color_black;
}
```

en el archivo index.scss

```scss
@import './colors.scss';

.div{
    width: 100%;
    height: 50vh;
    background-color: $color_1;
}
```

en este archivo importamos colors y lo utilizamos con la variable: $color_1