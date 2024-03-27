class user{

    constructor(name){
this.name= name
    }

    show(){
        console.log(this.name);
    }
}
class emp extends user{

    constructor(name,age){
        super(name)
        this.age= age

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