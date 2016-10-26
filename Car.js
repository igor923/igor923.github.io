/**
 * Created by a on 20.10.2016.
 */
    Car();
function Car(model,color,engine,owner) {
    Car.N_MODEL = 5;
    Car.MAX_ENG = 1.8;
    Car.MIN_ENG = 0.7;
    Car.N_MODEL = 5;
    this.model = model;
    this.color = color;
    this.engine = engine;
    this.owner = owner;


    Car.random = function () {

        var model = "model #" + RandomUtile.nextInt(Car.N_MODEL);
        var color = "#" + RandomUtile.nextInt(0xffffff).toString(16);
        var engine = RandomUtile.nextDouble(Car.MIN_ENG, Car.MAX_ENG).toFixed(2);

        return new Car(model, color, engine, Owner.randomOwner());
    };
    //TODO

    Car.engineComparator = function (car1, car2) {
        return car1.engine - car2.engine;
    };

    Car.engineComparatorRevers = function (car1, car2) {
        return car2.engine - car1.engine;
    };

    Car.modelComparator = function (car1, car2) {
        return car1.model > car2.model ? 1 : -1;
    };

    Car.modelComparatorRevers = function (car1, car2) {
        return car1.model < car2.model ? 1 : -1;
    };

    Car.ownerNameComparator = function (car1, car2) {
        return car1.owner.name > car2.owner.name ? 1 : -1;
    };

    Car.ownerNameComparatorRevers = function (car1, car2) {
        return car1.owner.name < car2.owner.name ? 1 : -1;
    };

    Car.ownerNameComparator = function (car1, car2) {
        return car1.owner.name > car2.owner.name ? 1 : -1;
    };

    Car.ownerNameComparatorRevers = function (car1, car2) {
        return car1.owner.name < car2.owner.name ? 1 : -1;
    };

    Car.ownerCityComparator = function (car1, car2) {
        return car1.owner.city > car2.owner.city ? 1 : -1;
    };

    Car.ownerCityComparatorRevers = function (car1, car2) {
        return car1.owner.city < car2.owner.city ? 1 : -1;
    };

    Car.colorComparator = function (car1, car2) {
        return car1.color > car2.color ? 1 : -1;
    };

    Car.colorComparatorRevers = function (car1, car2) {
        return car1.color < car2.color ? 1 : -1;
    };


}
