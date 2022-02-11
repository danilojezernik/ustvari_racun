let nazivText = document.getElementById("nazivText");
let dodanNaziv = document.getElementById("dodanNaziv");
//konec naziva računa
let spisek = [];

let pritisnjeno = false;
//v primeru vnosa

let stevilkaRacuna = document.getElementById("stevilkaRacuna");
let nazivStRacuna = document.getElementById("nazivStRacuna");
//konec dodana številka računa

let racunZa = document.getElementById("racunZa");
let dodajSvojeIme = document.getElementById("dodajSvojeIme");
let dodajSvojPriimek = document.getElementById("dodajSvojPriimek");
let dodajSvojEmail = document.getElementById("dodajSvojEmail");
let dodajSvojoStevilko = document.getElementById("dodajSvojoStevilko");
//konec vnosa kontakta

function dodajNaziv() {
    let textNaziv = nazivText.value;
    if (!pritisnjeno) {
        pritisnjeno = false;
        let naziv = document.createElement("div");
        naziv.innerHTML = `
<span class="fw-bold">${textNaziv}</span>
<button style="border: 0; background: transparent;" onclick="odstrani(${spisek.length})">
<img src="https://img.icons8.com/ios-glyphs/30/000000/xbox-x.png"/></button>
<button style="border: 0; background: transparent;" onclick="izbrisiSebe(dodanNaziv)">
<img src="https://img.icons8.com/ios-glyphs/30/000000/xbox-x.png"/></button>`;
        dodanNaziv.appendChild(naziv);
        document.getElementById("dodanNaziv").value = "";//izbriše vpisano vrednost
        reset();
        spisek.push(naziv);
    } else {
        let naziv2 = document.createElement("div");
        naziv2.innerHTML = `<span class="fw-bold">Prosim dodajte text</span>`;
        dodanNaziv.appendChild(naziv2);
    }
}

//izbriše en vnos
function odstrani(mesto) {
    let element = spisek[mesto];
    element.remove();
}

//dodaj številko računa
function dodajStRacuna() {
        let textStRacuna = nazivStRacuna.value;
        let stRacun = document.createElement("div");
        stRacun.innerHTML = `<span class="fw-bold">Račun: #${textStRacuna}</span><br>`;
        stevilkaRacuna.appendChild(stRacun);
        document.getElementById("nazivStRacuna").value = ""; //izbriše vpisano vrednost
        reset();
}

//vneseni podatki naslovnika računa
function vnesiPodatke() {
    let ime = dodajSvojeIme.value;
    let priimek = dodajSvojPriimek.value;
    let email = dodajSvojEmail.value;
    let mobitel = dodajSvojoStevilko.value;
    let kontakti = document.createElement("div");
    kontakti.innerHTML = `Račun za:<br>
                        <span class="fw-bold">${ime} ${priimek}</span><br>
                        <span class="fw-bold">${email}</span><br>
                        <span class="fw-bold">telefon: ${mobitel}</span>`;
    racunZa.appendChild(kontakti);
}

//funkcija reset
function reset() {
    document.getElementById("nazivText").value = null;
    document.getElementById("dodanNaziv").value = null;
}

//izbriše vse vnose
function izbrisiSebe(dodanNaziv) {
    dodanNaziv.remove();
}