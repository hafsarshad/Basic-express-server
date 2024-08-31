interface Vehicle {
    make: string;
    model: string;
    year: number;
    color: string;
    vin: string; 
}
interface Car extends Vehicle {
    seatingCapacity: number;
    isElectric: boolean;
}
interface Motorcycle extends Vehicle {
    engineDisplacement: number; // in cc
    hasSidecar: boolean;
    type: "Sport" | "Touring" | "Dirt Bike" | "Standard";
}

const myCar: Car = {
    make: "Toyota",
    model: "Corolla altis",
    year: 2014,
    color: "Blue",
    vin: "123456789ABCDEFG",
    seatingCapacity: 5,
    isElectric: false
};

const myMotorcycle: Motorcycle = {
    make: "Honda",
    model: "CBR600RR",
    year: 2020,
    color: "Red",
    vin: "987654321HGFEDCBA",
    engineDisplacement: 599,
    hasSidecar: false,
    type: "Sport"
};


////interface for clothes


interface ClothingItem {
    brand: string;
    size: string;
    color: string;
    material: string;
    price: number;
}
interface Shirt extends ClothingItem {
    sleeveLength: 'short' | 'long' | 'sleeveless';
    hasCollar: boolean;
    isButtoned: boolean;
}
interface Dress extends ClothingItem {
    dressType: 'casual' | 'formal';
    length: 'short' | 'knee' | 'floor';
    sleeveStyle: 'sleeveless' | 'cap' | 'short' | 'long';
    hasBelt: boolean;
}
interface Scarf extends ClothingItem {
    scarfType: 'winter' | 'fashion' | 'pashmina' | 'silk';
    length: number;  // in inches or centimeters
    width: number;   // in inches or centimeters
    isReversible?: boolean;
}

const myShirt: Shirt = {
    brand: 'Cambrige',
    size: 'M',
    color: 'white',
    material: 'cotton',
    price: 2000,
    sleeveLength: 'long',
    hasCollar: true,
    isButtoned: true
};

const myScarf: Scarf = {
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