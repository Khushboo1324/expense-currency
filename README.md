# Expense Tracker & Currency Converter

## 📌 Overview
This is a **Personal Budget and Expense Tracker** with an integrated **Currency Converter**. It allows users to log expenses, categorize spending, and convert expenses into different currencies using real-time exchange rates from the **Open Exchange Rates API**.

## 🛠️ Features
- ✅ Add, edit, and delete expenses
- ✅ Categorized spending insights
- ✅ Real-time currency conversion (INR and other currencies)
- ✅ Interactive charts for spending analysis
- ✅ Persistent data using **LocalStorage API**
- ✅ Responsive and user-friendly interface

## 🏗️ Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Data Persistence:** LocalStorage API
- **Currency Conversion:** Open Exchange Rates API

## 📦 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Khushboo1324/expense-currency.git
   cd expense-currency
   ```
2. Open `index.html` in a browser.
3. Configure API keys for currency conversion.

## 🔑 Setting Up Open Exchange Rates API
1. Sign up at [Open Exchange Rates](https://openexchangerates.org/).
2. Get your **API key**.
3. Update your JavaScript file:
   ```js
   const API_KEY = 'YOUR_API_KEY_HERE';
   const API_URL = `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`;
   ```

## 🚀 Usage
- Add expenses with amount, category, and date.
- View total and categorized spending.
- Convert expenses into different currencies.
- View graphical representation of spending habits.

## 📜 License
This project is licensed under the MIT License.

## 🤝 Contributing
Feel free to contribute by submitting issues or pull requests!
