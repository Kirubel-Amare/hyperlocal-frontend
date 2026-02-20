// components/filters/price-range.tsx
'use client'

import { useState, useEffect } from 'react'

interface PriceRangeProps {
    minPrice: number
    maxPrice: number
    onMinChange: (value: number) => void
    onMaxChange: (value: number) => void
    min?: number
    max?: number
}

export function PriceRange({
    minPrice,
    maxPrice,
    onMinChange,
    onMaxChange,
    min = 0,
    max = 500
}: PriceRangeProps) {
    const [localMin, setLocalMin] = useState(minPrice)
    const [localMax, setLocalMax] = useState(maxPrice)

    useEffect(() => {
        setLocalMin(minPrice)
        setLocalMax(maxPrice)
    }, [minPrice, maxPrice])

    const handleMinChange = (value: number) => {
        const newValue = Math.min(value, localMax - 10)
        setLocalMin(newValue)
        onMinChange(newValue)
    }

    const handleMaxChange = (value: number) => {
        const newValue = Math.max(value, localMin + 10)
        setLocalMax(newValue)
        onMaxChange(newValue)
    }

    return (
        <div className="mb-10">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                PRICE RANGE
            </h4>
            <div className="px-2">
                <Slider
                    min={min}
                    max={max}
                    minValue={localMin}
                    maxValue={localMax}
                    onMinChange={handleMinChange}
                    onMaxChange={handleMaxChange}
                />
                <PriceInputs
                    min={min}
                    max={max}
                    minValue={localMin}
                    maxValue={localMax}
                    onMinChange={handleMinChange}
                    onMaxChange={handleMaxChange}
                />
            </div>
        </div>
    )
}

function Slider({ min, max, minValue, maxValue, onMinChange, onMaxChange }: any) {
    return (
        <div className="h-1.5 bg-gray-100 rounded-full relative mb-8">
            <div
                className="absolute h-full bg-[#1E7B7C] rounded-full transition-all duration-300"
                style={{
                    left: `${((minValue - min) / (max - min)) * 100}%`,
                    right: `${100 - ((maxValue - min) / (max - min)) * 100}%`
                }}
            />
            <input
                type="range"
                min={min}
                max={max}
                value={minValue}
                onChange={(e) => onMinChange(Number(e.target.value))}
                className="absolute w-full top-0 h-1.5 opacity-0 cursor-pointer z-30"
            />
            <input
                type="range"
                min={min}
                max={max}
                value={maxValue}
                onChange={(e) => onMaxChange(Number(e.target.value))}
                className="absolute w-full top-0 h-1.5 opacity-0 cursor-pointer z-20"
            />
            <SliderHandle position={((minValue - min) / (max - min)) * 100} />
            <SliderHandle position={((maxValue - min) / (max - min)) * 100} />
        </div>
    )
}

function SliderHandle({ position }: { position: number }) {
    return (
        <div
            className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#1E7B7C] rounded-full shadow-lg z-10 pointer-events-none"
            style={{ left: `calc(${position}% - 10px)` }}
        />
    )
}

function PriceInputs({ min, max, minValue, maxValue, onMinChange, onMaxChange }: any) {
    return (
        <div className="flex items-center justify-between gap-4">
            <div className="flex-1 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">
                    $
                </span>
                <input
                    type="number"
                    min={min}
                    max={max}
                    value={minValue}
                    onChange={(e) => onMinChange(Number(e.target.value))}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-6 pr-2 py-2.5 text-sm font-bold text-gray-700 outline-none focus:ring-2 focus:ring-[#1E7B7C]/20 focus:border-[#1E7B7C] transition-all"
                />
            </div>
            <div className="h-px w-2 bg-gray-300" />
            <div className="flex-1 relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-bold">
                    $
                </span>
                <input
                    type="number"
                    min={min}
                    max={max}
                    value={maxValue}
                    onChange={(e) => onMaxChange(Number(e.target.value))}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-6 pr-2 py-2.5 text-sm font-bold text-gray-700 outline-none focus:ring-2 focus:ring-[#1E7B7C]/20 focus:border-[#1E7B7C] transition-all"
                />
            </div>
        </div>
    )
}