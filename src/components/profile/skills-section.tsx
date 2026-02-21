// components/profile/skills-section.tsx
'use client'

import { Award, CheckCircle, TrendingUp } from 'lucide-react'

interface SkillsSectionProps {
  skills: string[]
  expertise?: string[]
}

export function SkillsSection({ skills, expertise }: SkillsSectionProps) {
  return (
    <section className="mb-14">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-[#1E7B7C] to-[#166566] rounded-xl flex items-center justify-center shadow-lg shadow-[#1E7B7C]/10">
          <Award size={20} className="text-white" />
        </div>
        <h2 className="text-2xl font-black text-gray-900">Core Expertise</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Specialized Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="group relative px-4 py-2 bg-white rounded-xl text-sm font-medium text-gray-700 border border-gray-200 hover:border-[#1E7B7C]/30 hover:text-[#1E7B7C] hover:shadow-lg transition-all duration-300 cursor-default dark:border-gray-800"
              >
                {skill}
                <span className="absolute inset-0 bg-gradient-to-r from-[#1E7B7C]/0 to-[#166566]/0 group-hover:from-[#1E7B7C]/5 group-hover:to-[#166566]/5 rounded-xl transition-all" />
              </span>
            ))}
          </div>
        </div>

        {expertise && (
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Areas of Expertise</h3>
            <div className="space-y-3">
              {expertise.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-[#1E7B7C] flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}