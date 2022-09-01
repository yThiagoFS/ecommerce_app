import { useState } from "react"
import { Row, Col } from "react-bootstrap"
import { items } from "../data/data"
import { StoreItem } from "../components/StoreItem"
export const Store = () => {
    
    return (
        <>
            <h1>Store</h1>
            <Row 
            md={2} xs={1} lg={3}
            className="g-3"
            >
                {items.map((item) => {
                    return (
                        <Col key={item.id}>
                            <StoreItem 
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            imgUrl={`https://source.unsplash.com/random/250x250/?${item.name}`}/>
                        </Col>
                    )
                })}
            </Row>
            <ul>

            </ul>
        </>

    )
}