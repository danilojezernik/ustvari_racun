let inputInvoice = document.getElementById("inputInvoice");
let inputInvoiceName = document.getElementById("inputInvoice");
let inputName =  document.getElementById("inputName");
let inputSurname =  document.getElementById("inputSurname");
let emailInput =  document.getElementById("emailInput");
let dodajanjeCene =  document.getElementById("cena");

function dodaj () {
    let txt = inputName.value;
    let priimek = inputSurname.value;
    let invoiceIme = inputInvoiceName.value;
    let email = emailInput.value;

    let element = document.createElement("form" , "div" , "label");
    element.innerHtml = `<div class="bd-highlight bg-light bg-gradient rounded shadow p-3 mb-5 bg-body rounded" >
<p><iframe width="100%" height="315" 
src="https://www.youtube.com/embed/${txt}${priimek}${invoiceIme}${email}${cena}" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen></iframe></p>
<div class="d-grid gap-2 d-md-block text-center mx-auto">
  <button class="btn btn-success" onclick="opravil()" type="button">Opravljeno</button>
  <button class="btn btn-outline-danger" type="button" onclick="odstrani(${spisek.length})">Odstrani</button>
</div></div>`;
    inputInvoice.appendChild(element);
}