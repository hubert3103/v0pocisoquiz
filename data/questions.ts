import type { Question, Category } from "../types/quiz"

export const categories: Category[] = [
  {
    id: "iso-standards",
    name: "ISO Standards",
    questions: [
      {
        id: "1",
        question: "Wat is het eerste stap in het risicobeheerprocees volgens ISO 27001?",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vraagstuk%20met%20image-8xlEUu3UmwG8h8poqkQAe5CycQGYU2.png",
        answers: ["Risicobehandeling", "Risico-identificatie", "Risico-evaluatie", "Risicocommunicatie"],
        correctAnswer: 1,
        timeLimit: 15,
        category: "iso-standards",
      },
      {
        id: "2",
        question: "Welke ISO standaard behandelt kwaliteitsmanagementsystemen?",
        image: "/placeholder.svg?height=300&width=500",
        answers: ["ISO 27001", "ISO 9001", "ISO 14001", "ISO 45001"],
        correctAnswer: 1,
        timeLimit: 12,
        category: "iso-standards",
      },
      {
        id: "3",
        question: "Wat betekent het acroniem PDCA in ISO management systemen?",
        image: "/placeholder.svg?height=300&width=500",
        answers: [
          "Plan-Do-Check-Act",
          "Prepare-Deploy-Control-Assess",
          "Process-Design-Create-Analyze",
          "Plan-Develop-Complete-Approve",
        ],
        correctAnswer: 0,
        timeLimit: 18,
        category: "iso-standards",
      },
      {
        id: "4",
        question: "Welke ISO standaard richt zich op milieumanagementsystemen?",
        image: "/placeholder.svg?height=300&width=500",
        answers: ["ISO 9001", "ISO 27001", "ISO 14001", "ISO 22000"],
        correctAnswer: 2,
        timeLimit: 10,
        category: "iso-standards",
      },
      {
        id: "5",
        question: "Wat is de hoofddoelstelling van ISO 27001?",
        image: "/placeholder.svg?height=300&width=500",
        answers: ["Kwaliteitsverbetering", "Informatiebeveiligingsmanagement", "Milieuprotectie", "Arbeidsveiligheid"],
        correctAnswer: 1,
        timeLimit: 14,
        category: "iso-standards",
      },
    ],
  },
  {
    id: "networking",
    name: "Networking",
    questions: [
      {
        id: "6",
        question: "Welke poort gebruikt HTTPS standaard?",
        image: "/placeholder.svg?height=300&width=500",
        answers: ["80", "443", "8080", "22"],
        correctAnswer: 1,
        timeLimit: 8,
        category: "networking",
      },
      {
        id: "7",
        question: "Wat betekent het acroniem DNS?",
        image: "/placeholder.svg?height=300&width=500",
        answers: ["Dynamic Network System", "Domain Name System", "Data Network Service", "Digital Name Server"],
        correctAnswer: 1,
        timeLimit: 10,
        category: "networking",
      },
      {
        id: "8",
        question: "Welk IP-adres bereik wordt gebruikt voor private netwerken (Class A)?",
        image: "/placeholder.svg?height=300&width=500",
        answers: ["192.168.0.0/16", "172.16.0.0/12", "10.0.0.0/8", "127.0.0.0/8"],
        correctAnswer: 2,
        timeLimit: 15,
        category: "networking",
      },
      {
        id: "9",
        question: "Welk protocol wordt gebruikt voor het versturen van email?",
        image: "/placeholder.svg?height=300&width=500",
        answers: ["HTTP", "FTP", "SMTP", "SNMP"],
        correctAnswer: 2,
        timeLimit: 12,
        category: "networking",
      },
      {
        id: "10",
        question: "Wat is de maximale lengte van een Ethernet kabel (Cat 5e/6)?",
        image: "/placeholder.svg?height=300&width=500",
        answers: ["50 meter", "100 meter", "150 meter", "200 meter"],
        correctAnswer: 1,
        timeLimit: 13,
        category: "networking",
      },
    ],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    questions: [
      {
        id: "11",
        question: "Wat is de meest effectieve methode tegen phishing aanvallen?",
        image: "/placeholder.svg?height=300&width=500",
        answers: ["Firewall installatie", "Gebruikerstraining", "Antivirus software", "VPN gebruik"],
        correctAnswer: 1,
        timeLimit: 12,
        category: "cybersecurity",
      },
      {
        id: "12",
        question: "Welke encryptie standaard wordt aanbevolen voor WiFi netwerken?",
        image: "/placeholder.svg?height=300&width=500",
        answers: ["WEP", "WPA", "WPA2", "WPA3"],
        correctAnswer: 3,
        timeLimit: 10,
        category: "cybersecurity",
      },
      {
        id: "13",
        question: "Wat betekent het acroniem MFA in cybersecurity?",
        image: "/placeholder.svg?height=300&width=500",
        answers: [
          "Multiple File Access",
          "Multi-Factor Authentication",
          "Managed Firewall Application",
          "Mobile First Architecture",
        ],
        correctAnswer: 1,
        timeLimit: 11,
        category: "cybersecurity",
      },
      {
        id: "14",
        question: "Welk type malware versleutelt bestanden en vraagt losgeld?",
        image: "/placeholder.svg?height=300&width=500",
        answers: ["Virus", "Worm", "Ransomware", "Spyware"],
        correctAnswer: 2,
        timeLimit: 9,
        category: "cybersecurity",
      },
      {
        id: "15",
        question: "Wat is een zero-day exploit?",
        image: "/placeholder.svg?height=300&width=500",
        answers: [
          "Een aanval op de eerste dag van het jaar",
          "Een exploit voor een onbekende kwetsbaarheid",
          "Een aanval die geen schade veroorzaakt",
          "Een exploit die automatisch verdwijnt",
        ],
        correctAnswer: 1,
        timeLimit: 16,
        category: "cybersecurity",
      },
    ],
  },
]

export function getRandomizedQuestions(categoryId: string, count = 5): Question[] {
  const category = categories.find((cat) => cat.id === categoryId)
  if (!category) return []

  const shuffled = [...category.questions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
