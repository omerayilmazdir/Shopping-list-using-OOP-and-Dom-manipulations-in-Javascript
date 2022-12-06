class UI{
    // arayüze ekleme işlemini yapıyoruz
    static addListToUI(newList){
        const list = document.getElementById("list");
        // öncelikle arayüzü oluşturuyoruz
        // bu kısımda template literal kullanıyoruz
        list.innerHTML += `
        <tr>
            <td>${newList.need}</td>
            <td>${newList.count}</td>
            <td>
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" >Check me out</label>
            </td>
          </tr>
        
        `
    };
    // arayüzden silme işlemi için listenin ilk girdisinin üzerini çiziyoruz
    // bu bizim arayüz için silme işlemi adına yapmış olduğumuz seçimdir, istersek direkt olarak listeden silebiliriz
    static deleteListFromUI(element){
        element.parentElement.parentElement.childNodes[1].style.textDecorationLine = "line-through";
    };
    // tüm listeyi temizleme işlemi
    static clearAllFilmsFromUI(){
        const list = document.getElementById("list");
        // döngü, listenin ilk elementi boş olmadığı sürece dönsün
        while(list.firstElementChild !== null){
            // her listeye girişte ilk elementi sil
            list.firstElementChild.remove();
        }
    };
    // sayfa yüklendiğinde tüm listeyi dön
    static loadAllList(list){

        const Lista = document.getElementById("list");

        list.forEach(function(lists){
            Lista.innerHTML += `
            <tr>
            <td>${lists.need}</td>
            <td>${lists.count}</td>
            <td>
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" >Check to delete</label>
            </td>
            </tr>
            `;
        });
    };
    // inputları temizleme işlemi
    static clearInputs(element1,element2){
        element1.value = "";
        element2.value = "";
    };
   
    // bilgilendirme mesajları için bir prototype oluşturuyoruz
    static displayMessages (message,type){
    // bilgilendirme mesajları için cardbody ı seçiyoruz
    const cardbody = document.querySelector(".card-body");

    // alert divini oluşturuyoruz

    const div = document.createElement("div");
    // alert divimizi template literal ile oluşturduk
    div.className = `alert alert-${type}`;
    div.textContent = message;

    // card body ye ekleme
    cardbody.appendChild(div);

    // istediğimiz süre sonrasında sayfadan silinmesi işlemini yapıyoruz
    setTimeout(function(){
        div.remove();
        
    },1500);

    };

};