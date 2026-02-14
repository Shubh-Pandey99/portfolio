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
      { name: "AWS", proficiency: "Expert", tags: ["EKS", "Lambda", "Direct Connect"] },
      { name: "GCP", proficiency: "Advanced", tags: ["GKE", "Cloud Run"] },
      { name: "Azure", proficiency: "Proficient", tags: ["AKS", "Azure AD"] }
    ],
    "Infrastructure & Automation": [
      { name: "Terraform", proficiency: "Expert", tags: ["IaC", "State Mgmt"] },
      { name: "Ansible", proficiency: "Advanced", tags: ["Config Mgmt"] },
      { name: "Docker", proficiency: "Expert", tags: ["Containerization"] },
      { name: "Kubernetes", proficiency: "Expert", tags: ["Orchestration"] },
      { name: "GitLab CI/CD", proficiency: "Expert", tags: ["Automation"] },
      { name: "Jenkins", proficiency: "Advanced", tags: ["Pipelines"] }
    ],
    "Programming & Scripting": [
      { name: "Python", proficiency: "Expert", tags: ["Scripting", "FastAPI"] },
      { name: "Bash", proficiency: "Expert", tags: ["Automation"] },
      { name: "TypeScript", proficiency: "Advanced", tags: ["Frontend", "Node.js"] },
      { name: "Java", proficiency: "Proficient", tags: ["Backend"] }
    ],
    "Monitoring & Observability": [
      { name: "CloudWatch", proficiency: "Expert", tags: ["Log Insight"] },
      { name: "Datadog", proficiency: "Advanced", tags: ["APM"] },
      { name: "Prometheus", proficiency: "Expert", tags: ["Metrics"] },
      { name: "Grafana", proficiency: "Expert", tags: ["Dashboards"] }
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
      title: "Harmony: Music Learning Platform",
      description: "A comprehensive platform for music teachers and students to manage lessons, tracks, and progress autonomously.",
      tags: ["React", "Firebase", "Node.js", "Tailwind"],
      githubUrl: "https://github.com/Shubh-Pandey99/music-teacher-app",
      deployUrl: "https://dynamic-filament.vercel.app/login",
      linkedinUrl: "https://www.linkedin.com/in/shubhpandey9/"
    },
    {
      title: "Email Remediation Automation",
      description: "Automated remediation system enabling L1 support to resolve critical incidents autonomously. (Patent Initiative)",
      tags: ["Python", "AWS Lambda", "Step Functions"],
      githubUrl: "https://github.com/Shubh-Pandey99",
      linkedinUrl: "https://www.linkedin.com/in/shubhpandey9/"
    },
    {
      title: "Mission 70 Automation",
      description: "Empowered L1 support teams with self-service automation, increasing autonomy by 70%.",
      tags: ["Ansible", "Terraform", "Shell"],
      githubUrl: "https://github.com/Shubh-Pandey99",
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