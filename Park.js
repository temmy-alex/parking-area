class Parking
{
    constructor(name, duration, type, capacity, plat_number){
        this.name = name;
        this.duration = duration;
        this.type = type;
        this.capacity = capacity;
        this.plat_number = plat_number;
    }

    greeting(){
        console.log('Welcome back again!');
    }

    vehicleIn(){
        if(this.type == '1'){
            console.log('Biaya parkir sebesar 2000');
        }else{
            console.log('Biaya parkir sebesar 5000')
        }
    }

    vehicleOut()
    {
        if(this.type == '1'){
            const price = this.duration * 2000;
            console.log(`Motor anda dengan merk ${this.name} dan plat number ${this.plat_number} total biaya sebesar ${price}`);
        }else{
            const price = this.duration * 5000;
            console.log(`Mobil anda dengan merk ${this.name} dan plat number ${this.plat_number} total biaya sebesar ${price}`);
        }
    }
}

let parking = new Parking('Test', 3, 1, 15, 'B111111');
console.log(parking.vehicleOut());