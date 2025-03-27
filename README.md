# AuthBridge


AuthNexus is a full-stack authentication application built using React, Node.js, Express, and MongoDB. This project allows users to register, log in, and access a personalized dashboard.

## Features

- **User Registration**: Users can create an account by providing their name, email, and password.
- **User Login**: Users can authenticate using their credentials.
- **Dashboard**: Displays a personalized welcome message upon successful login.
- **Secure Authentication**: Implements password hashing and JWT-based authentication.
- **Responsive Design**: Ensures usability across various devices using React Bootstrap.

## Technologies Used

### Frontend
- React
- React Router
- Axios
- React Bootstrap

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose for schema modeling)

## Installation

### Prerequisites
Ensure you have the following installed:

- Node.js (v18 or later)
- MongoDB (local or cloud instance)

### Clone the Repository

```bash
git clone https://github.com/your-username/AuthNexus.git
cd AuthNexus
```

### Backend Setup

1. Navigate to the backend folder (or root if combined).
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add:

```
MONGODB_URL=mongodb://localhost:27017/AuthNexus
JWT_SECRET=your_jwt_secret
PORT=5000
```

4. Start the backend server:

```bash
npm start
```

### Frontend Setup

1. Navigate to the frontend folder.
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the frontend directory and add:

```
VITE_BASEURL=http://localhost:5000
```

4. Start the React development server:

```bash
npm run dev
```

## Usage

1. Open your browser and go to `http://localhost:5173` (or the port shown in the console).
2. Register a new user via `/register`.
3. Log in using your credentials via `/login`.
4. Access the personalized dashboard.

## Project Structure

```
AuthNexus/
├── backend/
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   └── index.js
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── components/
│   │   ├── routes/
│   │   │   └── router.jsx
│   │   └── App.jsx
└── README.md
```

## API Endpoints

### POST /register
Registers a new user.

Request Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### POST /login
Authenticates a user.

Request Body:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

Response:
```json
{
  "token": "your-jwt-token"
}
```

## Contributing

Contributions are welcome! Feel free to fork the repository and open a pull request.

## License

This project is licensed under the MIT License.


