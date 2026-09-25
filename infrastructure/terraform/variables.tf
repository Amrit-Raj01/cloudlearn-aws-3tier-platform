variable "aws_region" {
  description = "AWS region for Cloudlearn infrastructure"
  type        = string
  default     = "ap-south-1"

}

variable "project_name" {
  description = "project_name used for resource naming"
  type        = string
  default     = "Cloudlearn"


}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "dev"
}

variable "db_name" {
  description = "Cloudlearn RDS Master name"
  type        = string
  default     = "cloudlearn"
}

variable "db_username" {
  description = "Cloudlearn RDS Master username"
  type        = string
  default     = "cloudlearn_admin"
}

variable "db_password" {
  description = "Cloudlearn RDS Master Password"
  type        = string
  sensitive   = true

}