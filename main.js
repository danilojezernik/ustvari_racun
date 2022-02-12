let nazivText = document.getElementById("nazivText");
let dodanNaziv = document.getElementById("dodanNaziv");
let datumZapadel = document.getElementById("datumZapadel");
let datumZapadlostiRc = document.getElementById("datumZapadlostiRc");
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
let minuteDodaj = document.getElementById("minuteDodaj");
let urnaPostavka = document.getElementById("urnaPostavka");
let sestevek = document.getElementById("sestevek");
let skupaj = document.getElementById("skupaj");
let skupaj2 = document.getElementById("skupaj2");
let dodajDatumVpisa = document.getElementById("dodajDatumVpisa");
//konec enojni znesek

let datumDanes = document.getElementById("datumDanes");

function dodajNaziv() {
    let textNaziv = nazivText.value;
    let naziv = document.createElement("div").appendChild(document.createElement(`dodanNaziv`));
        naziv.innerHTML = `
                            <button style="border: 0; background: transparent;" onclick="odstrani(${spisek.length})">
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/xbox-x.png"/>
                            </button>
                            <span class="fw-bold">${textNaziv}</span>`;

//<button style="border: 0; background: transparent;" onclick="izbrisiSebe(dodanNaziv)">
//<img src="https://img.icons8.com/ios-glyphs/30/000000/xbox-x.png"/></button>
        dodanNaziv.appendChild(naziv);
        reset();
        spisek.push(naziv);
}

//dodaj številko računa
function dodajStRacuna() {
    let textStRacuna = nazivStRacuna.value;
    let stRacun = document.createElement("div");
    stRacun.innerHTML = `
                            <button style="border: 0; background: transparent;" onclick="odstrani(${spisek.length})">
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/xbox-x.png"/>
                            </button>

                        <span class="fw-bold">Račun: #${textStRacuna}</span><br>`;

    stevilkaRacuna.appendChild(stRacun);
    reset();
    spisek.push(stRacun);

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    let danasnji = document.createElement("div");
    danasnji.innerHTML = `
    
                            <button style="border: 0; background: transparent;" onclick="odstrani(${spisek.length})">
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/xbox-x.png"/>
                            </button>

                            Račun izdan: ${today}`;

    datumDanes.appendChild(danasnji);
    spisek.push(danasnji);
}

function dodajZapadlost() {
    let zapadel = datumZapadlostiRc.value;
    let rok = document.createElement("div");
    rok.innerHTML = `
                            <button style="border: 0; background: transparent;" onclick="odstrani(${spisek.length})">
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/xbox-x.png"/>
                            </button>
    Zapade: ${zapadel}`;
    datumZapadel.appendChild(rok);
    spisek.push(rok);
}

//vneseni podatki naslovnika računa
function vnesiPodatke() {
    let ime = dodajSvojeIme.value;
    let priimek = dodajSvojPriimek.value;
    let email = dodajSvojEmail.value;
    let mobitel = dodajSvojoStevilko.value;
    let kontakti = document.createElement("div");
    kontakti.innerHTML = `

                            Račun za:
                            <button style="border: 0; background: transparent;" onclick="odstrani(${spisek.length})">
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/xbox-x.png"/>
                            </button>
                            <br>
                            <span class="fw-bold">${ime} ${priimek}</span><br>
                            <span class="fw-bold">${email}</span><br>
                            <span class="fw-bold">telefon: ${mobitel}</span>`;

    racunZa.appendChild(kontakti);
    reset();
    spisek.push(kontakti);
}

function dodajZnesekEnotni() {
    let datum = dodajDatumVpisa.value;
    let min = parseFloat(minuteDodaj.value);
    let postavka = parseFloat(urnaPostavka.value);
    let sestevek1 = parseFloat(sestevek.value);
    let vsota = parseFloat(skupaj.value);
    let vsota2 = parseFloat(skupaj2.value);
    let rezultat;
    rezultat = min * postavka;
    let rezultat2;
    rezultat2 = rezultat;
    let rezultat3;
    rezultat3 = rezultat;
    let elementi = document.createElement("element");
    elementi.innerHTML += `
                            <div class="d-flex bd-highlight border border-1 mt-2">
                            <button style="border: 0; background: transparent;" onclick="odstrani(${spisek.length})">
                            <img src="https://img.icons8.com/ios-glyphs/30/000000/xbox-x.png"/></button>
                            <div class="p-4 w-100 bd-highlight">
                            <b>Inštrukcije programiranja</b><br>
                            <span id="minute">${min} x${postavka}</span> | <span id="danStorite">${datum}</span><br>
                            </div>
                            <div class="p-4 flex-shrink-1 bd-highlight mt-auto">
                            <span class="fw-bold" id="enojniZnesek">${rezultat}€</span>
                            </div>
                            </div>`;

    element.appendChild(elementi);
    spisek.push(elementi);
//Seštevek
    let skupni1 = document.createElement("sestevek");
    skupni1.innerHTML += `
    
                            ${rezultat2}€`;

    sestevek.appendChild(skupni1);
//Skupaj
    let skupni2 = document.createElement("skupaj");
    skupni2.innerHTML += `
                            ${rezultat3}€`;

    skupaj.appendChild(skupni2);
//SKupaj
    let skupni3 = document.createElement("skupaj");
    skupni3.innerHTML += `
                             Za plačilo:
                            <span class="display-6">${rezultat3}€</span>
                            
                        `;
    skupaj2.appendChild(skupni3);
    reset();
}

//izbriše en vnos
function odstrani(mesto) {
    let element = spisek[mesto];
    element.remove();
}

//funkcija reset
function reset() {
    document.getElementById("nazivText").value = null;
    document.getElementById("dodanNaziv").value = null;
    document.getElementById("nazivStRacuna").value = null;
    document.getElementById("urnaPostavka").value = null;
    document.getElementById("nazivText").value = null;
    document.getElementById("dodajSvojoStevilko").value = null;
    document.getElementById("dodajSvojeIme").value = null;
    document.getElementById("dodajSvojPriimek").value = null;
    document.getElementById("dodajSvojEmail").value = null;
    document.getElementById("minuteDodaj").value = null;
    document.getElementById("urnaPostavka").value = null;
    document.getElementById("dodajDatumVpisa").value = null;
}

function preview_image(event) {
    let reader = new FileReader();
    reader.onload = function(){
        let output = document.getElementById('output_image');
        output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}

//izbriše vse vnose
function izbrisiSebe(dodanNaziv) {
    dodanNaziv.remove();
}