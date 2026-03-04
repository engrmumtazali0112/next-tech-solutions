from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Optional
import uvicorn

app = FastAPI(title="AI & Django Innovators API", version="1.0.0")

# CORS — allow React dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ─── Models ────────────────────────────────────────────────────────────────────

class ContactForm(BaseModel):
    name: str
    email: str
    subject: Optional[str] = ""
    message: str

# ─── Static Data ───────────────────────────────────────────────────────────────

SERVICES = [
    {
        "id": 1,
        "title": "Web Development",
        "description": "Full-stack web applications built with Django, React, and modern frameworks. From MVPs to enterprise-scale platforms.",
        "icon": "🌐",
        "features": ["Django REST Framework", "React / Next.js", "PostgreSQL / MySQL", "REST & GraphQL APIs"],
    },
    {
        "id": 2,
        "title": "SaaS Solutions",
        "description": "End-to-end SaaS product development — multi-tenancy, billing, onboarding flows, and scalable backend architecture.",
        "icon": "☁️",
        "features": ["Multi-tenant Architecture", "Stripe / Payment Integration", "User Auth & Roles", "Admin Dashboards"],
    },
    {
        "id": 3,
        "title": "Database Development",
        "description": "Schema design, query optimization, migrations, and database management for high-performance applications.",
        "icon": "🗄️",
        "features": ["PostgreSQL & MySQL", "Redis Caching", "Database Migrations", "Query Optimization"],
    },
    {
        "id": 4,
        "title": "AI & ML Integration",
        "description": "Integrate cutting-edge AI models and machine learning pipelines into your products to automate workflows.",
        "icon": "🤖",
        "features": ["OpenAI / LLM Integration", "Custom ML Models", "Data Pipelines", "Intelligent Automation"],
    },
    {
        "id": 5,
        "title": "Cloud Application Development",
        "description": "Cloud-native applications on AWS, GCP, or Azure with containerization, CI/CD, and auto-scaling.",
        "icon": "🚀",
        "features": ["AWS / GCP / Azure", "Docker & Kubernetes", "CI/CD Pipelines", "Serverless Functions"],
    },
    {
        "id": 6,
        "title": "Mobile Application Development",
        "description": "Cross-platform mobile apps with React Native, backed by robust Django REST APIs.",
        "icon": "📱",
        "features": ["React Native", "iOS & Android", "Push Notifications", "Offline Support"],
    },
    {
        "id": 7,
        "title": "Custom Software Development",
        "description": "Bespoke software tailored to your business processes — from automation tools to complex enterprise systems.",
        "icon": "⚙️",
        "features": ["Business Automation", "ERP / CRM Systems", "Third-party Integrations", "Legacy Modernization"],
    },
    {
        "id": 8,
        "title": "IT Consulting",
        "description": "Strategic technology consulting to help you make smarter decisions, choose the right stack, and scale confidently.",
        "icon": "💡",
        "features": ["Architecture Review", "Tech Stack Advisory", "Code Audits", "Scalability Planning"],
    },
]

TEAM = [
    {
        "id": 1,
        "name": "Mumtaz Ali",
        "role": "Founder & Lead Developer",
        "bio": "Full-stack engineer specializing in Django, AI integrations, and scalable SaaS architectures. Passionate about building products that matter.",
        "skills": ["Django", "React", "Python", "AI/ML", "PostgreSQL"],
        "linkedin": "#",
        "github": "#",
        "avatar": "MA",
    },
    {
        "id": 2,
        "name": "Sarah Khan",
        "role": "Frontend Engineer",
        "bio": "UI/UX engineer crafting beautiful, accessible interfaces with React and modern CSS. Turns wireframes into delightful user experiences.",
        "skills": ["React", "TypeScript", "Tailwind", "Figma", "Next.js"],
        "linkedin": "#",
        "github": "#",
        "avatar": "SK",
    },
    {
        "id": 3,
        "name": "Ahmed Raza",
        "role": "Backend & DevOps Engineer",
        "bio": "Backend architect with deep expertise in cloud infrastructure, containerization, and building high-availability systems.",
        "skills": ["FastAPI", "Docker", "AWS", "PostgreSQL", "Redis"],
        "linkedin": "#",
        "github": "#",
        "avatar": "AR",
    },
    {
        "id": 4,
        "name": "Fatima Noor",
        "role": "AI/ML Engineer",
        "bio": "Machine learning engineer specializing in NLP, LLM integrations, and building AI-powered features for real-world applications.",
        "skills": ["Python", "TensorFlow", "OpenAI", "LangChain", "FastAPI"],
        "linkedin": "#",
        "github": "#",
        "avatar": "FN",
    },
]

