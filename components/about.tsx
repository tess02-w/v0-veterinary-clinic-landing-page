"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "./scroll-reveal"

export default function About() {
  const features = [
    { icon: "✓", label: "Equipe Especializada" },
    { icon: "✓", label: "Atendimento 24h" },
    { icon: "✓", label: "Melhores Veterinários" },
    { icon: "✓", label: "Qualidade Garantida" },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <motion.div
                className="relative aspect-square rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="/veterinary-team-professional.jpg"
                  alt="Nossa equipe"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              {/* Decorative Elements with animation */}
              <motion.div
                className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#E8A835]/20 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute top-10 -left-8 w-16 h-16 bg-[#E8A835]/20 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-[#E8A835] font-bold text-sm tracking-widest mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                SOBRE NÓS
              </motion.div>
              <motion.h2
                className="text-4xl md:text-5xl font-serif font-bold text-[#1B4D5C] mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Uma clínica pensada para seu pet
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Com mais de 15 anos de experiência, a Blue Paw Veterinária é conhecida por seu atendimento humanizado e
                técnicas modernas. Nossa missão é proporcionar o melhor cuidado veterinário com carinho e
                profissionalismo.
              </motion.p>

              {/* Features Grid with stagger */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E8A835] text-white flex items-center justify-center font-bold text-sm"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <span className="text-gray-700 font-semibold">{feature.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
