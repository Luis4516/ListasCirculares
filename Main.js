import Base from "./Base.js";
import Ruta from "./Ruta.js";

class Main{
    constructor(){
        let ruta = new Ruta(
            document.querySelector("#tableArt"),
        );
        
    document.querySelector("#btnAgregar").addEventListener("click",() => {
        let codigo = document.querySelector("#codigo").value;
        let nombre = document.querySelector("#nombre").value;
        let minutos = document.querySelector("#minutos").value;
        let toString = document.querySelector("#toString");
        
        let objBase = {
            codigo: codigo,
            nombre: nombre,
            minutos: minutos
        };

        let base = new Base(objBase);
            ruta.AgregarATabla(base);
            ruta.AgregarBase(base);
        
        toString.textContent = base.toString();
    });
    
    }
}

var m = new Main()