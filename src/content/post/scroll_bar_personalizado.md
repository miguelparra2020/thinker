---
publishDate: 1899-12-29T00:00:00Z
title: Diseño personalizado del SCROLL BAR
description: Para que su plataforma web tenga un scroll bar que tenga un aspecto al que viene por defecto debes hacer lo siguiente
excerpt: Para que su plataforma web tenga un scroll bar que tenga un aspecto al que viene por defecto debes hacer lo siguiente
image: ~/assets/images/scroll_bar_personalizado.png
category: cursos-y-contenido-en-desarrollo-web
tags:
  - desarrollo_web
  - html
  - css
canonical: https://thinker-cursos.vercel.app/scroll_bar_personalizado
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

- Saber si desear tener un scroll bar diferente para toda la plataforma, para todas las páginas
- o si deseas tener este scroll bar personalizado para un contenedor especifico o página especifica

En el primer caso si deseas aplicarlo en todas las páginas te puedes situar en lá página base, casi todos los frameworks web tienen una página base o layout base y desde allí aplican estilos generales, SEO, metados etc 

desde allí vas a aplicar el siguiente código:

```html
<html>
<head>
<style>
			/* Estilo del scroll vertical */
			body::-webkit-scrollbar {
				width: 2px; /* Ancho del scroll */
			}

			body::-webkit-scrollbar-thumb {
				background-color: #a5a5a5; /* Color de la barra del scroll */
				border-radius: 4px; /* Borde redondeado de la barra */
			}

			body::-webkit-scrollbar-thumb:hover {
				background-color: #888; /* Color de la barra del scroll al pasar el mouse */
			}

			/* Estilo del scroll horizontal (si es necesario) */
			body::-webkit-scrollbar-track {
			background-color: #f1f1f1; /* Color de fondo del scroll */
			}

			/* Estilo del scroll en Firefox (si es necesario) */
			scrollbar-width: thin; /* Ancho del scroll en Firefox */
			scrollbar-color: #a5a5a5 #f1f1f1; 
		</style>
	</head>
<body> ....
```

Allí estamos realizando dichos estilos aplicados al body y esto sería un estilo de scroll general

si deseas a un contenedor aplícalo así y puedes estar en la hoja de estilos de dicho componente:

```html
<style>
			/* Estilo del scroll vertical */
			.contenedor::-webkit-scrollbar {
				width: 2px; /* Ancho del scroll */
			}

			.contenedor::-webkit-scrollbar-thumb {
				background-color: #a5a5a5; /* Color de la barra del scroll */
				border-radius: 4px; /* Borde redondeado de la barra */
			}

			.contenedor::-webkit-scrollbar-thumb:hover {
				background-color: #888; /* Color de la barra del scroll al pasar el mouse */
			}

			/* Estilo del scroll horizontal (si es necesario) */
			.contenedor::-webkit-scrollbar-track {
			background-color: #f1f1f1; /* Color de fondo del scroll */
			}

			/* Estilo del scroll en Firefox (si es necesario) */
			scrollbar-width: thin; /* Ancho del scroll en Firefox */
			scrollbar-color: #a5a5a5 #f1f1f1; 
		</style>
```