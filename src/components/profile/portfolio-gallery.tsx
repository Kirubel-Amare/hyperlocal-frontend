// components/profile/portfolio-gallery.tsx
'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Maximize2, Heart } from 'lucide-react'

interface PortfolioGalleryProps {
  images: string[]
  title?: string
}

export function PortfolioGallery({ images, title = "Recent Work" }: PortfolioGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setSelectedImage(images[index])
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
    } else {
      setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
    }
  }

  return (
    <>
      <section className="mb-14">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
              <Maximize2 size={20} className="text-white" />
            </div>
            <h2 className="text-2xl font-black text-gray-900">{title}</h2>
          </div>
          <button className="text-sm font-bold text-[#1E7B7C] hover:text-[#166566] transition-colors">
            View All Projects →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer bg-gray-100"
            >
              <Image
                src={img}
                alt={`Project ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-sm font-medium">Project {index + 1}</p>
                  <p className="text-white/70 text-xs">Click to enlarge</p>
                </div>
              </div>

              {/* Quick Actions */}
              <button className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/40">
                <Heart size={14} className="text-white" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full transition-all"
          >
            <X size={24} />
          </button>

          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 hover:bg-white/10 rounded-full transition-all"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={() => navigateImage('next')}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 hover:bg-white/10 rounded-full transition-all"
          >
            <ChevronRight size={32} />
          </button>

          <div className="relative w-full max-w-5xl aspect-video mx-8">
            <Image
              src={images[currentIndex]}
              alt={`Project ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
            <span className="text-white text-sm">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      )}
    </>
  )
}