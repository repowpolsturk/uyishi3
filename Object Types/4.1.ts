interface Car {
    marka: string;
    model: string;
    yil: number;
    aktiv: boolean;
}

function getCarInfo(car: Car): string {
    const { marka, model, yil, aktiv } = car;
    return `${marka} ${model}, ${yil} yil, Aktiv: ${aktiv}`;
}

const myCar: Car = { marka: 'Toyota', model: 'Corolla', yil: 2020, aktiv: true };
console.log(getCarInfo(myCar));