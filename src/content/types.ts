import type { ExperienceId, ProjectId } from "./meta"

export type Stat = { value: string; label: string }

export type Pillar = { title: string; description: string }

export type Service = { title: string; description: string }

export type ProcessStep = { title: string; description: string }

export type ExperienceItem = {
  id: ExperienceId
  company: string
  role: string
  location: string
  summary: string
  highlights: string[]
}

export type ProjectItem = {
  id: ProjectId
  name: string
  category: string
  role: string
  summary: string
  /** Shown in the details panel. */
  highlights: string[]
  /** Where the description comes from when it isn't Mario's own commits. */
  note?: string
}

export type Award = { rank: string; event: string; date?: string; project: string; url?: string }

export type EducationItem = { degree: string; school: string; detail?: string; status?: string }

export type SkillGroup = { title: string; items: string[] }

export type SectionIntro = { eyebrow: string; title: string; intro?: string }

export type PortfolioContent = {
  hero: {
    availability: string
    title: string
    summary: string
    location: string
    primaryCta: string
    secondaryCta: string
  }
  stats: Stat[]
  about: SectionIntro & { paragraphs: string[]; pillarsTitle: string; pillars: Pillar[] }
  services: SectionIntro & { items: Service[]; processTitle: string; process: ProcessStep[] }
  experience: SectionIntro & { items: ExperienceItem[] }
  projects: SectionIntro & { items: ProjectItem[] }
  testimonial: {
    eyebrow: string
    quotes: string[]
    author: string
    role: string
    translated?: string
  }
  skills: SectionIntro & { groups: SkillGroup[] }
  education: SectionIntro & { items: EducationItem[]; awardsTitle: string; awards: Award[] }
  contact: SectionIntro
}
