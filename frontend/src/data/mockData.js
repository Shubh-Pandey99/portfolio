// Mock data for Shubh Pandey's Portfolio
export const portfolioData = {
  hero: {
    name: "Shubh Pandey",
    title: "DevOps & Site Reliability Engineer",
    subheading: "Cloud, Automation & Reliability Specialist",
    resumeUrl: "/Shubh_Resume.pdf",
    email: "shubhpandet@gmail.com",
    stats: [
      { label: "Years Experience", value: "5+" },
      { label: "Projects", value: "25+" },
      { label: "System Uptime", value: "99.9%" },
      { label: "Infra Cost Savings", value: "20%" }
    ]
  },
  
  about: {
    summary: "DevOps/Site Reliability Engineer with 5 years of experience designing, automating, and operating large-scale, cloud-native systems. Skilled in AWS/GCP/Azure, observability, CI/CD, Terraform, Kubernetes, and incident management. Proven track record of improving availability to 99.9%, reducing downtime by 28%, and cutting infra costs by 20% while ensuring compliance and security in production environments. Adept at managing full-stack applications and improving operational workflows to reduce downtime, improve efficiency, and support business-critical systems."
  },

  skills: {
    "Cloud Platforms": ["AWS", "GCP", "Azure"],
    "Infra & Automation": ["Terraform", "Ansible", "GitLab CI/CD", "Jenkins", "Docker", "Kubernetes"],
    "Programming & Scripting": ["Python", "Bash", "TypeScript", "Vue.js", "FastAPI", "SQL", "REST APIs"],
    "Monitoring & Incident Management": ["CloudWatch", "PagerDuty", "ServiceNow", "Datadog", "Prometheus"],
    "Collaboration Tools": ["GitHub", "GitLab", "Confluence", "JIRA"],
    "Operating Systems": ["Windows", "macOS", "Linux (Ubuntu/CentOS)"]
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
        "Provisioned the complete infrastructure using Terraform, deploying AWS resources including Lambda, API Gateway, Step Functions, Cognito, DynamoDB, Transfer Family etc.",
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
        "Managed AWS services (EC2, RDS, S3, VPC) specializing on fault tolerance and auto-scaling, reducing cloud downtime by 28%.",
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
      validity: "Jul 2025 – Jul 2028",
      badge: "https://images.credly.com/size/340x340/images/63e2caed-f6ef-4d53-8d6b-73d9a2c86b29/aws-sysops-admin-associate.png",
      verifyUrl: "https://www.credly.com/badges/4c2a0cb4-2594-416a-9a4d-f820f01858f1/public_url"
    },
    {
      name: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      validity: "Jul 2025 – Jul 2028",
      badge: "https://images.credly.com/size/340x340/images/0e3a4ba1-9388-4c9c-b997-27cce5f0b4b9/aws-developer-associate.png",
      verifyUrl: "https://www.credly.com/badges/844595a4-f38a-4447-b191-8a7a86c9b15a/public_url"
    },
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      validity: "Sep 2023 – Sep 2026",
      badge: "https://images.credly.com/size/340x340/images/0c68a22f-9a59-4e7d-9d1f-ff6c6a6c2c5a/aws-solutions-architect-associate.png",
      verifyUrl: "https://www.credly.com/badges/cf778dc8-7450-4016-bcc1-f7c8b7315304/public_url"
    },
    {
      name: "GCP Associate Cloud Engineer",
      issuer: "Google Cloud",
      validity: "Jun 2023 – Jun 2026",
      badge: "https://images.credly.com/size/340x340/images/2f3d0c75-0b8f-4b7c-9f2e-fc476d4c2b5b/google-cloud-associate-cloud-engineer.png",
      verifyUrl: "https://www.credly.com/badges/beb65be5-586a-48c1-909a-b10e51dfe61f/public_url"
    },
    {
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      validity: "Earned: Dec 2020",
      badge: "https://images.credly.com/size/340x340/images/6331c604-0e02-4bdb-bf3d-0903e1b21f7e/azure-fundamentals.png",
      verifyUrl: "https://www.credly.com/badges/cf778dc8-7450-4016-bcc1-f7c8b7315304/public_url"
    }
  ],

  projects: [
    {
      title: "Email Remediation Automation (Patent Initiative)",
      description: "Deployed an automated email remediation system, resulting in L1 support teams resolving the three biggest causes of email incidents without escalation.",
      techStack: ["Python", "AWS Lambda", "SES", "EventBridge", "Automation"],
      linkedinUrl: "https://www.linkedin.com/in/shubhpandey9/details/projects/"
    },
    {
      title: "Mission 70 (2022–Present)",
      description: "Empowered L1 support teams by automating tasks and documentation, increasing autonomy by 70% and reducing L2 dependency.",
      techStack: ["Automation", "Documentation", "Process Improvement", "Knowledge Management"],
      linkedinUrl: "https://www.linkedin.com/in/shubhpandey9/details/projects/"
    },
    {
      title: "New Joiner Onboarding Kit (2023–Present)",
      description: "Orchestrated a centralized knowledge base using Confluence, reducing new hire onboarding time by 40% and improving cross-team knowledge sharing for 25+ employees.",
      techStack: ["Confluence", "Documentation", "Process Automation", "Knowledge Base"],
      linkedinUrl: "https://www.linkedin.com/in/shubhpandey9/details/projects/"
    }
  ],

  blogs: [
    {
      title: "Mastering AWS Monitoring: A Comprehensive Guide to CloudWatch, EventBridge, CloudTrail & Config",
      url: "https://medium.com/@shubhpandet/mastering-aws-monitoring-a-comprehensive-guide-to-cloudwatch-eventbridge-cloudtrail-config-ae5ddb31f1c5",
      excerpt: "A deep dive into AWS monitoring services, covering CloudWatch metrics, EventBridge patterns, CloudTrail logging, and Config compliance monitoring.",
      readTime: "12 min read",
      date: "2024"
    },
    {
      title: "Mastering Databases on AWS: DynamoDB, RDS, Aurora, ElastiCache – Deep Dive",
      url: "https://medium.com/@shubhpandet/%EF%B8%8F-mastering-databases-on-aws-dynamodb-rds-aurora-elasticache-deep-dive-d9db27f2ff47",
      excerpt: "Comprehensive guide to AWS database services, comparing NoSQL and relational options, performance optimization, and cost management strategies.",
      readTime: "15 min read",
      date: "2024"
    },
    {
      title: "Mastering Amazon S3 & Athena: Deep Dive into Storage, Security & Serverless Analytics",
      url: "https://medium.com/@shubhpandet/%EF%B8%8F-mastering-amazon-s3-athena-deep-dive-into-storage-security-and-serverless-analytics-38e64a44019d",
      excerpt: "Explore S3 storage classes, security features, lifecycle policies, and serverless analytics with Athena for big data processing.",
      readTime: "18 min read",
      date: "2024"
    }
  ],

  contact: {
    email: "shubhpandet@gmail.com",
    phone: "+91-9897733982",
    linkedin: "https://www.linkedin.com/in/shubhpandey9"
  }
};