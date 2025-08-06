import ShopCard from "@/Components/Shop-Items";
import { motion } from "framer-motion";

export default function Shop() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="pt-[80px] md:pt-[120px]"
        >
            <h1 className="text-[28px] md:text-[36px]">Our Shop</h1>

            <div className="flex flex-wrap gap-4 md:pt-[40px] pt-[30px] justify-center">
                {[
                    {
                        id: 'suit-1',
                        image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80',
                        name: 'Premium Suit',
                        price: 249.99,
                    },
                    {
                        id: 'suit-2',
                        image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80',
                        name: 'Classic Suit',
                        price: 199.99,
                    },
                    {
                        id: 'suit-3',
                        image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80',
                        name: 'Modern Suit',
                        price: 279.99,
                    },
                    {
                        id: 'suit-4',
                        image: 'https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80',
                        name: 'Luxury Suit',
                        price: 349.99,
                    },
                ].map((card) => (
                    <ShopCard
                        key={card.id}
                        id={card.id}
                        name={card.name}
                        price={card.price}
                        image={card.image} subtitle={''} />
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
        </motion.div>
    )
}