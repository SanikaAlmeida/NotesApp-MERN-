# 📒 NotesApp - MERN Stack Application

A full-stack Notes application built using **MongoDB, Express.js, React.js, and Node.js**. Users can sign up, log in, create, edit, delete, and search notes securely.

---

## 🚀 Live Demo

🌐 **Frontend**: [https://your-frontend-url.onrender.com](https://notesapp-mern-frontend-226h.onrender.com)  
🌐 **Backend**: [https://your-backend-url.onrender.com](https://notesapp-mern-backend.onrender.com)

---

## 🛠️ Features

- 🔐 User Authentication (Signup & Login)
- 📝 Create, Edit and Delete Notes
- 🔍 Real-time Search Functionality
- 🔒 JWT-based Session Handling
- 🌐 Responsive UI with Tailwind CSS

---

## 🧑‍💻 Tech Stack

**Frontend:**
- React.js
- Vite
- Axios
- Tailwind CSS

**Backend:**
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JWT (JSON Web Token)

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/SanikaAlmeida/NotesApp-MERN-.git
cd NotesApp-MERN-
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in `/backend`:

```env
PORT=8005
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

Create a `.env` file in `/frontend`:

```env
VITE_API_URL=http://localhost:8005
```

Start the frontend:

```bash
npm run dev
```

## 🗃️ Folder Structure

```
NotesApp-MERN-/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/notes-app
│   ├── src/
│   ├── public/
│   └── index.html
├── README.md
```


