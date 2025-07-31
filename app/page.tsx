'use client'

import Cards from "@/Components/Cards";
import Footer from "@/Components/Footer";
import Nav from "@/Components/Nav";
import ShopCards from "@/Components/Shop-Items";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from "swiper/modules";

export default function Home() {
  return (
    <div className="bg-white w-full flex flex-col h-full">
      <div className="px-4 md:px-[60px] xl:px-[120px] py-[14px]">
        <Nav />

        <div className="bg-gray-400 w-full h-[200px] md:h-[400px] mt-[40px]"></div>

        {/* Featured News */}
        <div className="pt-[60px] text-[#191C16]">
          <h1 className="text-[28px] md:text-[36px] pb-[20px]">
            Our Top Featured News Today
          </h1>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-10">

            {/* Text Block */}
            <div className="flex flex-col items-start text-[#191C16] max-w-full lg:max-w-[480px] order-2 lg:order-1">
              <h1 className="text-[22px] md:text-[28px] font-bold">
                Stephen Colbert’s Late Night Allies and Famous Friends Make Cameos on The Late Show After Cancellation
              </h1>
              <h1 className="text-[14px] font-light text-[#C1C1C1] py-[4px]">Date: 23/9/2023</h1>
              <h1 className="text-[14px] pb-[20px]">
                Adam Sandler, Anderson Cooper, Jon Stewart, Jimmy Fallon, Seth Meyers, John Oliver and Andy Cohen were among those who made surprise appearances on Monday's episode after CBS announced that the late night show would be ending in May 2026.
              </h1>
              <button className="bg-[#191C16] text-white w-[160px] md:w-[188px] h-[45px] md:h-[51px] rounded-[4px]">
                Learn More
              </button>
            </div>

            {/* Image Block */}
            <img
              src="https://www.hollywoodreporter.com/wp-content/uploads/2025/07/Stephen-Colbert-late-show-publicity-H-2025.png?w=488&h=331&crop=1&resize=488%2C331"
              className="w-full lg:w-[488px] h-auto order-1 lg:order-2"
              alt="Stephen Colbert Publicity Photo"
            />
          </div>
          {/* This Week’s Top News */}
          <h1 className="text-[28px] md:text-[36px] pt-[80px] md:pt-[120px]">This Week’s Top News</h1>
          <div className="pt-[40px]">
                  <Swiper
              slidesPerView="auto"
              loop
              spaceBetween={20}
              autoplay={{ delay: 3000 }}
              modules={[Autoplay]}
              className="w-full"
            >
              {[
                {
                  image: 'https://media.post.rvohealth.io/wp-content/uploads/2020/09/Male_Indoor_Plants_732x549-thumbnail.jpg',
                  alt: 'Plant Image',
                  title: 'Animals react to secret sounds from plants, say scientists.',
                },
                {
                  image: 'https://media.cnn.com/api/v1/images/stellar/prod/jr-jr.jpg?c=original',
                  alt: '3D Train Station',
                  title: 'Japanese train station built in just two hours with 3D printing',
                },
                {
                  image: 'https://assets.science.nasa.gov/dynamicimage/assets/science/missions/hubble/releases/2025/07/STScI-01JZ3N36Y8CP44ZA07A7Z27S5Q.tif?w=2278&h=1822&fit=clip&crop=faces%2Cfocalpoint',
                  alt: 'Black Hole',
                  title: 'NASA’s Hubble, Chandra spot rare type of black hole eating a star',
                },
                {
                  image: 'https://s.france24.com/media/display/14e44080-6d05-11f0-81da-005056a97e36/w:1280/p:16x9/AP25211133427846.jpg',
                  alt: 'Quake Waves',
                  title: 'Massive waves cross the Pacific after Russian quake',
                },
                {
                  image: 'https://www.brookings.edu/wp-content/uploads/2016/06/japan_wave001.jpg?quality=75',
                  alt: 'Wave',
                  title: 'Animals react to secret sounds from plants, say scientists.',
                }
              ].map((card, index) => (
                <SwiperSlide key={index} className="!w-[280px] sm:!w-[349px] p-5">
                  <Cards card={card} />
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

          {/* Trending Today */}
          <div className="pt-[80px] md:pt-[120px]">
            <h1 className="text-[28px] md:text-[36px]">Trending Today</h1>
            <div className="pt-[30px] flex flex-col gap-4">
              <img
                src="https://images.pexels.com/photos/866398/pexels-photo-866398.jpeg?cs=srgb&dl=pexels-ralph-chang-260364-866398.jpg&fm=jpg"
                className="w-full h-[200px] md:h-[400px] object-cover rounded"
                alt="Triple Disaster’s Impact on Japan"
              />
              <h1 className="text-[22px] md:text-[28px] font-bold">Top 10 Tourist Spots In USA</h1>
              <h1 className="text-[14px] font-light text-[#C1C1C1]">Date: 23/9/2023</h1>
              <p className="text-[14px]">
                Discover the most breathtaking and iconic destinations across the United States. From stunning natural wonders to vibrant cityscapes, explore the top 10 must-visit tourist spots that showcase the diverse beauty and culture of the USA.
              </p>
            </div>
          </div>

          {/* Shop Section */}
          <div className="pt-[80px] md:pt-[120px]">
            <h1 className="text-[28px] md:text-[36px]">Our Shop</h1>

            {/* Responsive grid layout: 1-col (mobile), 3-col (laptop), 5-col (desktop) */}
            <div className="pt-[40px] grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 items-center justify-center gap-[20px]">
              {[
                'https://img01.ztat.net/article/spp-media-p1/c9e50a7d82704a57b54aac72093726d5/f01c2cbb86bf416d82e068f528b2f6a8.jpg?imwidth=762',
                'https://cdn11.bigcommerce.com/s-c4ko17vpic/images/stencil/1280x1280/products/222/1230/Havana_hemp_set_vktrblak_1_of_9__75385.1688159600.jpg?c=1',
                'https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/go9sfecuofqfwut1oi3q.jpg',
                'https://www.shutterstock.com/image-photo/portrait-man-beige-jacket-shirt-600nw-2443171009.jpg',
                'https://cdn.lookastic.com/looks/shirt-jacket-crew-neck-t-shirt-chinos-large-104240.jpg'
              ].map((img, i) => (
                <ShopCards key={i} card={{ image: img, alt: 'Shop Item' }} />
              ))}
            </div>

            <div className="flex justify-end pt-[20px]">
              <a
                href="/Shops"
                className="text-[#191C16] font-semibold text-[15px] border-b-[2px] border-[#191C16] pb-[1px] transition"
              >
                See More
              </a>
            </div>
          </div>


        </div>
      </div>

      {/* Footer */}
      <div className="pt-[40px]">
        <Footer />
      </div>
    </div>
  );
}
