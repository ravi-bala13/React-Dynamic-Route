import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export const AllProducts = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getProducts = () => {
        fetch(`http://localhost:3001/products`)
        .then((d) => d.json()
        .then((res)=> {
            setProducts(res);
            setIsLoading(false)
        }))
        .catch((err) => {
            console.log('err:', err)
            setIsLoading(true)
        })
    }

    useEffect(() => {
        getProducts()
    }, [])



    return isLoading ?<h4>Loading...</h4> : <div className="table-div">
        
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Details</td>
                    </tr>
                </thead>
                <tbody>
                {products.map((e, i) => (
                    <tr key={i}>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                        <td>
                           <Link to={`/products/${e.id}`}>More Details</Link> 
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            
        
    </div>
}