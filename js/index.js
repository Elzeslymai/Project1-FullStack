$(function(){
    $('#confirm').click(function(){
        var newproduct = {};

        newproduct.URL= $('#URL').val();
        newproduct.Productname= $('#ProductName').val();
        newproduct.Catagories = $("#Catagories").val();
        newproduct.ProductGrade = $('#Grade').val();
        newproduct.Price= $('#Price').val();

        console.log(newproduct);
        var url = "http://localhost:3000/products";
        $.post(url, newproduct, function(data, status){
        
        });
    });
});
