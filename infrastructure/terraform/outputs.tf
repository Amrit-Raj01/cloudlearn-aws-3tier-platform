output "vpc_id" {
  description = "Id of the Cloudlearn vpc"
  value       = aws_vpc.cloudlearn_vpc.id
}

output "vpc_cidr" {
  description = "CIDR block of the Cloudlearn vpc"
  value       = aws_vpc.cloudlearn_vpc.cidr_block
}

output "public_subnets_ids" {
  description = "IDs of Cloudlearn Public Subnet"
  value = [
    aws_subnet.public_subnet_1.id,
    aws_subnet.public_subnet_2.id
  ]
}

output "private_app_subnets_ids" {
  description = "IDs of Cloudlearn Private Application Subnet"
  value = [
    aws_subnet.private_app_subnet_1.id,
    aws_subnet.private_app_subnet_2.id
  ]
}

output "private_db_subnets_ids" {
  description = "IDs of Cloudlearn Private DB Subnet"
  value = [
    aws_subnet.private_db_subnet_1.id,
    aws_subnet.private_db_subnet_2.id
  ]
}

output "internet_gateway_id" {
  description = "ID of the cloudlearn Internet Gateway"
  value       = aws_internet_gateway.cloudlearn_igw.id

}

output "nat_gateway_ids" {
  description = "IDs of Cloudlearn NAT Gateways"
  value = [
    aws_nat_gateway.nat_gateway_1.id,
    aws_nat_gateway.nat_gateway_2.id
  ]
}

output "private_route_table_ids" {
  description = "IDs of Cloudlearn Private Routes Tables"
  value = [
    aws_route_table.private_route_table_1.id,
    aws_route_table.private_route_table_2.id

  ]
}

output "alb_security_group_id" {
  description = "Security Group ID for the CloudLearn ALB"
  value       = aws_security_group.alb_sg.id
}

output "app_security_group_id" {
  description = "Security Group ID for CloudLearn application servers"
  value       = aws_security_group.app_sg.id
}

output "db_security_group_id" {
  description = "Security Group ID for the CloudLearn database"
  value       = aws_security_group.db_sg.id
}

output "backend_instance_id" {
  description = "ID of the CloudLearn backend EC2 instance"
  value       = aws_instance.cloudlearn_backend.id
}

output "backend_private_ip" {
  description = "Private IP address of the CloudLearn backend EC2 instance"
  value       = aws_instance.cloudlearn_backend.private_ip
}