A continuación presentamos el diseño y la descripción funcional de una pequeña aplicación que será la base del trabajo que deberás desarrollar.

Tenés que usar el siguiente stack tecnológico para construir la aplicación:
○ HTML
○ JS (Utilizar React y Typescript)
○ CSS

Para resolver el siguiente ejercicio, se deberá utilizar la documentación de Coingecko (https://www.coingecko.com/en/api/documentation). La aplicación consta de tres componentes principales: la visualización de resultados junto con la paginación, y visualización del detalle de la moneda.
La aplicación debe ser responsive adaptándose a cualquier pantalla utilizando solamente CSS. El diseño y la ubicación de la misma corre por cuenta del desarrollador.

Visualización de resultados: Con visualizar resultados, nos referimos a poder consultar el siguiente endpoint: “/coin/markets”, con el parámetro que necesita por defecto en “USD” las siguientes propiedades:
symbol
name
image
current_price (deberá mostrarse con la separación de miles).
	

En el detalle (que debe estar en una página diferente) debe poder visualizarse a detalle la moneda seleccionada:
symbol
name
image
description
market_data.current_price.usd (precio actual en USD que se deberá mostrar con la separación de miles)
price_change_percentage_24h y price_change_24h (variación de las 24h en USD [Roja sí es negativa, verde sí es positiva])

Entregable
Repositorio en Github.
Enviar el link al repositorio por e-mail.
En caso de ser posible, entregar el ejemplo práctico desplegado en algún servidor gratuito: https://render.com/ - https://vercel.com/ - o alguna alternativa.
