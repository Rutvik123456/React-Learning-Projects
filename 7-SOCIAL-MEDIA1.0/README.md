# 📱 Social Media Feed App

A clean, responsive **React + Vite** social media feed application styled with **Bootstrap 5**. Users can browse posts, create new posts with space-separated hashtags and reaction counts, and delete existing posts in real time using React's `Context API` and `useReducer`.

---

## ✨ Features

- **Dynamic Post Feed (`Home`):** Displays posts with titles, body text, hashtag badges, and reaction counters.
- **Create New Posts (`Create Post`):** Uncontrolled form powered by `useRef` that captures **User ID**, **Post Title**, **Post Content**, **Reactions**, and space-separated **Tags**, automatically resetting inputs after submission.
- **Instant Post Deletion:** Delete any post from the feed with a single click using the top-right delete badge (`MdDelete`).
- **Centralized State Management:** Powered by React's `createContext` and `useReducer` (`Post-list-data.jsx`) for predictable `ADD_POST` and `DELETE_POST` state updates.
- **Tab-Based Navigation:** Seamless switching between **Home** and **Create Post** views via a persistent dark sidebar.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev) (`useState`, `useReducer`, `useContext`, `useRef`)
- **Build Tool:** [Vite 8](https://vite.dev)
- **Styling:** [Bootstrap 5.3](https://getbootstrap.com) & Custom CSS (`App.css`)
- **Icons:** [React Icons](https://github.io) (`react-icons/md`)
- **Linter:** Oxlint

---

## 📂 Project Structure

```text
social-media/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                      # React DOM entry point
    ├── App.jsx                       # Main layout & tab state management
    ├── App.css                       # Custom spacing and card styling
    ├── components/
    │   ├── Header.jsx                # Top navigation bar with search & auth buttons
    │   ├── Sidebar.jsx               # Sidebar navigation (Home / Create Post)
    │   ├── PostList.jsx              # Renders the list of Post cards from context
    │   ├── Post.jsx                  # Individual post card with tags, reactions & delete button
    │   ├── CreatePost.jsx            # useRef form component to submit new posts & parse tags
    │   └── Footer.jsx                # Page footer
    └── store/
        └── Post-list-data.jsx        # Context provider, useReducer logic & initial seed posts
```


---

## 🚀 Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd social-media
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
  

4. **Build for production (optional):**
   ```bash
   npm run build
   ```
  

