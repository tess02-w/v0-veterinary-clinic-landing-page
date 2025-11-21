"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0)

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

  const itemsPerSlide = 2
  const totalSlides = Math.ceil(team.length / itemsPerSlide)

  const getCurrentSlideItems = () => {
    const start = (currentIndex % totalSlides) * itemsPerSlide
    return team.slice(start, start + itemsPerSlide)
  }

  const getNextSlideItems = () => {
    const nextIndex = (currentIndex + 1) % totalSlides
    const start = nextIndex * itemsPerSlide
    return team.slice(start, start + itemsPerSlide)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1)
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
        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid grid-cols-2 gap-4 md:gap-6 px-2">
              {getCurrentSlideItems().map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Image */}
                  <div className="aspect-square overflow-hidden bg-gray-200">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-2xl font-bold text-[#1B4D5C] mb-1">{member.name}</h3>
                    <p className="text-[#E8A835] font-semibold text-sm md:text-base mb-3 md:mb-4">{member.specialty}</p>
                    <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 line-clamp-2 md:line-clamp-3">
                      {member.description}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-2 md:gap-3">
                      <button className="flex-1 border-2 border-[#1B4D5C] text-[#1B4D5C] px-3 md:px-4 py-2 rounded-full font-semibold hover:bg-[#f5f7fa] transition-colors text-xs md:text-sm">
                        Conhecer
                      </button>
                      <button className="flex-1 text-[#1B4D5C] px-3 md:px-4 py-2 font-semibold hover:underline text-xs md:text-sm">
                        Ver mais
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/3 -translate-x-6 md:translate-x-0 md:left-4 bg-[#1B4D5C] text-white p-2 rounded-full hover:bg-[#153844] transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/3 translate-x-6 md:translate-x-0 md:right-4 bg-[#1B4D5C] text-white p-2 rounded-full hover:bg-[#153844] transition-colors z-10"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  (currentIndex % totalSlides) === index ? "bg-[#E8A835] w-8" : "bg-gray-300 w-2"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
