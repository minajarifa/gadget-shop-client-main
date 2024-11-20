

export default function SortByPrice() {
    return (
        <div>
            <select className="w-full max-w-xs border border-black rounded select-md">
                <option value={'asc'}>Low to high</option>
                <option value={'desc'}>High to low</option>
            </select>
        </div>
    )
}
