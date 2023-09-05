$(document).ready(function(){
    let numeros="0123456789";
    let letras="abcdefghijklmnopqrstvwxyz";
    let todo = numeros + letras;
    const generarpasword = (longitud) => {
        let pasword = " ";
        for(let x = 0; x < longitud; x++){
            let aleatorio =Math.floor(Math.random() * todo.length);
            pasword += todo.charAt(aleatorio);
        }
        return pasword;
    }

    $("#rfc").click(function(){
    var nm= $("#nom").val();
    var apepa= $("#ape_pat").val();
    var apema= $("#ape_mat").val();
    var fetch= $("#fecha").val();
    var nom=nm.substr(0, 2);
    var apep=apepa.substr(0, 2);
    var apem=apema.substr(0, 2);
    var ano=fetch.substr(2, 2);
    var mes=fetch.substr(5, 2);
    var dia=fetch.substr(8, 2);
    var rfc= nom + apep + apem + ano + mes + dia + generarpasword(3);

    $("#rfcgen").val(rfc);
});
});
$("#btn2").click(function(){
    var id = document.getElementById("usuario").value;
    $.ajax({
        type:"GET",
        url:"https://jsonplaceholder.typicode.com/users/"+ id,
        dataType:"json",
        success:function(data){
            var in1 = "" + data.name +"";
            var in2=  "" + data.email +"";
            $('#name').append(in1);
            $('#email').append(in2);
        }
        
    })
})

