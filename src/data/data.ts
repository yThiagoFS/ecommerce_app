import { faker } from "@faker-js/faker"
export const items: any[] = []

for(let i = 0; i < 15; i++) {
        let name = faker.commerce.product()
        items.push({
            id:i,
            name,
            price:faker.commerce.price(100, 500, 2),
            imgUrl: `https://source.unsplash.com/random/250x250/?${name}`
        })
}