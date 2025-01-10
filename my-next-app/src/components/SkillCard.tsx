import { motion } from 'framer-motion'
import { type LucideIcon } from 'lucide-react'

interface SkillCardProps {
  title: string
  icon: LucideIcon
  skills: string[]
}

export function SkillCard({ title, icon: Icon, skills }: SkillCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      className="bg-white p-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
    >
      <h3 className="text-xl font-semibold mb-3 flex items-center">
        <Icon className="w-5 h-5 mr-2 text-indigo-600" /> {title}
      </h3>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        {skills.map((skill, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

