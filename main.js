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

let element = document.getElementById("element");
let danStoritve = document.getElementById("danStorite");
let enojniZnesek = document.getElementById("enojniZnesek");
let minuteDodaj = document.getElementById("minuteDodaj");
let urnaPostavka = document.getElementById("urnaPostavka");
let sestevek = document.getElementById("sestevek");
let skupaj = document.getElementById("skupaj");
let dodajDatumVpisa = document.getElementById("dodajDatumVpisa");
//konec enojni znesek

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

function dodajZnesekEnotni() {
    let min = parseFloat(minuteDodaj.value);
    let postavka = parseFloat(urnaPostavka.value);
    let sestevek1 = parseFloat(sestevek.value);
    let vsota = parseFloat(skupaj.value);
    let rezultat;
    rezultat = min * postavka;
    vsota += rezultat;
    sestevek1 += rezultat;
    let elementi = document.createElement("element");
    elementi.innerHTML = `
<div class="d-flex bd-highlight border border-1">
     <div class="p-4 w-100 bd-highlight">

                        <b>Inštrukcije programiranja</b><br>
                        <span id="minute">120 x0,32 EUR</span> | <span id="danStorite">3. jan. 2022</span><br>

                    </div>

                    <div class="p-4 flex-shrink-1 bd-highlight mt-auto">
                        <span class="fw-bold" id="enojniZnesek">${rezultat}</span>
                    </div></div>`;
    element.appendChild(elementi);

    let skupni1 = document.createElement("sestevek");
    skupni1.innerHTML = `${sestevek1}€`;
    sestevek.appendChild(skupni1);

    let skupni2 = document.createElement("skupaj");
    skupni2.innerHTML = `${vsota}€`;
    skupaj.appendChild(skupni2);

    // document.getElementById("sestevek").innerHTML = sestevek;
    // sestevek.appendChild(sestevek1);
    // document.getElementById("skupaj").innerHTML = vsota;


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