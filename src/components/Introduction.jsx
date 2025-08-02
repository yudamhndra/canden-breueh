import { motion } from "framer-motion";
import { SlideUp } from "../util/animation";
import materials from "../assets/learning_materials/materials.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Introduction() {
    // Responsive slider settings: show dots, no arrows, swipe enabled
    const sliderSettings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        adaptiveHeight: true,
    };

    return (
        <section className="bg-[#F76E20] py-10 md:py-16 lg:py-20 flex justify-center overflow-hidden">
            <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 flex justify-center">
                <motion.div
                    variants={SlideUp(0.5)}
                    initial="hidden"
                    whileInView="visible"
                    className="bg-transparent flex flex-col justify-center items-center text-center gap-y-6 w-full"
                >
                    {/* Desktop/tablet: show paragraphs normally. Mobile: show as slider */}
                    <div className="hidden sm:block w-full">
                        {materials.intro.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-white text-base sm:text-lg md:text-xl lg:text-xl !mt-6 sm:!mt-8 text-center"
                                style={{ whiteSpace: 'pre-line' }}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <div className="block sm:hidden w-full">
                        <Slider {...sliderSettings}>
                            {materials.intro.map((paragraph, index) => (
                                <div key={index}>
                                    <p
                                        className="text-white text-sm !mt-6 text-center px-2"
                                        style={{ whiteSpace: 'pre-line' }}
                                    >
                                        {paragraph}
                                    </p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Introduction;