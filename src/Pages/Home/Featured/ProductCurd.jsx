/* eslint-disable react/prop-types */



const ProductCurd = ({prooduct}) => {
    const{photo,brand,category,description,price,sellerEmail,stock,title}=prooduct;
    return (
        <div>
            <div className="shadow-xl border-1 card card-compact bg-base-100 w-96">
                <figure>
                    <img className="object-cover w-full h-72"
                        src={`${photo}`}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <h2 className="text-lg font-semibold">{brand}</h2>
                    <h2 className="">{category}</h2>
                    <h2 className="text-sm">{stock}</h2>
                    <h2 className="text-sm ">Price: $<span className="text-red-700">{price}</span></h2>
                    <h2 className="">{sellerEmail}</h2>
                    <p>{description.length>50?`${description.slice(0,50)}...`:{description}}</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCurd;

  