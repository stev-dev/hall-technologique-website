'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const textRefs = useRef<(HTMLDivElement | null)[]>([])
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the main title
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
      })

      // Animate text sections with stagger
      gsap.from(textRefs.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5,
      })

      // Animate the circular image section
      gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        delay: 0.3,
      })

      // Animate the button
      gsap.from('.hero-button', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1.2,
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} className="relative min-h-screen bg-white px-4 py-8 md:py-12">
        {/* Logo */}
        <div className="absolute left-8 top-8 w-48">
            <Image
                src="/icons/branch.png"
                alt="Agropole Logo"
                width={42}
                height={42}
                className="object-contain"
            />
        </div>

        {/* Main Content */}
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 pt-24 md:grid-cols-2 md:gap-8 lg:gap-16">
            <div className="space-y-8">
        <h1 className="hero-title font-outline text-6xl font-bold tracking-wider text-transparent md:text-7xl lg:text-8xl">
        AGROPOLE
        </h1>
        
        <div className="space-y-6">
        <div ref={el => {textRefs.current[0] = el}} className="text-xl text-[#40BFE1]">
            Introducing the very first high-tech hub dedicated to the agri-food sector.
        </div>
        
        <div ref={el => {textRefs.current[1] = el}} className="text-lg text-[#40BFE1]">
            Providing the specialist know-how your projects need! We leverage our expertise to
            give you everything your ideas require to take root, grow and really bear fruit.
        </div>
        
        <div ref={el => {textRefs.current[2] = el}} className="text-lg text-[#40BFE1]">
            Expertise in a range of fields in the one place, ready to help your projects!
        </div>

        <Button 
            className="hero-button bg-[#40BFE1] px-8 py-6 text-lg font-semibold text-white hover:bg-[#40BFE1]/90"
        >
            FIND OUT MORE
        </Button>
        </div>
        </div>

        {/* Circular Image Section */}
        <div ref={imageRef} className="relative aspect-square">
            <div className="absolute right-0 top-0 h-full w-full">
                {/* Green Circle Background */}
                <div className="relative h-full w-full">
                    <div className="absolute right-0 top-0 h-full w-full rounded-full bg-[#7AB51D]" />
                    
                    {/* Leaf Accent */}
                    <div className="absolute right-8 top-0 h-24 w-24 rotate-45 rounded-tl-full bg-[#7AB51D]" />
                    
                    {/* Circular Image */}
                    <div className="absolute inset-8 overflow-hidden rounded-full">
                        <Image
                            src='/entrance.jpg'
                            alt="entrance to Agropole"
                            fill
                            className="object-cover"
                        />
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

