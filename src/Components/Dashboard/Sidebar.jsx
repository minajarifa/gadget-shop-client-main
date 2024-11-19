import { Link } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { MdHome } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { SiBookmyshow } from "react-icons/si";
export default function Sidebar() {
    return (
        <div className="min-h-screen px-8 py-16 text-gray-900 bg-gray-200 border-r-2 border-black">
            <h1 className="mb-8 text-3xl font-bold">Gadget  Shop</h1>
            <ul className="flex flex-col gap-2">
                <li className="border border-black rounded-md b-2">
                    <Link to="/Dashboard/Overview">
                   <div className="flex">
                   <GrOverview className="m-2" />
                   Overview
                   </div>
                    </Link>
                </li>
                <li className="border border-black rounded-md b-2">
                <Link to="/Dashboard/My-Products">
                   <div className="flex">
                   <SiBookmyshow className="m-2" />
                   My Products
                   </div>
                    </Link>
                </li>
                <li className="border border-black rounded-md b-2">
                <Link to="/Dashboard/Add-Products">
                   <div className="flex">
                   <MdOutlineProductionQuantityLimits className="m-2" />
                   Add Products
                   </div>
                    </Link>
                </li >
                <li className="border border-black rounded-md b-2">
                    <Link to="/">
                   <div className="flex">
                   <MdHome className="m-2" />
                   Home
                   </div>
                    </Link>
                </li>
                <li className="border border-black rounded-md b-2">
                    <button>
                   <div className="flex">
                   <TbLogout2 className="m-2" />
                   Logout
                   </div>
                    </button>
                </li>
            </ul>
        </div>
    )
}
