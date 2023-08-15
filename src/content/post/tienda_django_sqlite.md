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
        
        .div_img{
            max-width:300px;
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

> <aside>
📖 **Glosario:**
</aside>

* 📖 **Django:** Es un framework o marco de trabajo para el desarrollo web, sirve para frontend, backend o ambos
* 📖 **Frontend:** hace referencia al área de trabajo del lado del cliente, al área visual
* 📖 **Backend:** hace referencia al área de trabajo del lado del servidor, del lado donde se almacena los datos.
* 📖 **Python:** es el lenguaje de programación:
* 📎 **Repositorio GitHub:** <a href="https://github.com/thinkercursos2023/tienda_django_full_stack_basica.git" target="_blank"> Link github </a>


Para realizar todo proyecto es bueno tener una perspectiva global de la infraestructura y de como va a funcionar el proyecto.

En nuestro caso vamos a manejar el patrón de Diseño **MVC**: Modelo vista controlador, en Django es Similar con **MVT**: Modelo vista témplate.

<div class="div_img">

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690074681/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_24_zbndyk.png)

</div>

Todos los archivos del proyecto se van a mantener dentro del mismo servidor.

Con Django debemos de crear un proyecto base, donde tiene el  setting del proyecto y aplicaciones que se asocian a el, por ejemplo aplicaciones para apis, o aplicaciones para tener las vistas:

Ejemplo de la estructura principal:

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690074719/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_25_hzkvyu.png)

Estos serían los archivos que en si vamos a trabajar, el resto de archivos se requieren en el framework pero no son modificados.

Recordemos, tenemos nuestro proyecto principal y desde allí asociamos mis aplicaciones, en sí hacemos esta asociación desde el setting 

Pues empecemos para ir entendiendo nuestro proyecto:

- Vamos a crear una tienda de ropa, se requiere que tenga una lista de productos como un inventario con que se pueda listar todos los productos e individualmente podamos crear un producto, modificarlo, eliminarlo o leer sus detalles de manera individual.
- lo mismo tener una vista de clientes con la misma funcionalidad.
- y tener una vista de ventas con la misma funcionalidad pero relacionando en cada venta el producto a vender y el cliente al que se le vendió.

> * 📎 **Repositorio GitHub:** <a href="https://github.com/thinkercursos2023/tienda_django_full_stack_basica.git" target="_blank"> Link github </a>

### Empecemos creando la infraestructura del código antes mencionada y luego nos introducimos a fondo en su desarrollo.

Según nuestro propósito es crear primero el proyecto base, llamémoslo **StoreProyect.**

Debemos crear una carpeta y la abrimos en visual studio code. y desde allí abrir la terminal para arrancar con el trabajo.

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690074828/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_26_vdarpg.png)

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690074845/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_27_veajhk.png)

Necesitamos tener instalado Python en su última versión recomendable y Django

comprobamos con los siguientes comandos:

- python --version

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690074876/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_28_ba2gv8.png)

- django-admin --version

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690074897/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_29_jlnkoq.png)

“Es bueno manejar ENV - Entorno virtual para el proyecto, pero en nuestro caso lo vamos a omitir para que sea más fácil crear este primer proyecto”

Con python y django ya tenemos todo para que funcione: si no los tienes mira donde descargarlos:

> * 📖 **Python:** <a href="https://www.python.org/downloads/" target="_blank"> https://www.python.org/downloads/ </a> 
> * 📖 **Django:** <a href="https://www.djangoproject.com/download/" target="_blank"> https://www.djangoproject.com/download/ </a>


### Ahora sí creemos la base estructural

**1ro el proyecto base:**

en la terminal enviamos el comando:

- django-admin startproject **<nombre_del_proyecto> .**

Lo que se dice con este comando es que por medio de django que es el framework vamos a inicializar un proyecto con el nombre cualquiera que desees y luego un espacio y punto para mantenernos en el mismo nivel de carpetas. ya que si lo dejas sin el punto al final crea una carpeta adicional y más adentro el proyecto.

Así fue el nuestro: 

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690075122/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_30_vzruz1.png)

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690075138/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_31_quelaz.png)

Ya nos creó el proyecto base, por fuera el archivo manage.py que es como el inicializador de comandos del proyecto y nos permite muchas funcionalidades y dentro del proyecto utilizaremos más el archivo **settings** y el archivo **Urls**



> * 📎 **Repositorio GitHub:** <a href="https://github.com/thinkercursos2023/tienda_django_full_stack_basica.git" target="_blank"> Link github </a>

### Ahora creamos la aplicación donde irá nuestras vistas, nuestros modelos, templates etc…

en la terminal enviamos el comando

la app  llamémosla **StoreApp. (”Puedes llamarla como desees”)**

- python manage.py startapp **<Nombre_De_La_App>**

así quedó la nuestra:

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690075822/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_35_fk49yr.png)

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690075839/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_36_k4gmnt.png)

en los próximos comandos podemos acortarlo pasando de **python** a **py**

ejemplo: 

- **python manage.py**
- **py manage.py**

es lo mismo pero un poquito más corto

### Ahora debemos comunicar nuestro proyecto principal con la APP

ingresamos al proyecto, al archivo **setting.py** y allí buscamos el apartado: **INSTALLED_APPS**

