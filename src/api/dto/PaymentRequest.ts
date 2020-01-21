export interface IPaymentRequest {
    id: number;
    title: string;
    description: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    amount: number;
    currency: string;
}