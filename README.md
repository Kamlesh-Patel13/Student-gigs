# 🎓 Student Gigs

**A platform built for students, by students.**

Student Gigs is a full-stack web application that connects students who need help — with exams, assignments, Engineering Graphics (EG) sheets, projects, presentations, or learning new skills — to fellow students who can offer that help. It turns the everyday "hey, can you help me with this?" into a real, searchable, and trustworthy platform.

---

## 🔗 Live Links

- 🌐 **Live App (Frontend):** [student-gigs-i6si.vercel.app]

---

## ✨ Features

- 📝 **Full CRUD on Gigs** — Create, edit, update, and delete gigs with ease
- 🔐 **Secure Authentication** — JWT-based user authentication and route protection
- 💬 **Real-Time Chat** — Instant messaging between students using WebSockets
- 🤝 **Request System** — Send and accept requests to connect students for help
- 📱 **Responsive UI** — Clean, modern interface that works across devices

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- WebSockets (real-time chat)

**Database**
- MongoDB

**Deployment**
- Frontend hosted on **Vercel**
- Backend hosted on **Render**

---

## 📂 Project Structure

```
student-gigs/
├── client/               # React (Vite) frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── ...
│   └── package.json
├── server/               # Node.js + Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── sockets/
│   └── package.json
└── README.md
```

## 🔑 Core Functionality

### Authentication
- Users sign up and log in securely
- Passwords are hashed before storage
- JWT tokens are issued on login and used to protect private routes

### Gigs
- Authenticated users can create, view, update, and delete their gigs
- Gigs include details like title, description, category, and pricing/skill info

### Requests
- Students can send a request to a gig owner
- Gig owners can accept or decline incoming requests
- Accepted requests unlock a direct chat between both users

### Real-Time Chat
- Powered by WebSockets for instant, low-latency messaging
- Chat updates live without needing a page refresh

---

## 🚀 Future Improvements

- ⭐ Ratings and reviews for completed gigs
- 🔍 Advanced search and filtering by skill/category
- 🔔 Push/email notifications for new requests and messages
- 📊 Dashboard with gig and request analytics

---

## 🙌 Acknowledgements

Built as a personal full-stack project to solve a problem I saw every day on campus — students already help each other, this just makes it easier to find, trust, and act on.
