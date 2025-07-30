'use client'

export default function ShopCards({
  card
}: {
  card: {
    image: string
    alt: string
  }
}) {
  return (
    <div className="w-full aspect-[3/4] overflow-hidden rounded-[8px]">
      <img
        src={card.image}
        alt={card.alt}
        className="w-full h-full object-cover"
      />
    </div>
  )
}
