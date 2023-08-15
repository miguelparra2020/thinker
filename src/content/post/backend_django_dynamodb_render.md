---
publishDate: 1899-12-30T00:00:00Z
title: Backend Django Rest Framework Api - CRUD ⇒ base de datos Dynamo DB AWS  → El proyecto backend lo subimos a github y lo desplegamos en render.com
description: Aprenda a realizar un proyecto backend sencillo con Django, Rest Framework para realizar el CRUD a una base de datos Dynamo DB de AWS.
excerpt: Aprenda a realizar un proyecto backend sencillo con Django, Rest Framework para realizar el CRUD a una base de datos Dynamo DB de AWS.
image: ~/assets/images/backend_django_dynamodb_render.png
category: ruta-de-cursos-para-el-desarrollo-web
tags:
  - django
  - dynamo_db
  - aplicaciones_backend
  - desarrollo_web
canonical: https://thinker-cursos.vercel.app/backend_django_dynamodb_render
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

    @media (max-width: 700px) {
        
        .contenido_publicacion{
    width: 94%;
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

### Proyecto backend Con Django - Api rest framework CRUD a Dynamo DB + subir proyecto backend a github y hostear el servicio en Render.com -> todo estaría en línea y podemos comprobar servicio con API tester

> <aside>
📖 **Glosario:**
</aside>

* 📖 **Django:** Es un framework o marco de trabajo para el desarrollo web, sirve para frontend, backend o ambos
* 📖 **Frontend:** hace referencia al área de trabajo del lado del cliente, al área visual
* 📖 **Backend:** hace referencia al área de trabajo del lado del servidor, del lado donde se almacena los datos.
* 📖 **Python:** es el lenguaje de programación:
* 📎 **Repositorio GitHub:** <a href="https://github.com/thinkercursos2023/tienda_django_full_stack_basica.git" target="_blank"> Link github </a>


<aside>
📖 Deseamos crear un proyecto backend que nos permita hacer un CRUD en linea de una base de datos, en este ejemplo es una base de datos No SQL Dynamo DB que es de Amazon AWS, nos da muy buenas características, como un buen rendimiento en lectura y escritura y un almacenamiento muy bueno de 25Gb, la creación de una cuenta en Amazon AWS es de 1 Dólar y esta base de datos mientras no se pase de estos criterios no vale nada.

</aside>

<aside>
📖 La intención es que por medio de [render.com](http://render.com) tengamos unas url de endpoints. osea de puntos de acceso a la base de datos y nos de el CRUD, un ejemplo sería [rendermitienda.com/usuarios/](http://rendermitienda.com/usuarios/) allí nos muestre todos los usuarios por el Metodo Get o enviar uno nuevo por el método post, [rendermitienda.com/usuarios/](http://rendermitienda.com/usuarios/)1 o el usuario 1

</aside>

La intención que se tiene con este servicio es poder registrar los tiempos que los usuarios de manera ramdon ingresan a una página y registrar el tiempo de permanencia.

### Empecemos creando el proyecto Django y la librería Rest Framework

Necesitamos tener instalado Python en su última versión recomendable y Django

comprobamos con los siguientes comandos:

- python --version

<!-- ![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690074876/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_28_ba2gv8.png) -->

- django-admin --version
<!-- 
![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690074897/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_29_jlnkoq.png) -->


Con python y django ya tenemos todo para que funcione: si no los tienes mira donde descargarlos:

> * 📖 **Python:** <a href="https://www.python.org/downloads/" target="_blank"> https://www.python.org/downloads/ </a> 
> * 📖 **Django:** <a href="https://www.djangoproject.com/download/" target="_blank"> https://www.djangoproject.com/download/ </a>


### Ahora sí creemos la base estructural

**1ro el proyecto base:**

en la terminal enviamos el comando:

- django-admin startproject **<nombre_del_proyecto> .**

Lo que se dice con este comando es que por medio de django que es el framework vamos a inicializar un proyecto con el nombre cualquiera que desees y luego un espacio y punto para mantenernos en el mismo nivel de carpetas. ya que si lo dejas sin el punto al final crea una carpeta adicional y más adentro el proyecto.

Así fue el nuestro: 
<!-- 
![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690075122/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_30_vzruz1.png)

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690075138/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_31_quelaz.png) -->

Ya nos creó el proyecto base, por fuera el archivo manage.py que es como el inicializador de comandos del proyecto y nos permite muchas funcionalidades y dentro del proyecto utilizaremos más el archivo **settings** y el archivo **Urls**



> * 📎 **Repositorio GitHub:** <a href="https://github.com/thinkercursos2023/tienda_django_full_stack_basica.git" target="_blank"> Link github </a>

### Ahora creamos la aplicación donde irá nuestras vistas, nuestros modelos, templates etc…

aunque debemos tener en cuenta que para este proyecto lo más esencial será  los modelos para interactuar con la DB

en la terminal enviamos el comando

la app  llamémosla **StoreApp. (”Puedes llamarla como desees”)**

- python manage.py startapp **<Nombre_De_La_App>**

así quedó la nuestra:

<!-- ![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690075822/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_35_fk49yr.png)

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690075839/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_36_k4gmnt.png) -->

en los próximos comandos podemos acortarlo pasando de **python** a **py**

ejemplo: 

- **python manage.py**
- **py manage.py**

es lo mismo pero un poquito más corto

### Ahora debemos comunicar nuestro proyecto principal con la APP

ingresamos al proyecto, al archivo **setting.py** y allí buscamos el apartado: **INSTALLED_APPS**

Que significa aplicaciones instaladas, a nuestro proyecto.

allí incluimos el nombre de nuestra app:


tal cual se haya llamada al crearla.



```python
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'miApp', #👈 mi aplicación
    'rest_framework',
]
```

### Ahora solo nos falta la base de datos SQLite.

a nuestro proyecto por defecto viene incluida dicha relación en el archivo settings. 

<!-- ![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690075399/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_33_uirt29.png) -->

Esto es muy bueno ya que es una base de datos sencilla y fácil de manejar, para proyectos pequeños. cuando corremos el proyecto por primer vez si no tiene la base de datos creada ella se creará por primer ves en blanco. recuerda que puedes incluir otro o otros tipos de bases de datos más robustas, pero debes ver la documentación para implementarlas.

en nuestro caso no debemos hacer nada sino solamente correr el proyecto por primer vez con el siguiente comando:

- py **manage.py** runserver

<!-- ![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690075899/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_37_wpmqi4.png) -->