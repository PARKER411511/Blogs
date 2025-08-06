import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Cards from "@/Components/Cards";


export default function WeeklyNews() {
    return(
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="pt-[80px] md:pt-[120px]"
        >
          <h1 className="text-[28px] md:text-[36px]">This Weeks Top Stars</h1>

          <div className="pt-[12px] md:pt-[40px]">
            <Swiper
              slidesPerView="auto"
              loop
              spaceBetween={60}
              className="w-full"
            >
              {[
                {
                  image: 'https://i.scdn.co/image/ab6761610000e5ebe672b5f553298dcdccb0e676',
                  alt: 'Taylor Swift',
                  name: 'Taylor Swift',
                  views: '2.3M views',
                },
                {
                  image: 'https://i.scdn.co/image/ab6761610000e5eb9e528993a2820267b97f6aae',
                  alt: 'The Weeknd',
                  name: 'The Weeknd',
                  views: '1.9M views',
                },
                {
                  image: 'https://i.scdn.co/image/ab6761610000e5eb4a21b4760d2ecb7b0dcdc8da',
                  alt: 'Billie Eilish',
                  name: 'Billie Eilish',
                  views: '2.1M views',
                },
                {
                  image: 'https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9',
                  alt: 'Drake',
                  name: 'Drake',
                  views: '3.4M views',
                },
                {
                  image: 'https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd',
                  alt: 'Bruno Mars',
                  name: 'Bruno Mars',
                  views: '2.7M views',
                }
              ].map((card, index) => (
                <SwiperSlide key={index} className="!w-[280px] sm:!w-[329px] p-5">
                  <Cards card={card} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
    )
}