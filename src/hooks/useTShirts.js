import { useEffect, useState } from "react"

const useTShirts= () =>{

    const [tShirt,setTShirt] = useState([]);
    useEffect(()=>{
        fetch('tshirts.json')
        .then(res=>res.json())
        .then(data=>setTShirt(data))
    },[])
    return [tShirt,setTShirt];
}

export default useTShirts;