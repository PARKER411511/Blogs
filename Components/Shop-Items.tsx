'use client'

export default function ShopCards({
  card
}: {
  card: {
    image: string
    alt: string
    badge?: string
    title: string
    subtitle: string
    price: string
  }
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition w-[260px]">
      <div className="relative w-full h-[260px]">
        <img
          src={card.image}
          alt={card.alt}
          className="w-full h-full object-cover"
        />
        {card.badge && (
          <span className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-[10px] font-semibold px-1.5 py-0.5 rounded-full">
            {card.badge}
          </span>
        )}
      </div>
      <div className="p-2">
        <h3 className="font-semibold text-sm mb-0.5">{card.title}</h3>
        <p className="text-xs text-gray-500 mb-2">{card.subtitle}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-blue-600 text-sm">{card.price}</span>
          <button className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs flex items-center justify-center hover:bg-rose-600 transition">
            +
          </button>
        </div>
      </div>
    </div>
  )
}
