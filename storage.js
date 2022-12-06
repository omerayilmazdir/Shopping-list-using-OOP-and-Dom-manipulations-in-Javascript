class Storage{

    static addListToStorage(newList){
        // oluşturduğumuz array i bir değişkene atadık
        let list = this.getListFromStorage();
        // array e ekleme işlemi yapıyoruz
        list.push(newList);
        // üzerinde değişiklik yaptığımız listeyi tekrar storage e ekleyip
        // array i string e çeviriyoruz
        localStorage.setItem("list",JSON.stringify(list));
    };

    // listeyi getirme işlemi
    static getListFromStorage(){
       let list;
       //  liste localStorage da var mı yok mu kontrolünü sağla
       // eğer liste yok ise boş bir array oluşturuyoruz
       if(localStorage.getItem("list") === null){
            list = [];
       }
       else {
            // var ise bu listeyi yani string değeri alıp array e çeviriyoruz
            list = JSON.parse(localStorage.getItem("list"));
       }

       return list;
    };

    // storage den silme işlemi
    static deleteListFromStorage(listTitle){
        let lists = this.getListFromStorage();
        // burada tekli silme işlemi olduğu için index kullanıyoruz
        lists.forEach(function(list,index){
            if(list.need === listTitle){
                // splice array den silme işlemini gerçekleştirir
                lists.splice(index,1); // indexten itibaren, 1 tane silinecek
            }
        });
        // silme işlemi gerçekleştikten sonra  array i localStorage e yazıoyruz
        localStorage.setItem("list",JSON.stringify(lists));
    };
    // bütün listeyi silme işlemi
    static deleteAllListFromStorage(){
        localStorage.removeItem("list");
    }
};