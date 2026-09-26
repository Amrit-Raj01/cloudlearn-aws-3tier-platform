# ☁️ CloudLearn — Highly Available 3-Tier Online Learning Platform on AWS

CloudLearn is a cloud-focused online learning platform designed to demonstrate **AWS infrastructure, networking, application deployment, database integration, load balancing, Infrastructure as Code, and production-oriented cloud architecture**.

The project is being developed using a **3-tier architecture** with a React frontend, Node.js/Express backend, and MySQL database hosted on Amazon RDS.

> 🚧 **Project Status:** Active Development
> Current focus: AWS infrastructure, backend deployment, RDS integration, Application Load Balancer, monitoring, frontend cloud deployment, and CI/CD.

---

## 🏗️ Architecture

```text
                         Users
                           │
                           ▼
                ┌─────────────────────┐
                │   React + Vite      │
                │     Frontend        │
                └──────────┬──────────┘
                           │
                           │ HTTP/API
                           ▼
                ┌─────────────────────┐
                │ Application Load    │
                │      Balancer       │
                │       (ALB)         │
                └──────────┬──────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │   EC2 Backend       │
                │ Node.js + Express   │
                │       + PM2         │
                └──────────┬──────────┘
                           │
                           │ MySQL
                           ▼
                ┌─────────────────────┐
                │    Amazon RDS       │
                │       MySQL         │
                └─────────────────────┘


```

The infrastructure is provisioned and managed using **Terraform**.

---

# 🚀 Current Project Status

| Component                   | Status                                |
| --------------------------- | ------------------------------------- |
| React + Vite Frontend       | ✅ Developed locally                   |
| Node.js + Express Backend   | ✅ Developed                           |
| REST API                    | ✅ Working                             |
| AWS VPC                     | ✅ Configured                          |
| Public / Private Subnets    | ✅ Configured                          |
| Internet Gateway            | ✅ Configured                          |
| NAT Gateway / EIP           | ✅ Configured                          |
| EC2 Backend Server          | ✅ Deployed                            |
| IAM Role / Instance Profile | ✅ Configured                          |
| AWS Systems Manager         | ✅ Configured                          |
| Backend Process Management  | ✅ PM2                                 |
| Amazon RDS MySQL            | ✅ Provisioned                         |
| RDS Private Networking      | ✅ Configured                          |
| Application Load Balancer   | ✅ Configured                          |
| ALB → Backend Routing       | ✅ Verified                            |
| Terraform Infrastructure    | ✅ Implemented                         |
| CloudWatch Monitoring       | 🔄 Planned / Next Phase               |
| S3 Frontend Hosting         | 🔄 Planned                            |
| CloudFront CDN              | ⏳ Pending |
| CI/CD with GitHub Actions   | 🔄 Planned                            |
| Production Hardening        | 🔄 Planned                            |

---

# 🛠️ Technology Stack

### Frontend

* React
* Vite
* JavaScript
* HTML5
* CSS3

### Backend

* Node.js
* Express.js
* REST APIs
* PM2

### Database

* Amazon RDS
* MySQL

### AWS

* Amazon VPC
* Amazon EC2
* Amazon RDS
* Application Load Balancer
* IAM
* AWS Systems Manager
* Internet Gateway
* NAT Gateway
* Elastic IP
* Amazon S3 — planned for frontend hosting
* Amazon CloudFront — planned
* Amazon CloudWatch — planned

### Infrastructure & DevOps

* Terraform
* Git
* GitHub
* GitHub Actions — planned
* Linux
* Bash
* AWS CLI

---

# 📁 Project Structure

```text
Cloud_learn_project/
│
├── cloudlearn-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
│
├── cloudlearn-backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── server.js
│   ├── package.json
│   └── ...
│
├── infrastructure/
│   └── terraform/
│       ├── provider.tf
│       ├── variables.tf
│       ├── vpc.tf
│       ├── security.tf
│       ├── ec2.tf
│       ├── alb.tf
│       ├── rds.tf
│       ├── outputs.tf
│       └── ...
│
├── docs/
│
├── .gitignore
└── README.md
```

The project uses **one Git repository at the project root**, containing frontend, backend, infrastructure, and documentation.

---

# ☁️ AWS Infrastructure

## VPC

The application infrastructure is deployed inside a custom VPC.

```text
VPC
10.0.0.0/16
│
├── Public Subnets
│   ├── Application Load Balancer
│   └── NAT Gateway
│
└── Private Subnets
    ├── Backend EC2
    └── RDS MySQL
```

The VPC is configured with:

