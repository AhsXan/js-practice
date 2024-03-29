class user{

    constructor(name,age){
    this.name= name 
    this.age= age
    }
get name(){
    return `${this._name}`
}
set name(v){
    this._name=v;

    }
    show(){
        console.log(this.name);
    }
}
class emp extends user{

    constructor(name,age){
        super(name)
        this._age= age

    }
SHOW2(){

    console.log(this.name,this.age);
}

}

 const ppl= new user("Ahsan")
ppl.show();

const emp2= new emp("Omer", 34);
emp2.SHOW2();
emp2.show()
console.log(ppl.name);
