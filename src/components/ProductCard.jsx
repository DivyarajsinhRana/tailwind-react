import { star } from "../assets/icons"

const ProductCard = ({ imgURL, name, price, starNo }) => {
    return (
        <div className="flex flex-1 flex-col max-sm:w-full">
            <img src={imgURL} alt="product_image" className="w-[289px] h-[280px]" />
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="ratings" width={24} height={24} />
                <p className="font-montserrat text-slate-gray">{starNo}</p>
            </div>
            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
            <p className="mt-2 font-semibold font-montserrat text-coral-red text-21x leading-normal">{price}</p>
        </div>
    )
}

export default ProductCard