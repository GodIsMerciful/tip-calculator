document.getElementById("button").addEventListener("click", izracunajBaksis);

function izracunajBaksis()
{
    var cena;
    cena = document.getElementById("racun").value;

    var zadovoljnaUsluga;
    zadovoljnaUsluga = document.getElementById("baksis").value;

    var brLjudiZaStolom;
    brLjudiZaStolom = document.getElementById("brLjudi").value;
    console.log(cena, zadovoljnaUsluga, brLjudiZaStolom);

    var baksis;
    if(zadovoljnaUsluga == "0.3")
    {
        baksis = (cena*0.3)/brLjudiZaStolom;
        console.log(baksis);
        document.getElementById("baksisDiv").innerHTML="<h3>Baksis koji treba da date je " + baksis + "&dollar;</h3>";
    }
    else if(zadovoljnaUsluga == "0.2")
    {
        baksis = (cena * 0.2)/brLjudiZaStolom;
        console.log("20%");
        document.getElementById("baksisDiv").innerHTML="<h3>Baksis koji treba da date je " + baksis + "&dollar;</h3>";
    }
    else if(zadovoljnaUsluga == "0.15")
    {
        baksis = (cena * 0.15)/brLjudiZaStolom;
        console.log("15%");
        document.getElementById("baksisDiv").innerHTML="<h3>Baksis koji treba da date je " + baksis + "&dollar;</h3>";
    }
    else if(zadovoljnaUsluga == "0.1")
    {
        baksis = (cena * 0.1)/brLjudiZaStolom;
        console.log("10%");
        document.getElementById("baksisDiv").innerHTML="<h3>Baksis koji treba da date je " + baksis + "&dollar;</h3>";
    }
    else if(zadovoljnaUsluga == "0.05")
    {
        baksis = (cena * 0.05)/brLjudiZaStolom;
        console.log("5%");
        document.getElementById("baksisDiv").innerHTML="<h3>Baksis koji treba da date je " + baksis + "&dollar;</h3>";
    }
}