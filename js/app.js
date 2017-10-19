function fncSubmit()
{   

    if($('#URL').val() == ""){
        $(function() { 
            $('#notify').click();
        });
        return false;

    }

    if($('#ProductName').val() == ""){
        $(function() { 
            $('#notify1').click();
        });
        return false;

    }

    if(document.form2.Catagories.value=="*"){
        $(function() { 
            $('#notify2').click();
        });
        return false;
    } 

    if(document.form2.Grade.value=="none"){
        $(function() { 
            $('#notify3').click();
        });
        return false;
    }

    if(document.form2.Price.value==""){
        $(function() { 
            $('#notify4').click();
        });
        return false;
    }

    if(document.form2.Detail.value==""){
        $(function() { 
            $('#notify5').click();
        });
        return false;
    }


    if(document.form2.shipment.value==""){
        $(function() { 
            $('#notify6').click();
        });
        return false;
    }

    if(document.form2.Fee.value==""){
        $(function() { 
            $('#notify7').click();
        });
        return false;
    }

    else{
        
        
    }
    document.form2.submit();
}

$(function(){
    $('#edit').click(function(){
        $('#notify').click();
    })
})


