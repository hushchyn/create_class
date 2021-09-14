function Human(weight, height, hairColor){
    this.weight = weight;
    this.height = height;
    this.hairColor = hairColor;
}

Human.prototype.talk = function(){
    console.log('I can speak with other pepople');
}

Human.prototype.walk = function(){
    console.log('I can walk anywhere');
}

Human.prototype.sayFeatures = function(){
    console.log(`Hello my weight ${this.weight}, my height is ${this.height} and my hair color is ${this.hairColor}`);
}

function Man(){
    Human.call(this)
}
Man.prototype = Object.create(Human.prototype)
Man.prototype.constructor = Man


function Hunter ( experience, equipment ){
    Man.call(this)
    this.experience = experience;
    this.equipment = equipment;
}
Hunter.prototype = Object.create(Man.prototype)
Hunter.prototype.constructor = Hunter

Hunter.prototype.hobbies = function(){
    console.log( 'Hunting is my favorite hobbie' );
}
Hunter.prototype.shoots = function(){
    console.log( "I shoots from my equipment but a can't kill animal" );
}

function Worker ( position, sellery, responsibility ){
    Man.call(this)
    this.position = position;
    this.sellery = sellery;
    this.responsibility = responsibility
}
Worker.prototype = Object.create(Man.prototype)
Worker.prototype.constructor = Man

Worker.prototype.programmer = function (){
    console.log('I can develop projetc on react or angular');
}
 
let peop = new Hunter( '2years', 'pistols')
peop.hobbies();
peop.shoots();
peop.talk();
peop.walk();
peop.sayFeatures();


function Woman(){
    Human.call(this)
}
Woman.prototype = Object.create(Human.prototype)
Woman.prototype.constructor = Woman

function Librarian(age, sellery){
    Woman.call(this)
    this.age = age;
    this.sellery = sellery
}

Librarian.prototype = Object.create(Woman.prototype)
Librarian.prototype.constructor = Librarian

Librarian.prototype.recomendation = function(){
    console.log('I can recommend the book');
}

Librarian.prototype.giveBook = function(){
    console.log('I can give you the book');
}


function Nurse( grduation, clinic ){
    Woman.call(this)
    this.grduation = grduation;
    this.clinic = clinic;
}
Nurse.prototype = Object.create(Woman.prototype)
Nurse.prototype.constructor = Nurse

Nurse.prototype.injection = function(){
    console.log('I can inject you in ${this.clinic}');
}

Nurse.prototype.receipt = function(){
    console.log("It's my receipt from COVID-19");
}

let people = new Nurse('doctor', 'clinick#7')
people.injection();
people.receipt();
people.talk();
people.walk();
people.sayFeatures();