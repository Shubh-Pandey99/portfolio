// Mock data for Shubh Pandey's Portfolio - Updated Design
export const portfolioData = {
  hero: {
    name: "Shubh Pandey",
    title: "DevOps & Site Reliability Engineer",
    subheading: "Cloud • Automation • Reliability • Performance",
    resumeUrl: "/Shubh_Resume.pdf",
    email: "shubhpandet@gmail.com",
    headshot: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NTc0MDY2OTR8MA&ixlib=rb-4.1.0&q=85"
  },
  
  about: {
    summary: "DevOps/Site Reliability Engineer with 5 years of experience designing, automating, and operating large-scale, cloud-native systems. Skilled in AWS/GCP/Azure, observability, CI/CD, Terraform, Kubernetes, and incident management. Proven track record of improving availability to 99.9%, reducing downtime by 28%, and cutting infra costs by 20% while ensuring compliance and security in production environments. Adept at managing full-stack applications and improving operational workflows to reduce downtime, improve efficiency, and support business-critical systems."
  },

  skills: {
    "Cloud Platforms": ["AWS", "GCP", "Azure"],
    "Infrastructure & Automation": ["Terraform", "Ansible", "GitLab CI/CD", "Jenkins", "Docker", "Kubernetes"],
    "Programming & Scripting": ["Python", "Bash", "TypeScript", "Vue.js", "FastAPI", "REST APIs", "SQL"],
    "Monitoring & Incident Management": ["CloudWatch", "PagerDuty (Events v2)", "ServiceNow", "Datadog", "Prometheus"],
    "Tools & Collaboration": ["GitHub", "GitLab", "Confluence", "JIRA"],
    "Operating Systems": ["Windows", "MacOS", "Linux (Ubuntu/CentOS)"]
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
        "Centralized and tuned observability with CloudWatch, OpenSearch/ELK, and Grafana, building unified dashboards for metrics, logs, and traces; integrated EventBridge + Step Functions + PagerDuty.",
        "Containerized IBM Sterling Connect: Direct with Docker, deployed on production EKS and ECS Fargate, enabling secure, scalable file transfers and cutting infra costs by 20%.",
        "Provisioned complete infrastructure using Terraform, deploying AWS resources including Lambda, API Gateway, Step Functions, Cognito, DynamoDB, Transfer Family etc.",
        "Designed backend services using FastAPI on AWS Lambda in Python, ensuring scalable and serverless architecture.",
        "Managed data and user metadata using DynamoDB with encryption via AWS KMS, ensuring adherence to internal policies and external regulations, leading to zero data breaches in 2024."
      ]
    },
    {
      title: "Cloud Operations Engineer",
      company: "Thales Digital Identity & Security",
      period: "Aug 2021 – Dec 2023",
      location: "Noida, India",
      responsibilities: [
        "Managed AWS services (EC2, RDS, S3, VPC) specializing in fault tolerance and auto-scaling, reducing cloud downtime by 28%.",
        "Configured Datadog and Prometheus monitoring pipelines, defining SLIs and automating alerts/log rotation, improving observability by 15%.",
        "Optimized cloud infrastructure costs with autoscaling, right-sizing, and serverless adoption while maintaining SLAs.",
        "Created Ansible playbooks for system configuration and dependency management, cutting deployment time by 40% across 10+ servers.",
        "Participated in on-call rotations, handling escalations, network diagnostics, and RCAs for production issues."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Thales Digital Identity & Security",
      period: "Feb 2021 – Aug 2021",
      location: "Noida, India",
      responsibilities: [
        "Engineered a secure Apple backend payload encryption system utilizing the Java Cryptography Architecture (JCA), enhancing transaction security and minimizing data breaches for Visa transactions.",
        "Executed 50+ functional test cases for the platform's back testing framework, enhancing test coverage by 25% and identifying critical bugs pre-deployment."
      ]
    }
  ],

  education: [
    {
      degree: "B.Tech Computer Science",
      institution: "Jaypee Institute of Information Technology",
      cgpa: "8.0",
      period: "2017–2021"
    },
    {
      degree: "Senior Secondary",
      institution: "Puranchandra Vidyaniketan",
      period: "2016"
    }
  ],

  certifications: [
    {
      name: "AWS Certified SysOps Administrator – Associate",
      issuer: "Amazon Web Services",
      validity: "July 2025 – July 2028",
      badge: "https://images.credly.com/size/340x340/images/63e2caed-f6ef-4d53-8d6b-73d9a2c86b29/aws-sysops-admin-associate.png",
      verifyUrl: "#"
    },
    {
      name: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      validity: "July 2025 – July 2028",
      badge: "https://images.credly.com/size/340x340/images/0e3a4ba1-9388-4c9c-b997-27cce5f0b4b9/aws-developer-associate.png",
      verifyUrl: "#"
    },
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      validity: "Sep 2023 – Sep 2026",
      badge: "https://images.credly.com/size/340x340/images/0c68a22f-9a59-4e7d-9d1f-ff6c6a6c2c5a/aws-solutions-architect-associate.png",
      verifyUrl: "#"
    },
    {
      name: "GCP Associate Cloud Engineer",
      issuer: "Google Cloud",
      validity: "Jun 2023 – Jun 2026",
      badge: "https://images.credly.com/size/340x340/images/2f3d0c75-0b8f-4b7c-9f2e-fc476d4c2b5b/google-cloud-associate-cloud-engineer.png",
      verifyUrl: "#"
    },
    {
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      validity: "Dec 2020",
      badge: "https://images.credly.com/size/340x340/images/6331c604-0e02-4bdb-bf3d-0903e1b21f7e/azure-fundamentals.png",
      verifyUrl: "#"
    }
  ],

  projects: [
    {
      title: "Email Remediation Automation (Patent Initiative)",
      description: "Deployed automated email remediation system, enabling L1 support to resolve top 3 incident causes without escalation.",
      linkedinUrl: "https://www.linkedin.com/in/shubhpandey9/"
    },
    {
      title: "Mission 70 (2022–Present)",
      description: "Empowered L1 support teams with automation + documentation, increasing autonomy by 70%.",
      linkedinUrl: "https://www.linkedin.com/in/shubhpandey9/"
    },
    {
      title: "New Joiner Onboarding Kit (2023–Present)",
      description: "Built centralized knowledge base with Confluence, reducing onboarding time by 40% for 25+ employees.",
      linkedinUrl: "https://www.linkedin.com/in/shubhpandey9/"
    }
  ],

  blogs: [
    {
      title: "Mastering AWS Monitoring: A Comprehensive Guide",
      summary: "A comprehensive guide to AWS monitoring services, covering CloudWatch, EventBridge, and best practices for enterprise-scale observability.",
      readTime: "12 min read",
      year: "2024",
      url: "https://medium.com/@shubhpandet",
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop"
    },
    {
      title: "Mastering Databases on AWS: DynamoDB, RDS, Aurora, ElastiCache",
      summary: "Deep dive into AWS database services, comparing options and providing best practices for scalable data solutions.",
      readTime: "15 min read",
      year: "2024",
      url: "https://medium.com/@shubhpandet",
      thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=200&fit=crop"
    },
    {
      title: "Mastering Amazon S3 & Athena: Serverless Analytics",
      summary: "Explore S3 storage patterns and Athena for serverless analytics, including cost optimization and performance tuning.",
      readTime: "18 min read",
      year: "2024",
      url: "https://medium.com/@shubhpandet",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
    }
  ],

  contact: {
    email: "shubhpandet@gmail.com",
    phone: "+91-9897733982",
    linkedin: "https://linkedin.com/in/shubhpandey9"
  }
};