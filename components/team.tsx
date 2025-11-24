"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const team = [
    {
      name: "Dra. Ana Silva",
      specialty: "Clínica Geral",
      description:
        "Veterinária com 12 anos de experiência em atendimento clínico de pequenos animais. Especialista em diagnóstico e tratamento de doenças infectocontagiosas.",
      image: "/female-veterinarian-professional.jpg",
    },
    {
      name: "Dr. Carlos Santos",
      specialty: "Cirurgia",
      description:
        "Cirurgião especializado em procedimentos de alta complexidade. Formado com especialização em cirurgia videoassistida e ortopedia veterinária.",
      image: "/male-veterinarian-surgeon.jpg",
    },
    {
      name: "Dra. Marina Costa",
      specialty: "Dermatologia",
      description:
        "Especialista em doenças de pele e alergias. Com experiência em casos crônicos e complicados de dermatologia veterinária.",
      image: "/female-veterinarian-specialist.jpg",
    },
    {
      name: "Dr. Felipe Oliveira",
      specialty: "Emergência",
      description:
        "Especialista em medicina de emergência com certificação em tratamento de trauma e cuidados intensivos veterinários.",
      image: "/male-veterinarian-emergency.jpg",
    },
  ]

  const itemsPerSlide = isMobile ? 1 : 2
  const totalSlides = Math.ceil(team.length / itemsPerSlide)

  const getCurrentSlideItems = () => {
    const start = (currentIndex % totalSlides) * itemsPerSlide
    return team.slice(start, start + itemsPerSlide)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  return (
    <section id="team" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-3 w-full max-w-xs">
              <div className="flex-1 h-px bg-[#E8A835]"></div>
              <span className="text-[#E8A835] text-2xl">👥</span>
              <div className="flex-1 h-px bg-[#E8A835]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1B4D5C] mb-4">Nossa Equipe</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Profissionais experientes e dedicados ao bem-estar do seu pet.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-x-hidden">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-2"
              >
                {getCurrentSlideItems().map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                  >
                    {/* Image */}
                    <div className="aspect-square overflow-hidden bg-gray-200">
                      <motion.img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-4">
                      <h3 className="text-lg md:text-xl font-bold text-[#1B4D5C] mb-1">{member.name}</h3>
                      <p className="text-[#E8A835] font-semibold text-sm md:text-base mb-2">{member.specialty}</p>
                      <p className="text-gray-600 text-sm md:text-base line-clamp-3 md:line-clamp-2">
                        {member.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-2 md:left-4 top-1/3 -translate-y-1/2 bg-[#1B4D5C] text-white p-2 rounded-full hover:bg-[#153844] transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-2 md:right-4 top-1/3 -translate-y-1/2 bg-[#1B4D5C] text-white p-2 rounded-full hover:bg-[#153844] transition-colors z-10"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex % totalSlides === index ? "bg-[#E8A835] w-8" : "bg-gray-300 w-2"
                }`}
                whileHover={{ scale: 1.2 }}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
