import { useEffect, useState } from "react";

const useBuyDetails = id =>{

    const [product, setProducts] = useState({})

    useEffect ( () =>{
        const url = `https://intense-earth-81870.herokuapp.com/products/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setProducts(data))
    }, [id]);
    return [product]
}

export default useBuyDetails;