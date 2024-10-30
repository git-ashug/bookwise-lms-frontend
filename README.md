<p align="center">
    <h1 align="center">📚 bookwise-lms-frontend</h1>
</p>
<p align="center">
    <em><code>Frontend of Bookwise App</code></em>
</p>

<p align="center">
	<img src="https://img.shields.io/github/last-commit/git-ashug/bookwise-lms-frontend?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/git-ashug/bookwise-lms-frontend?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/git-ashug/bookwise-lms-frontend?style=flat&color=0080ff" alt="repo-language-count">
</p>
<p>
		<em>Built with the tools and technologies:</em>
</p>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Okta](https://img.shields.io/badge/Okta-007DC1?style=for-the-badge&logo=okta&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

A modern, feature-rich Library Management System frontend built with React and TypeScript.

---

## 📋 Table of Contents

- [🌟 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [🧩 Key Components](#-key-components)
- [🔐 Authentication](#-authentication)
- [💳 Payments](#-payments)
- [🤝 Contributing](#-contributing)

---

## 🌟 Overview

Bookwise LMS is a comprehensive library management system that allows users to browse, search, and check out books. It includes features for user authentication, book reviews, and a payment system for late fees. The frontend is built with React and TypeScript, providing a responsive and user-friendly interface for both library patrons and administrators.

---

## ✨ Features

- 🔍 Browse and search for books
- 👤 User authentication and authorization with Okta
- 📖 Book checkout and return system
- ⭐ Leave reviews and ratings for books
- 💳 Payment system for late fees using Stripe
- 📊 Admin dashboard for library management
- 📱 Responsive design for mobile and desktop
- 📨 Messaging system between users and administrators
- 📚 Book quantity management for administrators

---

## 🛠️ Tech Stack

- React 18
- TypeScript 4
- Okta for authentication
- Stripe for payments
- Bootstrap for styling
- React Router for navigation

---

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see `.env.example`)
4. Run the development server: `npm start`

For more detailed instructions, see the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

---

## 🧩 Key Components

- `App.tsx`: Main application component with routing
- `Navbar.tsx`: Navigation component with authentication status
- `HomePage.tsx`: Landing page with featured books and services
- `SearchBooksPage.tsx`: Book search functionality
- `BookCheckoutPage.tsx`: Book details and checkout process
- `ShelfPage.tsx`: User's checked out books and history
- `PaymentPage.tsx`: Late fee payment using Stripe
- `ManageLibraryPage.tsx`: Admin dashboard for book and message management

---

## 🔐 Authentication

Authentication is handled using Okta. The `OktaSignInWidget` component is used for the login process, and the `useOktaAuth` hook is used throughout the application to manage authentication state.

---

## 💳 Payments

The payment system for late fees is implemented using Stripe. The `PaymentPage` component handles the payment process, including displaying the amount due and processing the payment.

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/git-ashug/bookwise-lms-frontend/issues)**: Submit bugs found or log feature requests for the `bookwise-lms-backend` project.
- **[Submit Pull Requests](https://github.com/git-ashug/bookwise-lms-frontend/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/git-ashug/bookwise-lms-frontend/discussions)**: Share your insights, provide feedback, or ask questions.
---
