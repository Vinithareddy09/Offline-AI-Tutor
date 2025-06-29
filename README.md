# 🧠 Offline AI Tutor

An **AI-powered offline educational assistant** built using Python. This project provides personalized learning experiences through lessons, interactive quizzes, and performance visualization with charts — all fully functional **without internet access**.

This application is designed to be converted into a `.exe` file using **PyInstaller** to make it easily distributable and runnable on any Windows system — **without needing Python or an internet connection**.

---

## 🚀 Features

- 🗂️ **Static Content Loader** – Lessons and quizzes are loaded from local JSON files.
- 📊 **Progress Charts** – Visual feedback using animated graphs (curves instead of points).
- 🎯 **Adaptive Quiz System** – Tracks performance and adjusts questions dynamically.
- 👤 **Student-wise Tracking** – Saves individual files for each student with their progress.
- 🔒 **Offline Capability** – 100% functional without internet, ideal for rural/low-resource areas.

---

## 📁 Project Structure


```
AI_Offline_Tutor/
├── lessons/ ← Subject-wise content in JSON
├── quizzes/ ← Quiz questions per topic
├── students/ ← Individual progress files (auto-generated)
├── assets/ ← Charts, images, etc.
├── main.py ← Entry point (contains logic and flow)
├── charts.py ← Handles progress visualization
├── requirements.txt ← Python dependencies
└── README.md ← Project documentation

```
---

## 📦 How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/vinithareddy09/AI_Offline_Tutor.git
cd AI_Offline_Tutor

```
---
### 2. Install Dependencies

```bash
npm install
```
---
### 3. Run the Application

```bash
npm start
```
---
## Convert to Executable (.exe) for Offline Use
To ensure the app runs independently on systems without Python installed:

### Steps to convert with PyInstaller:
---
#### 1. Install PyInstaller:

```bash

pip install pyinstaller

```
---
#### 2. Generate the .exe file:

```bash

pyinstaller --onefile main.py
```
---
3. The executable will appear in the dist/ folder. Make sure to include the lessons/, quizzes/, students/, and assets/ folders alongside the .exe.
---
## 📈 Features in Action
- Subject selection interface

- Student name-based personalized learning

- Real-time quiz performance charts

- Auto-generated student reports

---
## 📌 Use Cases

- 📚 Home-schooling in low-connectivity areas

- 🏫 Local learning in rural schools

- 🧠 Personalized coaching systems

- 🧑‍🎓 Exam prep tracking for individual learners


---

