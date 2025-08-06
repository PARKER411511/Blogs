import { motion } from "framer-motion";
import Image from 'next/image'

export default function Show() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="pt-[80px] md:pt-[120px]"
        >
            <div className="pt-[20px] md:pt-[40px]">

                <div className="flex flex-col xl:flex-row items-start gap-[0px] md:gap-6 xl:gap-16">

                    {/* Text Block */}
                    <div className="mb-8 xl:mb-0 gap-[10px] max-w-xl">
                        <h1 className="text-[28px] md:text-[36px]">Watch Our Show</h1>
                        <h2 className="text-3xl font-semibold text-[22px] md:text-[28px] text-blue-600 mb-4">
                            Drake Tour Announcement
                        </h2>
                        <h1 className="text-gray-700 mb-6">
                            Catch all the excitement from Drake's upcoming tour. Watch the official announcement featuring exclusive behind-the-scenes planning and high-energy teasers from the artist himself.
                        </h1>
                        <a
                            href="https://www.drakemusic.com/tour"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-full font-medium transition duration-300 hover:shadow-lg"
                        >
                            Watch Now
                        </a>
                    </div>

                    {/* Video Thumbnail with Play Icon */}
                    <div className="w-full max-w-xl">
                        <div className="relative rounded-2xl overflow-hidden aspect-video bg-black/10">
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-white ml-1"
                                    >
                                        <polygon points="5 3 19 12 5 21 5 3" />
                                    </svg>
                                </div>
                            </div>
                            <Image
                                src="https://www.nme.com/wp-content/uploads/2024/09/Drake-live@2000x1270.jpg"
                                alt="Drake performing"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}