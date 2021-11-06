class Cliente {
    constructor (nombre, impuesto) {
        this._nombre = nombre
        this._impuesto = impuesto

    }
    get nombre() {
        return this._nombre
    }
    set nombre (nuevo_nombre) {
        return this._nombre = nuevo_nombre
    }

    calcularImpuesto() {
        const calculo_impuesto = (this._impuesto.monto_bruto_anual - this._impuesto.deducciones)* 0.21
        return {
            texto: `El impuesto a pagar es: $${calculo_impuesto}`,
            valor: `$${calculo_impuesto}`
        }
    }
}
export default Cliente