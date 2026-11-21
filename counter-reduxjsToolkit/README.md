# Redux Counter

A React counter application built with Redux Toolkit and Bootstrap. It demonstrates centralized state management using multiple Redux slices to handle numeric counter operations and a privacy visibility toggle.

## Features

- **Increment & Decrement:** Increase or decrease the counter value by `1`.
- **Custom Value Operations:** Add or subtract any user-entered number from the current total.
- **Privacy Toggle:** Hide the active counter value behind a privacy message with a single click.
- **Modular Redux Store:** Separates counter logic (`counterSlice`) and visibility state (`privacySlice`) using `@reduxjs/toolkit`.

## Tech Stack

- **Frontend:** React 19, Vite
- **State Management:** Redux Toolkit, React-Redux
- **Styling:** Bootstrap 5, Custom CSS
- **Linting:** Oxlint

## Project Structure

```text
src/
├── components/
│   ├── Container.jsx        # Card layout wrapper
│   ├── Controls.jsx         # Action buttons and custom value input
│   ├── DisplayCounter.jsx   # Reads and displays the counter state
│   ├── Header.jsx           # Application title header
│   └── PrivacyMessage.jsx   # Fallback view when privacy mode is active
├── store/
│   ├── counterSlice.js      # Reducer and actions for counter math
│   ├── privacySlice.js      # Reducer and action for privacy toggle
│   └── index.js             # Configured Redux store
├── App.css                  # Component styling
└── App.jsx                  # Root layout and conditional view logic
```

