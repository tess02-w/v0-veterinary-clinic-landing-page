"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 md:pb-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=veterinary-clinic-modern-pet-care)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cuidando do seu melhor amigo com amor
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Na Blue Paw Veterinária, seu pet recebe atendimento profissional, carinhoso e especializado. Estamos aqui
            24h para cuidar da saúde e bem-estar do seu companheiro.
          </motion.p>

          <motion.button
            className="bg-[#E8A835] text-[#1B4D5C] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#d99525] transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Agendar Consulta
          </motion.button>
        </div>
      </div>
    </section>
  )
}
