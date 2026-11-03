"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface DepartmentCardProps {
  id: string
  name: string
  subtitle: string
  description: string
  color: string
  textColor: string
  accent: string
}

export default function DepartmentCard({
  id,
  name,
  subtitle,
  description,
  color,
  textColor,
  accent,
}: DepartmentCardProps) {
  return (
    <div
      className={`bg-gradient-to-br ${color} rounded-2xl p-8 md:p-12 hover:shadow-xl transition-all duration-300 group`}
    >
      <div
        className={`w-12 h-12 ${accent} rounded-full mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}
      ></div>

      <h3 className={`text-3xl md:text-4xl font-display font-bold ${textColor} mb-2`}>{name}</h3>

      <p className={`text-sm ${textColor} opacity-75 uppercase tracking-widest mb-4 font-body`}>{subtitle}</p>

      <p className={`${textColor} opacity-90 font-body mb-8 leading-relaxed`}>{description}</p>

      <Link href={`/${id}`}>
        <button
          className={`inline-flex items-center gap-2 ${textColor} font-body font-medium hover:gap-3 transition-all`}
        >
          Explore <ArrowRight className="w-4 h-4" />
        </button>
      </Link>
    </div>
  )
}