Que significa aplicaciones instaladas, a nuestro proyecto.

allí incluimos el nombre de nuestra app:

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690075331/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_32_ugg7ku.png)

tal cual se haya llamada al crearla.

> * 📎 **Repositorio GitHub:** <a href="https://github.com/thinkercursos2023/tienda_django_full_stack_basica.git" target="_blank"> Link github </a>

### Ahora solo nos falta la base de datos SQLite.

a nuestro proyecto por defecto viene incluida dicha relación en el archivo settings. 

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690075399/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_33_uirt29.png)

Esto es muy bueno ya que es una base de datos sencilla y fácil de manejar, para proyectos pequeños. cuando corremos el proyecto por primer vez si no tiene la base de datos creada ella se creará por primer ves en blanco. recuerda que puedes incluir otro o otros tipos de bases de datos más robustas, pero debes ver la documentación para implementarlas.

en nuestro caso no debemos hacer nada sino solamente correr el proyecto por primer vez con el siguiente comando:

- py **manage.py** runserver

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690075899/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_37_wpmqi4.png)

Este comando corre el proyecto por primer vez y nos da una advertencia y es que nos da unos modelos para la base de datos de manera predeterminada en Django, estos modelos son para facilitarnos el manejo de la base de datos por un área predeterminada de administración, también nos permite hacer más fácil el proceso de autenticación de usuarios.

Adicional con este comando nos creó la base de datos en cero, sin ningún dato pero ya con ella podemos trabajar.

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690075932/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_38_qwavrb.png)

Si nos vamos y abrimos el puerto que nos genera el comando que enviamos nos debe aparecer lo siguiente:

le puedes dar control + clic encima

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690075952/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_39_rajwet.png)

y nos abre:

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690075967/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_40_vozcon.png)

Para crear los modelos que nos recomienda Django para el área administrativa debemos enviar los siguientes comandos:

- py **manage.py** makemigrations

En este comando prepara la migración, acorde a los modelos que estén pendientes, en este caso son los modelos recomendados, pero cuando nosotros tengas los propios hechos en **models.py** también con este comando los prepara para ser enviados a la base de datos.

- py **manage.py** migrate

En este comando ya realiza una sentencia SQL para inyectar la base de datos, es como si ya concretara la migración.

Estos comandos van creando un historial de migraciones, si se desea efectuar una migración especifica se realiza el comando:

- py **manage.py** sqlmigrate <nombre_de_la_app> <numero_migracion>

en nuestro caso solo enviamos la migración pendiente:

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076046/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_41_gl4sxy.png)

allí efectuó todos los modelos predeterminados para el área administrativa

Si abrimos la base de datos desde un visulizador de DB sqlite: 

Aquí lo puedes descargar:

> * 📎 **slqite browser:** <a href="https://sqlitebrowser.org" target="_blank"> https://sqlitebrowser.org </a>


Al abrir este visualizador, la instalación es sencilla, todo siguiente y la instalas.

cuando abres este visualizador, abrimos la base de datos así:

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076187/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_42_g9c2zh.png)

la buscamos en la carpeta donde tenemos el proyecto:

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076202/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_43_ew81sq.png)

Al tenerla abierta podemos ver varias tablas creadas.

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076223/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_44_cdx063.png)

Son las tablas del modelo predeterminado para el área de administración podemos ver autenticación de usuarios, permisos, migraciones, grupos, etc…

Esto es muy útil para hacernos algunas cosas más sencillas.

Esta área administrativa la podemos ver en la ruta /admin

Inclusive está de manera predeterminada en el archivo Urls.py

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076241/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_45_g9r6ex.png)

Si nosotros corremos el proyecto, recuerda con el comando:

- py **manage.py** runserver

y vamos a la ruta /admin

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076285/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_46_vwzz7f.png)

nos va a aparecer el área administrativa de django.

Para ingresar a esta área debemos crear un superuasuario con el comando:

- py **manage.py** createsuperuser

debe tener varios parametros, por ejemplo que la clave no debe ser corta, que debe ser diferente al usuario, etc…

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076423/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_47_jqhcoq.png)

aquí cree: **usuario:** admin

**contraseña:** imda1234*

ensayemos:

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076481/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_48_vcdgaw.png)

Ingresamos pero Django nos aparece en inglés podemos cambiar el idioma desde el **Setting.py**

en el apartado: **LANGUAGE_CODE = 'en-us’**

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076509/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_49_rc7c0p.png)

lo pasamos a **‘es-co’** Español colombia

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076532/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_50_lxtmb7.png)

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076545/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_51_mgwndl.png)

ya nos cambia la visualización a español.

ya sabemos que esta área existe, pero no es el propósito del proyecto. desde allí es una herramienta con muchas funcionalidades como poder ver las tablas o modelos creados, siempre y cuando relacionemos estos modelos a la vista administrativa.

podemos hacer ensayos de registros o eliminación a estos modelos o también es muy util para crear autenticación y permisos desde área a los usuarios.

pero en nuestro caso es un poquito más sencillo la idea es que cualquier usuario visualice todo el contenido de nuestro proyecto e interactúe con él. 

También mientras que aprendes a programar, a crear, sea algo sencillo primero y luego ir aumentando la dificultad.

Si damos un resumen hasta el momento 

