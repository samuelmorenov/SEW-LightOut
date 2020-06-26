"use strict";
class LightOut {
    constructor (f, c){
        this.filas = f;
        this.columnas = c;
        this.total = (this.filas*this.columnas)-1;
    }
    crearMatriz(){//Metodo que establece las luces enciendidas o apagadas con un patron por defecto
        this.matriz= ["false", "false", "false", "false", "false", 
                      "false", "false", "false", "false", "false", 
                      "false", "false", "false", "false", "false", 
                      "false", "false", "false", "false", "false", 
                      "false", "false", "false", "false", "false"];
        var clicks = 25;//Numero de clicks que se haran aleatoriamente para darle complejidad
        for (var i = 0; i < clicks; i++) {
            var posicion = Math.floor(Math.random() * this.total);
            this.tocar(posicion);
            //document.getElementById(posicion).value+=document.getElementById(posicion).value="*";//Si se descomenta esta linea quedan marcadas las casillas que se han pulsado
        }
    }
    mostrar(){//Este metodo ademas de cambiar el estado de las casillas en el html comprueba si todas estan apagadas para ver si se ha terminado el juego.
        var algunaEncendida = "false";
        for (var i = 0; i < this.matriz.length; i++) {
            this.cambiar(i, this.matriz[i]);
            if(this.matriz[i]=="true"){
                algunaEncendida = "true";
            }
        }
        if(algunaEncendida == "false"){
            alert("Enhorabuena! Has ganado :)");
        }
    }
    cambiar(elemento, estado){//Metodo que cambia el color de la casilla "elemento" al estado "estado"
        var color = "#fbff33";
        if(estado == "true"){
           color="#fbff33";
        }
        else{
            color="#181800";
        }
        document.getElementById(elemento).style.background=color;
    }
    tocar(numero){//Metodo que se llama desde los botones y llama al patron para cambiar las casillas de "numero" dependiendo del patron. Tambien llama a mostrar() para actualizar las casillas del html
        this.patron1(numero);
        
        this.mostrar();
    }
    patron0(numero){
        //Con este patron solo se cambia la casilla seleccionada
        if(this.matriz[numero]=="true"){
            this.matriz[numero]="false";
        }else{
           this.matriz[numero]="true"; 
        }
    }
    patron1(numero){
        //Con este patron se cambia la casilla seleccionada, la de encima, la de abajo, la de la derecha y la de la izquierda
        //Casilla central:
        this.patron0(numero);
        //Casilla de la izquierda:
        var mismaFila = (numero%this.filas) > ((numero-1)%this.filas);
        if(numero-1>=0 && mismaFila) this.patron0(numero-1);
        //Casilla derecha:
        var mismaFila = (numero%this.filas) < ((numero+1)%this.filas);
        if(numero+1>=0 && mismaFila) this.patron0(numero+1);
        //Casilla arriba:
        if(numero-this.columnas>=0) this.patron0(numero-this.columnas);
        //Casilla abajo:
        if(numero+this.columnas<=this.total) this.patron0(numero+this.columnas);
        
    }
}
var luces = new LightOut(5, 5);