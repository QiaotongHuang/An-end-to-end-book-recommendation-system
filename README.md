# Recommendation Systems Project

This is a recommendation systems project completed by Qiaotong Huang for the INFO 7390 Final. It includes two recommendation algorithms based on collaborative filtering: SVD and ALS.

## Frontend

### Getting Started with Create React App

This project was bootstrapped with Create React App. Available scripts:

- `npm start`: Runs the app in the development mode. Open http://localhost:3000 to view it in your browser.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm run build`: Builds the app for production to the build folder.
- `npm run eject`: Ejects the project for full control over dependencies.

For more information on Create React App, refer to [the documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Backend

### Libraries & Environment

- Python 3.10
- `requirements.txt` for Python libraries

### Command Line to Run
```bash
pip install -r requirements.txt
python server.py
```

### Usage
- Clone the repository.
- Navigate to the code directory.
- Install Python dependencies using pip install -r requirements.txt.
- Run the server using python server.py.

## System Design
The recommendation system follows a client-server architecture. The frontend is built using React, providing an intuitive user interface for interacting with the recommendation algorithms. The backend is implemented in Python using Flask, serving as the server-side logic for processing requests, executing the recommendation algorithms, and communicating with the database.  
The system is designed to be scalable and maintainable. It utilizes industry-standard libraries and frameworks, such as React for the frontend and Flask for the backend, ensuring robustness and ease of maintenance. Additionally, the modular structure of the codebase allows for easy extension and customization of the recommendation algorithms.

<img width="1124" alt="image" src="https://github.com/QiaotongHuang/An-end-to-end-book-recommendation-system/assets/113825112/dd347ae2-5af3-429f-a2a7-338eeb896447">

<img width="1064" alt="image" src="https://github.com/QiaotongHuang/An-end-to-end-book-recommendation-system/assets/113825112/31269551-897c-4198-9f31-e7bcacadc14b">
