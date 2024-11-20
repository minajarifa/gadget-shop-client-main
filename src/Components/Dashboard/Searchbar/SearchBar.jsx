import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
    return (
        <div className="text-gray-950">
            <form className="flex items-center gap-1 ">
                <input type="text" placeholder="Search Products" name="search" className="max-w-md p-3 bg-gray-100 border border-black rounded-l-md"  />
                <button className="bg-gray-300 rounded-l-none rounded-r-md btn btn-outline" type="submit"><IoSearch size={20}/></button>
            </form>
        </div>
    )
}
