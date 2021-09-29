interface UserInterFAce {
     name:string;
     email:string;
     age:number;
     register();
     payInvoice();
}
class User implements UserInterFAce
{
     name:string;
     email:string;
     age:number;
    constructor(name:string,email:string,age:number)
    {
        this.name=name;
        this.age=age;
        this.email=email;
        console.log("User Created:"+this.name);
    }
    register(){
        console.log(this.name+" is registered now.. ");
    }
    payInvoice()
    {
        console.log(this.name+" paid invoice.. ");
    }
}
class Member extends User
{
    id:number;
    constructor(id:number,name:string,age:number,email:string)
    {
       super(name,email,age);
       this.id=id;
    }
    payInvoice()
    {
        super.payInvoice();

    }
}
let user1:User=new Member(134,"John Doe",32,"aliahmad@gmail.com");
user1.register();
user1.payInvoice();