export interface ICard {
    id: number;
    freeSeats: number;
    seats: number;
    town: string;
    country: string;
    title: string;
    description: string;
    dateOfStart: string;
    dateOfEnd: string;
    rate: number;
    countRate: number;
    interes: string;
    time: string;
    professional: string;
    equipment: string;
    cost: number;
    valute: string;
    from: string;
    including: {
        inventory: string;
        beverages: string;
        nutrition: string;
    };
    requires: string;
    adress: {
        fullAdress: string;
        timeStart: string;
        timeEnd: string;
    }
    cancelReserv: string;
    images: string[]
}