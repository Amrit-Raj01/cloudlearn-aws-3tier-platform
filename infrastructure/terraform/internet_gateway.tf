resource "aws_internet_gateway" "cloudlearn_igw" {
  vpc_id = aws_vpc.cloudlearn_vpc.id

  tags = {
    Name        = "${var.project_name}-igw"
    Project     = var.project_name
    Environment = var.environment

  }
}