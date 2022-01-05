import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const Product = () => {
    const {id} = useParams();
    const [details, setDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const getDetails = () => {
        fetch(`http://localhost:3001/products/${id}`)
        .then(res => res.json()
        .then((res) => {
            setDetails(res)
            setIsLoading(false)
        }))
        .catch((err) => {
            setIsLoading(true)
            console.log('err:', err)

        })
        
    }

    useEffect(() => {
        getDetails();
    }, [])

    return isLoading ?<h4>Loading...</h4> : <div>
        <h3>Name of the Product : {details.name}</h3>
        <h3>Price of the Product : {details.price}</h3>
        <img src={details.img} alt="" />
    </div>
}