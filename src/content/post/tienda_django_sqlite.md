---
publishDate: 1899-12-31T00:00:00Z
title: Tienda con Django + Sqlite - MVC -> MVT
description: Aprenda a realizar un proyecto sencillo con Django, construyendo una tienda básica de productos, clientes y ventas.
excerpt: Aprenda a realizar un proyecto sencillo con Django, construyendo una tienda básica de productos, clientes y ventas.
image: ~/assets/images/tienda_django_sqlite.png
category: ruta-de-cursos-para-el-desarrollo-web
tags:
  - django
  - aplicaciones_full_stack
  - desarrollo_web
canonical: https://thinker-cursos.vercel.app/tienda_django_sqlite
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.contenedor_contenido{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.contenido_publicacion{
    max-width: 50rem;
}
    @media screen and (max-width: 600px) {
        iframe {
            width: 100%;
            height: 34000px;
        }
    }
</style>

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

<!-- Iframe del curso en: https://learningstudioai.com/ -->
<!-- <iframe width="100%" height="28000px" src="https://learningstudioai.com/go/EjSeVEm7q1RCwM6mfE2S" title="Curso de Introducción a HTML | LearningStudioAI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->

<!-- Opciones para descargar el certificado -->
<div class="contenedor_contenido">
<div class="contenido_publicacion">

# Proyecto tienda Con Django + SQLite

Para realizar todo proyecto es bueno tener una perspectiva global de la infraestructura y de como va a funcionar el proyecto.

En nuestro caso vamos a manejar el patrón de Diseño **MVC**: Modelo vista controlador, en Django es Similar con **MVT**: Modelo vista témplate.

![Untitled](https://file.notion.so/f/s/a01d5cad-0f69-42f9-932d-210ff041b4b3/Untitled.png?id=b792b6da-3e7f-494b-8d7d-99816882ff1c&table=block&spaceId=d87234c5-13b0-40e0-8e7b-52982e090683&expirationTimestamp=1689811200000&signature=lFPRIC8jU5P5i9oWQ3kjmybddERJzAPrJD3XwJ4mZBI&downloadName=Untitled.png)

Todos los archivos del proyecto se van a mantener dentro del mismo servidor.

Con Django debemos de crear un proyecto base, donde tiene el  setting del proyecto y aplicaciones que se asocian a el, por ejemplo aplicaciones para apis, o aplicaciones para tener las vistas:

Ejemplo de la estructura principal:

nombre_proyecto/
> ├── **MiProyecto**/

>> settings.py

>> urls.py

> ├── **MiAplicacion/**
> │   ├── models.py
> │   ├── views.py
> │   ├── **templates**/
> │   │       └── archivo_template.html
> │   ├── **static**/
> │   │       └── archivo_css.css
> └── manage.py

> └── dbsqlite

Estos serían los archivos que en si vamos a trabajar, el resto de archivos se requieren en el framework pero no son modificados.

Recordemos, tenemos nuestro proyecto principal y desde allí asociamos mis aplicaciones, en sí hacemos esta asociación desde el setting 

Pues empecemos para ir entendiendo nuestro proyecto:

- Vamos a crear una tienda de ropa, se requiere que tenga una lista de productos como un inventario con que se pueda listar todos los productos e individualmente podamos crear un producto, modificarlo, eliminarlo o leer sus detalles de manera individual.
- lo mismo tener una vista de clientes donde


</div>
</div>