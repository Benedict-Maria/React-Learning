import React, { useEffect, useState } from 'react'
import styles from "./API.module.css"

export default function Products() {

    useEffect(()=>{
        fetchProducts()
    })

    const [data , setData] = useState([])

    const fetchProducts = async () => {
        let products = await fetch("https://dummyjson.com/products")
        products = await products.json()
        setData(products.products) // for object
    }

  return (
    <div className={styles.container}>
        {data.map((item)=>(
            <div className={styles.content}>
                <h2 className={styles.title}>{item.title}</h2>
                <img src={item.thumbnail} alt={item.title}/>
                <h3 className={styles.subhead}>Price: ${item.price}</h3>
                <h3 className={styles.subhead}>Rating: {item.rating}</h3>
            </div>
        ))}
    </div>
  )
}
