# Nexup Frontend Challenge

En este repositorio, se encuentra la prueba técnica para el puesto de Frontend Developer en Nexup.
Este challenge está diseñado para evaluar tus habilidades en React y TypeScript. Consiste en construir una aplicación que muestre una lista de productos, permita filtrarlos por categoría y transforme los elementos de la lista antes de mostrarlos.

## Pasos a seguir:
1. Clone este repositorio en su máquina local usando Git.
   ```bash
   git clone https://gitlab.com/nexup/nexup-frontend-challenge.git
   ```
2. Crea un repositorio vacío en tu cuenta de GitHub con el mismo nombre de este.
   ```bash
    nexup-frontend-challenge
   ```
3. Muevesé a la carpeta del proyecto.
   ```bash
   cd ./nexup-frontend-challenge
   ```
4. Cambia la URL remota del repositorio clonado de GitHub, por la URL de tu repositorio.
   ```bash
   git remote set-url origin <tu-repositorio.git>
   ```
5. Sube el código a tu repositorio de GitHub.

## Recomedaciones
- **No** hagas un _fork_ de este repositorio.
- **No** hagas _push_ directamente a este repositorio.
- Crea un commit por cada cambio que realices. Utiliza mensajes **claros** y **descriptivos** para documentar tu proceso.
- Priorizá la correcta resolución lógica del challenge, no buscamos diseños complejos y complicados
  - Mantené el código ordenado y fácil de entender
  - Modularizá los componentes y armá funciones atómicas y reutilizables
  - Es válida la creación de nuevos componentes intermedios para resolver el problema, los componentes presentados son sugeridos

## Tareas
El objetivo de este challenge es armar un listado de productos que pueda ser filtrado por un selector de categoría:
- El selector de categoría `CategoryFilter` debe por defecto mostrar una categoría de `Todos`, y debe permitir elegir alguno de los valores permitidos (la lista puede ser expandida si se lo desea). Al elegir un valor, se debe actualizar la lista de productos
- El listado de productos `ProductList`
  - La lista debe mostrarse filtrada según la categoría elegida
  - Cada item debe mostrar los siguientes datos:
    - Estado del producto: Debe mostrarse como una indicador de color según el estado del producto
    - Nombre del producto
    - Categoria del producto
    - Precio del producto: Debe mostrarse con dos puntos decimales y el signo `$`
- La interfaz debe ser sencilla y clara. El estilado de componentes es libre, pero se valorará la correcta utilización de técnicas de CSS como Flexbox, Grid, etc.

### Objetivos opcionales
- Simular que la obtensión del listado de productos proviene de una API Rest
- Agregar un filtro por fulltext de los productos
- Armar funcionalidad de stock: Por cada producto podria tenerse un stock disponible, y entonces mostrar el stock disponible en el listado y permitir filtrar unicamente aquellos productos con stock
- Hacer un diseño responsive

## Entregables
- Un enlace a un repositorio de GitHub con el código de la aplicación React.
- Opcional: Un archivo README con explicaciones sobre el enfoque utilizado y cualquier otra información relevante.

## Evaluación
- Correctitud del código: La aplicación debe funcionar correctamente según los requisitos.
- Calidad del código: Claridad, uso adecuado de TypeScript, organización y limpieza del código.
- Eficiencia: La lógica debe ser eficiente y bien estructurada.
- Estilado correcto del código

