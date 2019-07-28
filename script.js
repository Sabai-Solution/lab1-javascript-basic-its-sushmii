function validateEmptyValues(){

var txtEmail=document.getElementById("txtEmail")
var txtUn=document.getElementById("txtUn")
var txtPassword=document.getElementById("txtPassword")

var appendError="";
if(txtEmail==""){
	appendError="email";
}
if(txtUn==""){
	if(appendError!=""){
		appendError=appendError+"and";
	}
	appendError=appendError+"un";
}
if(txtPassword==""){
	if(appendError!=""){
		appendError=appendError+"and";
	}
	appendError=appendError+"Password";
}
if(appendError==""){
		appendError=appendError+"cannot be empty.";
		alert(appenderror);
		return false;
	}
	else{
		return true;
	}
	}

