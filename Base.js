export default class Base {
    constructor(base) {
      this._codigo = base.codigo;
      this._nombre = base.nombre;
      this._minutos = base.minutos;
      this._siguiente = null;
      this._anterior = null;
    }

    get siguiente() {
      return this._siguiente;
    }

    set siguiente(siguiente) {
      this._siguiente = siguiente;
    }
    
    get anterior() {
      return this._anterior;
    }

    set anterior(anterior) {
      this._anterior = anterior;
    }
    
    get codigo() {
      return this._codigo;
    }
  
    get nombre() {
      return this._nombre;
    }

    get minutos() {
        return this._minutos;
      }


    /*toString() {
        let string = `La ruta ${this._nombre} 
        código: ${this._codigo} 
        precio: ${this._precio}`
        return string;
    }
    /*/
  }
  