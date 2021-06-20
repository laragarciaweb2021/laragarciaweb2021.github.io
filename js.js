console.log("Cargado exitosamente")



 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCBPAy9N0RmMpPVaBjfHlUBp7eA7bOjb-o",
    authDomain: "fbproyectofinalauth.firebaseapp.com",
    projectId: "fbproyectofinalauth",
    storageBucket: "fbproyectofinalauth.appspot.com",
    messagingSenderId: "917131799636",
    appId: "1:917131799636:web:7d893e7e6c0064b6c051c1",
    measurementId: "G-0FX9PVLQ0X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase


  var db = firebase.firestore();

let arregloUsuarios = [];

  db.collection("usuarios").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

    	var obj = doc.data()
        obj.id = doc.id;
        arregloUsuarios.push(obj);
    });
});
  


  function agregar_empleado(){
  	var edad = document.getElementById("edad").value
  	var nombre = document.getElementById("nombreEmpleado").value
  	var area = document.getElementById("areaempleado").value

  	if(nombre == "" ||nombre == null){
  		alert("El nombre no puede estar vacio")
  	}else{
  		  db.collection("Empleados").add({ 

    Nombre: nombre,
    Edad: edad,
    Area: area
    

})
.then(function(docRef) {
    alert("Su información se guardó correctamente")
})
.catch(function(error) {
    console.error("Error al agregar información", error);
});

  	}

  }
