import { useEffect, useState } from "react"




const RestaurantMenu = () => {
    // const { data, setData} = useState()
    useEffect(() => {
        
        fetchData()
    }, [])
    
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7287381&lng=75.80759929999999&restaurantId=69420&catalog_qa=undefined&submitAction=ENTER')
        const json = await data.json()
        setData(json)
    // console.log(data.json())

    }
    return(
        <>
            <h1 id='title'>Chappan</h1>
            <h3 id='cuisine'>North Indian, Chaat</h3>
            <ul>
                <li>oats</li>
                <li>chilla</li>
                <li>tea</li>
            </ul>
        </>

    )
}

export default RestaurantMenu