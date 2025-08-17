import { motion } from "framer-motion";
import Link from "next/link";

export default function FeaturedNews() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pt-[60px] text-white"
        >
            <h1 className="text-[28px] font-extrabold md:text-[36px] pt-[40px] md:pt-[120px]  pb-[20px] md:pb-[40px]">
                Our Featured Star
            </h1>

            <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-10">

                {/* Text Block */}
                <div className="flex flex-col items-start text-white max-w-full lg:max-w-[480px] order-2 lg:order-1">
                    <h1 className="text-[20px] pb-[8px] md:text-[28px] font-medium">
                        Stephen Colbert’s Late Night Allies and Famous Friends Make Cameos on The Late Show After Cancellation
                    </h1>
                    <h1 className="text-[10px] md:text-[12px] font-light text-[#C1C1C1] py-[4px]">Date: 23/9/2023</h1>
                    <h1 className="text-[10px] md:text-[12px] pb-[20px]">
                        Adam Sandler, Anderson Cooper, Jon Stewart, Jimmy Fallon, Seth Meyers, John Oliver and Andy Cohen were among those who made surprise appearances on Monday's episode after CBS announced that the late night show would be ending in May 2026.
                    </h1>

                    <Link
                        href="/InsideArticle"
                        className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white md:px-8 md:py-3 px-6 py-2 rounded-full text-[14px] md:text-[16px] font-medium transition duration-300 hover:shadow-lg"
                    >
                        Check Out
                    </Link>

                </div>

                {/* Image Block */}
                <img
                    src="https://www.hollywoodreporter.com/wp-content/uploads/2025/07/Stephen-Colbert-late-show-publicity-H-2025.png?w=488&h=331&crop=1&resize=488%2C331"
                    className="w-full lg:w-[588px] rounded-lg h-auto order-1 lg:order-2"
                    alt="Stephen Colbert Publicity Photo"
                />
            </div>
        </motion.div>
    )
}