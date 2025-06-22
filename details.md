# Digital Phenotyping for Early Detection of Student Stress

A cross-platform mobile and web-based system that continuously monitors and predicts stress in students using smartphone and wearable sensor data, enhanced with active inputs like surveys and chatbot interactions.

---

## 📘 Description

This project, developed as part of the IEEE CS Bangalore Chapter Internship Program 2025, focuses on identifying student stress early using passive sensing and active feedback. The system collects data from internal sensors (GPS, accelerometer), wearable APIs (Fitbit, Apple HealthKit), and self-reports (PSS, DASS-21 surveys), then uses machine learning to detect stress levels. An admin dashboard supports real-time monitoring, CSV export, and user analytics.

---

## 🚀 Features

- 📱 Cross-platform mobile app built in Flutter
- 🔄 Passive data collection (location, movement)
- 💬 In-app chatbot for daily check-ins and mental health tips
- 📊 Admin dashboard for cohort analytics and CSV export
- 🔐 OAuth integration for Fitbit & Apple HealthKit
- 📈 Real-time alerts and sensor failure detection
- 📃 Survey modules (PSS, DASS-21) with automatic reminders
- 🔎 Machine Learning (SVM) for stress prediction
- 📦 Firebase Cloud Functions & Firestore DB
- 🛡️ GDPR & HIPAA-aligned data privacy controls

---

## 🧠 Tech Stack

- **Mobile App:** Flutter, Dart  
- **Backend:** Firebase (Auth, Firestore, Cloud Functions)  
- **APIs & Integrations:** Fitbit Web API, Apple HealthKit  
- **ML Tools:** Python (SVM, Feature Engineering)  
- **Dashboard:** Web frontend with Firebase backend  
- **Auth:** OAuth 2.0  
- **Analytics:** CSV export, Real-time logs, Engagement summaries  

---

## 🏗️ Architecture Overview

- **External API Layer:** Manages wearable data ingestion via secure tokens.
- **Consent Control Module:** Dynamic consent management based on data source.
- **Anomaly Detection:** Cloud Functions for sensor failure alerts.
- **Firestore DB:** Optimized for time-series queries per user.

---

## 📦 How to Run the Project

### 🔹 For Mobile App (Flutter)

```bash
git clone https://github.com/your-username/student-stress-detector.git
cd student-stress-detector/mobile-app
flutter pub get
flutter run
