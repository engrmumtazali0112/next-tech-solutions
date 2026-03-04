
# 🚀 TechNova IT Solutions — Full Stack Website

A production-ready company website built with **FastAPI** (backend) + **React + Vite** (frontend).

---

## 📁 Project Structure

```
itservices-website/
├── backend/                  # FastAPI Backend
│   ├── app/
│   │   ├── core/             # Config, DB connection
│   │   │   ├── config.py     # Settings (env vars)
│   │   │   └── database.py   # SQLAlchemy setup
│   │   ├── models/           # Database Models
│   │   │   ├── contact.py    # ContactMessage model
│   │   │   └── newsletter.py # NewsletterSubscriber model
│   │   ├── schemas/          # Pydantic Schemas
│   │   │   ├── contact.py    # Request/Response validation
│   │   │   └── newsletter.py
│   │   ├── routers/          # API Route Handlers
│   │   │   ├── contact.py    # POST /api/v1/contact/
│   │   │   ├── newsletter.py # POST /api/v1/newsletter/subscribe
│   │   │   └── services.py   # GET  /api/v1/services/
│   │   └── services/         # Business Logic Layer
│   │       ├── contact_service.py
│   │       └── newsletter_service.py
│   ├── main.py               # FastAPI app entry point
│   ├── requirements.txt
│   └── .env                  # Environment variables
│
└── frontend/                 # React + Vite Frontend
    ├── src/
    │   ├── components/
    │   │   ├── layout/       # Navbar, Footer
    │   │   └── sections/     # Hero, Services, About, Testimonials, CTA
    │   ├── pages/            # Home, Contact
    │   ├── utils/            # API utility (axios)
    │   └── index.css         # Global styles (Tailwind)
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    └── package.json
```

---

## ⚙️ Backend Setup

```bash
cd backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env .env.local                # Edit with your settings

# Run development server
uvicorn main:app --reload --port 8000
```

**API Docs:** http://localhost:8000/docs  
**ReDoc:** http://localhost:8000/redoc

---

## ⚛️ Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

**App:** http://localhost:5173

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| GET | `/api/v1/services/` | Get all services |
| GET | `/api/v1/services/{id}` | Get service by ID |
| POST | `/api/v1/contact/` | Submit contact form |
| GET | `/api/v1/contact/messages` | List all messages |
| POST | `/api/v1/newsletter/subscribe` | Subscribe to newsletter |
| POST | `/api/v1/newsletter/unsubscribe` | Unsubscribe |

---

## 🚀 Production Deployment

**Backend:** Deploy with `gunicorn` on any VPS, or use Railway/Render.  
**Frontend:** Build with `npm run build`, deploy to Vercel/Netlify.  
**Database:** Switch `DATABASE_URL` to PostgreSQL for production.

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | FastAPI, SQLAlchemy, Pydantic v2 |
| Frontend | React 18, Vite, Tailwind CSS, Framer Motion |
| Database | SQLite (dev) / PostgreSQL (prod) |
| Forms | React Hook Form |
| HTTP Client | Axios |
| Notifications | React Hot Toast |
=======
# next-tech-solutions
A production-ready company website built with **FastAPI** (backend) + **React + Vite** (frontend).
