export default interface IProduct {
    id: number,
    amount: number,
    image: string,
    price: number,
    priceFormatted: string,
    title: string,
    description: string,
    createdAt: Date,
    createdAtFormatted: string
}