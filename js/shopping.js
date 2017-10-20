var url = "http://localhost:3000/products";
$.get(url, function (data) {
    var template = $('#template').html();

    for (var i = 0; i < data.length; i++) {
        var rendered = Mustache.render(template, data[i]);
        $('#product').append(rendered);
    }
});

$.get(url, function (data) {

    for (var i = 0; i < data.length; i++) {
        var update = '$(function(){$("#update").click(function(){ var updateproduct = {}; updateproduct.URL = $("#URL").val(); updateproduct.Productname = $("#ProductName").val(); updateproduct.Catagories = $("#Catagories").val(); updateproduct.ProductGrade = $("#Grade").val(); updateproduct.Price = $("#Price").val(); var url = "http://localhost:3000/products/" + index; $.ajax({url: url, type: "PUT", data: updateproduct, success: function(result) { alert("Updated Complete!"); window.location.href = "shopping.html"; } }); }); });';
        //var deleteproduct = '("#delete" + (i + 1)).click(function(){ var deleteproduct = {}; deleteproduct.URL = data[index-1].URL; deleteproduct.Productname = data[index-1].Productname; deleteproduct.Catagories = data[index-1].Catagories; deleteproduct.ProductGrade = data[index-1].ProductGrade; deleteproduct.Price = data[index-1].Price; console.log(deleteproduct); });';
        var script = '<script language="javascript">$.get("http://localhost:3000/products", function (data) { var index=0; $("#edit' + (i + 1) + '").click(function(){ index = $("#testid' + (i + 1) + '").val(); console.log(index); $("#URL").val(data[index-1].URL); $("#ProductName").val(data[index-1].Productname); $("#Catagories").val(data[index-1].Catagories); $("#Grade").val(data[index-1].ProductGrade); $("#Price").val(data[index-1].Price); $("#notify").click(); }); ' + update + ' }); </script>';

        //script
        /*$('#edit'+(i+1)).click(function(){
        index = $('#testid'+(i)).val();
        console.log(index);
        $("#URL").val(data[index-1].URL);
            $("#ProductName").val(data[index-1].Productname);
            $("#Catagories").val(data[index-1].Catagories);
            $("#Grade").val(data[index-1].ProductGrade);
            $("#Price").val(data[index-1].Price);
            $('#notify').click();


        });*/

        //update
        /*$(function(){
            $('#update').click(function () {
                var updateproduct = {};
        
                updateproduct.URL = $('#URL').val();
                updateproduct.Productname = $('#ProductName').val();
                updateproduct.Catagories = $("#Catagories").val();
                updateproduct.ProductGrade = $('#Grade').val();
                updateproduct.Price = $('#Price').val();
        
                console.log(updateproduct);
                var url = "http://localhost:3000/products/" + index;
                $.ajax({
                    url: url,
                    type: 'PUT',
                    data: updateproduct,
                    success: function(result) {
                        alert('Updated Complete!');
                        window.location.href = "shopping.html";
                    }
                }); 
            });
        });*/

        //delete

        $('#check').append(script);
    }

});/*
$.get(url, function (data) {
    for (var k = 0; k < 2; k++) {
        $(function () {
            $('#delete' + (k + 1)).click(function () {
                var index1 = $('#deleteid' + (k)).val();
                console.log(index1);
                /*var deleteproduct = {};
                deleteproduct.URL = data[index1-1].URL;
                deleteproduct.Productname = data[index1-1].Productname;
                deleteproduct.Catagories = data[index1-1].Catagories;
                deleteproduct.ProductGrade = data[index1-1].ProductGrade;
                deleteproduct.Price = data[index1-1].Price;
                console.log(deleteproduct);
            });
        });

    }
});*/