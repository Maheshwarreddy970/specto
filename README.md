# Specto

## Introduction

Specto
A powerful agency management platform designed to centralize team collaboration and client management. With Specto, users can create teams, add members, and manage clients efficiently on a single platform. The intuitive interface and dynamic charting capabilities facilitate goal setting, progress tracking, and web design, enhancing productivity and performance.

## Getting Started

To get started with Specto, follow these steps:

## Clone the Repository

```bash
git@github.com:Maheshwarreddy970/specto.git
```

```bash
cd specto
```

## Environment Variables

Before running the application, set up the environment variables. Rename `.env.example to .env ` and set your own variables.

```bash
mv .env.example .env
nano .env  # (or use any text editor to modify .env)
```

### .env.example

Here is an example of the environment variables needed for the project. Replace the placeholder values with your actual credentials.

```bash
DATABASE_URL="YOUR_DATABASE_URL_HERE"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_yourkeyhere
CLERK_SECRET_KEY=sk_test_yourkeyhere
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/agency/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/agency/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_URL=http://localhost:3000/
NEXT_PUBLIC_DOMAIN=localhost:3000
NEXT_PUBLIC_SCHEME=http://

NEXT_PUBLIC_S3_ACCESS_KEY_ID=your_s3_access_key_id
NEXT_PUBLIC_S3_SECRET_ACCESS_KEY=your_s3_secret_access_key
NEXT_PUBLIC_S3_BUCKET_NAME=your_bucket_name

```

Make sure to fill in the necessary environment variables in the .env file.

## Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## Development

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

This will run the application in development mode.

Navigate to http://localhost:3000 to view the application.

## Chatdocrepo File Structure

ChatDoc uses a monorepo setup managed by Turborepo and includes a Next.js application. Below is an overview of the file structure:

````bash
# Specto

Specto is a cutting-edge web application designed to provide seamless user experiences with robust backend support. This repository houses the core of Specto, including its frontend, backend, and associated configurations.

## Project Structure

Below is the structure of the main folders and files:

```plaintext
specto/
│
├── prisma/                         # Prisma ORM setup and schema files
├── public/                         # Public assets (images, fonts, etc.)
├── src/                            # Source code for the application
│   ├── app/                        # Main application folder
│   │   ├── futures/                # Feature modules
│   │   │   ├── card/               # Card components or modules
│   │   ├── components/             # Reusable UI components
│   │   ├── text/                   # Text-related utilities or components
│   │   ├── center/                 # Centering utilities or components
│   │   ├── lib/                    # Libraries and utility functions
│   │   ├── providers/              # Providers for context or third-party services
│   │   ├── stripe/                 # Stripe payment integration
│   │   ├── utils/                  # General utilities
│   ├── middleware.ts               # Middleware functions
├── .eslintrc.json                  # ESLint configuration file
├── .gitignore                      # Files and directories to be ignored by Git
├── README.md                       # Project documentation
├── components.json                 # Configuration for components
├── next-env.d.ts                   # TypeScript environment settings for Next.js
├── next.config.mjs                 # Next.js configuration file
├── package-lock.json               # Auto-generated file for package version locking
├── package.json                    # Node.js dependencies and scripts
├── postcss.config.js               # PostCSS configuration
├── tailwind.config.ts              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
├── yarn.lock                       # Yarn dependency lock file

````