Solo hemos creado el proyecto base o principal, luego creamos la aplicación donde vamos ver las vistas y configuramos lo más básico que es relacionar la app al setting, cambiar el idioma y saber un poquito sobre esta área administrativa.

no es mucho lo que llevamos, pero vamos por un buen camino ya hicimos la estructura de trabajo que planteamos al principio.

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076566/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_52_bbip1j.png)

**en la realidad:**  

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076584/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_53_bwphp8.png)

> * 📎 **Repositorio GitHub:** <a href="https://github.com/thinkercursos2023/tienda_django_full_stack_basica.git" target="_blank"> Link github </a>

### Al tener ya la estructura con la cual trabajar, podemos enfocarnos en los modelos de las bases de datos, ya que con los datos vamos a trabar en las vistas, van a pasar por las rutas y van a tener una interacción constante en la base de datos.

por Ejemplo en este proyecto nos están solicitando crear una vista de productos, otra de clientes y otra de ventas, en ellas van a estar presentes nuestros modelos de datos.

Empecemos con el área de productos, si nos imaginamos que es lo principal y básico que tiene un producto:

el id del producto, su nombre, una descripción, un precio y una cantidad de stock o disponible.

hagamos ese primer modelo y vamos viendo los otros.

Ingresamos al archivo **models.py**

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076640/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_54_sne28h.png)

vemos que el archivo de forma predeterminada importa una clase models del framework django, gracias a esto podemos crear nuestros propios modelos.

Es la forma de como Django trabaja con la base de datos y nuestros modelos

Para crear un modelo debemos hacer lo siguiente:

Definimos nuestro modelo como una clase, e insertamos como parámetro el modelo de Models de Django:

**class Productos(models.Model)**:

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076669/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_55_vl1e8g.png)

Esta estructura indica que la clase productos va a ser el nombre de la tabla y gracias a los parámetros del modelo de Django, nos permite interactuar internamente en la tabla, por ejemplo los tipos de datos, el máximo de caracteres, llaves primarias, foráneas, condiciones, etc…

```python
from django.db import models

# Create your models here.
#Modelo de la tabla productos 
class Productos(models.Model):
    id_producto = models.BigIntegerField(primary_key=True) #Este será la llave primaria
    nombre_producto = models.CharField(max_length=50) # Se le incluyó un máximo de letras,
		# para que no ingresen nombres muy largos
    descripcion_producto = models.TextField()
    cantidad_disponible = models.IntegerField()
```

Así nos quedó a nosotros este primer modelo, podemos tener en cuenta estos tipos de datos: 

1. **`CharField`**: Para cadenas de texto cortas o medianas.
2. **`TextField`**: Para cadenas de texto largas, como bloques de texto o descripciones extensas.
3. **`IntegerField`**: Para números enteros.
4. **`FloatField`**: Para números en punto flotante (números con decimales).
5. **`BooleanField`**: Para representar valores booleanos (True o False).
6. **`DateField`**: Para fechas (sin incluir la hora).
7. **`DateTimeField`**: Para fechas y horas juntas.
8. **`TimeField`**: Para almacenar solo la hora.
9. **`EmailField`**: Para direcciones de correo electrónico válidas.
10. **`URLField`**: Para URLs o enlaces web.

para ensayar como funciona los modelos; podemos migrar esta primer tabla o modelo y lo notaremos en la base de datos:

**Recuerda migraciones:**

- py **manage.py** makemigrations
- py **manage.py** migrate

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076739/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_57_mvtorw.png)

visualizamos en la db:

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076757/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_58_ihhsxz.png)

Podemos ver después de la migración, la tabla creada fácilmente

> * 📎 **Repositorio GitHub:** <a href="https://github.com/thinkercursos2023/tienda_django_full_stack_basica.git" target="_blank"> Link github </a>

### Ahora pasemos al modelo de clientes:

Posiblemente necesitemos el id del cliente, nombre del cliente y correo. algo sencillito.

```python
#Modelo de la tabla clientes 
class Clientes(models.Model):
    id_producto = models.BigIntegerField(primary_key=True)
    nombre_cliente = models.CharField(max_length=50) 
    correo = models.CharField(max_length=50)
```

Podemos enviar la migración al finalizar los modelos, no hay problema.

### Ahora pasemos al modelo de las ventas:

necesitamos el id de la venta, el id del producto, cantidad vendida, el precio de venta, el total de la venta lo podemos pintar en la vista, multiplicando la cantidad por el precio de venta, necesitamos el id del cliente.

El id del producto y el id del cliente trabajan como llaves foráneas para mostrar más datos de estos de manera relacionada, y también para poner condicionales tales como:

No se puedan vender productos si el stock es menor a la cantidad a vender, siempre debe ser igual o mayor, también el cliente debe de existir.

```python
class Ventas(models.Model):
    id_venta = models.AutoField(primary_key=True)
    id_producto = models.ForeignKey(Productos, on_delete=models.CASCADE)
    cantidad_vendida = models.IntegerField()
    precio_venta = models.IntegerField()
    total_venta = models.IntegerField()
    id_cliente = models.ForeignKey(Clientes, on_delete=models.CASCADE)

    def clean(self):
        # Validar que la cantidad vendida no sea mayor que el stock disponible
        if self.cantidad_vendida > self.id_producto.cantidad_disponible:
            raise ValidationError("La cantidad vendida no puede ser mayor al disponible.")
```

