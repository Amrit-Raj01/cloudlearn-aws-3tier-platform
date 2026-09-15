# Cloudlearn public subnets

resource "aws_subnet" "public_subnet_1" {
  vpc_id                  = aws_vpc.cloudlearn_vpc.id
  cidr_block              = "10.0.1.0/24"
  availability_zone       = "ap-south-1a"
  map_public_ip_on_launch = true

  tags = {
    Name        = "${var.project_name}-public-subnet-1"
    Project     = var.project_name
    Environment = var.environment
    Tier        = "Public"

  }
}

resource "aws_subnet" "public_subnet_2" {
  vpc_id                  = aws_vpc.cloudlearn_vpc.id
  cidr_block              = "10.0.2.0/24"
  availability_zone       = "ap-south-1b"
  map_public_ip_on_launch = true

  tags = {
    Name        = "${var.project_name}-public-subnet-2"
    Project     = var.project_name
    Environment = var.environment
    Tier        = "Public"
  }
}


# Cloudlearn Private Application Subnets

resource "aws_subnet" "private_app_subnet_1" {
  vpc_id            = aws_vpc.cloudlearn_vpc.id
  cidr_block        = "10.0.11.0/24"
  availability_zone = "ap-south-1a"

  tags = {
    Name        = "${var.project_name}-private-app-south-1a"
    Project     = var.project_name
    Environment = var.environment
    Tier        = "Private-App"
  }
}


resource "aws_subnet" "private_app_subnet_2" {
  vpc_id            = aws_vpc.cloudlearn_vpc.id
  cidr_block        = "10.0.12.0/24"
  availability_zone = "ap-south-1b"

  tags = {
    Name        = "${var.project_name}-private-app-south-1"
    Project     = var.project_name
    Environment = var.environment
    Tier        = "Private-App"
  }
}

# Cloudlearn Private Database Subnets

resource "aws_subnet" "private_db_subnet_1" {
  vpc_id            = aws_vpc.cloudlearn_vpc.id
  cidr_block        = "10.0.21.0/24"
  availability_zone = "ap-south-1a"

  tags = {
    Name        = "${var.project_name}-private-db-south-1"
    Project     = var.project_name
    Environment = var.environment
    Tier        = "Private-DB"
  }
}

resource "aws_subnet" "private_db_subnet_2" {
  vpc_id            = aws_vpc.cloudlearn_vpc.id
  cidr_block        = "10.0.22.0/24"
  availability_zone = "ap-south-1b"

  tags = {
    Name        = "${var.project_name}-private-db-subnet-2"
    Project     = var.project_name
    Environment = var.project_name
    Tier        = "Private-DB"
  }
}