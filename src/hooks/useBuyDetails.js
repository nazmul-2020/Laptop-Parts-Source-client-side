import { useEffect, useState } from "react";

const useBuyDetails = id =>{

    const [product, setProducts] = useState({})

    useEffect ( () =>{
        const url = `https://laptop-parts-source-server-side.up.railway.app/products/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setProducts(data))
    }, [id]);
    return [product]
}

export default useBuyDetails;