Ahora sí enviamos la migración:

- py **manage.py** makemigrations
- py **manage.py** migrate

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076948/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_59_u6kzgw.png)

Ya tenemos las 3 tablas que necesitamos:

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076964/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_60_nm7qri.png)

**y la de ventas con su llave primaria y secundarias**

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690076997/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_61_urxern.png)

> * 📎 **Repositorio GitHub:** <a href="https://github.com/thinkercursos2023/tienda_django_full_stack_basica.git" target="_blank"> Link github </a>

### Podemos corroborar el optimo funcionamiento de las tablas por medio del área administrativa que nos da Django

para ello debemos de proporcionar los modelos a la vista de administración:

Ingresamos al archivo **admin.py**

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690077050/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_62_stbu2j.png)

Este archivo nos da la posibilidad de registrar las tablas o modelos al panel administrativo, nos sirve mucho por que desde allí le podemos realizar pruebas de funcionamiento a las tablas.

para ello debemos importar los modelos y nos brinda varias opciones para trabajar con ellos

```python
from django.contrib import admin
from .models import Productos

# Register your models here.
@admin.register(Productos)# Se registra el modelo a la vista administrativa
class Productos(admin.ModelAdmin):#el modelo se puede manejar como una clase 
    list_display = ["id_producto", "nombre_producto", "descripcion_producto", 
"cantidad_disponible"] #Esta opción de list_display nos permite que en la vista
# administrativa se pueda ver en columnas
    search_fields = ["id_producto","nombre_producto"] #Con esta opción podemos
# ver desde el panel administrativo un area de busqueda por id y por nombre
```

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690077072/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_63_uec1fw.png)

Si ingresamos al área administrativa podemos notar ello, el modelo productos, el buscador y la lista de productos por columnas

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690077097/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_64_fonpjh.png)

Así podemos hacer con los 3 modelos: productos, clientes y ventas

quedando así: 

```python
from django.contrib import admin
from .models import Productos, Clientes,Ventas

# Modelos de productos
@admin.register(Productos)# Se registra el modelo a la vista administrativa
class Productos(admin.ModelAdmin):#el modelo se puede manejar como una clase 
    list_display = ["id_producto", "nombre_producto", "descripcion_producto", "cantidad_disponible"] #Esta opción de list_display nos permite que en la vista administrativa se pueda ver en columnas
    search_fields = ["id_producto","nombre_producto"] #Con esta opción podemos ver desde el panel administrativo un area de busqueda por id y por nombre

# Modelos de clientes
@admin.register(Clientes)
class Clientes(admin.ModelAdmin):
    list_display = ["id_cliente", "nombre_cliente", "correo"] 
    search_fields = ["id_cliente","nombre_cliente"] 

# Modelos de ventas
@admin.register(Ventas)
class Ventas(admin.ModelAdmin):
    list_display = ["id_venta", "id_producto", "cantidad_vendida", "precio_venta", "total_venta", "id_cliente"] 
    search_fields = ["id_venta","id_producto", "id_cliente"]
```

Hago un resumen de esto último:

Creamos los modelos, que son las tablas para la base de datos, las migramos a la base de datos y ahora último las estamos manejando desde al área administrativa, donde esto nos permite validar que si se registre bien los datos en la base de datos e inclusive ver las relaciones entre tablas o inclusive ver las condiciones que hemos puesto:

Mira bien el archivo **models.py** si te quedó bien:

```python
from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.
#Modelo de la tabla productos 
class Productos(models.Model):
    id_producto = models.BigIntegerField(primary_key=True) #Este será la llave primaria
    nombre_producto = models.CharField(max_length=50) # Se le incluyó un máximo de letras, para que no ingresen nombres muy largos
    descripcion_producto = models.TextField()
    cantidad_disponible = models.IntegerField()

#Modelo de la tabla clientes 
class Clientes(models.Model):
    id_cliente = models.BigIntegerField(primary_key=True)
    nombre_cliente = models.CharField(max_length=50) 
    correo = models.CharField(max_length=50) 

class Ventas(models.Model):
    id_venta = models.AutoField(primary_key=True)
    id_producto = models.ForeignKey(Productos, on_delete=models.CASCADE)
    cantidad_vendida = models.IntegerField()
    precio_venta = models.IntegerField()
    total_venta = models.IntegerField()
    id_cliente = models.ForeignKey(Clientes, on_delete=models.CASCADE)

    def clean(self):
        # Validar que la cantidad vendida no sea mayor que el stock disponible
        if self.cantidad_vendida > self.id_producto.cantidad_disponible:
            raise ValidationError("La cantidad vendida no puede ser mayor al disponible.")
```

mira bien el archivo **admin.py** si te quedó bien:

