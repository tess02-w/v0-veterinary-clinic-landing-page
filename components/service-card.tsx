"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import type React from "react"

interface ServiceCardProps {
  title: string
  icon: React.ComponentType<any>
  description: string
  image: string
  index: number
}

export default function ServiceCard({ title, icon: Icon, description, image, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  }

  const iconVariants = {
    idle: { rotate: 0, scale: 1 },
    hover: {
      rotate: 15,
      scale: 1.15,
      transition: { duration: 0.4, type: "spring", stiffness: 300 },
    },
  }

  const imageVariants = {
    idle: { scale: 1 },
    hover: {
      scale: 1.15,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const overlayVariants = {
    idle: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  const buttonVariants = {
    idle: {
      backgroundColor: "#1B4D5C",
      borderColor: "#1B4D5C",
    },
    hover: {
      backgroundColor: "#0f2a33",
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.92,
    },
  }

  const secondaryButtonVariants = {
    idle: {
      backgroundColor: "transparent",
      borderColor: "#1B4D5C",
    },
    hover: {
      backgroundColor: "#E8A835",
      borderColor: "#E8A835",
      color: "white",
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.92,
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col group cursor-pointer hover:shadow-2xl transition-shadow"
    >
      {/* Image Container with Zoom and Overlay */}
      <motion.div
        className="aspect-video overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative"
        animate={isHovered ? "hover" : "idle"}
      >
        <motion.img
          src={image || "/placeholder.svg?height=300&width=400&query=veterinary"}
          alt={title}
          className="w-full h-full object-cover"
          variants={imageVariants}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#1B4D5C]/40 via-[#1B4D5C]/20 to-transparent"
          variants={overlayVariants}
        />

        <motion.div
          className="absolute top-4 right-4 bg-[#E8A835] text-white px-3 py-1 rounded-full text-sm font-semibold"
          initial={{ opacity: 0, scale: 0 }}
          animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
        >
          Popular
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <motion.h3 className="text-xl font-bold text-[#1B4D5C] mb-2 flex items-center gap-3">
          <motion.span className="text-3xl inline-block" variants={iconVariants} animate={isHovered ? "hover" : "idle"}>
            <Icon size={32} className="text-[#1B4D5C]" />
          </motion.span>
          <span className="flex-1">{title}</span>
        </motion.h3>

        <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-1">{description}</p>
      </div>
    </motion.div>
  )
}
