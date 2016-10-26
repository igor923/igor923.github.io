/**
 * Created by a on 20.10.2016.
 */
    RandomUtile();
function RandomUtile() {
    RandomUtile.nextInt =function(n) { return Math.floor(Math.random()*n);}
    RandomUtile.nextDouble=function(min,max) {return min+Math.random()*(max-min);}

}
