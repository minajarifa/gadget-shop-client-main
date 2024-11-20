import { GrPowerReset } from "react-icons/gr";
import { FaFilter } from "react-icons/fa6";

export default function FilterBar() {
    return (
        <div className="h-full min-h-screen p-4 bg-gray-200 rounded-t-md">
            <div className="flex items-center gap-1 text-gray-950">
                <FaFilter size={20} />
                <h2 className="font-serif text-xl ">filter</h2>
            </div>
            <div className="flex flex-col items-center gap-2 mt-8">
                <div className="w-full">
                    <select className="w-full max-w-xs select">
                        <option disabled selected>Brand</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
                <div className="w-full">
                    <select className="w-full max-w-xs select">
                        <option disabled selected>Category</option>
                        <option>Homer</option>
                        <option>Marge</option>
                        <option>Bart</option>
                        <option>Lisa</option>
                        <option>Maggie</option>
                    </select>
                </div>
                <button className="w-full mt-4 btn">Reset <GrPowerReset/></button>
            </div>
        </div>
    )
}
