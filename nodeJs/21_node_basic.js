// console.log("Hello World ! NodeJs");

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Learning JS</title>
      <style>
          h1 {
              font-size: 5vw;
              color: rgb(47, 91, 76);
              text-align: center;
              font-family: 'Open Sans';
          }
  
          .center-text {
              text-align: center;
          }
  
          .margin {
              margin: 100px;
          }
  
          .heading {
              font-size: 3vw;
              font-family: 'Open Sans';
          }
  
          a {
              font-family: 'Open Sans';
              display: block;
              text-decoration: none;
              color: black;
              font-size: 2vw;
          }
  
          .box {
              border: solid 2px rgb(0, 0, 0);
              background-color: rgb(201, 224, 245);
              margin-bottom: 30px;
          }
  
          .notes{
              font-size: 20px;
          }
      </style>
  </head>
  
  <div>
      <div class="box">
          <h1>&#127800; Hello Beautiful Peoples &#x1F44D;</h1>
      </div>
      <div class="center-text heading">&#129303; JavaScript for you &#128525;</div>
  
      <div class="margin">
          <div class="center-text">
              <a href="1_datatypes.html">DataTypes</a>
              <a href="2_operators.html">Operators</a>
              <a href="3_javascript.html">Miscellaneous</a>
              <a href="4_alert.html">Alert</a>
              <a href="5_prompt.html">Prompt</a>
              <a href="6_confirm.html">Confirm</a>
              <a href="7_onload.html">Onload</a>
              <a href="8_conditionals.html">Conditionals</a>
              <a href="9_function.html">Function</a>
              <a href="10_string_math_date_functions.html">String | Math | Date Function</a>
              <a href="11_array_functions.html">Array Function</a>
              <a href="12_2darray.html">2D Array</a>
              <a href="13_2darray.html">2D Array</a>
              <a href="14_objects.html">Object</a>
              <a href="15_typeof_and_type_conversion.html">Typeof and Type Conversion</a>
          </div>
      </div>

      <script src="index.js"></script>
      </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});