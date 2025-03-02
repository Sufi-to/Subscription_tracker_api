# Subscription Management Tracker API

## Overview

The Subscription Management Tracker API is a production-ready service built with **Node.js, Express, and MongoDB**. It helps users track and manage their subscriptions efficiently with automated workflows, email reminders, and advanced security features.

## Features

- **JWT Authentication**: Secure access with token-based authentication.
- **Advanced Rate Limiting**: Prevents abuse by limiting requests.
- **Bot Detection**: Uses Arcject for protection against bots.
- **Subscription Tracking**: Manage subscriptions with start dates, renewal dates, and costs.
- **Automated Email Reminders**: Notifies users about upcoming payments.
- **User Management**: Register, login, and manage users.
- **RESTful Endpoints**: Well-defined API structure for easy integration.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: Arcject for bot detection, rate limiting middleware
- **Email Services**: Nodemailer for email reminders

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/subscription-tracker-api.git
   cd subscription-tracker-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a **.env** file and add the required environment variables:
   ```env
PORT=5500
SERVER_URL="http://localhost:5500"

# ENVIRONMENT
NODE_ENV=development

# DATABASE
DB_URI=

# JWT AUTH
JWT_SECRET=
JWT_EXPIRES_IN="1d"

# ARCJET
ARCJET_KEY=
ARCJET_ENV="development"

# UPSTASH
QSTASH_URL=
QSTASH_TOKEN=

# NODEMAILER
EMAIL_PASSWORD=
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### Authentication

- **Register a user**: `POST /api/v1/auth/sign-up`
- **Login a user**: `POST /api/v1/auth/sign-in`
- **Logout a user**: `POST /api/v1/auth/sign-out`

### Subscription Management

- **Get all subscriptions for a user**: `GET /api/v1/subscriptions/user/:id`
- **Create a subscription**: `POST /api/v1/subscriptions`
- **Update a subscription**: `PUT /api/v1/subscriptions/:id`
- **Delete a subscription**: `DELETE /api/v1/subscriptions/:id`

### Admin & Security

- **Rate Limiting**: Configured to prevent abuse
- **Bot Protection**: Integrated with Arcject for security

## Workflows

- Automated email notifications for upcoming subscription renewals.
- Background tasks to clean up expired subscriptions.

## Deployment

This API is production-ready and can be deployed on platforms like **VPS, AWS, Heroku, or DigitalOcean**.

## Contributing

Pull requests are welcome! Feel free to fork the repository and submit changes.

## License

MIT License

---

**Author:** Sufi-to

Note: More endpoints to follow/still under development