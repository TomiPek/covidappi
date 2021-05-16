// Function jonka tarkoituksena on piilottaa alempana olevia kuvia.
function hide() {
  $("#alertti1").hide(); // #id alertti1 piiloon
  $("#alertti2").hide(); // #id alertti2 piiloon
  $("#alertti3").hide(); // #id alertti3 piiloon
}

// function maailman kaikkia virus tapauksia varten
function total() { 
var osoite = "https://api.covid19api.com/world/total"; // osoite josta tieto haetaan
  $.get(osoite, function (jsonObj) { // Ajax haku ja lisätään kutsun jälkeen tieto
    $("#eka").html("Total: " + jsonObj.TotalConfirmed); // Lisätään total tapaukset id ekaan
    $("#toka").html("Recovered: " + jsonObj.TotalRecovered); // Lisätään parantuneet
    $("#neljas").html("Deaths: " + jsonObj.TotalDeaths); // Lisätään kuolleet

   });
  }

  // country search fieldia varten functio
  function countrySearch() {
    $('#cr').hide(); // Kun functionia käytetään piilotetaan maailman tilanteesta kertova ohje
    var maa = $("#haku").val(); // muuttujan nimeäminen search fieldin valueta varten

    var osoite2 = "https://api.covid19api.com/total/country/" + maa; // lisätään muuttuja osoitteeseen
    $.get(osoite2, function (data) {  // Ajax haku ja lisätään kutsun jälkeen tieto
      var yht =" "; // Muuttuja yht
      var kuolleet =" "; // Muuttuja kuolleet
      var parantuneet =" "; // Muuttuja parantuneet
      var aktiiviset =" "; // Muuttuja aktiiviset

      // Looppi jossa haetaan viimeinen tieto listasta
      for (var i = 0; i < data.length-1; i++) {
    
      }
      yht += data[i].Confirmed; // Varmistuneet tapaukset
      kuolleet +=data[i].Deaths; // Kuolleet yhteensä
      parantuneet +=data[i].Recovered; // Parantuneet yhteensä
      aktiiviset +=data[i].Active; // Aktiivisia tällä hetkellä
      // Otsikko tietoja varten
      $("#country").html ("<h3>" + "Country statistics of: " + "</h3>" + "<h3>" + maa + "</h3>");
      $("#eka").html ("Total: " + yht); // Lisätään todetut tapaukset yhteensä
      $("#toka").html ("Recovered: " + parantuneet); // Parantuneet
      $("#kolmas").html ("Active: " + aktiiviset); // Tällä hetkellä aktiiviset
      $("#neljas").html ("Deaths: " + kuolleet); // Kuolleet yhteensä

    });
  }

  // Functio taulukkoa varten, jossa on yli miljoonan total tapauksen maat
  function summaryData() {
    $("#alertti1").fadeIn(1000); // Aikaisempi piilotettu kuva tuodaan esille fadeinia käyttämällä
    $("#alertti2").fadeIn(1000); // Aikaisempi piilotettu kuva tuodaan esille fadeinia käyttämällä
    $("#alertti3").fadeIn(1000); // Aikaisempi piilotettu kuva tuodaan esille fadeinia käyttämällä

    // Tämän olisi varmaan pystynyt jotenkin tekemään fiksumminkin

    $("#alertti1").animate({opacity: '0.4'}, "slow"); // animointi jossa kuva hieman välkkyy
    $("#alertti1").animate({opacity: '0.8'}, "slow"); // animointi jossa kuva hieman välkkyy
    $("#alertti1").animate({opacity: '0.4'}, "slow"); // animointi jossa kuva hieman välkkyy
    $("#alertti1").animate({opacity: '0.8'}, "slow"); // animointi jossa kuva hieman välkkyy
    $("#alertti2").animate({opacity: '0.4'}, "slow"); // animointi jossa kuva hieman välkkyy
    $("#alertti2").animate({opacity: '0.8'}, "slow"); // animointi jossa kuva hieman välkkyy
    $("#alertti2").animate({opacity: '0.4'}, "slow"); // animointi jossa kuva hieman välkkyy
    $("#alertti2").animate({opacity: '0.8'}, "slow"); // animointi jossa kuva hieman välkkyy
    $("#alertti3").animate({opacity: '0.4'}, "slow"); // animointi jossa kuva hieman välkkyy
    $("#alertti3").animate({opacity: '0.8'}, "slow"); // animointi jossa kuva hieman välkkyy
    $("#alertti3").animate({opacity: '0.4'}, "slow"); // animointi jossa kuva hieman välkkyy
    $("#alertti3").animate({opacity: '0.8'}, "slow"); // animointi jossa kuva hieman välkkyy

    var summary = "https://api.covid19api.com/summary"; // summary apin tiedon osoite
    $.get(summary, function (summaryData) {  //  Ajax haku ja lisätään kutsun jälkeen tieto
      
      // Taulukon lisäys
      var taulukko = "<table>";
      // Taululle otsikot
      taulukko += "<tr><td><h5>Country</h5></td><td><h5>Country Code</h5></td><td><h5>New Deaths</h5></td><td><h5>Total Deaths</h5></td><td><h5>New Confirmed</h5></td><td><h5>Total Confirmed</h5></td>";
    
      // Looppi miljoonan tapauksen ylittäviä maiden tiedon keruuta varten
      for (var i = 0; i < summaryData.Countries.length; i++) {
        if(summaryData.Countries[i].TotalConfirmed > 1000000) { // total yli miljoona
    
        // taulukon rivin lisäys
        taulukko += "<tr>";
        taulukko += "<td>" + summaryData.Countries[i].Country + "</td>"; // table celliin tiedon lisäys
        taulukko += "<td>" + summaryData.Countries[i].CountryCode + "</td>"; // table celliin tiedon lisäys
        taulukko += "<td>" + summaryData.Countries[i].NewDeaths + "</td>"; // table celliin tiedon lisäys
        taulukko += "<td>" + summaryData.Countries[i].TotalDeaths + "</td>"; // table celliin tiedon lisäys
        taulukko += "<td>" + summaryData.Countries[i].NewConfirmed + "</td>"; // table celliin tiedon lisäys
        taulukko += "<td>" + summaryData.Countries[i].TotalConfirmed + "</td>"; // table celliin tiedon lisäys
    
        taulukko += "</tr>"; // Rivin päättäminen
      }
    }
      $("#xy").html (taulukko); // Paikka jonne taulukko lisätään
    
    }
    );}
