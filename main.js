let nazivText = document.getElementById("nazivText");
let dodanNaziv = document.getElementById("dodanNaziv");
//konec naziva računa
let pritisnjeno = false; //v primeru vnosa
//konec naziva računa



function dodajNaziv() {
    let textNaziv = nazivText.value;
    let naziv = document.createElement("div");
    if (!pritisnjeno) {
        pritisnjeno = false;
        naziv.innerHTML = `<span class="fw-bold">${textNaziv}</span>
<button style="border: 0; background: transparent;" onclick="izbrisiSebe(dodanNaziv)">
<img src="https://img.icons8.com/ios-glyphs/30/000000/xbox-x.png"/></button>`;
        dodanNaziv.appendChild(naziv);
        document.getElementById("dodanNaziv").value = ""; //izbriše vpisano vrednost
        reset();
    } else {
        let naziv2 = document.createElement("div");
        naziv2.innerHTML = `<span class="fw-bold">Prosim dodajte text</span>`;
        dodanNaziv.appendChild(naziv2);
        setTimeout(() => dodanNaziv.remove(naziv2), 2000);
    }
}

function reset() {
    document.getElementById("nazivText").value = null;
    document.getElementById("dodanNaziv").value = null;
}

function izbrisiSebe(dodanNaziv) {
    dodanNaziv.remove();
}