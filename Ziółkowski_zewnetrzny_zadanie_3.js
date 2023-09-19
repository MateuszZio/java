document.write("Podaje czas".fontcolor("blue").bold().fontsize(6)+"<br><br><br>");
dzis_kow = new Date();
document.write("<u>Aktualny czas : </u>".fontcolor("red").fontsize(8)+dzis_kow.getHours()+":".fontcolor("green")+dzis_kow.getMinutes())