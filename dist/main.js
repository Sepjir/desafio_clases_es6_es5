"use strict";

require("core-js/modules/es.parse-int.js");

var _clientes = _interopRequireDefault(require("./clientes.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Cliente 1 y su impuesto
var i1 = new _impuestos["default"](1000000, 100000);
var cl1 = new _clientes["default"]("Julio", i1); //Cliente 1 y su impuesto

var i2 = new _impuestos["default"](1500000, 50000);
var cl2 = new _clientes["default"]("Pedro", i2); //Cliente 1 y su impuesto

var i3 = new _impuestos["default"](3000000, 120000);
var cl3 = new _clientes["default"]("Andrés", i3); //Cliente 1 y su impuesto

var i4 = new _impuestos["default"](1580000, 60000);
var cl4 = new _clientes["default"]("Lucia", i4); //Cliente 1 y su impuesto

var i5 = new _impuestos["default"](1755000, 200000);
var cl5 = new _clientes["default"]("Jose", i5); //Cliente 1 y su impuesto

var i6 = new _impuestos["default"](5000000, 220000);
var cl6 = new _clientes["default"]("Ignacio", i6);
var btn_impuesto = document.querySelector("#calcularImpuestoNC");
var nombre_nuevo_cliente = document.querySelector("#nombreCliente");
var monto_bruto_a = document.querySelector(".number");
var deducciones = document.querySelector(".number2");
var resultado = document.querySelector("#resultado"); //Función para calcular nuevos impuestos validando números y string vacío del cliente

btn_impuesto.addEventListener("click", function (e) {
  e.preventDefault();

  if (isNaN(monto_bruto_a.value) || isNaN(monto_bruto_a.value)) {
    alert("Ingresa sólo números en los campos de Monto Bruto Anual y Deducciones");
    resultado.innerHTML = "";
  } else if (nombre_nuevo_cliente.value == "") {
    alert("Dejaste vacío el nombre del nuevo Cliente");
  } else {
    var calculo = (parseInt(monto_bruto_a.value) - parseInt(deducciones.value)) * 0.21;
    resultado.innerHTML = "El impuesto que debe pagar ".concat(nombre_nuevo_cliente.value, " es de $").concat(calculo);
  }
}); //transformando a Array los clientes instanciados

var todos_clientes = [cl1, cl2, cl3, cl4, cl5, cl6]; // Mostrar en el Dom los clientes, su monto bruto anual, deducciones e impuesto a pagar

function tableClientesHtml(datos) {
  var tablaClientes = "\n        <table class=\" table table-success mt-3\">\n        <thead>\n        <tr>\n            <th scope=\"col\">Nombre</th>\n            <th scope=\"col\">Monto Bruto Anual</th>\n            <th scope=\"col\">Deducciones</th>\n            <th scope=\"col\">Impuesto a Pagar</th>\n        </tr>\n        </thead>";

  for (var i = 0; i < datos.length; i++) {
    tablaClientes += "\n                <tr>\n                    <td>".concat(datos[i]._nombre, "</td>\n                    <td>$").concat(datos[i]._impuesto._monto_bruto_anual, "</td>\n                    <td>$").concat(datos[i]._impuesto._deducciones, "</td>\n                    <td>").concat(datos[i].calcularImpuesto(datos).valor, "</td>\n                </tr>");
  }

  document.querySelector("#datosClientesImpuestos").innerHTML = tablaClientes;
}

tableClientesHtml(todos_clientes);