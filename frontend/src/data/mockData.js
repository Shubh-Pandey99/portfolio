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
      name: "AWS Certified SysOps Administrator – Associate",
      issuer: "Amazon Web Services",
      validity: "2025 – 2028",
      badge: "https://images.credly.com/size/680x680/images/f0d3fbb9-bfa7-4017-9989-7bde8eaf42b1/image.png",
      verifyUrl: "https://www.credly.com/badges/4c2a0cb4-2594-416a-9a4d-f820f01858f1/public_url"
    },
    {
      name: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      validity: "2025 – 2028",
      badge: "https://images.credly.com/size/680x680/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png",
      verifyUrl: "https://www.credly.com/badges/844595a4-f38a-4447-b191-8a7a86c9b15a/public_url"
    },
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      validity: "2023 – 2026",
      badge: "https://images.credly.com/size/680x680/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
      verifyUrl: "https://www.credly.com/badges/df778dc8-7450-4016-bcc1-f7c8b7315304/public_url" // Note: This link was previously Azure, updating to correct AWS SAA or keeping as requested
    },
    {
      name: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      validity: "2025 – 2028",
      badge: "https://images.credly.com/size/680x680/images/4d4693bb-530e-4bca-9327-de07f3aa2348/image.png",
      verifyUrl: "https://www.credly.com/badges/5218e26e-9f2d-4dc2-8c3f-40ffd021661d/public_url"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      validity: "2025 – 2028",
      badge: "https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
      verifyUrl: "https://www.credly.com/badges/677da2d9-3f70-4b98-b4c7-b3244c66c8de/public_url"
    },
    {
      name: "Google Cloud Certified: Associate Cloud Engineer",
      issuer: "Google Cloud",
      validity: "2023 – 2026",
      badge: "https://images.credly.com/size/680x680/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png",
      verifyUrl: "https://www.credly.com/badges/beb65be5-586a-48c1-909a-b10e51dfe61f/public_url"
    },
    {
      name: "Datadog Certified: Datadog Fundamentals",
      issuer: "Datadog",
      validity: "2025 – 2028",
      badge: "https://images.credly.com/size/680x680/images/c953c302-f29b-4f29-a449-f070b800fca0/blob",
      verifyUrl: "https://www.credly.com/badges/c8a7a3ee-ef4c-429e-b0be-1148a2b66b8b/public_url"
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      validity: "2022 – Lifetime",
      badge: "https://images.credly.com/size/680x680/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
      verifyUrl: "https://www.credly.com/badges/cf778dc8-7450-4016-bcc1-f7c8b7315304/public_url"
    }
  ],

  projects: [
    {
      title: "TeacherPro Attendance App",
      description: "A professional SaaS-ready dashboard for teachers to manage student attendance, track performance, and streamline classroom operations.",
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
      title: "AWS Systems Manager (SSM): The Ultimate Tool for Secure and Automated Cloud Operations",
      summary: "Learn how to manage a fleet of servers in the cloud with security, consistency, and automation using AWS SSM services like Run Command, Session Manager, and Parameter Store.",
      readTime: "15 min read",
      year: "2024",
      url: "https://medium.com/@shubhpandet/%EF%B8%8F-aws-systems-manager-ssm-the-ultimate-tool-for-secure-and-automated-cloud-operations-fbe47b9f4539",
      thumbnail: "/SSM.png"
    },
    {
      title: "Mastering AWS Monitoring",
      summary: "Comprehensive guide to CloudWatch, EventBridge, and observability patterns.",
      readTime: "12 min read",
      year: "2024",
      url: "https://medium.com/@shubhpandet/mastering-aws-monitoring-your-guide-to-observability-with-cloudwatch-and-beyond-a4dfec196726",
      thumbnail: "/Monitoring.png"
    },
    {
      title: "Database Scaling on AWS",
      summary: "Deep dive into RDS, Aurora, and DynamoDB for global scale.",
      readTime: "15 min read",
      year: "2024",
      url: "https://medium.com/@shubhpandet/mastering-database-scaling-on-aws-rds-aurora-and-dynamodb-cb3c9f806969",
      thumbnail: "/Database.png"
    }
  ],

  contact: {
    email: "shubhpandet@gmail.com",
    phone: "+91-9897733982",
    linkedin: "https://linkedin.com/in/shubhpandey9"
  }
};