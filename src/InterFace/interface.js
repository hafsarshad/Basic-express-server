// Enum for Motorcycle types
var MotorcycleType;
(function (MotorcycleType) {
    MotorcycleType["Sport"] = "Sport";
    MotorcycleType["Touring"] = "Touring";
    MotorcycleType["Standard"] = "Standard";
})(MotorcycleType || (MotorcycleType = {}));
// Example 
var myCar = {
    make: "Toyota",
    model: "Corolla altis",
    year: 2014,
    color: "Blue",
    vin: "123456789ABCDEFG",
    seatingCapacity: 5,
    isElectric: false
};
var myMotorcycle = {
    make: "Honda",
    model: "CBR600RR",
    year: 2020,
    color: "Red",
    vin: "987654321HGFEDCBA",
    engineDisplacement: 599,
    hasSidecar: false,
    type: MotorcycleType.Sport
};
// Console log the objects
console.log('Car Object:', myCar);
console.log('Motorcycle Object:', myMotorcycle);
var DressLength;
(function (DressLength) {
    DressLength["Short"] = "short";
    DressLength["Knee"] = "knee";
    DressLength["Floor"] = "floor";
})(DressLength || (DressLength = {}));
var myShirt = {
    brand: 'Cambrige',
    size: 'M',
    color: 'white',
    material: 'cotton',
    price: 2000,
    sleeveLength: 'long',
    hasCollar: true,
    isButtoned: true
};
var myScarf = {
    brand: 'Khaadi',
    size: 'One Size',
    color: 'blue',
    material: 'silk',
    price: 2000,
    scarfType: 'fashion',
    length: 70,
    width: 12,
};
console.log('Car Object:', myCar);
console.log('Scarf Object:', myScarf);
