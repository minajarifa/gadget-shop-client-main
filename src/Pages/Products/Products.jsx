import { useEffect, useState } from "react";
import FilterBar from "../../Components/Dashboard/Searchbar/FilterBar";
import SearchBar from "../../Components/Dashboard/Searchbar/SearchBar";
import SortByPrice from "../../Components/Dashboard/Searchbar/SortByPrice";
import axios from "axios";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      const fetch=async()=>{
        await axios.get("http://localhost:3000/all-products").then((res)=>{
            setProducts(res.data);
            setLoading(false)
            console.log("res.data",res.data)
        })
      }
      fetch()
    }, [])
    return (
        <div>
            {/* title */}
            <h1 className="my-8 text-2xl font-semibold text-center">All Products </h1>
            {/* search and sort */}
            <div className="items-center justify-between w-full mb-6 lg:flex">
                <SearchBar />
                <SortByPrice />
            </div>
            {/* content */}
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    <FilterBar />
                </div>
                {/*All Products */}
                <div className="col-span-10">
                    Products
                </div>
            </div>
        </div>
    );
};

export default Products;