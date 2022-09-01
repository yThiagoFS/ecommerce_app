import { faker } from "@faker-js/faker"
export const items: any[] = []

for(let i = 0; i < 15; i++) {
    items.push({
        id:i,
        name:faker.commerce.product(),
        price:faker.commerce.price(100, 500, 2)})
}