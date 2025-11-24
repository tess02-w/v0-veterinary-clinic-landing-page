"use client"

import { motion } from "framer-motion"
import ServiceCard from "./service-card"
import { Stethoscope, Scale as Scalpel, AlertCircle, Syringe, Microscope, Droplet } from "lucide-react"
import { PawPrint } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Consultas Gerais",
      icon: Stethoscope,
      description: "Avaliação completa da saúde do seu pet com diagnóstico preciso.",
      image: "/veterinary-consultation.jpg",
    },
    {
      title: "Cirurgias",
      icon: Scalpel,
      description: "Procedimentos cirúrgicos com equipamentos modernos e anestesia segura.",
      image: "/veterinary-surgery.jpg",
    },
    {
      title: "Emergência 24h",
      icon: AlertCircle,
      description: "Atendimento de emergência disponível a qualquer hora do dia ou noite.",
      image: "/pet-emergency.jpg",
    },
    {
      title: "Vacinação",
      icon: Syringe,
      description: "Programas completos de vacinação para proteção da sua vida.",
      image: "/pet-vaccination.jpg",
    },
    {
      title: "Exames Laboratoriais",
      icon: Microscope,
      description: "Exames de sangue e imagem com tecnologia de ponta.",
      image: "/veterinary-laboratory.jpg",
    },
    {
      title: "Banho e Tosa",
      icon: Droplet,
      description: "Higiene e embelezamento profissional com produtos de qualidade.",
      image: "/pet-grooming.jpg",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-3 w-full max-w-xs">
              <div className="flex-1 h-px bg-[#E8A835]"></div>
              <PawPrint size={24} className="text-[#E8A835]" />
              <div className="flex-1 h-px bg-[#E8A835]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1B4D5C] mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Oferecemos uma completa gama de serviços veterinários para manter seu pet saudável e feliz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
