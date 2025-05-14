
# 📬 Barrier-Free Mail

Barrier-Free Mail is a simple and accessible email client designed for everyone — including users with visual impairments and older adults.  
This project combines a modern **React frontend** with a secure **Laravel backend** to allow sending emails in a user-friendly and inclusive way.

---

## ✨ What Makes It Special

### 🧑‍🦯 Accessibility First
- Text-to-speech support for reading messages aloud
- Adjustable font size
- Dark and light mode
- Keyboard and screen reader friendly

### 🌍 Multilingual Interface
- English 🇬🇧
- Serbian 🇷🇸
- German 🇩🇪

### 📤 Email Features
- Send emails via Gmail SMTP (or other SMTP servers)
- Simple and clean UI for composing messages
- Confirmation after sending

---

## 🧰 Tech Stack

| Layer     | Tools                    |
|-----------|--------------------------|
| Frontend  | React + Vite             |
| Backend   | Laravel (PHP)            |
| Email     | SMTP (Gmail-compatible)  |
| i18n      | react-i18next            |
| TTS       | Web Speech API           |

---

## 📦 Project Structure

barrier-free-mail/
├── email-client/ # Frontend app
│ ├── src/
│ ├── public/
│ └── vite.config.js
└── barrier-free-mail-api/ # Laravel backend
├── app/
├── routes/
└── .env

## 🚀 Getting Started

### ✅ Frontend

```bash
cd email-client
npm install
npm run dev

