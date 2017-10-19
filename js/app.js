function fncSubmit() {

    if ($('#URL').val() == "") {
        $(function () {
            $('#notify').click();
        });
        return false;

    }

    if ($('#ProductName').val() == "") {
        $(function () {
            $('#notify1').click();
        });
        return false;

    }

    if ($('#Catagories').val() == "*") {
        $(function () {
            $('#notify2').click();
        });
        return false;
    }

    if ($('#Grade').val() == "none") {
        $(function () {
            $('#notify3').click();
        });
        return false;
    }

    if ($('#Price').val() == "") {
        $(function () {
            $('#notify4').click();
        });
        return false;
    }

    document.form2.submit();
}

$(function () {
    $.get(url, function (data) {
        console.log(data);
        for (var i = 1; i <= data.length; i++) {
            $('#edit'+i).click(function () {
                $('#notify').click();
            })
        }
    });
})