import { arrowRight } from "../assets/icons"
import Button from "../components/Button"

const Hero = () => {
    return (
        <section id='home' className="w-full flex flex-col xl:flex-row gap-10 min-h-screen max-container">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:paddig-x pt-28">
                <p>Our Summer Collection</p>
                <h1>
                    <span>The New Arrical</span>
                    <br />
                    <span>Nike</span>shoes
                </h1>
                <p>Discover stylish Nike arrivals, quality comfort and innvovation for your active life.</p>
                <Button label='Shop Now' icon={arrowRight} />
            </div>
        </section>
    )
}

export default Hero