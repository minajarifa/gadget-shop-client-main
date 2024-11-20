import { useEffect, useState } from "react";
import FilterBar from "../../Components/Dashboard/Searchbar/FilterBar";
import SearchBar from "../../Components/Dashboard/Searchbar/SearchBar";
import SortByPrice from "../../Components/Dashboard/Searchbar/SortByPrice";
import axios from "axios";
import Loding from "../../Components/Loding";
import ProductCurd from "../Home/Featured/ProductCurd";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [sort,setSort]=useState('asc');
    const [brand,setBrand]=useState("");
    const [category,setCategory]=useState("");
    console.log(brand,search,sort,category);
    
    useEffect(() => {
        setLoading(true);
        const fetch = async () => {
            await axios.get(`http://localhost:3000/all-products?title=${search}&sort=${sort}&brand=${brand}&category=${category}`).then((res) => {
                setProducts(res.data);
                setLoading(false)
                // console.log("res.data", res.data)
            })
        }
        fetch()
    }, [search,sort,brand,category])

    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.search.value);
        e.target.search.value = ""
    }

    const handleReset =()=>{
        setSearch("")
        setBrand("")
        setCategory("")
        setSort("asc")
        window.location.reload()
    }

    return (
        <div>
            {/* title */}
            <h1 className="my-8 text-2xl font-semibold text-center">All Products </h1>
            {/* search and sort */}
            <div className="items-center justify-between w-full mb-6 lg:flex">
                <SearchBar handleSearch={handleSearch}/>
                <SortByPrice  setSort={setSort}/>
            </div>
            {/* content */}
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    <FilterBar setBrand={setBrand} setCategory={setCategory} handleReset={handleReset}/>
                </div>
                {/*All Products */}
                <div className="col-span-10">
                    {
                        loading ? (<Loding />) : (<div>
                            {
                                products.length === 0 ? (<div className="flex items-center justify-center w-full h-full"><h1 className="text-3xl">No products found</h1></div>) : (<div className="grid min-h-screen grid-cols-3 gap-4 ml-10">
                                    {
                                        products.map((prooduct) => (
                                            <ProductCurd key={prooduct._id} prooduct={prooduct} />
                                        ))
                                    }

                                </div>)
                            }
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;