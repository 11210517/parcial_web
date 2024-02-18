
//Limpiar campos
const lim = ()=>{
   document.getElementById("usuariotxt").value ="";
   document.getElementById("contraseñatxt").value="";
   document.getElementById("roltxt").value="";
}

//Buscar archivo json
const adds = () =>{
    
   let username = document.getElementById("usuariotxt").value;
   let password = document.getElementById("contraseñatxt").value;
  
   fetch("json/logi.json")
      .then(response => response.json())
      .then(data => {
         let user = data.find(user => user.username === username && user.password === password);
        if (user) {
          location.href ="html/admin.html";
          alert("Bienvenido Administrador");
        }else{
          uss();
        }
      })
};

const uss = () =>{
    
  let username = document.getElementById("usuariotxt").value;
  let password = document.getElementById("contraseñatxt").value;

  fetch("json/datos.json")
     .then(response => response.json())
     .then(data => {
        let user2 = data.find(user => user.username === username && user.password === password);
       if (user2) {
         location.href ="html/usuario.html";
         alert("Bienvenido Usuario");
       }else{
         alert("Usuario o contraseña incorrectos");
       }
     })
     .catch(error => console.error("Error al cargar los usuarios", error));
     console.log("Usuario o contraseña incorrectos");
};

 