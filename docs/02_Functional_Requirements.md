# 02 - Functional Requirements

> **Document Version:** 1.0.0
> **Status:** Draft
> **Last Updated:** July 10, 2026

---

# Table of Contents

* [Public Website](#public-website)
  * [Home](#home)
  * [About](#about)
  * [Courses](#courses)
  * [Course Details](#course-details)
  * [Pricing](#pricing)
  * [FAQ](#faq)
  * [Contact](#contact)
  * [Blog](#blog)
  * [Blog Details](#blog-details)
  * [Login](#login)
  * [Register](#register)
  * [Forgot Password](#forgot-password)

* [Student Portal](#student-portal)
  * [Dashboard](#dashboard)
  * [My Courses](#my-courses)
  * [Course Learning](#course-learning)
  * [Lesson Player](#lesson-player)
  * [Practice Tests](#practice-tests)
  * [Mock Exams](#mock-exams)
  * [Results](#results)
  * [Progress](#progress)
  * [Certificates](#certificates)
  * [Notifications](#notifications)
  * [Profile](#profile)
  * [Settings](#settings)

* [Admin Portal](#admin-portal)
  * [Dashboard](#dashboard-1)
  * [Users](#users)
  * [Roles & Permissions](#roles--permissions)
  * [Categories](#categories)
  * [Courses](#courses-1)
  * [Lessons](#lessons)
  * [Question Bank](#question-bank)
  * [Exams](#exams)
  * [Orders](#orders)
  * [Payments](#payments)
  * [Coupons](#coupons)
  * [Blog](#blog-1)
  * [Reports](#reports)
  * [Analytics](#analytics)
  * [Contact Messages](#contact-messages)
  * [Email Templates](#email-templates)
  * [Website Settings](#website-settings)
  * [Audit Logs](#audit-logs)

---

# Public Website

## Home

<details>
<summary><strong>View Functional Requirements</strong></summary>

---

## Page Information

| Field                       | Value          |
| --------------------------- | -------------- |
| **Module**                  | Authentication |
| **Page Name**               | Login          |
| **Route**                   | `/login`       |
| **Accessible By**           | Guest          |
| **Authentication Required** | No             |
| **Priority**                | High           |
| **Status**                  | Planned        |

---

## 1. Purpose

The Login page allows registered users to securely authenticate and access their dashboard based on their assigned role.

---

## 2. User Story

> **As a** registered user
> **I want to** log into my account securely
> **So that** I can access my dashboard and continue using the platform.

---

## 3. Navigation

### Access From

* Navigation Bar
* Register Page
* Forgot Password Page

### Redirect After Login

| User Role   | Destination       |
| ----------- | ----------------- |
| Student     | Student Dashboard |
| Admin       | Admin Dashboard   |
| Super Admin | Admin Dashboard   |

---

## 4. UI Components

| Component       | Required | Description                |
| --------------- | -------- | -------------------------- |
| Logo            | ✅        | Platform logo              |
| Welcome Heading | ✅        | Page title                 |
| Email Input     | ✅        | User email                 |
| Password Input  | ✅        | User password              |
| Show Password   | ✅        | Toggle password visibility |
| Remember Me     | Optional | Keep user logged in        |
| Forgot Password | ✅        | Reset password link        |
| Login Button    | ✅        | Submit form                |
| Register Link   | ✅        | Redirect to registration   |

---

## 5. Functional Requirements

### User Login

* User enters email.
* User enters password.
* User clicks **Login**.
* Validate input fields.
* Authenticate user.
* Generate access token.
* Generate refresh token.
* Redirect user based on role.

### Remember Me

* Extend session duration.
* Keep user signed in.

### Show Password

* Toggle password visibility.
* Preserve entered value.

---

## 6. Business Rules

* Only registered users can log in.
* Email comparison is case-insensitive.
* Passwords must be hashed.
* Deleted users cannot log in.
* Suspended users cannot log in.
* Generate JWT Access Token.
* Generate Refresh Token.

---

## 7. Validation Rules

| Field    | Validation                           |
| -------- | ------------------------------------ |
| Email    | Required                             |
| Email    | Valid email format                   |
| Password | Required                             |
| Password | Minimum 8 characters (if applicable) |

---

## 8. Permissions

| Role        | Access |
| ----------- | ------ |
| Guest       | ✅      |
| Student     | ❌      |
| Admin       | ❌      |
| Super Admin | ❌      |

---

## 9. API Endpoints

| Method | Endpoint             | Description |
| ------ | -------------------- | ----------- |
| POST   | `/api/v1/auth/login` | User login  |

### Request

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### Success Response

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "accessToken": "...",
    "refreshToken": "...",
    "user": {}
  }
}
```

---

## 10. Database Tables

| Table                 | Purpose                |
| --------------------- | ---------------------- |
| users                 | Store user information |
| refresh_tokens        | Store refresh tokens   |
| sessions *(optional)* | Active login sessions  |

---

## 11. Success Messages

* Login successful.
* Welcome back!

---

## 12. Error Messages

| Scenario              | Message                                       |
| --------------------- | --------------------------------------------- |
| Invalid email         | Please enter a valid email address.           |
| Password missing      | Password is required.                         |
| Incorrect credentials | Invalid email or password.                    |
| Suspended account     | Your account has been suspended.              |
| Server error          | Something went wrong. Please try again later. |

---

## 13. Loading State

* Disable Login button.
* Show loading spinner.
* Prevent duplicate requests.

---

## 14. Empty State

Not applicable.

---

## 15. Responsive Behavior

### Desktop

* Centered login card.
* Optional illustration.

### Tablet

* Single-column layout.

### Mobile

* Full-width form.
* Large touch-friendly buttons.

---

## 16. Security Requirements

* HTTPS
* JWT Authentication
* Password Hashing
* Refresh Tokens
* Rate Limiting
* Input Sanitization
* XSS Protection
* SQL Injection Protection

---

## 17. Dependencies

### Frontend

* Next.js
* React Hook Form
* Zod
* TanStack Query

### Backend

* Fastify
* Prisma
* PostgreSQL
* JWT

---

## 18. Acceptance Criteria

* User can log in with valid credentials.
* Invalid credentials display an error.
* Suspended users cannot log in.
* Tokens are generated correctly.
* User is redirected to the correct dashboard.
* Page is fully responsive.

---

## 19. Future Enhancements

* Google Login
* Apple Login
* Microsoft Login
* Two-Factor Authentication (2FA)
* Passkeys
* CAPTCHA

</details>

---