// testi
    // Toinen taulukko functio kaikkia maita varten
function summaryData2() {

  $("#alertti1").fadeOut('slow'); // alert kuvan fadeout efekti
  $("#alertti2").fadeOut('slow'); // alert kuvan fadeout efekti
  $("#alertti3").fadeOut('slow'); // alert kuvan fadeout efekti
  var summary = "https://api.covid19api.com/summary"; // summary apin tiedon osoite 
  $.get(summary, function (summaryData2) { //  Ajax haku ja lisätään kutsun jälkeen tieto

    // Taulukon lisäys
    var taulukko = "<table>";
    // Otsikot taulukkoa varten
    taulukko += "<tr><td><h5>Country</h5></td><td><h5>New Deaths</h5></td><td><h5>Total Deaths</h5></td><td><h5>New Confirmed</h5></td><td><h5>Total Confirmed</h5></td>";
  
    for (var i = 0; i < summaryData2.Countries.length; i++) { // looppi jossa haetaan viimeiset tiedot
  
      taulukko += "<tr>"; // taulukon rivin lisäys 
      taulukko += "<td>" + summaryData2.Countries[i].Country + "</td>"; // table celliin tiedon lisäys
      taulukko += "<td>" + summaryData2.Countries[i].NewDeaths + "</td>"; // table celliin tiedon lisäys
      taulukko += "<td>" + summaryData2.Countries[i].TotalDeaths + "</td>"; // table celliin tiedon lisäys
      taulukko += "<td>" + summaryData2.Countries[i].NewConfirmed + "</td>"; // table celliin tiedon lisäys
      taulukko += "<td>" + summaryData2.Countries[i].TotalConfirmed + "</td>"; // table celliin tiedon lisäys
  
      taulukko += "</tr>"; // taulukon rivin päättäminen
    }
  
    $("#xy").html (taulukko); // taulukon sijainti
  
  }

  );}


  