'use client'

import { Github, Linkedin, Mail, Music, Server, Code, Database, Cloud, FileDown, PiggyBank, Binoculars, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ProjectCard } from '../components/ProjectCard'
import { SkillCard } from '../components/SkillCard'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <header className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <Image
              src="/avatar.png?height=180&width=180"
              alt="OBrien Alaribe"
              width={180}
              height={180}
              className="mx-auto rounded-full shadow-lg"
            />
          </motion.div>
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-5xl font-extrabold text-gray-900"
          >
            <code>OBrien Alaribe </code>
          </motion.h1>
          <motion.p 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-xl text-gray-600"
          >
            Web3 DevOps Engineer
          </motion.p>
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex justify-center space-x-6"
          >
            <Link href="https://github.com/obrienalaribe" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github className="w-7 h-7" />
            </Link>
            <Link href="https://linkedin.com/in/obrienalaribe" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin className="w-7 h-7" />
            </Link>
            <Link href="mailto:obrienalaribe@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail className="w-7 h-7" />
            </Link>
          </motion.div>
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <Link 
              href="/cv.pdf" 
              download
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
              <FileDown className="w-5 h-5 mr-2" />
              Download CV
            </Link>
          </motion.div>
        </header>

        <main className="space-y-20">
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-gray-700 leading-relaxed">
              <code> Web3 engineer 
              with over 10 years of experience in <b>  Infrastructure Management and Automation </b>
              Started my web3 journey in 2020 during Defi Summer and have never left the industry since. Personally deployed and maintained multiple
              RPC & Validator nodes across EVM and Substrate ecosystems with some experience in smart contract development
              </code> 
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Composition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillCard 
                title="Development" 
                icon={Code} 
                skills={['JavaScript/TypeScript', 'React & Next.js', 'Node.js', 'Python', 'Rust']}
              />
              <SkillCard 
                title="DevOps" 
                icon={Server} 
                skills={['Docker & Kubernetes', 'CI/CD (Github Actions, Gitlab, CircleCI)', 'AWS & GCP', 'Terraform & Pulumi', 'Datadog, Grafana, Prometheus, Loki']}
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Performances</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard 
                title="Release Automation"
                icon={Database}
                description="Architecting CI/CD pipelines for 1000+ rpc nodes and validators and custom tooling for managing node block height across regions"
              />
              <ProjectCard 
                title="Polygon zkEVM" 
                icon={Cloud}
                description="Orchestrated the deployment of polygon zkEVM and CDK on kubernetes which included smart contract deployment and monitoring"
              />
              <ProjectCard 
                title="Cost Savings" 
                icon={PiggyBank}
                description="Cloud optimization & cost tracking to cut cost and meet monthly infrastructure budget"
              />
              <ProjectCard 
                title="Observability & Monitoring" 
                icon={Search}
                description="End to end instrumentation of codebase for better tracing, metrics and logging for proactive monitoring"
              />
            </div>
          </section>
        </main>

        <footer className="mt-20 text-center text-gray-600">
          <p>&copy; 2025 O'Brien Alaribe. All rights reserved.</p>
        </footer>
      </motion.div>
    </div>
  )
}

