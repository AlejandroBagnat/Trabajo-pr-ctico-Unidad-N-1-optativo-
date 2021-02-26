const showInsurance = () => {
   document.getElementById("result").innerHTML = document.getElementById("show").value;
    /*data();*/
    
};

//const button = document.querySelector("button");

const data = () => {
    var result = document.getElementById("show").value;
    var name = document.getElementById("nameId").value;
    var surname = document.getElementById("surnameId").value;
    var dni = document.getElementById("dniId").value;
    var email = document.getElementById("emailId").value;
    var phone = document.getElementById("phoneId").value;

    document.getElementById("nameId").value = name;
    
    document.getElementById("idName").innerHTML = "El nombre es: " + name;
    document.getElementById("idSurname").innerHTML = "El apellido es: " + surname;
    document.getElementById("idDni").innerHTML = "El DNI es: " + dni;
    document.getElementById("idEmail").innerHTML = "El email es: " + email;
    document.getElementById("idPhone").innerHTML = "El telefono es: " + phone;
    document.getElementById("result").innerHTML = "El costo del seguro es: " + result;

    
    /*
            alert("El nombre es: " +document.getElementById("idName").innerHTML);
            alert("El apellido es: " +document.getElementById("idSurname").innerHTML);
            alert("El DNI es: " +document.getElementById("idDni").innerHTML);
            alert("El email es: " +document.getElementById("idEmail").innerHTML);
            alert("El telefono es: " +document.getElementById("idPhone").innerHTML);
            alert("El costo del seguro es: " + document.getElementById("result").innerHTML);

    */ 
   
};          

const alterStyleIn = (elem) => {
    elem.style.background = 'yellow';
};

const alterStyleOut = (elem) => {
    elem.style.background = 'green';
};

function myfun(event) {
    event.preventDefault();
    /*alert("OK");*/
}

document.getElementById("myAnchor").addEventListener("click", function(event){
   event.preventDefault();
   /*alert("OK");*/
});

//button.addEventListener('click',data,false);