// Mock data for Shubh Pandey's Portfolio - Orange Theme
export const portfolioData = {
  hero: {
    name: "Shubh Pandey",
    title: "DevOps & Site Reliability Engineer",
    subheading: "Cloud • Automation • Reliability • Performance",
    resumeUrl: "/Shubh_Resume.pdf",
    email: "shubhpandet@gmail.com",
    headshot: "/Profile.png"
  },

  about: {
    summary: "DevOps/Site Reliability Engineer with 5 years of experience designing, automating, and operating large-scale, cloud-native systems. Skilled in AWS/GCP/Azure, observability, CI/CD, Terraform, Kubernetes, and incident management. Proven track record of improving availability to 99.9%, reducing downtime by 28%, and cutting infra costs by 20% while ensuring compliance and security in production environments. Adept at managing full-stack applications and improving operational workflows to reduce downtime, improve efficiency, and support business-critical systems."
  },

  skills: {
    "Cloud Platforms": [
      { name: "AWS", level: 95 },
      { name: "GCP", level: 85 },
      { name: "Azure", level: 80 }
    ],
    "Infrastructure & Automation": [
      { name: "Terraform", level: 90 },
      { name: "Ansible", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "GitLab CI/CD", level: 90 },
      { name: "Jenkins", level: 80 }
    ],
    "Programming & Scripting": [
      { name: "Python", level: 90 },
      { name: "Bash", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "FastAPI", level: 85 }
    ],
    "Monitoring & Observability": [
      { name: "CloudWatch", level: 95 },
      { name: "Datadog", level: 80 },
      { name: "Prometheus", level: 85 },
      { name: "Grafana", level: 90 }
    ]
  },

  experience: [
    {
      title: "DevOps Engineer",
      company: "Thales Digital Identity & Security",
      period: "Dec 2023 – Present",
      location: "Noida, India",
      responsibilities: [
        "Developed full-stack solutions for the Thales Secure File Transfer (TSFT) platform and enforced SLIs, SLOs, and error budgets to maintain 99.9% availability across 500+ global enterprise customers.",
        "Built robust frontend portals using Vue.js and Typescript, hosted on S3 and delivered via CloudFront, improving UI performance by 30%.",
        "Centralized and tuned observability with CloudWatch, OpenSearch/ELK, and Grafana, building unified dashboards for metrics, logs, and traces.",
        "Containerized IBM Sterling Connect: Direct with Docker, deployed on production EKS and ECS Fargate, cutting infra costs by 20%.",
        "Provisioned complete infrastructure using Terraform, deploying AWS resources including Lambda, API Gateway, Step Functions, DynamoDB, etc."
      ]
    },
    {
      title: "Cloud Operations Engineer",
      company: "Thales Digital Identity & Security",
      period: "Aug 2021 – Dec 2023",
      location: "Noida, India",
      responsibilities: [
        "Managed AWS services (EC2, RDS, S3, VPC) specializing in fault tolerance and auto-scaling, reducing cloud downtime by 28%.",
        "Configured Datadog and Prometheus monitoring pipelines, improving observability by 15%.",
        "Optimized cloud infrastructure costs with autoscaling, right-sizing, and serverless adoption while maintaining SLAs.",
        "Created Ansible playbooks for system configuration, cutting deployment time by 40% across 10+ servers."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Thales Digital Identity & Security",
      period: "Feb 2021 – Aug 2021",
      location: "Noida, India",
      responsibilities: [
        "Engineered a secure Apple backend payload encryption system utilizing the Java Cryptography Architecture (JCA).",
        "Executed 50+ functional test cases for the platform's back testing framework, enhancing test coverage by 25%."
      ]
    }
  ],

  education: [
    {
      degree: "B.Tech Computer Science",
      institution: "Jaypee Institute of Information Technology",
      cgpa: "8.0",
      period: "2017–2021"
    }
  ],

  certifications: [
    {
      name: "AWS SysOps Administrator",
      issuer: "Amazon Web Services",
      validity: "2025 – 2028",
      badge: "https://images.credly.com/size/340x340/images/f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1/image.png",
      verifyUrl: "https://www.credly.com/badges/4c2a0cb4-2594-416a-9a4d-f820f01858f1/public_url"
    },
    {
      name: "AWS Developer Associate",
      issuer: "Amazon Web Services",
      validity: "2025 – 2028",
      badge: "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
      verifyUrl: "https://www.credly.com/badges/844595a4-f38a-4447-b191-8a7a86c9b15a/public_url"
    },
    {
      name: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      validity: "2023 – 2026",
      badge: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
      verifyUrl: "https://www.credly.com/badges/cf778dc8-7450-4016-bcc1-f7c8b7315304/public_url"
    },
    {
      name: "GCP Associate Cloud Engineer",
      issuer: "Google Cloud",
      validity: "2023 – 2026",
      badge: "https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/60364510",
      verifyUrl: "https://www.credly.com/badges/beb65be5-586a-48c1-909a-b10e51dfe61f/public_url"
    }
  ],

  projects: [
    {
      title: "Email Remediation Automation",
      description: "Automated remediation system enabling L1 support to resolve critical incidents autonomously. (Patent Initiative)",
      tags: ["Python", "AWS Lambda", "Step Functions"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      linkedinUrl: "https://www.linkedin.com/in/shubhpandey9/"
    },
    {
      title: "Mission 70 Automation",
      description: "Empowered L1 support teams with self-service automation, increasing autonomy by 70%.",
      tags: ["Ansible", "Terraform", "Shell"],
      image: "https://images.unsplash.com/photo-1518433278985-2882333d1b02?w=800&q=80",
      linkedinUrl: "https://www.linkedin.com/in/shubhpandey9/"
    },
    {
      title: "Onboarding Knowledge Hub",
      description: "Centralized knowledge base reducing new joiner onboarding time by 40%.",
      tags: ["Confluence", "Documentation", "GitLab"],
      image: "https://images.unsplash.com/photo-1454165833772-d996d49513d7?w=800&q=80",
      linkedinUrl: "https://www.linkedin.com/in/shubhpandey9/"
    }
  ],

  blogs: [
    {
      title: "Mastering AWS Monitoring",
      summary: "Comprehensive guide to CloudWatch, EventBridge, and observability patterns.",
      readTime: "12 min read",
      year: "2024",
      url: "https://medium.com/@shubhpandet",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      title: "Database Scaling on AWS",
      summary: "Deep dive into RDS, Aurora, and DynamoDB for global scale.",
      readTime: "15 min read",
      year: "2024",
      url: "https://medium.com/@shubhpandet",
      thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80"
    }
  ],

  contact: {
    email: "shubhpandet@gmail.com",
    phone: "+91-9897733982",
    linkedin: "https://linkedin.com/in/shubhpandey9"
  }
};