# CloudLearn — Highly Available 3-Tier Online Learning Platform on AWS

CloudLearn is a cloud-focused online learning platform being developed with a **3-tier architecture on AWS**. The project is designed to demonstrate practical cloud engineering concepts including application architecture, AWS networking, infrastructure as code, security, scalability, and high availability.

The primary goal of this project is to build and deploy a production-oriented application while maintaining a strong focus on **AWS cloud infrastructure rather than application development alone**.

---

## 🏗️ Project Architecture

The planned architecture follows a 3-tier model:

```text
                    Users
                      │
                      ▼
              ┌──────────────┐
              │   Frontend   │
              │   Web Tier   │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │   Backend    │
              │ Application  │
              │     Tier     │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │   Database   │
              │     Tier     │
              └──────────────┘

              AWS Infrastructure
        VPC • Subnets • Security Groups
        Load Balancer • EC2 • RDS • IAM
```

The final architecture will be designed to separate the presentation, application, and database layers while improving security, scalability, and availability.

---

## 🚀 Current Progress

### Frontend — Completed Initial Development

The CloudLearn frontend has been developed using **React + Vite**.

Implemented pages and components include:

* Home page
* Courses page
* Course Details page
* Login page
* Registration page
* Dashboard
* Learning page
* Profile page
* Navigation bar
* Footer
* Reusable course cards
* Reusable section headers
* Responsive dark-themed UI

The frontend is being developed as the presentation layer of the future AWS 3-tier architecture.

---

### Backend — Initial API Development

The backend development phase has been started.

Current work includes:

* Backend project structure
* Node.js-based backend setup
* Express.js application structure
* API development foundation
* Backend integration planning with the frontend
* Authentication and database integration planned as part of the next development stages

The backend will act as the application tier between the frontend and database.

---

### Infrastructure as Code — Terraform Initialized

Terraform has been initialized for the project to manage AWS infrastructure as code.

Current status:

* Terraform project initialized
* Infrastructure directory established
* Terraform workflow introduced
* AWS infrastructure provisioning planned through Terraform

The infrastructure layer will progressively include AWS networking, compute, security, load balancing, and database resources.

---

## ☁️ AWS Infrastructure Goals

The project is being designed with a strong AWS focus.

Planned infrastructure includes:

* Amazon VPC
* Public and private subnets
* Internet Gateway
* Route tables
* Security Groups
* Application Load Balancer
* Amazon EC2
* Amazon RDS
* IAM
* Availability Zones
* Auto Scaling
* CloudWatch monitoring
* Secure communication between application tiers

The infrastructure will be provisioned progressively using **Terraform** instead of relying entirely on manual AWS Console configuration.

---

## 🔐 Security Approach

Security is an important part of the architecture.

The project is planned around:

* IAM-based access control
* Least-privilege permissions
* Private subnets for backend/database resources where appropriate
* Security Groups for network-level access control
* Restricted inbound and outbound traffic
* Environment variables for application configuration
* Separation between public-facing and internal resources

Sensitive credentials and environment configuration will not be committed to the repository.

---

## 🛠️ Technology Stack

### Frontend

* React
* Vite
* JavaScript
* HTML
* CSS

### Backend

* Node.js
* Express.js
* REST APIs

### Cloud

* Amazon Web Services (AWS)
* VPC
* EC2
* RDS
* IAM
* Application Load Balancer
* CloudWatch

### Infrastructure as Code

* Terraform

### Development & Version Control

* Git
* GitHub
* VS Code
* Linux

---

## 📁 Project Structure

The project is being organized as a single repository:

```text
cloudlearn-aws-3tier-platform/
│
├── cloudlearn-frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── cloudlearn-backend/
│   ├── src/
│   ├── routes/
│   ├── controllers/
│   └── ...
│
├── infrastructure/
│   └── terraform/
│       ├── main.tf
│       ├── variables.tf
│       ├── outputs.tf
│       └── ...
│
├── docs/
│
├── README.md
└── .gitignore
```

---

## 🎯 Project Objectives

The major objectives of CloudLearn are:

1. Build a functional online learning platform.
2. Implement a clean 3-tier application architecture.
3. Design a secure AWS network using VPC and subnet segmentation.
4. Deploy application components using AWS compute services.
5. Implement a managed database architecture.
6. Introduce load balancing and high availability.
7. Automate AWS infrastructure using Terraform.
8. Practice real-world Git and GitHub workflows.
9. Understand cloud networking and infrastructure design through hands-on implementation.
10. Build a production-oriented AWS project suitable for a cloud engineering portfolio.

---

## 📌 Development Philosophy

CloudLearn is intentionally being developed with **greater emphasis on cloud infrastructure and AWS architecture** rather than focusing only on application development.

The application provides the workload, while AWS infrastructure demonstrates:

* Networking
* Security
* Compute
* Storage
* Database architecture
* Scalability
* Availability
* Infrastructure as Code
* Monitoring

This makes the project a practical demonstration of cloud engineering concepts.

---

## 🔄 Development Workflow

The project follows a Git-based development workflow:

```text
Development
     ↓
Local Testing
     ↓
Git Branch
     ↓
Commit
     ↓
GitHub
     ↓
Infrastructure / Application Deployment
     ↓
AWS
```

The repository is maintained as a single project containing the frontend, backend, and infrastructure components.

---

## 📊 Project Status

### Current Development Status

| Component                | Status                          |
| ------------------------ | ------------------------------- |
| Project Planning         | ✅ Completed                     |
| Frontend Structure       | ✅ Completed                     |
| Frontend UI              | ✅ Initial Development Completed |
| Backend Setup            | ✅ Started                       |
| Backend API              | 🚧 Developing                   |
| Authentication           | 🚧 Developing                   |
| Database Integration     | 🚧 Developing                   |
| Terraform Initialization | ✅ Completed                     |
| AWS VPC                  | 🚧 Developing                   |
| AWS Subnet Architecture  | 🚧 Developing                   |
| EC2 Deployment           | ⏳ Planned                       |
| RDS                      | ⏳ Planned                       |
| Load Balancer            | ⏳ Planned                       |
| High Availability        | ⏳ Planned                       |
| Auto Scaling             | ⏳ Planned                       |
| Monitoring               | ⏳ Planned                       |

---

## 🚧 Developing Phase

**CloudLearn is currently in the developing phase.**

The frontend foundation and initial backend development have been completed, while the application API, authentication, database integration, and AWS infrastructure are actively being developed.

The next major phase is focused on building the **AWS 3-tier infrastructure using Terraform**, including VPC networking, public/private subnet design, security groups, compute resources, database services, load balancing, and high-availability architecture.

The architecture and implementation will continue to evolve as additional AWS components are integrated into the project.

---

## 👨‍💻 Project Focus

**Primary Focus:** Cloud Engineering / AWS Infrastructure

**Secondary Focus:** Backend Application Development and Infrastructure Automation

CloudLearn is being built as a hands-on project to demonstrate practical skills required for **Cloud Engineer, Infrastructure Engineer, SRE, and Cloud Support** roles.

