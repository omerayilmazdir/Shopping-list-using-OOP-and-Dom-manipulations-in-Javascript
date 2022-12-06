const form = document.getElementById("list-form");
// inputları seçtik
const inputNeed = document.querySelector("#need");
const inputCount = document.querySelector("#count");
const container = document.querySelector(".container-sm");
const clear = document.querySelector("#clear");

// tüm olaylar için fonksiyon oluşturuyoruz

evenListeners();

function evenListeners(e) {
    // form elementi submit olunca ekleme işlemini yap
    form.addEventListener("submit",addList);
    // sayfa yüklendiğinde storage teki listeyi getir
    document.addEventListener("DOMContentLoaded",function(){
        let list = Storage.getListFromStorage();
        // listeyi ekrana yazdır
        UI.loadAllList(list);
    });

    // container elementine event ekliyoruz, silme işlemi için
    container.addEventListener("click",deleteList);
    // clear butonuna tüm listeyi silmek için event ekliyoruz
    clear.addEventListener("click",deleteListAll);
};

// ekleme fonksiyonu
function addList(e) {
    // inputlardan değerleri alıyoruz
    const need = inputNeed.value;
    const count = inputCount.value;
    // eğer bu inputlar boş ise
    if(need === "" || count === ""){
        // hata  mesajı
        UI.displayMessages("Danger message...!","danger");
    }
    else{ // boş değil ise, List sınıfından yeni bir nesne türet ve 
          // yukarıdaki inputlardan aldığımız değerleri gir
        const newList = new List(need, count);
        // arayüze ekleme işlemi
        UI.addListToUI(newList);
        // storage e ekleme işlemi
        Storage.addListToStorage(newList);
        // başarı mesajı
        UI.displayMessages("Success message...","success");

    }
    // işlemler bittiğinde inputları temizliyoruz
    UI.clearInputs(inputNeed,inputCount);

    // sayfanın submit edilmesini önlüyoruz
    e.preventDefault();
};
// tek tek silme fonksiyonu
function deleteList(e) {
    // seçtiğimiz checkbox a ait id ile oluşturulan listedeki id uyuşuyor ise
    if(e.target.id === "exampleCheck1"){
        // arayüzden sil
        UI.deleteListFromUI(e.target);
        // parent elementleri sayesinde listeyi, storage dan sil
        Storage.deleteListFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Success message...","success");
    }
};
// tüm listeyi silme işlemi
function deleteListAll(){
    if(confirm("Emin misiniz?")){
        // arayüzden silme işlemi
        UI.clearAllFilmsFromUI();
        // storage den silme işlemi 
        Storage.deleteAllListFromStorage();
        UI.displayMessages("Success message...","success");
    }
};