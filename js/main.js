import {Circulo} from "./circulo.js"
import {Poligono} from "./poligono.js"
let ps = [];
let indice = 0;
let fn_create = function (){
    imprimeXY(event);
    if (ps[indice]==null){
        ps[indice] = new Poligono();
    }
    let c = new Circulo(event.layerX,event.layerY,50,"#ff0000");;
    c.drow;
    ps[indice].setCirculo(c);
    console.log(ps[indice]);
    c.drow();
    ps[indice].unir("#ffff00");
}
document.querySelector("#canv").addEventListener("click", fn_create)

document.querySelector("#unir").addEventListener("click",function(){
    document.querySelector("#canv").removeEventListener("click",fn_create)
    if (ps[indice].getcantvertices()>2){
        ps[indice].unir("#ffff00",true)
        let centro = ps[indice].getcentro();        
        let c = new Circulo(centro.posX,centro.posY,30,"#ff0000")
        c.drow();
        ps[indice].setCentro(c);
        indice++;
    }
    document.querySelector("#canv").addEventListener("mousedown", function(event){
        for (let i = 0; i < ps.length; i++) {
            if (ps[i].centro != null) {
                if( ps[i].centro.meclickearon(event)==true){
                    console.log("mover");
                }   
            }
           
        }
    })
    document.querySelector("#canv").addEventListener("mouseup", function(event){
        console.log("arriba");
        
    })
})





function imprimeXY (e){
    console.log(e.layerX);
    console.log(e.layerY);   
}