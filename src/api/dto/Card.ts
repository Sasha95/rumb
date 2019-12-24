export interface ICard {
    id: number,
    town: string,
    country: string,
    title: string,
    description: string,
    date: string,
    rate: number,
    countRate: number,
    interes: string,
    time: string,
    professional: string,
    equipment: string,
    cost: number,
    valute: string,
    from: string,
    including: {
        inventory: string,
        beverages: string,
        nutrition: string,
    },
    requires: string,
    adress: {
        fullAdress: string,
        timeStart: string,
    }
    cancelReserv: string,
    images: string[]
}