```python
from django.contrib import admin
from .models import Productos, Clientes,Ventas

# Modelos de productos
@admin.register(Productos)# Se registra el modelo a la vista administrativa
class Productos(admin.ModelAdmin):#el modelo se puede manejar como una clase 
    list_display = ["id_producto", "nombre_producto", "descripcion_producto", "cantidad_disponible"] #Esta opción de list_display nos permite que en la vista administrativa se pueda ver en columnas
    search_fields = ["id_producto","nombre_producto"] #Con esta opción podemos ver desde el panel administrativo un area de busqueda por id y por nombre

# Modelos de clientes
@admin.register(Clientes)
class Clientes(admin.ModelAdmin):
    list_display = ["id_cliente", "nombre_cliente", "correo"] 
    search_fields = ["id_cliente","nombre_cliente"] 

# Modelos de ventas
@admin.register(Ventas)
class Ventas(admin.ModelAdmin):
    list_display = ["id_venta", "id_producto", "cantidad_vendida", "precio_venta", "total_venta", "id_cliente"] 
    search_fields = ["id_venta","id_producto", "id_cliente"]
```

al ingresar a la ruta /admin con el super usuario que ya creamos, te recuerdo:

**Usuario**: admin **contraseña**: imda1234*

te aparece así:

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690077179/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_65_w7vrgu.png)

las 3 tablas, los 3 modelos.

puedes ensayar creando un cliente, un producto y una venta, y mira en ventas lo bonito que crea las relaciones y la condición que hemos puesto en la cantidad a vender

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690077198/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_66_aqrtva.png)

### Si llegaste hasta aquí, felicítate!, ya hiciste un Backend básico y funcional.

### Ahora vamos por el Frontend:

**Está facilito, no?**

Hagamos un resumen de lo que llevamos:

- creamos el proyecto
- creamos la aplicación para la vista y modelos y también unimos el proyecto con la app
- configuramos el leguaje, y el setting también validamos la existencia de la base de datos sqlite y la relación entre el proyecto y la aplicación
- creamos los modelos de datos
- migramos los modelos tanto los predeterminados por Django como los que creamos nosotros
    
    productos, clientes y ventas.
    
- aprendimos el manejo del área administrativa y a incluir los modelos allí y le hicimos unas pruebas previas.

así ya tenemos el backend listo para ser usado en el frontend en las vistas del usuario:

### Para el frontend necesitamos las 3 vistas

un componente que se repite en ellas es el menú, donde podamos pasar de una vista a otra sin inconveniente:

vamos a hacer primero cada vista y posicionarnos en ellas, luego el componente que se repite y luego traemos los datos del backend.

> * 📎 **Repositorio GitHub:** <a href="https://github.com/thinkercursos2023/tienda_django_full_stack_basica.git" target="_blank"> Link github </a>

### Vistas en el frontend, las vistas que verán nuestros usuarios:

dentro de nuestra aplicación debemos crear dos carpetas adicionales, la carpeta de templates y la carpeta static.

allí se incluirá los archivos html y los archivos css o imágenes también.

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690080060/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_67_a8nnco.png)

dentro de la app creamos las dos carpetas y los archivos principales, como el componente del menú que vamos a utilizar en todas las páginas y cada página, también los estilos css principalmente para el componente y uno global para las páginas.

Puedes hacer la paginación como desees, inclusive entre más descompongas una página mucho mejor, por que hay cosas que se pueden repetir como un botón, un contenedor etc. en nuestro caso solo descomponemos el menú como algo utilizado en todas.

> * 📎 **Repositorio GitHub:** <a href="https://github.com/thinkercursos2023/tienda_django_full_stack_basica.git" target="_blank"> Link github </a>

### Debemos ensayar que todas las páginas funcionen y el componente.

Para ello debemos exponer cada página en el archivo **views.py** que son las vistas y también a cada una darle una ruta.

Empecemos con la vista productos:

Ingresamos al archivo **pagina_productos.html**

y le ponemos:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soy la vista Productos</title>
</head>
<body>
    Hola soy la vista productos
</body>
</html>
```

Ya con esto cuando se abra dicha vista nos aparecerá que estamos en ella.

este archivo html lo llamamos en el archivo views.py

```python
from django.shortcuts import render

#Aquí definimos la función de vista llamada vista_productos
def vista_productos(request):
		return render(request, 'pagina_productos.html')
    #Retornamos de manera renderizada la página productos, 
		#cabe recalcar que Django sabe la ubicación de estos archivos que estén 
		#en la carpeta templates
    
```

y llamamos la vista en urls.py

```python
from django.contrib import admin
from django.urls import path
from StoreApp.views import vista_productos #Aquí importamos la vista productos

urlpatterns = [
    path('', vista_productos),#Esto quiere decir que cuando no hay ruta, 
						 #está vacía, llamará la vista productos.
    path('admin/', admin.site.urls),
]
```

Mira para que lo entiendas fácil, como funciona:

![imagen](https://res.cloudinary.com/dvey7dssc/image/upload/v1690080330/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Revoluci%C3%B3n_cientifico_2_1_elo8to.png)

**en resumen**

**urls → views → index.html**

al haber entendido esto creamos todas las vistas: productos, clientes y ventas

los archivos html primero los identificamos:

### pagina_productos.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soy la vista Productos</title>
</head>
<body>
    Hola soy la vista productos
</body>
</html>
```

### pagina_clientes.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soy la vista Clientes</title>
</head>
<body>
    Hola soy la vista clientes
</body>
</html>
```

### pagina_ventas.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soy la vista Ventas</title>
</head>
<body>
    Hola soy la vista Ventas
</body>
</html>
```

Ahora llamamos estos archivos html desde **views.py**

