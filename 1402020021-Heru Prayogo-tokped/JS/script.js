$(document).ready(function() {

    $("#nomorhp").change(function() {
        if ($("#nomorhp").val() >= 2) {
            $("#hargapulsa").prop("disabled", false);
            $("#hargapaket").prop("disabled", false);
        } else {
            $("#hargapulsa").prop("disabled", true);
            $("#hargapaket").prop("disabled", true);
        }
    });

    $("#nomorhp").keypress(function(value) {
        if (value.which != 8 && value.which != 0 && (value.which < 48 || value.which > 57)) {
            return false;
        }
    });

    $("#hargapulsa").change(function() {
        $("#hargabtn1").prop("disabled", false);
        $("#hargabtn1").css('background-color', '#fa591d');
        $("#hargabtn1").css('color', 'white');
    });

    $("#hargapaket").change(function() {
        $("#hargabtn2").prop("disabled", false);
        $("#hargabtn2").css('background-color', '#fa591d');
        $("#hargabtn2").css('color', 'white');
    });

    $("#kat-pulsa").click(function() {
        $("#hargapaket").prop("hidden", true);
        $("#hargapulsa").prop("hidden", false);
        $("#hargabtn1").prop("hidden", false);
        $("harga#btn2").prop("hidden", true);
    })

    $("#kat-paket-data").click(function() {
        $("#hargapulsa").prop("hidden", true);
        $("#hargapaket").prop("hidden", false);
        $("#hargabtn1").prop("hidden", true);
        $("#hargabtn2").prop("hidden", false);
    })

    $("#hargabtn1").click(function() {
        var value = $("#hargapulsa").val();
        var convert = parseInt(value);
        if (convert < 10000) {
            convert += 3000;
        } else {
            convert += 2000;
        }
        const verif = confirm("Apakah anda yakin membeli pulsa sebesar " + value + "?");
        if (verif) {
            alert("Selamat anda telah membeli pulsa seharga Rp. " + convert);
        } else {

        }
    });

    $("#hargabtn2").click(function() {
        var value = $("#hargapaket").val();
        var convert = parseInt(value);
        const verif = confirm("Apakah anda yakin membeli paket sebesar " + value + "?");
        if (verif) {
            alert("Selamat anda telah membeli paket seharga Rp. " + convert);
        } else {

        }
    });

});