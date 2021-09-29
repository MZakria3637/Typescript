export class Point{
    constructor(private x?:number, private y?:number)
    {

    }
    draw(){
        console.log("X:"+this.x+"\nY:"+this.y)
    }
    getDistance(){
        //....
    }
    set X(value){
        this.x=value;
    }
    get X()
    {
        return this.x
    }
    set Y(value){
        this.y=value;
    }
    get Y()
    {
        return this.y
    }

}