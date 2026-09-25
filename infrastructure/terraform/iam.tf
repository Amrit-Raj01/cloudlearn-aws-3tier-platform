# ==========================================
# EC2 IAM Role
# ==========================================

resource "aws_iam_role" "ec2_role" {
  name = "${var.project_name}-ec2-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Principal = {
          Service = "ec2.amazonaws.com"
        }

        Action = "sts:AssumeRole"
      }
    ]
  })

  tags = {
    Name        = "${var.project_name}-ec2-role"
    Project     = var.project_name
    Environment = var.environment
  }
}


# ==========================================
# IAM Instance Profile

resource "aws_iam_instance_profile" "ec2_profile" {
  name = "${var.project_name}-ec2-profile"
  role = aws_iam_role.ec2_role.name

  tags = {
    Name        = "${var.project_name}-ec2-profile"
    Project     = var.project_name
    Environment = var.environment
  }
}


# ==========================================
# Systems Manager Access
# ==========================================

resource "aws_iam_role_policy_attachment" "ssm_policy" {
  role       = aws_iam_role.ec2_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}

# Updating this for dump MYSQL old data export to new RDS data

resource "aws_iam_role_policy" "ec2_s3_dump_read" {
  name = "CloudlearnEC2S3DumpRead"
  role = aws_iam_role.ec2_role.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:GetObject"
        ]
        Resource = "arn:aws:s3:::cloudlearn-mysql/Dump20260925.sql"
      },
      {
        Effect = "Allow"
        Action = [
          "s3:ListBucket"
        ]
        Resource = "arn:aws:s3:::cloudlearn-mysql"
      }
    ]
  })
}