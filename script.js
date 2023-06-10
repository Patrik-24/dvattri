class Movie {
    constructor(name, year, actors){
        this.name = name;
        this.year = year;
        this.actors = actors || [];
    }
    

    printDetail() {
        console.log(`Nazov: ${this.name}`);
        console.log(`Rok: ${this.year}`);    
        console.log(`Herci:`);   
        this.actors.forEach(actors => console.log(actors)); 
    }

    printLongestActor() {
        //let text = this.actors;
       // let slova = text.split(",");
        let najdlhsieSlovo = "";
        let najdlhsiaDlzka = 0;

       // console.log(slova);

        this.actors.forEach(function(slovo) {
            let dlzkaSlova = slovo.length;
            if (dlzkaSlova > najdlhsiaDlzka) {
                najdlhsieSlovo = slovo;
                najdlhsiaDlzka = dlzkaSlova;
            }
        });

        console.log("Najdlhsie meno:");
        console.log(najdlhsieSlovo);
        console.log("-------------");
    }
}
let button = document.getElementById("btn");
button.addEventListener("click", function() {
    let title = document.getElementById("title").value;
    let year = document.getElementById("year").value;
    let actors = document.getElementById("actors").value.split(",").map(actor => actor.trim());
    
    let movie = new Movie(title, year, actors);
    movie.printDetail();
    movie.printLongestActor();
});