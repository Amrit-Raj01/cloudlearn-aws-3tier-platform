# ==========================================
# CloudLearn Backend EC2
# ==========================================

resource "aws_instance" "cloudlearn_backend" {
  ami = data.aws_ami.ubuntu.id

  instance_type = "t3.micro"

  subnet_id = aws_subnet.private_app_subnet_1.id

  vpc_security_group_ids = [
    aws_security_group.app_sg.id
  ]

  iam_instance_profile = aws_iam_instance_profile.ec2_profile.name

  associate_public_ip_address = false

  root_block_device {
    volume_size = 20
    volume_type = "gp3"

    encrypted = true

    tags = {
      Name        = "${var.project_name}-backend-root-volume"
      Project     = var.project_name
      Environment = var.environment
    }
  }

  user_data = <<-EOF
              #!/bin/bash

              apt-get update -y

              apt-get install -y curl

              # Install Node.js 24
              curl -fsSL https://deb.nodesource.com/setup_24.x | bash -
              apt-get install -y nodejs

              # Verify installation
              node --version
              npm --version

              # Install PM2
              npm install -g pm2

              # Create application directory
              mkdir -p /opt/cloudlearn/backend

              chown -R ubuntu:ubuntu /opt/cloudlearn
              EOF

  tags = {
    Name        = "${var.project_name}-backend-ec2"
    Project     = var.project_name
    Environment = var.environment
    Tier        = "Private-App"
    Role        = "Backend"
  }
}