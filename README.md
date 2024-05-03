# API Documentation
This document provides an overview of the APIs available in this project.

# Table of Contents
Product API
Team API
User API
Users Role and Permission Management API
Page Update API
Event API
Contact Form API
Contact Form Email API
Lead Management API


# Product API
Create Product
Endpoint: POST /api/products
Description: Create a new product.
Read Product
Endpoint: GET /api/products/:id
Description: Get product details by ID.
Update Product
Endpoint: PUT /api/products/:id
Description: Update product details by ID.
Delete Product
Endpoint: DELETE /api/products/:id
Description: Delete a product by ID.

# Team API
Create Team
Endpoint: POST /api/teams
Description: Create a new team.
Read Team
Endpoint: GET /api/teams/:id
Description: Get team details by ID.
Update Team
Endpoint: PUT /api/teams/:id
Description: Update team details by ID.
Delete Team
Endpoint: DELETE /api/teams/:id
Description: Delete a team by ID.

# User API
Create User
Endpoint: POST /api/users
Description: Create a new user.
Read User
Endpoint: GET /api/users/:id
Description: Get user details by ID.
Profile Update
Endpoint: PUT /api/users/:id
Description: Update user profile by ID.
Password Update
Endpoint: PUT /api/users/:id/password
Description: Update user password by ID.
Delete User
Endpoint: DELETE /api/users/:id
Description: Delete a user by ID.


# Users Role and Permission Management API
Create Role
Endpoint: POST /api/roles
Description: Create a new role with specified permissions.
Read Role
Endpoint: GET /api/roles/:id
Description: Get role details by ID.
Update Role
Endpoint: PUT /api/roles/:id
Description: Update role details by ID.
Delete Role
Endpoint: DELETE /api/roles/:id
Description: Delete a role by ID.
Assign Permissions
Endpoint: PUT /api/roles/:id/permissions
Description: Assign permissions to a role by ID.

# Page Update API
Update Page Content
Endpoint: PUT /api/pages/:id
Description: Update page content by ID.
Read Page Content
Endpoint: GET /api/pages/:id
Description: Get page content by ID.

# Event API
Create Event
Endpoint: POST /api/events
Description: Create a new event.
Read Event
Endpoint: GET /api/events/:id
Description: Get event details by ID.
Update Event
Endpoint: PUT /api/events/:id
Description: Update event details by ID.
Delete Event
Endpoint: DELETE /api/events/:id
Description: Delete an event by ID.

# Contact Form API
Submit Contact Form
Endpoint: POST /api/contact-form
Description: Submit a contact form with user details and message.
Read Contact Form Submission
Endpoint: GET /api/contact-form/:id
Description: Get contact form submission details by ID.

# Contact Form Email API
Send Contact Form Email
Endpoint: POST /api/contact-form-email
Description: Send an email with contact form details to specified email address.

# Lead Management API
Create Lead
Endpoint: POST /api/leads
Description: Create a new lead with contact information.
Read Lead
Endpoint: GET /api/leads/:id
Description: Get lead details by ID.
Update Lead
Endpoint: PUT /api/leads/:id
Description: Update lead details by ID.
Delete Lead
Endpoint: DELETE /api/leads/:id
Description: Delete a lead by ID.