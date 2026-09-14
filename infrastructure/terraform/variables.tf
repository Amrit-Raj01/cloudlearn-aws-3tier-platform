variable "aws_region" {
    description = "AWS region for Cloudlearn infrastructure"
    type = string
    default = "ap-south-1"
    
    }

variable "project_name" {
    description = "project_name used for resource naming"
    type = string
    default = "Cloudlearn"


}

variable "environment" {
    description = "Deployment environment"
    type = string
    default = "dev"
}