```python
from django.shortcuts import render

#Aquí definimos la función de vista llamada vista_productos
def vista_productos(request):
    return render(request, 'pagina_productos.html')
 #Retornamos de manera renderizada la página productos, cabe recalcar que Django sabe la ubicación de estos archivos que estén en la carpeta templates

#Vista clientes
def vista_clientes(request):
    return render(request, 'pagina_clientes.html')

#Vista Ventas
def vista_ventas(request):
    return render(request, 'pagina_ventas.html')
```

y asignamos a cada vista una url en **urls.py**

```python
from django.contrib import admin
from django.urls import path
from StoreApp.views import vista_productos,vista_clientes,vista_ventas #Aquí importamos la vista productos

urlpatterns = [
    path('', vista_productos),#Esto quiere decir que cuando no hay ruta, está vacía, 
															#llamará la vista productos.
    path('clientes/', vista_clientes),#Es la url de la vista clientes
    path('ventas/', vista_ventas),#Es la url de la vista ventas
    path('admin/', admin.site.urls),#Es la url de la vista administrativa, de django
]
```

> * 📎 **Repositorio GitHub:** <a href="https://github.com/thinkercursos2023/tienda_django_full_stack_basica.git" target="_blank"> Link github </a>

podemos comprobar que cada ruta funcione, ponemos a correr el proyecto.

py **manage.py** runserver

y en la url vamos añadiendo las rutas:

cuando no hay nada:

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690080352/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_68_ytfn4h.png)

cuando tiene la ruta clientes:

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690080375/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_69_n8vfmw.png)

Cuando tiene la ruta ventas:

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690080395/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_70_mkgmyr.png)

Está funcionando perfectamente:

### Ahora ingresamos el componente del menú, navbar en todos los archivos html de vistas:

ya que es un componente que se va a repetir en todas las vistas:

### componente_navbar.html

```html
<div>
    Componente menú navbar
</div>
```

para incrustar un componente en las páginas html debemos usar esto, en la parte del html que lo deseamos incrustar:

**{% include '<ruta_del_componente>' %}**

por ejemplo nuestro componente en la página de productos quedaría así:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soy la vista Productos</title>
</head>
<body>
    {% include 'componente_navbar.html' %}
    Hola soy la vista productos
</body>
</html>
```

si los componentes estuvieran en una carpeta componentes o en otra ruta debemos cambiar acorde donde esté el componente ejemplo 

**{% include 'componentes/componente_navbar.html' %}**

ahora lo incluimos en todas las otras páginas:

La página de clientes:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soy la vista Clientes</title>
</head>
<body>
    {% include 'componente_navbar.html' %}
    Hola soy la vista clientes
</body>
</html>
```

la página de ventas:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soy la vista Ventas</title>
</head>
<body>
    {% include 'componente_navbar.html' %}
    Hola soy la vista Ventas
</body>
</html>
```

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690080570/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_71_zcoaog.png)

ya al haber quedado en todas las vistas seguimos con modificar dicho componente con los links de cada vista y pase de una vista a otra sin problema.

Así nos quedaría:

```html
<div>
    <ul>
        <a href="/"><li>Productos</li></a>
        <a href="/clientes"><li>Clientes</li></a>
        <a href="/ventas"><li>Ventas</li></a>
    </ul>
</div>
```

y en cada vista aparecerá el menú

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690080593/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_72_mrcv44.png)


> * 📎 **Repositorio GitHub:** <a href="https://github.com/thinkercursos2023/tienda_django_full_stack_basica.git" target="_blank"> Link github </a>

### Ahora pintemos algunos daticos en cada vista:

desde la función de las vistas, en **views.py** desde allí es donde le vamos a enviar los datos al archivo html de cada vista.

Las views es como el intermediario de lo que ve el usuario y la base de datos. 

En el contexto del patrón de diseño Modelo-Vista-Controlador (MVC), las **views.py** en Django se asemejan al concepto de controlador.

podemos crear un diccionario para ensayar antes de traernos los datos de la base de datos.

por ejemplo en la definición de función que da la vista de productos creamos un diccionario con datos llamado productos y lo renderizamos en la página html.

```python
def vista_productos(request):
    productos = [
        {
            'id_producto': '1',
            'nombre_producto': 'producto nombre 1',
            'descripcion_producto': 'producto descripción 1',
            'cantidad_disponible': '10',
        }
        # se puede Agregar más productos si es necesario
    ]
    return render(request, 'pagina_productos.html',{'productos':productos})
```

dentro de la página html a la que le enviamos dichos datos tiene que recorrer estos datos así:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soy la vista Productos</title>
</head>
<body>
    {% include 'componente_navbar.html' %}
    <br>
    Hola soy la vista productos
    <br>
    <ul>
        {% for item in productos %}
            <li> 
                id_producto : {{ item.id_producto  }}  
                nombre_producto: {{ item.nombre_producto }} 
								descripcion_producto: {{ item.descripcion_producto }} 
								cantidad_disponible: {{ item.cantidad_disponible }}
            </li>
        {% endfor %}
    </ul>
</body>
</html>
```

