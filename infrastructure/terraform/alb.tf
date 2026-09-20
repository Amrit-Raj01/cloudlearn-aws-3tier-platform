# Cloudlearn Application Load Balancer


# Application Load Balancer

resource "aws_lb" "cloudlearn_alb" {
  name               = "cloudlearn-alb"
  internal           = false
  load_balancer_type = "application"

  security_groups = [
    aws_security_group.alb_sg.id
  ]

  subnets = [
    aws_subnet.public_subnet_1.id,
    aws_subnet.public_subnet_2.id
  ]

  enable_deletion_protection = false

  tags = {
    Name        = "cloudlearn-alb"
    Project     = "cloudlearn"
    Environment = "dev"
  }

}



# Target Group

resource "aws_lb_target_group" "cloudlearn_backend_tg" {
  name     = "cloudlearn-backend-tg"
  port     = 5000
  protocol = "HTTP"

  vpc_id = aws_vpc.cloudlearn_vpc.id

  target_type = "instance"

  health_check {
    enabled             = true
    protocol            = "HTTP"
    path                = "/"
    port                = "5000"
    interval            = 30
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 2
    matcher             = "200-399"

  }

  tags = {
    Name    = "cloud-backend-tg"
    Project = "cloudlearn"
  }

}


# Register Backend EC2 With Target Group

resource "aws_lb_target_group_attachment" "cloudlearn_backend" {
  target_group_arn = aws_lb_target_group.cloudlearn_backend_tg.arn

  target_id = aws_instance.cloudlearn_backend.id

  port = 5000
}


# ALB Listener

resource "aws_lb_listener" "cloudlearn_http_listener" {
  load_balancer_arn = aws_lb.cloudlearn_alb.arn

  port     = 80
  protocol = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.cloudlearn_backend_tg.arn

  }
}



# ALB DNS Output
output "cloudlearn_alb_dns" {
  description = "DNS name of the Cloudlearn Application Load Balancer"
  value       = aws_lb.cloudlearn_alb.dns_name
}