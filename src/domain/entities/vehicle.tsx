export class Vehicle {
    licensePlate: string;
    type: string|null;
    brand: string|null;

    constructor(licensePlate: string, type: string|null, brand: string|null) {
        this.licensePlate = licensePlate;
        this.type = type;
        this.brand = brand;
    }
}