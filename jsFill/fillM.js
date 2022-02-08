function mm(){

    class Action {
        constructor(name, name1, alt1, link) {
            this.name = name;
            this.image =  {name: name1, alt: alt1};
            this.link = link;
        }
    }
    
    let a1 = new Action('Inventura', 'images\\inve.png', 'inventura','#inventura');
    let a2 = new Action('Inventar', 'images\\kalendar.png', 'Inventar','#inventar');
    let a3 = new Action('Prostorije', 'images\\prost.png', 'Prostorije','#prostorije');
    let a4 = new Action('Zaposlenici', 'images\\osoba.png', 'Zaposlenici','#zaposlenici');
    let a5 = new Action('Administracija', 'images\\postavke.png', 'Administracija','#administracija');
    
    
    
    var actions = [a1,a2,a3,a4,a5];
    var ul = document.querySelector(".prva");
    //var slika = document.createElement("img");
    //slika.src = a1.image.name;
    
    for (var i = 0; i < actions.length; i++) {
    var topping = actions[i].name;
    var x = document.createElement("a");
    x.textContent = actions[i].name;
    var listItem = document.createElement("li");
    var slika = document.createElement("img");
    slika.src = actions[i].image.name;
    //listItem.textContent = topping;
    //listItem.appendChild(slika);
    listItem.appendChild(slika);
    listItem.appendChild(x);
    
    ul.appendChild(listItem);
    }
    }