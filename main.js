let nazivText = document.getElementById("nazivText");
let dodanNaziv = document.getElementById("dodanNaziv");
let pritisnjeno = false;

//konec naziva računa


function dodajNaziv() {
    let textNaziv = nazivText.value;
    let naziv = document.createElement("div");
    if (!pritisnjeno) {
        pritisnjeno = true;
        naziv.innerHTML = `<p class="fw-bold">${textNaziv}</p>`;
        dodanNaziv.appendChild(naziv);
    }
}