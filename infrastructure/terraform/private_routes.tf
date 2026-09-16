# Private Route Table AZ 1

resource "aws_route_table" "private_route_table_1" {
  vpc_id = aws_vpc.cloudlearn_vpc.id

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.nat_gateway_1.id
  }

  tags = {
    Name        = "${var.project_name}-private-route-table-1"
    Project     = var.project_name
    Environment = var.environment
    Tier        = "Private"
  }
}

# Private Route Table AZ 2

resource "aws_route_table" "private_route_table_2" {
  vpc_id = aws_vpc.cloudlearn_vpc.id

  route {
    cidr_block     = "0.0.0.0/0"
    nat_gateway_id = aws_nat_gateway.nat_gateway_2.id
  }

  tags = {
    Name        = "${var.project_name}-private-route-table-2"
    Project     = var.project_name
    Environment = var.environment
    Tier        = "Private"
  }
}

# Private_App_Subnet_Association

resource "aws_route_table_association" "private_app_subnet_1_association" {
  subnet_id      = aws_subnet.private_app_subnet_1.id
  route_table_id = aws_route_table.private_route_table_1.id
}

resource "aws_route_table_association" "private_app_subnet_2_association" {
  subnet_id      = aws_subnet.private_app_subnet_2.id
  route_table_id = aws_route_table.private_route_table_2.id
}


# Private DB Subnet Associations

resource "aws_route_table_association" "private_db_subnet_1_association" {
  subnet_id      = aws_subnet.private_db_subnet_1.id
  route_table_id = aws_route_table.private_route_table_1.id

}

resource "aws_route_table_association" "private_db_subnet_2_association" {
  subnet_id      = aws_subnet.private_db_subnet_2.id
  route_table_id = aws_route_table.private_route_table_2.id
}