import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'

interface ProjectCardProps {
  title: string
  icon: LucideIcon
  description: string
}

export function ProjectCard({ title, icon: Icon, description }: ProjectCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      className="bg-white p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
    >
      <h3 className="text-xl font-semibold mb-3 flex items-center">
        <Icon className="w-5 h-5 mr-2 text-indigo-600" /> {title}
      </h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  )
}

