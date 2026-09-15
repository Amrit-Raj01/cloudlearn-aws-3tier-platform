output "vpc_id" {
    description = "Id of the Cloudlearn vpc"
    value = aws_vpc.cloudlearn_vpc.id
}

output "vpc_cidr" {
    description = "CIDR block of the Cloudlearn vpc"
    value = "aws_vpc.cloudlearn_vpc.cidr_block"
}