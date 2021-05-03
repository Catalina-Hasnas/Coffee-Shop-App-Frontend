export default interface IProduct {
    id: number,
    amount: number,
    image: string,
    price: number,
    title: string,
    description: string,
    createdAt: Date,
    createdAtFormatted: string,
    category: {
        Id: number,
        Name: string
    }
}