allí creamos una lista donde ese objeto que está llegando desde las **views.py** se va a desglosar por medio de un for, lo que hace el for es un ciclo que va a recorrer dicho objeto, y le va a asignar a la variable item cada valor que encuentra  en el objeto productos, pero adicional a esto cuando coge el item es según el criterio, en cada caso relaciona el item con id del producto, o con el nombre del producto, descripción etc. pinsa cada cosita relacionandolo al item:

Resultado en la vista:

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690080651/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_73_ckft0y.png)

ya pintamos datos desde **views.py** hacia el html

**views → html**

ahora debemos traer los datos que hay en la base de datos:

```python
from django.shortcuts import render
from .models import Productos #importamos el modelo Productos

#Aquí definimos la función de vista llamada vista_productos
def vista_productos(request):
    productos_get_list = Productos.objects.all() #Creamos una instancia de ese modelo
					# productos y lo convertimos en un objete, con todos los datos que tiene dentro
    return render(request, 'pagina_productos.html',{'productos':productos_get_list})
```

Lo que hicimos allí fue importar el modelo y crear una instancia de ese modelo, para convertir 

los datos que tiene ese modelo en un objeto con todos esos datos.

así vemos la vista:

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690080831/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_74_prk22b.png)

No te vayas a perder es fácil:

importamos el modelo de la tabla productos y lo pasamos a la views (vistas) y desde allí lo pasamos al html donde ya en realidad se pintan los datos:

es así:

**models → views → html**

creemos unos dos productos más desde el área administrativa, para que veas como funciona.

/admin → usuario: admin → contraseña: imda1234*

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690080865/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_75_j38ayk.png)

y en la vista productos:

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690080918/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_76_zoofhu.png)

En este momento solo estamos listando los datos que hay en la tabla productos.

Más adelante tenemos que hacer  el CRUD completo, ósea que podamos adicionar, modificar, crear y borrar.

pero terminemos primero esto con las 3 vistas.

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690080941/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_77_sa4rqy.png)

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690080957/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_78_mgmszw.png)

> * 📎 **Repositorio GitHub:** <a href="https://github.com/thinkercursos2023/tienda_django_full_stack_basica.git" target="_blank"> Link github </a>

Así queda el código:

### views.py

```python
from django.shortcuts import render
from .models import Productos, Clientes,Ventas #importamos el modelo Productos

#Aquí definimos la función de vista llamada vista_productos
def vista_productos(request):
    productos_get_list = Productos.objects.all() 
		#Creamos una instancia de ese modelo productos y lo convertimos en un objete, 
		#con todos los datos que tiene dentro
    return render(request, 'pagina_productos.html',{'productos':productos_get_list})

 #Retornamos de manera renderizada la página productos, cabe recalcar que Django 
 #sabe la ubicación de estos archivos que estén en la carpeta templates

#Vista clientes
def vista_clientes(request):
    clientes_get_list = Clientes.objects.all()
    return render(request, 'pagina_clientes.html', {'clientes':clientes_get_list})

#Vista Ventas
def vista_ventas(request):
    ventas_get_list = Ventas.objects.all()
    return render(request, 'pagina_ventas.html', {'ventas':ventas_get_list})
```

### pagina_productos.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soy la vista Productos</title>
</head>
<body>
    {% include 'componente_navbar.html' %}
    <br>
    Hola soy la vista productos
    <br>
    <ul>
        {% for item in productos %}
            <li> 
                id_producto : {{ item.id_producto  }}  
                nombre_producto: {{ item.nombre_producto }} 
								descripcion_producto: {{ item.descripcion_producto }} 
								cantidad_disponible: {{ item.cantidad_disponible }}
            </li>
        {% endfor %}
    </ul>
</body>
</html>
```

### pagina_clientes.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soy la vista Clientes</title>
</head>
<body>
    {% include 'componente_navbar.html' %}
    <br>
    Hola soy la vista clientes
    <br>
    <ul>
        {% for item in clientes %}
            <li> 
                id_cliente : {{ item.id_cliente  }}  
                nombre_cliente: {{ item.nombre_cliente }} 
                correo: {{ item.correo }}
            </li>
        {% endfor %}
    </ul>
</body>
</html>
```

### pagina_ventas.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Soy la vista Ventas</title>
</head>
<body>
    {% include 'componente_navbar.html' %}
    <br>
    Hola soy la vista Ventas
    <br>
    <ul>
        {% for item in ventas %}
            <li> 
                id_venta : {{ item.id_venta  }}  
                id_producto: {{ item.id_producto.id_producto }} 
                nombre_producto: {{ item.id_producto.nombre_producto }} 
                cantidad_vendida: {{ item.cantidad_vendida }}
                precio_venta: {{ item.precio_venta }}
                total_venta: {{ item.total_venta }}
                id_cliente: {{ item.id_cliente.id_cliente }}
                nombre_cliente: {{ item.id_cliente.nombre_cliente }}
            </li>
        {% endfor %}
    </ul>
</body>
</html>
```

### Ahora podemos hacer el Create

El método que nos permita crear un nuevo producto, un nuevo cliente, una nueva venta

En Django podemos tener la posibilidad de crear un formulario acorde al modelo que necesitemos y por medio del método post crear un nuevo item.

Debemos de crear un nuevo archivo llamado

- **forms.py**

Este archivo nos va a permitir traer el modelo determinado y al cual le vamos a insertar la información por medio de este.

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690081015/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_79_i3gvsk.png)

### forms.py

```python
from django import forms
from .models import Productos, Clientes, Ventas

