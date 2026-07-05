# ASVAB Tutoring Backend

A scalable and production-ready RESTful API for the **ASVAB Tutoring Platform**, built with **Fastify**, **Prisma ORM**, **PostgreSQL**, and **TypeScript**.

The goal of this project is to provide a secure, modular, and maintainable backend that powers an online tutoring platform with authentication, course management, tests, results, analytics, and reporting.

---

## 🚀 Tech Stack

* **Runtime:** Node.js
* **Framework:** Fastify
* **Language:** TypeScript
* **Database:** PostgreSQL
* **ORM:** Prisma
* **Validation:** Zod
* **API Documentation:** Swagger (OpenAPI)
* **Authentication:** JWT (Coming Soon)
* **Password Hashing:** bcrypt

---

## 📂 Project Structure

```text
src/
├── config/          # Environment & configuration
├── errors/          # Custom error classes
├── lib/             # Prisma client & shared libraries
├── modules/         # Feature-based modules
│   └── auth/
├── plugins/         # Fastify plugins
├── routes/          # Route registration
├── app.ts           # Fastify application
└── server.ts        # Server entry point

prisma/
├── schema.prisma
├── migrations/
└── seed.ts
```

---

## ✨ Features

### Completed

* Fastify setup
* TypeScript configuration
* Prisma ORM integration
* PostgreSQL connection
* Zod validation
* Swagger documentation
* Global error handling
* Modular project structure

### In Progress

* User Registration
* User Login
* JWT Authentication
* Refresh Token
* Role-based Authorization

### Planned

* Course Management
* Test Management
* Question Bank
* Exam Results
* Student Dashboard
* Analytics & Reports
* Admin Panel
* File Upload
* Email Notifications

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/sharminislamshroddha/asvab-tutoring-backend.git
```

### 2. Navigate to the project

```bash
cd asvab-tutoring-backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
PORT=3000

DATABASE_URL="postgresql://username:password@localhost:5432/asvab_tutoring"

JWT_SECRET=your-secret-key
```

### 5. Run database migrations

```bash
npx prisma migrate dev
```

### 6. Seed the database

```bash
npx prisma db seed
```

### 7. Start the development server

```bash
npm run dev
```

---

## 📜 Available Scripts

| Command                  | Description                 |
| ------------------------ | --------------------------- |
| `npm run dev`            | Start development server    |
| `npm run build`          | Build the project           |
| `npm start`              | Run production build        |
| `npx prisma studio`      | Open Prisma Studio          |
| `npx prisma migrate dev` | Create and apply migrations |
| `npx prisma db seed`     | Seed the database           |

---

## 📖 API Documentation

Once the server is running, Swagger documentation is available at:

```
http://localhost:3000/docs
```

---

## 🗄️ Database

Current database entities:

* Role
* User

More entities will be added as development progresses.

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Sharmin Islam Shroddha**

GitHub: https://github.com/sharminislamshroddha
