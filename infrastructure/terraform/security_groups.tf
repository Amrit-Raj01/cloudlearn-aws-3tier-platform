# ==========================================
# CloudLearn ALB Security Group
# ==========================================

resource "aws_security_group" "alb_sg" {
  name        = "${var.project_name}-alb-sg"
  description = "Security group for CloudLearn Application Load Balancer"
  vpc_id      = aws_vpc.cloudlearn_vpc.id

  # HTTP
  ingress {
    description = "Allow HTTP traffic from the internet"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # HTTPS
  ingress {
    description = "Allow HTTPS traffic from the internet"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Outbound traffic
  egress {
    description = "Allow outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name        = "${var.project_name}-alb-sg"
    Project     = var.project_name
    Environment = var.environment
    Tier        = "Public"
  }
}


# ==========================================
# CloudLearn Application Security Group
# ==========================================

resource "aws_security_group" "app_sg" {
  name        = "${var.project_name}-app-sg"
  description = "Security group for CloudLearn application servers"
  vpc_id      = aws_vpc.cloudlearn_vpc.id

  # Backend application
  ingress {
    description     = "Allow backend traffic from ALB"
    from_port       = 5000
    to_port         = 5000
    protocol        = "tcp"
    security_groups = [aws_security_group.alb_sg.id]
  }

  # SSH
  #
  # We will tighten this later by using a controlled
  # administration method instead of allowing SSH publicly.
  ingress {
    description = "SSH access for administration"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Outbound traffic
  egress {
    description = "Allow outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name        = "${var.project_name}-app-sg"
    Project     = var.project_name
    Environment = var.environment
    Tier        = "Private-App"
  }
}


# ==========================================
# CloudLearn Database Security Group
# ==========================================

resource "aws_security_group" "db_sg" {
  name        = "${var.project_name}-db-sg"
  description = "Security group for CloudLearn database"
  vpc_id      = aws_vpc.cloudlearn_vpc.id

  # MySQL
  ingress {
    description     = "Allow MySQL traffic from application servers"
    from_port       = 3306
    to_port         = 3306
    protocol        = "tcp"
    security_groups = [aws_security_group.app_sg.id]
  }

  # Outbound traffic
  egress {
    description = "Allow outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name        = "${var.project_name}-db-sg"
    Project     = var.project_name
    Environment = var.environment
    Tier        = "Private-DB"
  }
}