import Product from "./Product"


const Products = () => {
  return (

    <div className="max-w-7xl my-20 md:mx-auto mx-10">
      <div className=" grid grid-cols-3 gap-y-10">

        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

        
      </div>
    </div>
  )
}

export default Products