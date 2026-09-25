# CloudLearn RDS MYSQL

# RDS SECURITY GROUP
resource "aws_security_group" "rds_sg" {

  name        = "${var.project_name}-rds-sg"
  description = "Security Group for CloudLearn RDS MYSQL"
  vpc_id      = aws_vpc.cloudlearn_vpc.id

  ingress {
    description     = "MYSQL access from CloudLearn backend"
    from_port       = 3306
    to_port         = 3306
    protocol        = "tcp"
    security_groups = [aws_security_group.app_sg.id]
  }

  egress {
    description = "Allow outbound traffic"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name        = "${var.project_name}-rds-sg"
    Project     = var.project_name
    Environment = var.environment
  }
}


# RDS Subnet Group
resource "aws_db_subnet_group" "cloudlearn_rds_subnet_group" {

  # RDS subnet-group names must be lowercase
  name = "cloudlearn-rds-subnet-group"

  subnet_ids = [
    aws_subnet.private_db_subnet_1.id,
    aws_subnet.private_db_subnet_2.id
  ]

  tags = {
    Name        = "cloudlearn-rds-subnet-group"
    Project     = var.project_name
    Environment = var.environment
  }
}


# MYSQL RDS Instance
resource "aws_db_instance" "cloudlearn_mysql" {

  identifier = "cloudlearn-mysql"

  engine         = "mysql"
  engine_version = "8.0"

  instance_class        = "db.t3.micro"
  allocated_storage     = 20
  max_allocated_storage = 20
  storage_type          = "gp3"

  db_name  = var.db_name
  username = var.db_username
  password = var.db_password
  port     = 3306

  db_subnet_group_name = aws_db_subnet_group.cloudlearn_rds_subnet_group.name

  vpc_security_group_ids = [
    aws_security_group.rds_sg.id
  ]

  publicly_accessible = false

  multi_az = false

  backup_retention_period = 0

  skip_final_snapshot = true

  deletion_protection = false

  auto_minor_version_upgrade = true

  tags = {
    Name        = "${var.project_name}-mysql"
    Project     = var.project_name
    Environment = var.environment
  }
}


# RDS Outputs

output "rds_endpoint" {
  description = "CloudLearn RDS MYSQL endpoint"
  value       = aws_db_instance.cloudlearn_mysql.address
}

output "rds_port" {
  description = "CloudLearn RDS MYSQL port"
  value       = aws_db_instance.cloudlearn_mysql.port
}

output "rds_database_name" {
  description = "CloudLearn RDS Database name"
  value       = aws_db_instance.cloudlearn_mysql.db_name
}