function go(){
    
    if (document.form.psw.value=='pass' && document.form.uname.value=='user'){ 
            document.form.submit(); 
        } 
        else{ 
             alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
        } 
    } 