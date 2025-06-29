# 🧠 Offline AI Tutor

An **AI-powered offline educational assistant** built using Python. This project provides personalized learning experiences through lessons, interactive quizzes, and performance visualization with charts — all fully functional **without internet access**.

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
├── lessons/ # Subject-wise content in JSON
├── quizzes/ # Quiz questions per topic
├── students/ # Individual progress files (auto-generated)
├── assets/ # Charts, images, etc.
├── main.py # Entry point (contains logic and flow)
├── charts.py # Handles progress visualization
├── requirements.txt # Python dependencies
└── README.md # Project documentation
```
---

## 📦 How to Run

```bash
git clone https://github.com/vinithareddy09/AI_Offline_Tutor.git
cd AI_Offline_Tutor
python -m venv venv
venv\Scripts\activate       # For Windows
# OR
source venv/bin/activate    # For Linux/macOS
pip install -r requirements.txt
python main.py
```
---

## Technologies Used

-Python 3.x

-matplotlib / seaborn – for chart generation

-JSON – for storing lessons, quizzes, and student data

-tkinter – (optional) GUI-based front end if implemented

## 📈 Features in Action
-Subject selection interface

-Student name-based personalized learning

-Real-time quiz performance charts

-Auto-generated student reports

## 📌 Use Cases

- 📚 Home-schooling in low-connectivity areas

- 🏫 Local learning in rural schools

- 🧠 Personalized coaching systems

- 🧑‍🎓 Exam prep tracking for individual learners

## 📬 Feedback & Contributions
Found a bug? Have a feature idea?
Feel free to open an issue or submit a pull request!

## 📄 License
- This project is licensed under the MIT License.

---

