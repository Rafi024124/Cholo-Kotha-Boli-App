# 🌟 Cholo-Kotha-Boli – Real-Time Chat Application
![Cholo-Kotha-Boli Screenshot](/screenshot1.jpg)

Cholo-Kotha-Boli enables real-time conversations with a focus on smooth, engaging user interactions. It allows participants to connect with others, view online statuses, and engage in one-on-one conversations. Participants can exchange both text messages and images in a clean, easy-to-use interface.

---

## 🚀 Purpose

The goal of Cholo-Kotha-Boli is to provide a seamless and intuitive platform for real-time communication that enhances connectivity and interaction between users.

---

## ✨ Features

- 💬 **Real-Time Messaging** – Exchange instant text messages with friends or contacts.
- 📸 **Image Sharing** – Send and receive images within chats.
- 🟢 **Online Status** – View who is currently online and available to chat.
- 🔒 **Secure Authentication** – Register and login securely to access your chats.
- 🧑‍🤝‍🧑 **One-on-One Conversations** – Connect privately with individual users.
- 🎨 **Clean UI/UX** – User-friendly interface focused on simplicity and engagement.
- 📱 **Responsive Design** – Works smoothly on desktops, tablets, and mobile devices.

---

## 🧠 Tech Stack

### Frontend:
- React.js – UI Library  
- Tailwind CSS – Styling and layout  
- Socket.io Client – Real-time communication  
- React Router DOM – Client-side routing  
- Firebase Authentication – Secure user login  

### Backend:
- Node.js – Server runtime environment  
- Express.js – Web framework  
- Socket.io Server – Real-time event handling  
- MongoDB – NoSQL database for chat data  
- JWT – JSON Web Tokens for authentication  
- Cors & Middleware – API security and request handling  

---

## 🔐 Authentication

Users must be logged in to:  
- Send and receive messages  
- View chat history  
- Access personal conversations  

---

## 📸 Screenshot



---

## 🚀 Live Demo

Check it out live here: [https://cholo-kotha-boli-app.onrender.com/](https://cholo-kotha-boli-app.onrender.com/)

---

🚀 How to Run Locally
1️⃣ Clone the repository
git clone https://github.com/Rafi024124/Cholo-Kotha-Boli-App.git

2️⃣ Go to the project folder
cd Cholo-Kotha-Boli-App

3️⃣ Install backend dependencies
cd server
npm install

4️⃣ Create a .env file in the server folder
Add your environment variables like:
MONGO_URI=your_mongodb_connection_string JWT_SECRET=your_jwt_secret 

5️⃣ Start the backend server
npm run start

6️⃣ Install frontend dependencies
Open a new terminal tab/window, then:
cd ../client
npm install

7️⃣ Start the frontend
npm start

8️⃣ Open your browser and go to
http://localhost:3000
