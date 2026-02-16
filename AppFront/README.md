# AppFront

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

### En espanol

Antes de ejecutar todo deben de instalar algunas dependencias 

AppMean es el BackEnd de la aplicacion y tenemos que entrar a ella desde el cmd o en la terminal de visual studio
y ejecutar

-- bash
npm init -y 
--

Y nos generara un packet.json donde podremos empezar a trabajar

Necesitamos librerias para trabajar con express 

-- bash
npm install express mongoose cors

npm install dotenv
--

Instalremos una herramienta para que se actulice la pagina sin la necesidad de salir

--bash
npm install -g nodemon
--
Para que express escuche al puerto 3000 y solicitar peticiones e interactuar con diferentes rutas

Opcional: Si quieres ver si las peticiones a la base de datos se estan haciendo correctamente debes de instalar REST Client 
como extension en visual studio code e ir al archivo peticiones.rest que esta en la carpeta AppMean o la carpeta del BackEnd

Ahora para para el FrontEnd tenemos que tener instalado angular
En la terminal ejecutamos el cli de angular

--bash
npm install -g @angular/cli

y verificamos que este correctamente instalado (si no funciona reiniciamos vscode o la terminal)

ng version
---
Creamos la carpeta del Front End dentro o fuera de la carpeta AppMean o del BackEnd y ejecutamos
(asegurese de tener instalado git)
--bash 
ng new AppFront

y

CSS

--
entramos a la carpta del Front End, y ejecutamos lo siguiente para crear componentes que me van a permitir ver las canciones o la lista de canciones 

--bash 
ng generate component components/songs/SongsList --skip-tests

ng generate component components/songs/DetailSong --skip-tests

ng generate service services/Songs --skip-tests
--
y abrimos vscode en la carpeta del front end


para ejecutar la aplicacion tienen que tener abierta dos terminales

una en la ruta de la carpeta AppMean y otra en la carpeta AppFront y en cada terminal ejecutar

--bash 
npm start
--

y en el navegador poner la url http://localhost:4200/songs