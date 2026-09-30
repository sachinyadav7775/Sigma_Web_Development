import React, { useEffect, useState } from 'react'
import { RiStarFill } from '@remixicon/react'

const Cards = () => {

    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = async () => {

        try {

            let a = await fetch("https://fakestoreapi.com/products")

            if (!a.ok) {
                throw new Error("Something went wrong")
            }

            let data = await a.json()
            setCards(data)

        } catch (err) {

            setError(true)

        } finally {

            setLoading(false)

        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading) {
        return (
            <div className="w-full min-h-screen bg-black text-white flex items-center justify-center">
                <h1 className="text-2xl">
                    Loading...
                </h1>
            </div>
        )
    }

    if (error) {
        return (
            <div className="w-full min-h-screen bg-black text-red-400 flex items-center justify-center">
                <h1 className="text-2xl">
                    Failed to load products 😕
                </h1>
            </div>
        )
    }

    return (

        <div className='w-full min-h-screen px-4 pt-4 pb-6 bg-black text-white flex flex-wrap items-center justify-center gap-8'>

            {cards.map((card) => {

                return (

                    <div
                        key={card.id}
                        className="w-full max-w-96 min-h-[500px] p-6 rounded-xl border border-zinc-700 bg-zinc-900 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300"
                    >

                        <div className='w-full h-52 flex items-center justify-center'>
                            <img
                                src={card.image}
                                alt={card.title}
                                className='w-full h-full object-contain'
                            />
                        </div>

                        <p className='text-sm text-amber-400 mt-4 capitalize'>
                            {card.category}
                        </p>

                        <h1 className='text-xl font-semibold mt-2 line-clamp-2'>
                            {card.title}
                        </h1>

                        <p className='text-sm text-zinc-400 mt-3 line-clamp-3'>
                            {card.description}
                        </p>

                        <div className='flex items-center justify-between gap-2'>

                            <p className='text-2xl font-bold text-green-400 mt-3'>
                                ${card.price}
                            </p>

                            <p className='mt-3 text-yellow-400 flex items-center'>

                                <span className='flex items-center'>
                                    <RiStarFill />
                                    <span className='ml-1.5'>
                                        {card.rating.rate}
                                    </span>
                                </span>

                                <span className='text-zinc-400 ml-2'>
                                    ({card.rating.count} reviews)
                                </span>

                            </p>

                        </div>

                        <button className='w-full mt-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 cursor-pointer'>
                            Add to Cart
                        </button>

                    </div>

                )

            })}

        </div>

    )
    
}

export default Cards