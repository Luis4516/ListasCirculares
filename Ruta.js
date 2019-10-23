export default class Ruta{
    constructor(tableArt){
        this._tableArt = tableArt;
        this._primero = null;
        console.log(this._bases);
    }

    _borrar(row,base){
        let btnBorrar = document.createElement("input");
        btnBorrar.type="button";
        btnBorrar.value = "Borrar";
        btnBorrar.className = "btn btn-danger";
        btnBorrar.addEventListener("click",()=>{
          this.borrarBase(row, base);
        });
        row.cells[3].innerHTML="";
        row.cells[3].appendChild(btnBorrar);
    }
    AgregarBase(objBase){
      if(this._primero == null) {
        this._primero = objBase;
      }
      else if(objBase.codigo < this._primero.codigo) {
        objBase.siguiente = this._primero;
        this._primero.anterior = objBase;
        this._primero = objBase;
      }
      else if(objBase.codigo > this._primero.codigo) {
        this._primero.siguiente = objBase;
        objBase.anterior = this._primero;
      }
      console.log(this._primero);
    }

    AgregarATabla(base){
        let row = this._tableArt.insertRow(-1);
        let cellCodigo = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellMinutos = row.insertCell(2);
        row.insertCell(3);
        
        cellCodigo.innerHTML = base.codigo;
        cellNombre.innerHTML = base.nombre;
        cellMinutos.innerHTML = base.minutos;
        this._borrar(row,base);

        let objBase = {
            codigo: base.codigo,
            nombre: base.nombre,
            minutos: base.minutos,
        };

        return objBase;
    }
    borrarBase(row,base){
        let pos = this._buscarBase(base.codigo);
        if(pos == this._primero){
          this._primero = pos.siguiente;
        }
        else {
          let pos = this._buscarBase(base.codigo);
          if(pos == this._primero){
            this._primero = pos.siguiente;
          }
          else {
            let pos2 = this._buscarBaseAnt(base.codigo);
            pos.siguiente.anterior = pos2;
            pos2.siguiente = pos.siguiente
          }
        }
        console.log(this._primero);
        row.remove();
    }

    _buscarBaseAnt(codigo){
      var buscar = this._primero;
      while(buscar.siguiente.codigo != codigo) {
        buscar = buscar.siguiente;
      }
      return buscar;
    }

    
    _buscarBase(codigo){
      var buscar = this._primero;
      while(buscar.codigo != codigo) {
        buscar = buscar.siguiente;
      }
      return buscar;
    }
}