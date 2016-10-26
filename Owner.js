/**
 * Created by a on 20.10.2016.
 */

    Owner();
function Owner(name,city) {
    Owner.N_NAMES=10;
    Owner.N_CITIES=3;
    this.name=name;
    this.city=city;
    this.toString=function () {return "Go to hell"};


    Owner.randomOwner=function(){
        var name="name"+RandomUtile.nextInt(Owner.N_NAMES);
        var city="city"+RandomUtile.nextInt(Owner.N_CITIES);
        return new Owner (name,city);
    }

}