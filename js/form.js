
const datosformularios1 = () =>{

    
    let name = document.getElementById("nombre").value;
    let ape = document.getElementById("apellido").value;
    let age = document.getElementById("año").value;
    let numeroi = document.getElementById("ID").value;
    let c={
      nombree: name,
      Apellido: ape,
      Añodenacimiento: age,
      Cedula: numeroi
    }

    localStorage.setItem("informacion",JSON.stringify(c))
    let n= JSON.parse(localStorage.getItem("informacion"));

 console.log(n.nombree + " " + n.Apellido + " " + n.Añodenacimiento + " " + n.Cedula)
 
}

const datosformularios2 = () =>{

    
    let name = document.getElementById("nombrec").value;
    let ape = document.getElementById("apellidoc").value;
    let numeroid = document.getElementById("numero id").value;
    let telefono = document.getElementById("telefono").value;
    let c={
      nombree: name,
      Apellido: ape,
      numerodeid: numeroid,
      Cedula: telefono
    }

    localStorage.setItem("informacion",JSON.stringify(c))
    let n= JSON.parse(localStorage.getItem("informacion"));

    console.log(n.nombree + " " + n.Apellido + " " + n.numerodeid + " " + n.Cedula)
 
}

const datosformularios3 = () =>{

    
    let name = document.getElementById("nombrec2").value;
    let ape = document.getElementById("apellidoc2").value;
    let age = document.getElementById("numero id2").value;
    let numeroi = document.getElementById("telefono2").value;
    let c={
      nombree: name,
      Apellido: ape,
      Añodenacimiento: age,
      Cedula: numeroi
    }

    localStorage.setItem("informacion",JSON.stringify(c))
    let n= JSON.parse(localStorage.getItem("informacion"));

    console.log(n.nombree + " " + n.Apellido + " " + n.Añodenacimiento + " " + n.Cedula)
 
}

const datosformularios4 = () =>{

    
    let name = document.getElementById("sick").value;
    let ape = document.getElementById("son").value;
    let age = document.getElementById("born").value;
    let numeroi = document.getElementById("cell").value;
    let c={
      nombree: name,
      Apellido: ape,
      Añodenacimiento: age,
      Cedula: numeroi
    }

    localStorage.setItem("informacion",JSON.stringify(c))
    let n= JSON.parse(localStorage.getItem("informacion"));

    console.log(n.nombree + " " + n.Apellido + " " + n.Añodenacimiento + " " + n.Cedula)
 
}