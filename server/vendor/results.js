function results() {
    var sosmed = "Follow Instagram & Twitter BersinarProject yuk! <br> Instagram : https://www.instagram.com/BersinarProject <br> Twitter : https://twitter.com/BersinarProject​"
    var linkSoal = "Yuk akses soal UTBK, SIMAK UI, dan UTUL UGM yang akan dibahas di http://Bit.ly/SoalBersinar​ <br> Yuk akses materi UTBK dan SIMAK UI yang akan dibahas di http://Bit.ly/MateriBersinar​"
    var tag = "#BersinarBersama"
    var caption = document.getElementById('caption').value;




    if (document.getElementById('mapel1').checked) {
        poll = "#MenyinariSejarah #MenyinariSoshum #BersinarBersama"
    } else if (document.getElementById('mapel2').checked) {
        poll = "#MenyinariGeografi #MenyinariSoshum #BersinarBersama"
    } else if (document.getElementById('mapel3').checked) {
        poll = "#MenyinariEkonomi #MenyinariSoshum #BersinarBersama"
    } else if (document.getElementById('mapel4').checked) {
        poll = "#MenyinariSosiologi #MenyinariSoshum #BersinarBersama"
    } else if (document.getElementById('mapel5').checked) {
        poll = "#MenyinariMatematika #MenyinariSaintek #BersinarBersama"
    } else if (document.getElementById('mapel6').checked) {
        poll = "#MenyinariFisika #MenyinariSaintek #BersinarBersama"
    } else if (document.getElementById('mapel7').checked) {
        poll = "#MenyinariBiologi #MenyinariSaintek #BersinarBersama"
    } else if (document.getElementById('mapel8').checked) {
        poll = "#MenyinariKimia #MenyinariSaintek #BersinarBersama"
    } else if (document.getElementById('mapel9').checked) {
        poll = "#MenyinariBahasa #MenyinariTPS #BersinarBersama"
    } else if (document.getElementById('mapel10').checked) {
        poll = "#MenyinariEnglish #MenyinariTPS #BersinarBersama"
    } else if (document.getElementById('mapel11').checked) {
        poll = "#Menyinari #MenyinariTPS #BersinarBersama"
    }

    document.write(caption + "<br/> <br/>")
    document.write(sosmed + "<br/> <br/>")
    document.write(linkSoal + "<br/>")
    document.write(poll)


}