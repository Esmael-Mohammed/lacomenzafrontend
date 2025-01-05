import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'
import Img1 from '../../assets/product/p-1.jpg'
import Img2 from '../../assets/product/p-2.jpg'
import Img3 from '../../assets/product/p-3.jpg'
import Img4 from '../../assets/product/p-4.jpg'
// import Img5 from '../../assets/product/p-1.jpg'
// import Img6 from '../../assets/product/p-1.jpg'
// import Img7 from '../../assets/product/p-1.jpg'

const ProductData=[
    {
        id:1,
        img:Img1,
        title:"Boat Headphone",
        price:"120",
        aosDelay:"0",
    },
    {
        id:2,
        img:Img2,
        title:"Rocky Mountain",
        price:"420",
        aosDelay:"200",
    },
    {
        id:3,
        img:Img3,
        title:"Goggles",
        price:"420",
        aosDelay:"400",
    },
    {
        id:4,
        img:Img4,
        title:"Printed",
        price:"420",
        aosDelay:"600",
    },

]
const Products = () => {
  return (
    <div>
        <div className="container">
            {/* heading */}
            <Heading title={"Our Products"}
            subtitle={"Explore Our Products"}/>
            <ProductCard data={ProductData}/>

        </div>
    </div>
  )
}

export default Products