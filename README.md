# React Firebase Chat

Bienvenidos al repositorio donde trabajaremos durante el curso de **Firebase Junio 2024 en Tknika**.

A lo largo de este curso desaroollaremos una sala de chat lo publicaremos, para llevar acabo el proyecto utilizaremos:

* Firebase Hosting
* Firebase Auth
* Firestore

Para arrancar el proyecto ejecuta

`npm install`

Y posteriormente:

`npm start`

## Solucionar errores

Es posible que antes de arrancar de un error de que no reconoce algunos paquetes, para esolver ese problema debemos ejecutar.

`export NODE_OPTIONS=--openssl-legacy-provider`

---

Si nos encontramos en **Codespaces** e indica el error **Error: Cannot find modul** con **code: 'MODULE_NOT_FOUND'**, entonces debemos ejecutar:

`rm -rf node_modules`

`rm -f package-lock.json`

`npm cache clean --force`

`npm install`
