# English Janala 📚

English Janala is a **JavaScript practice project** for learning and exploring English vocabulary through an interactive web interface.

## ✨ Features

* 📚 Browse vocabulary lessons
* 🔤 View words by lesson
* 🔎 View individual word details
* 📝 View meaning, pronunciation, and examples
* 🖱️ Interactive buttons and modals
* ❓ FAQ section
* 🔐 Simple login interface
* 📱 Responsive design
* 🌐 Dynamic vocabulary data from an API

## 🛠️ Technologies

* HTML5
* JavaScript (ES6+)
* Tailwind CSS
* REST API
* Git & GitHub

## 🌐 API

The project uses the **Programming Hero OpenAPI** for vocabulary data.

### All Lessons

```text
https://openapi.programming-hero.com/api/levels/all
```

### Words by Lesson

```text
https://openapi.programming-hero.com/api/level/{level_no}
```

Example:

```text
https://openapi.programming-hero.com/api/level/1
```

### Individual Word Details

```text
https://openapi.programming-hero.com/api/word/{word_id}
```

Example:

```text
https://openapi.programming-hero.com/api/word/1
```

## 📂 Project Structure

```text
English-janala/
│
├── index.html
├── script.js
├── tailwind.config.js
├── package.json
├── package-lock.json
│
├── images/
│   └── ...
│
└── .github/
    └── workflows/
        └── ...
```

## 🚀 Run Locally

```bash
git clone https://github.com/cmidul/English-janala.git
cd English-janala
```

Open `index.html` in your browser, or use **VS Code Live Server** for development.

## 📖 Concepts Used

- DOM manipulation
- `fetch()` and API integration
- `async/await`
- JSON data handling
- Event listeners and event delegation
- Dynamic HTML generation
- Modals and interactive UI
- Responsive design with Tailwind CSS

## 📌 Project Status

This is a **practice project** built to strengthen JavaScript and frontend development fundamentals.
