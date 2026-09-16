# Elastic IP for NAT Gateway - AZ 1

resource "aws_eip" "nat_eip_1" {
  domain = "vpc"

  tags = {
    Name        = "${var.project_name}-nat-eip-1"
    Project     = var.project_name
    Environment = var.environment
  }
}

# Elastic IP for NAT Gateway - AZ 2

resource "aws_eip" "nat_eip_2" {
  domain = "vpc"

  tags = {
    Name        = "${var.project_name}-nat-eip-2"
    Project     = var.project_name
    Environment = var.environment
  }
}

# NAT Gateway - AZ 1

resource "aws_nat_gateway" "nat_gateway_1" {
  allocation_id = aws_eip.nat_eip_1.id
  subnet_id     = aws_subnet.public_subnet_1.id

  tags = {
    Name        = "${var.project_name}-nat-gateway-1"
    Project     = var.project_name
    Environment = var.environment
  }

  depends_on = [
    aws_internet_gateway.cloudlearn_igw

  ]
}

# NAT Gateway - AZ 2

resource "aws_nat_gateway" "nat_gateway_2" {
  allocation_id = aws_eip.nat_eip_2.id
  subnet_id     = aws_subnet.public_subnet_2.id

  tags = {
    Name        = "${var.project_name}-nat-gateway-2"
    Project     = var.project_name
    Environment = var.environment
  }

  depends_on = [
    aws_internet_gateway.cloudlearn_igw
  ]
}