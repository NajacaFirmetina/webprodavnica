$(function(){
    $.get('./vebprodavnica.txt',function(data){
        let niz = data.split('\n');
        let telefoni = [];
        let niz2 = [];
        let nizauto =[];
        let nizsifra =[];
        let niznaziv=[];
        let nizproizvodjac = [];
        let nizram = [];
        let nizprocesor = [];
        let nizkamera = [];
        let nizekran = [];
        let nizslika = [];
        let nizcena = [];
        for(let i=0; i<niz.length; i++){
            let obj = new Object();
            niz2 = niz[i].split('|');
            nizauto = nizauto.concat(niz2);
            nizsifra = nizsifra.concat(niz2[0]);
            niznaziv = niznaziv.concat(niz2[1]);
            nizproizvodjac = nizproizvodjac.concat(niz2[2]);
            nizram = nizram.concat(niz2[3]);
            nizprocesor = nizprocesor.concat(niz2[4]);
            nizkamera = nizkamera.concat(niz2[5]);
            nizekran = nizekran.concat(niz2[6]);
            nizslika = nizslika.concat(niz2[7]);
            nizcena = nizcena.concat(niz2[8]);
            obj.sifra = niz2[0];
            obj.naziv = niz2[1];
            obj.proizvodjac = niz2[2];
            obj.ram = niz2[3];
            obj.procesor = niz2[4];
            obj.kamera = niz2[5];
            obj.ekran = niz2[6];
            obj.slika = niz2[7];
            obj.cena = niz2[8];
            telefoni.push(obj);
        }
        $('button').on('click',function(){
            $('#iDiv').empty();
            $('#iDiv').html(
                "<table>"+
                    "<tbody>" +
                        "<tr>" +
                            "<td>Slika</td>" +
                            "<td>Sifra</td>" + 
                            "<td>Naziv</td>" +
                            "<td>Proizvodjac</td>" + 
                            "<td>RAM memorija</td>" +
                            "<td>Tip procesora</td>" +
                            "<td>Kamera</td>" +
                            "<td>Ekran(inch)</td>" +
                            "<td>Cena(€)</td>" +
                        "</tr>" +
                    "</tbody>" +
                "</table>")
            let tacno = telefoni.filter(function(pomoc){
                return pomoc.proizvodjac==$('#iProizvodjac').val() || pomoc.ram==$('#iRAM').val() || pomoc.procesor==$('#iProcesor').val() || pomoc.kamera==$('#iKamera').val() || pomoc.ekran==$('#iEkran').val();
            })
            // for(let i=0; i<tacno.length; i++){
            //     $('#iDiv').append("<tr> <td> <img src=" + tacno[i].slika + " style='width:100px;height:120px;'> </td><td>" + tacno[i].sifra + " </td><td> " + tacno[i].naziv + " </td><td> " + tacno[i].proizvodjac + " </td><td> " + tacno[i].ram + " </td><td> " + tacno[i].procesor + " </td><td> " + tacno[i].kamera + " </td><td> " + tacno[i].ekran + " </td><td> " + tacno[i].cena + "</td>");
            // }

            for(let i = 0; i<tacno.length; i++){
                dodaj = "<tr><td><img src=" + tacno[i].slika + " style='width:100px;height:130px;'> </td><td>" + tacno[i].sifra + " </td><td> " + tacno[i].naziv + " </td><td> " + tacno[i].proizvodjac + " </td><td> " + tacno[i].ram + " </td><td> " + tacno[i].procesor + " </td><td> " + tacno[i].kamera + " </td><td> " + tacno[i].ekran + " </td><td> " + tacno[i].cena + "</td></tr>";
                tableBody = $("table tbody");
                tableBody.append(dodaj);
            }
        })
    })
})