* Custom CIDR block
* DNS support
* DNS hostnames
* Public subnets
* Private subnets
* Route tables
* Internet Gateway
* NAT Gateway
* Elastic IP
* Security Groups

---

# 🖥️ Backend — Amazon EC2

The Node.js backend is deployed on an Amazon EC2 instance.

### Backend stack

```text
Node.js
   │
Express.js
   │
REST API
   │
PM2
   │
Amazon EC2
```

The backend application is managed using **PM2** for process management.

Example production process:

```bash
pm2 start
pm2 save
```

AWS Systems Manager is also configured for server administration, reducing the need to depend on direct SSH access for normal management.

---

# ⚖️ Application Load Balancer

An **Application Load Balancer (ALB)** has been implemented between the application entry point and the backend.

```text
Client
  │
  ▼
ALB
  │
  ▼
Target Group
  │
  ▼
EC2 Backend
```

Configured components include:

* Application Load Balancer
* ALB Security Group
* Target Group
* Target Group Attachment
* HTTP Listener
* Backend EC2 target

ALB-to-backend routing has been tested and verified using API requests.

---

# 🗄️ Amazon RDS — MySQL

The project uses **Amazon RDS for MySQL** as the relational database layer.

Current architecture:

```text
EC2 Backend
     │
     │ MySQL
     ▼
Amazon RDS
     │
Private Subnet
```

RDS configuration includes:

* MySQL
* `db.t3.micro`
* 20 GB gp3 storage
* Private networking
* Dedicated RDS security group
* Database subnet group
* Application-specific database configuration

The database is intentionally kept **non-public**, with access controlled through security groups.

---

# 🔐 Security

Security is an important part of the project architecture.

Implemented security controls include:

* Private backend subnet
* Private RDS deployment
* Security Groups
* Separate application and database security groups
* IAM instance role
* AWS Systems Manager access
* Restricted database access
* Environment variables for sensitive application configuration
* Terraform variable files excluded from Git tracking

### Sensitive files

Files containing credentials or environment-specific secrets should not be committed to GitHub.

Example:

```gitignore
*.tfvars
*.tfvars.json
.env
.terraform/
*.tfstate
*.tfstate.*
```

> **Never commit AWS credentials, database passwords, API keys, or other secrets to the repository.**

---

# 🏗️ Infrastructure as Code — Terraform

AWS infrastructure is managed using Terraform.

Current Terraform components include:

```text
provider.tf
variables.tf
vpc.tf
security.tf
ec2.tf
alb.tf
rds.tf
outputs.tf
```

Terraform is used for:

* VPC provisioning
* Subnets
* Route tables
* Internet Gateway
* NAT Gateway
* Elastic IP
* Security Groups
* EC2
* IAM resources
* Application Load Balancer
* Target Groups
* RDS
* Database subnet configuration

Typical workflow:

```bash
terraform init
terraform fmt
terraform validate
terraform plan
terraform apply
```

Infrastructure can also be destroyed when the development environment is not required in order to reduce unnecessary AWS costs.

---

# 🌐 Frontend

The frontend is built using:

* React
* Vite
* JavaScript
* CSS

Current frontend pages/components include:

* Home
* Courses
* Course Details
* Login
* Register
* Dashboard
* Learning
* Profile
* Navbar
* Footer
* Course Cards

The frontend currently runs successfully in the local development environment.

The planned production architecture is:

```text
React/Vite
     │
     ▼
Amazon S3
     │
     ▼
CloudFront
     │
     ▼
Users
```

# 📊 Monitoring & Observability

CloudWatch is part of the planned production monitoring layer.

Planned monitoring includes:

* EC2 metrics
* Application health
* ALB metrics
* RDS metrics
* Logs
* CloudWatch alarms
* Resource monitoring

```text
AWS Resources
      │
      ▼
CloudWatch
      │
      ├── Metrics
      ├── Logs
      └── Alarms
```

---

# 🔄 CI/CD — Planned

The next development stage includes implementing CI/CD using GitHub Actions.

Planned workflow:

```text
Developer
    │
    ▼
Git Push
    │
    ▼
GitHub
    │
    ▼
GitHub Actions
    │
    ├── Build
    ├── Test
    └── Deploy
           │
           ▼
      AWS Infrastructure
```

The goal is to automate application build and deployment rather than manually deploying every change.

---

# 🔀 Git Workflow

The project follows a single-repository workflow:

```text
Cloud_learn_project/
        │
        ├── frontend
        ├── backend
        ├── infrastructure
        └── docs
```

All components are maintained in the same Git repository.


For larger changes, feature branches can be used:

```text
main
 │
 ├── feature/frontend
 ├── feature/backend
 └── feature/infrastructure
```

---

