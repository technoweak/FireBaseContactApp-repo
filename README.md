

---

# 🧑‍🤝‍🧑 Firebase Contact App

A **contact management web application** built with **React**, **Vite**, **Tailwind CSS**, and **Firebase** — enabling users to **add, view, edit, and delete contacts** with real-time synchronization.

---

## 🌟 Features

✔ Add a new contact
✔ View all contacts
✔ Edit existing contacts
✔ Delete contacts
✔ Real-time updates using Firebase
✔ Responsive UI powered by Tailwind CSS

---

## 🛠️ Technology Stack

| Technology       | Purpose                              |
| ---------------- | ------------------------------------ |
| **React**        | UI framework                         |
| **Vite**         | Build tool & dev server              |
| **Tailwind CSS** | Styling                              |
| **Firebase**     | Backend (Firestore / Auth / Hosting) |

---

## 🚀 Live Demo

> *(Add this once you deploy — e.g., Firebase Hosting / Netlify / Vercel)*
> ➡️ [https://your-deployed-url](https://your-deployed-url)

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/technoweak/FireBaseContactApp-repo.git
cd FireBaseContactApp-repo
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure Firebase**

Create a project in the **Firebase Console** and enable **Firestore** (and Authentication if needed).

Add your Firebase config to a file like `src/firebaseConfig.js`:

```javascript
// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

4. **Start the development server**

```bash
npm run dev
```

Open your browser at `http://localhost:3000` (or the URL shown in the terminal).

---

## 🧠 Usage

* **Add Contact:** Fill in the contact form and hit submit.
* **Edit Contact:** Click the edit icon beside a listed contact to update details.
* **Delete Contact:** Click the delete icon to remove a contact.

*(Modify this section based on UI/UX of your project)*

---

## 📁 Project Structure

```
├─ public/
├─ src/
│  ├─ components/        # UI components
│  ├─ firebaseConfig.js   # Firebase initialization
│  └─ App.jsx
├─ .gitignore
├─ index.html
├─ package.json
├─ tailwind.config.js
└─ vite.config.js
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch

   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the **MIT License**.
*(Modify if needed)*

---

## 🙌 Acknowledgements

Big thanks to the open-source community and Firebase for enabling real-time app development! ([github.com][1])

---