#Formulario Productos
class ProductoForm(forms.ModelForm):
    class Meta:
        model = Productos
        fields = '__all__'

#Formulario clientes
class ClientesForm(forms.ModelForm):
    class Meta:
        model = Clientes
        fields = '__all__'

#Formulario ventas
class VentasForm(forms.ModelForm):
    class Meta:
        model = Ventas
        fields = '__all__'
```

> * 📎 **Repositorio GitHub:** <a href="https://github.com/thinkercursos2023/tienda_django_full_stack_basica.git" target="_blank"> Link github </a>

Allí lo que hacemos es crear una clase de formulario que va a trabajar con cada modelo de datos.

Debemos de crear una vista para cada formulario, cada vista de esta nos permita enviar la información que requiera cada modelo.

Ejemplo empezamos con Productos:

Se crea 

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690081043/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_80_xgkox1.png)

### crear_producto.html

```html
<!DOCTYPE html>
<html>
<head>
    <title>Crear Producto</title>
</head>
<body>
    <a href="/productos/">Vovler</a>
    <h1>Crear un nuevo producto</h1>
    <form method="post">
        {% csrf_token %} #Este mecanismo de formularios requiere de un token
        {{ form.as_p }} #Esta es la forma de pintar el formulario acorde a forms.py
        <button type="submit">Guardar Producto</button>
    </form>
</body>
</html>
```

Este archivo html es el que va a mostrar el formulario de nuevo producto y este formulario se construye según el formato que trae de **forms.py** y **views.py**

Para poder ver esta vista html debemos hacer el mismo proceso que con cualquier vista

**urls → views → html**

Osea desde Urls se le asigna una Url pra la vista y desde la vista llama el archivo html

pero siempre empezamos al contrario, creamos el archivo html, luego la vista en views y luego la url

en views hacemos esto: 

```python
from .forms import ProductoForm  # Importa el formulario para crear un producto

# Vista para crear un nuevo producto
def crear_producto(request):
    if request.method == 'POST':
        form = ProductoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/productos/')  # Redirige a la vista de productos después de guardar el nuevo producto
    else:
        form = ProductoForm()
    return render(request, 'crear_producto.html', {'form': form})
```

En esta función lo que hace es mandar el formato de formulario acorde al modelo que se llamó en el archivo **forms.py**, allí visualiza el tipo de datos que tiene ese modelo y es el que se pinta en en el archivo crear_producto.html, si el modelo tiene 10 atributos esos los pinta en dicha vista, es según el modelo. 

Luego al ya tener pintado el formulario hace una pequeña validación si el formulario está bien lo guarda y redirige al usuario a la vista productos

![Imagen](https://res.cloudinary.com/dvey7dssc/image/upload/v1690081125/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Revoluci%C3%B3n_cientifico_3_1_ejb83y.png)

Así mismo hacemos las vistas de crear un nuevo cliente y una nueva venta:

### crear_cliente.html

```html
<!DOCTYPE html>
<html>
<head>
    <title>Crear Cliente</title>
</head>
<body>
    <a href="/clientes/">Vovler</a>
    <h1>Crear un nuevo cliente</h1>
    <form method="post">
        {% csrf_token %}
        {{ form.as_p }}
        <button type="submit">Guardar Cliente</button>
    </form>
</body>
</html>
```

### views.py

```python
from .forms import ProductoForm, ClientesForm 
# Importa el formulario para crear un producto, cliente

# Vista para crear un nuevo cliente
def crear_cliente(request):
    if request.method == 'POST':
        form = ClientesForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/clientes/')  
# Redirige a la vista de clientes después de guardar el nuevo cliente
    else:
        form = ClientesForm()
    return render(request, 'crear_cliente.html', {'form': form})
```

### urls.py

```python
from StoreApp.views import crear_cliente

urlpatterns = [
    path('crear_cliente/', crear_cliente)
]
```

en la página de clientes también adicionamos un botón para que pueda ir a la url de crear cliente:

### pagina_clientes.html

```python
<a href="/crear_cliente/">Crear un nuevo cliente</a>
```
<div class="div_img">

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690081169/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_81_njufva.png)

</div>
![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690081185/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_82_symyil.png)

> * 📎 **Repositorio GitHub:** <a href="https://github.com/thinkercursos2023/tienda_django_full_stack_basica.git" target="_blank"> Link github </a>

### Ya con lo explicado puedes entender todo el código montado en Github

> * 📎 **Repositorio GitHub:** <a href="https://github.com/thinkercursos2023/tienda_django_full_stack_basica.git" target="_blank"> https://github.com/thinkercursos2023/tienda_django_full_stack_basica.git </a>

Así queda el proyecto:

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690081327/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_83_g6dzxy.png)

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690081343/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_84_ibcpsh.png)

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690081358/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_85_ciyfb5.png)

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690081372/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_86_zskhyt.png)

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690081387/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_87_qlhuky.png)

![Untitled](https://res.cloudinary.com/dvey7dssc/image/upload/v1690081401/Thinker%20files/Tienda%20con%20Django%20%20Sqlite%20MVC%20%20MVT/Untitled_88_zps1ry.png)

</div>
</div>