# 💰 AWS Cost Management

Because this is a AWS development project, AWS cost management is considered during development.

Resources such as EC2 and RDS can be stopped when they are not required for active development.

Infrastructure can also be destroyed using Terraform when an environment is no longer needed.

Example:

```bash
terraform destroy
```

> Before destroying infrastructure, verify that any required database data or configuration has been backed up.

---

# 🎯 Project Objectives

CloudLearn is being developed to demonstrate practical understanding of:

* AWS cloud infrastructure
* VPC architecture
* Public/private subnet design
* Linux server administration
* EC2 deployment
* IAM
* Security Groups
* Application Load Balancing
* RDS database architecture
* Infrastructure as Code
* Terraform
* Application deployment
* Cloud networking
* Monitoring and observability
* CI/CD automation
* Cloud cost management

---

# 🧠 What This Project Demonstrates

This project goes beyond simply deploying a web application.

It focuses on understanding **how the infrastructure around an application is designed and operated**.

Key areas demonstrated:

```text
Networking
     │
     ▼
VPC + Subnets + Routing
     │
     ▼
Security
     │
     ▼
IAM + Security Groups
     │
     ▼
Compute
     │
     ▼
EC2 + PM2
     │
     ▼
Load Balancing
     │
     ▼
ALB
     │
     ▼
Database
     │
     ▼
RDS MySQL
     │
     ▼
Automation
     │
     ▼
Terraform + CI/CD
     │
     ▼
Monitoring
     │
     ▼
CloudWatch
```

---

# 📌 Development Roadmap

### Phase 1 — Application Foundation

* [x] React frontend
* [x] Vite setup
* [x] Backend foundation
* [x] Express API
* [x] Project structure

### Phase 2 — AWS Networking

* [x] VPC
* [x] Public subnets
* [x] Private subnets
* [x] Route tables
* [x] Internet Gateway
* [x] NAT Gateway
* [x] Elastic IP

### Phase 3 — Backend Deployment

* [x] EC2
* [x] Linux environment
* [x] Node.js
* [x] PM2
* [x] AWS Systems Manager
* [x] Backend deployment

### Phase 4 — Database

* [x] Amazon RDS MySQL
* [x] RDS subnet group
* [x] RDS security group
* [x] Private database architecture
* [x] Backend database integration

### Phase 5 — Load Balancing

* [x] Application Load Balancer
* [x] Target Group
* [x] Listener
* [x] EC2 target attachment
* [x] ALB → backend API verification

### Phase 6 — Frontend Cloud Deployment

* [ ] S3 frontend hosting
* [ ] CloudFront distribution
* [ ] CDN configuration
* [ ] Production frontend URL

> CloudFront creation is currently blocked by an AWS account verification requirement.

### Phase 7 — Monitoring

* [ ] CloudWatch metrics
* [ ] CloudWatch logs
* [ ] Alarms
* [ ] Application monitoring

### Phase 8 — CI/CD

* [ ] GitHub Actions
* [ ] Automated frontend build
* [ ] Automated backend deployment
* [ ] Infrastructure workflow
* [ ] Deployment automation

### Phase 9 — Production Hardening

* [ ] HTTPS
* [ ] Route 53
* [ ] Better secret management
* [ ] Additional security hardening
* [ ] Backup strategy
* [ ] Cost optimization
* [ ] Final architecture documentation

---

# 📈 Current Architecture Maturity

The project has progressed from a local full-stack application toward an AWS-based infrastructure architecture:

```text
Local Application
       │
       ▼
AWS Networking
       │
       ▼
EC2 Backend
       │
       ▼
RDS Database
       │
       ▼
Application Load Balancer
       │
       ▼
Monitoring + CDN + CI/CD
       │
       ▼
Production-Oriented Cloud Platform
```

The remaining work is primarily focused on **observability, frontend cloud delivery, automation, security hardening, and production deployment workflows**.

---

# 📂 Repository

**GitHub:**
https://github.com/Amrit-Raj01/cloudlearn-aws-3tier-platform

---

# 👨‍💻 Developer

**Amrit Raj**

B.Tech — Electronics & Communication Engineering (AI/ML)
Galgotias University

Interested in:

* Cloud Engineering
* AWS Infrastructure
* SRE
* Infrastructure Engineering
* Cloud Support
* DevOps
* Linux & System Administration

---

## ⭐ Project Status

**CloudLearn is an actively developing AWS cloud infrastructure project.**

The core AWS networking, compute, database, load-balancing, and Terraform layers are currently implemented. The next stages focus on **CloudWatch monitoring, S3/CloudFront frontend deployment, CI/CD automation, and production hardening**.