TESTIMONIALS = [
    {
        "id": 1,
        "name": "James Mitchell",
        "role": "CTO, FinTrack Inc.",
        "company": "FinTrack Inc.",
        "text": "AI & Django Innovators built our entire SaaS platform from scratch. The code quality, communication, and delivery speed were exceptional. They're now our go-to development partner.",
        "rating": 5,
        "avatar": "JM",
    },
    {
        "id": 2,
        "name": "Priya Sharma",
        "role": "Product Manager, EduFlow",
        "company": "EduFlow",
        "text": "We needed a complex database architecture for our e-learning platform. The team delivered a perfectly optimized schema that cut our query times by 70%. Highly recommend!",
        "rating": 5,
        "avatar": "PS",
    },
    {
        "id": 3,
        "name": "Carlos Rivera",
        "role": "Startup Founder",
        "company": "Shopify App",
        "text": "From API design to React frontend to cloud deployment — they handled everything seamlessly. Professional, reliable, and genuinely invested in our success.",
        "rating": 5,
        "avatar": "CR",
    },
    {
        "id": 4,
        "name": "Amira Hassan",
        "role": "CEO, HealthBridge",
        "company": "HealthBridge",
        "text": "The AI integration they built for our patient management system has been transformative. The team's technical depth and creativity exceeded all our expectations.",
        "rating": 5,
        "avatar": "AH",
    },
    {
        "id": 5,
        "name": "Tom Erikson",
        "role": "Director of Engineering",
        "company": "LogiFlow",
        "text": "Clean architecture, well-documented code, and on-time delivery. It's rare to find a team that excels at both technical excellence and client communication. They do.",
        "rating": 5,
        "avatar": "TE",
    },
    {
        "id": 6,
        "name": "Layla Ahmadi",
        "role": "Founder, StyleAI",
        "company": "StyleAI",
        "text": "Built our mobile app in React Native with a Django backend in under 3 months. The app is fast, beautiful, and our users love it. 10/10 would hire again.",
        "rating": 5,
        "avatar": "LA",
    },
]

STATS = {
    "projects_completed": 85,
    "happy_clients": 60,
    "years_experience": 5,
    "technologies": 20,
}

# ─── Routes ────────────────────────────────────────────────────────────────────

@app.get("/")
def root():
    return {"message": "AI & Django Innovators API", "status": "running"}

@app.get("/api/services")
def get_services():
    return {"services": SERVICES}

@app.get("/api/services/{service_id}")
def get_service(service_id: int):
    service = next((s for s in SERVICES if s["id"] == service_id), None)
    if not service:
        raise HTTPException(status_code=404, detail="Service not found")
    return service

@app.get("/api/team")
def get_team():
    return {"team": TEAM}

@app.get("/api/testimonials")
def get_testimonials():
    return {"testimonials": TESTIMONIALS}

@app.get("/api/stats")
def get_stats():
    return STATS

@app.post("/api/contact")
def submit_contact(form: ContactForm):
    # In production, you'd send an email or save to DB here
    print(f"New contact from {form.name} ({form.email}): {form.message}")
    return {
        "success": True,
        "message": f"Thanks {form.name}! We'll get back to you within 24 hours.",
    }

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
