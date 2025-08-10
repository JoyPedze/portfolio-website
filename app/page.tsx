"use client"

import { useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Database,
  Cloud,
  Code,
  Mail,
  Linkedin,
  Github,
  Server,
  Workflow,
  Layers,
  ExternalLink,
  GitBranch,
  Shield,
  Monitor,
  Settings,
  FileText,
} from "lucide-react"
import { ContactForm } from "../components/contact-form"
import { ThemeToggle } from "../components/theme-toggle"
import Image from "next/image"

export default function Portfolio() {
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = [heroRef.current, aboutRef.current, skillsRef.current].filter(Boolean)
    elements.forEach((el) => el && observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      url: "https://www.credly.com/badges/14cfb5a0-fd39-45ac-852f-831abefd9f95/linked_in_profile",
      logo: "/images/aws-logo.png",
      color: "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700",
    },
    {
      title: "PCAP – Certified Associate in Python Programming",
      url: "https://www.credly.com/badges/44f920f1-a676-4543-94de-0ee05ddbea9e/linked_in_profile",
      logo: "/images/python-logo.png",
      color: "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700",
    },
    {
      title: "Databricks Certified Associate Developer for Apache Spark 3.0",
      url: "https://credentials.databricks.com/9df353c0-1dc6-4429-84f1-8b2878ccfa6c",
      logo: "/images/databricks-logo.png",
      color: "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700",
    },
    {
      title: "Microsoft Certified: Azure Data Scientist Associate",
      url: "https://learn.microsoft.com/api/credentials/share/en-gb/JoyPedze-JP/25AC50DB42B7DC73?sharingId",
      logo: "/images/microsoft-logo.png",
      color: "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700",
    },
  ]

  const skillCategories = [
    {
      title: "Languages & Core",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python (PySpark)", "SQL", "Bash", "Git"],
      description: "Core programming languages and development tools",
      color: "from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700",
      borderColor: "border-slate-200 dark:border-slate-600",
      iconColor: "text-slate-600 dark:text-slate-300",
      badgeColor: "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600",
    },
    {
      title: "Processing & Orchestration",
      icon: <Workflow className="w-6 h-6" />,
      skills: [
        "Apache Spark",
        "PySpark",
        "dbt",
        "Airflow (MWAA)",
        "Kafka (Streams/Connect)",
        "Spark Structured Streaming",
      ],
      description: "Data processing engines and workflow orchestration",
      color: "from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700",
      borderColor: "border-slate-200 dark:border-slate-600",
      iconColor: "text-slate-600 dark:text-slate-300",
      badgeColor: "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600",
    },
    {
      title: "Cloud & Storage",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        "AWS: S3, Glue, EMR, Lambda, Kinesis, Redshift, Lake Formation, IAM, CloudWatch",
        "Delta Lake / Apache Iceberg / Apache Hudi",
        "Parquet",
        "Hive/Glue Catalog",
      ],
      description: "Cloud infrastructure and data storage solutions",
      color: "from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30",
      borderColor: "border-blue-200 dark:border-blue-700",
      iconColor: "text-blue-600 dark:text-blue-400",
      badgeColor: "bg-blue-100 dark:bg-blue-800/50 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700",
    },
    {
      title: "Modeling & Architectures",
      icon: <Layers className="w-6 h-6" />,
      skills: [
        "Lakehouse & Medallion (Bronze/Silver/Gold)",
        "Kimball dimensional modeling (star/snowflake)",
        "SCDs",
        "Lambda / Kappa streaming patterns",
        "Data Vault (awareness)",
        "CDC",
      ],
      description: "Data modeling patterns and architectural approaches",
      color: "from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700",
      borderColor: "border-slate-200 dark:border-slate-600",
      iconColor: "text-slate-600 dark:text-slate-300",
      badgeColor: "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600",
    },
    {
      title: "DevOps for Data",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Terraform", "Docker", "GitHub Actions/Jenkins", "CI/CD for pipelines", "IaC modules"],
      description: "Infrastructure as code and deployment automation",
      color: "from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700",
      borderColor: "border-slate-200 dark:border-slate-600",
      iconColor: "text-slate-600 dark:text-slate-300",
      badgeColor: "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600",
    },
    {
      title: "Quality, Governance, Security",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Great Expectations / Soda", "Data Contracts", "PII handling", "encryption at rest/in-transit", "RBAC"],
      description: "Data quality, governance, and security practices",
      color: "from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700",
      borderColor: "border-slate-200 dark:border-slate-600",
      iconColor: "text-slate-600 dark:text-slate-300",
      badgeColor: "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600",
    },
    {
      title: "Monitoring & Cost",
      icon: <Monitor className="w-6 h-6" />,
      skills: ["CloudWatch", "Prometheus/Grafana basics", "partitioning & file layout for performance/cost"],
      description: "Performance monitoring and cost optimization",
      color: "from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700",
      borderColor: "border-slate-200 dark:border-slate-600",
      iconColor: "text-slate-600 dark:text-slate-300",
      badgeColor: "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600",
    },
    {
      title: "Platforms",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Databricks (Jobs/Repos/Delta Live Tables)", "Snowflake/BigQuery/Redshift"],
      description: "Modern data platforms and services",
      color: "from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700",
      borderColor: "border-slate-200 dark:border-slate-600",
      iconColor: "text-slate-600 dark:text-slate-300",
      badgeColor: "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Joy Pedze</h1>
            <div className="flex gap-3 items-center">
              <ThemeToggle />
              <Button variant="ghost" size="sm" asChild>
                <a href="#resume" className="flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com/JoyPedze"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/joy-pedze/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="py-20 px-6 opacity-0 translate-y-8 transition-all duration-1000">
        <div className="container mx-auto text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-slate-200 mb-6 animate-pulse-slow">
              Joy Pedze
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-4xl mx-auto">
              Data Engineer & Platform Architect — I design reliable, scalable data systems (Lakehouse, Streaming,
              CI/CD) so teams can trust their data.
            </p>

            {/* Fast Proof Chips */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-slate-300 dark:border-slate-600">
                Lakehouse (Delta)
              </Badge>
              <span className="text-slate-400 self-center">·</span>
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-slate-300 dark:border-slate-600">
                Kafka Streaming
              </Badge>
              <span className="text-slate-400 self-center">·</span>
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-slate-300 dark:border-slate-600">
                Airflow & dbt
              </Badge>
              <span className="text-slate-400 self-center">·</span>
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-slate-300 dark:border-slate-600">
                AWS (S3/Glue/EMR/Redshift)
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="hover:scale-105 transition-transform">
                <FileText className="w-5 h-5 mr-2" />
                View Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:scale-105 transition-transform bg-transparent"
              >
                <a href="https://github.com/JoyPedze" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:scale-105 transition-transform bg-transparent"
              >
                <a href="https://www.linkedin.com/in/joy-pedze/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform bg-transparent">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="py-16 px-6 bg-white/50 dark:bg-slate-800/50 opacity-0 translate-y-8 transition-all duration-1000"
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8 text-center">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-600" />
                    Software Engineering Background
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Started my journey in software engineering, developing robust systems using Java, Spring Boot, and
                    Angular. This foundation gave me a strong understanding of system architecture and software
                    development best practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-green-600" />
                    Data Engineering Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Transitioned to data engineering with 3 years of hands-on experience building data pipelines,
                    working with data warehouses, data lakes, and data lakehouses. Passionate about creating scalable
                    and efficient data solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-12 text-center">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className={`${cert.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg p-2 flex items-center justify-center">
                          <Image
                            src={cert.logo}
                            alt={`${cert.title} logo`}
                            width={32}
                            height={32}
                            className="object-contain"
                            onError={(e) => {
                              console.error(`Failed to load image: ${cert.logo}`);
                              e.currentTarget.src = "/placeholder.svg";
                            }}
                          />
                        </div>
                        <span className="text-lg">{cert.title}</span>
                      </div>
                      <Button variant="ghost" size="sm" asChild className="hover:scale-110 transition-transform">
                        <a href={cert.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        ref={skillsRef}
        className="py-20 px-6 bg-gradient-to-br from-slate-50/80 to-blue-50/80 dark:from-slate-800/80 dark:to-slate-900/80 opacity-0 translate-y-8 transition-all duration-1000"
      >
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 dark:from-slate-200 dark:to-blue-200 bg-clip-text text-transparent mb-4">
                Skills & Technologies
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Comprehensive expertise across modern data engineering, cloud platforms, and development practices
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <Card
                  key={index}
                  className={`group relative overflow-hidden border-2 ${category.borderColor} hover:shadow-lg transition-all duration-200 ease-out hover:-translate-y-1 bg-gradient-to-br ${category.color} will-change-transform`}
                  style={{ transform: 'translateZ(0)' }}
                >
                  {/* Card Header */}
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 shadow-sm ${category.iconColor}`}>
                        {category.icon}
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors duration-200">
                          {category.title}
                        </CardTitle>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>

                  {/* Card Content */}
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className={`inline-block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ease-out hover:scale-105 ${category.badgeColor} hover:shadow-sm will-change-transform`}
                          style={{ transform: 'translateZ(0)' }}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  {/* Subtle Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent dark:from-slate-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
                </Card>
              ))}
            </div>

            
            
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-12 text-center">
              Experience Highlights
            </h2>
            <div className="space-y-6">
              <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-blue-600" />
                    Data Architecture & Engineering
                  </CardTitle>
                  <CardDescription>3 years of experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li>• Designed and implemented data warehouses, data lakes, and data lakehouses</li>
                    <li>• Built scalable data pipelines using Apache Spark and Apache Kafka</li>
                    <li>• Orchestrated complex workflows with Apache Airflow</li>
                    <li>• Worked extensively with AWS cloud services</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="w-5 h-5 text-green-600" />
                    Database Management
                  </CardTitle>
                  <CardDescription>Multi-database expertise</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li>• MS SQL Server administration and optimization</li>
                    <li>• PostgreSQL database design and management</li>
                    <li>• MongoDB for NoSQL data solutions</li>
                    <li>• Database performance tuning and optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-slate-800 dark:bg-slate-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Let's Connect</h2>
            <p className="text-slate-300 mb-12 leading-relaxed text-center">
              I'm always interested in discussing data engineering opportunities, sharing knowledge, or collaborating on
              exciting projects.
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-6">
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                  <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3">
                    <Button variant="secondary" size="lg" className="hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5 mr-2" />
                      joypedped@gmail.com
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:scale-105 transition-all bg-transparent"
                    >
                      <a href="https://www.linkedin.com/in/joy-pedze/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 dark:bg-slate-950 text-slate-400 text-center">
        <div className="container mx-auto">
          <p>&copy; 2025 Joy Pedze. Built with passion for data engineering.</p>
        </div>
      </footer>

      <style jsx>{`
        .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  )
}
