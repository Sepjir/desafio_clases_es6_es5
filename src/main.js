import Cliente from "./clientes.js";
import Impuesto from "./impuestos.js";

//Cliente 1 y su impuesto
const i1 = new Impuesto(1000000, 100000)
const cl1 = new Cliente("Julio", i1)

//Cliente 1 y su impuesto
const i2 = new Impuesto(1500000, 50000)
const cl2 = new Cliente("Pedro", i2)

//Cliente 1 y su impuesto
const i3 = new Impuesto(3000000, 120000)
const cl3 = new Cliente("Andrés", i3)

//Cliente 1 y su impuesto
const i4 = new Impuesto(1580000, 60000)
const cl4 = new Cliente("Lucia", i4)

//Cliente 1 y su impuesto
const i5 = new Impuesto(1755000, 200000)
const cl5 = new Cliente("Jose", i5)

//Cliente 1 y su impuesto
const i6 = new Impuesto(5000000, 220000)
const cl6 = new Cliente("Ignacio", i6)

const btn_impuesto = document.querySelector("#calcularImpuestoNC")
const nombre_nuevo_cliente = document.querySelector("#nombreCliente")
const monto_bruto_a = document.querySelector(".number");
const deducciones = document.querySelector(".number2");
const resultado = document.querySelector("#resultado")

//Función para calcular nuevos impuestos validando números y string vacío del cliente
btn_impuesto.addEventListener("click", function (e) {
    e.preventDefault()
    if (isNaN(monto_bruto_a.value) || isNaN(monto_bruto_a.value)) {
        alert("Ingresa sólo números en los campos de Monto Bruto Anual y Deducciones")
        resultado.innerHTML = ""
    } else if (nombre_nuevo_cliente.value == "") {
         alert("Dejaste vacío el nombre del nuevo Cliente")
    } else {
        const calculo = (parseInt(monto_bruto_a.value) - parseInt(deducciones.value))*0.21
        resultado.innerHTML = `El impuesto que debe pagar ${nombre_nuevo_cliente.value} es de $${calculo}`
    }
})

//transformando a Array los clientes instanciados
const todos_clientes = [cl1,cl2,cl3,cl4,cl5,cl6]


// Mostrar en el Dom los clientes, su monto bruto anual, deducciones e impuesto a pagar
function tableClientesHtml(datos) {
    let tablaClientes = `
        <table class=" table table-success mt-3">
        <thead>
        <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Monto Bruto Anual</th>
            <th scope="col">Deducciones</th>
            <th scope="col">Impuesto a Pagar</th>
        </tr>
        </thead>`

     for (let i = 0; i < datos.length; i++) {
        tablaClientes +=`
                <tr>
                    <td>${datos[i]._nombre}</td>
                    <td>$${datos[i]._impuesto._monto_bruto_anual}</td>
                    <td>$${datos[i]._impuesto._deducciones}</td>
                    <td>${datos[i].calcularImpuesto(datos).valor}</td>
                </tr>`
    }        
	document.querySelector("#datosClientesImpuestos").innerHTML = tablaClientes;
}
tableClientesHtml(todos_clientes)



