# TechEx AI Command Center

Enterprise-grade multi-agent AI orchestration platform designed for intelligent workflow automation, analytics, and strategic decision support.

---

## Overview

TechEx AI Command Center simulates an enterprise AI workforce where specialized AI agents collaborate to process business tasks, analyze operational data, generate strategic insights, and produce executive-level reports.

The platform demonstrates:
- Multi-agent coordination
- Workflow orchestration
- AI-generated executive reporting
- Enterprise analytics dashboards
- Real-time workflow visualization
- Agent communication simulation
- Strategic decision support systems

---

## Features

### Multi-Agent AI Workforce
- Coordinator Agent
- Analytics Agent
- Finance Agent
- Operations Agent
- Research Agent

### Workflow Orchestration
- Dynamic workflow timeline
- Live execution states
- Dependency graph visualization
- Recent workflow tracking

### Executive Reporting
- AI-generated enterprise reports
- Real-time typing animation
- Markdown rendering
- Export report functionality

### Analytics Dashboard
- KPI visualization
- Operational intelligence metrics
- Revenue and workflow analytics
- Demo analytics environment

### Enterprise UI/UX
- Modern enterprise dashboard
- Responsive layout
- Interactive navigation
- Loading overlays and animations

---

## Tech Stack

### Frontend
- React.js
- Vite
- CSS3
- React Markdown
- Recharts

### Backend
- Flask
- Flask-CORS
- Python

### AI Integration
- Groq API
- Multi-agent orchestration architecture

---

## Project Structure

```bash
TechEx-AI-Command-Center/
│
├── backend/
│   ├── agents/
│   ├── routes/
│   ├── services/
│   ├── app.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── screenshots/
├── .env
├── .gitignore
└── README.md
```

---

## Installation & Setup

### Clone Repository

```bash
git clone <your-repository-url>
cd TechEx-AI-Command-Center
```

---

## Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python app.py
```

Backend runs on:
```bash
http://127.0.0.1:5000
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:
```bash
http://localhost:5173
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
GROQ_API_KEY=your_api_key_here
```

---

## Screenshots

### Dashboard
![Dashboard](screenshots/Dashboard.png)

### Workflow Management
![Workflows](screenshots/Workflows.png)

### Analytics Dashboard
![Analytics](screenshots/Analytics.png)

### AI Agents
![Agents](screenshots/Agents.png)

### Executive Report Generation
![Executive Report](screenshots/ExecutiveReport.png)

### Platform Settings
![Settings](screenshots/Settings.png)

### Workflow Execution
![Running](screenshots/Running.png)
---

## Demo Disclaimer

This project simulates enterprise workflow analytics and AI orchestration for demonstration and hackathon purposes.

Analytics, workflow metrics, and reports shown inside the dashboard are demo-generated and do not represent real enterprise data.

---

## Future Enhancements

- Real-time database integration
- Persistent workflow history
- User authentication
- Live collaboration system
- PDF report export
- Real enterprise analytics integration
- WebSocket live updates
- Docker deployment
- Cloud-native orchestration

---

## Author

Developed as a hackathon-ready enterprise AI automation platform project.
