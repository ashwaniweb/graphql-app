GraphQL Backend Application
=================================

## Introduction
This is a simple graphql application for react training.

## How to run
This application requires node to be installed on your system. Please check [upstream documentation](https://nodejs.org/en/download/)
for how to install node on your system.

### Development build
In application root path run following commands
```bash
cd app
npm install
npm run dev
```
### Production build
Run following commands
```bash
cd app
npm install --only=production && npm run build
npm start
```

### Dependencies
This application required following connections to run.
- MYSQL

### Environment variables
Environment variables is the main mechanism of manipulating application settings. Currently application recognizes
following environment variables:
```bash
MYSQL_HOST = host
MYSQL_PORT = mysql port
MYSQL_USER = mysql user name
MYSQL_PASSWORD = mysql password
MYSQL_DATABASE = mysql database 
```