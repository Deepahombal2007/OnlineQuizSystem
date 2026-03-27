# Online Quiz System — Project Document

> **Living document** — Updated after every finalized step.

---

## Project Overview

| Item | Detail |
|------|--------|
| **Project** | Online Quiz System |
| **Frontend** | Next.js (HTML/CSS focus) → Vercel |
| **Backend** | FastAPI (Python) → Render |
| **Database** | PostgreSQL → Neon |
| **Started** | 2026-03-23 |

---

## Finalized Steps

### Step 1 — Project Scaffolding ✅
**Date:** 2026-03-23

- Created 3 separate project folders:
  - `db/` — Database layer (Neon PostgreSQL)
  - `backend/` — FastAPI backend (Render)
  - `frontend/` — Next.js frontend (Vercel)
- Each folder has its own `README.md` with setup instructions
- Created this `project_document.md` as a living tracker
- Created reusable skill files for each section under `.agents/skills/`

**Decisions:**
- Frontend will use HTML/CSS wherever possible, minimizing framework-specific CSS
- Each component (db, backend, frontend) stays in its own folder for clean separation
- Project will be built incrementally, phase by phase

---

### Step 2 — Authentication Foundation & Landing Page (Phase 1) ✅
**Date:** 2026-03-24

- **Database**: 
  - Created `db/schema.sql` with `users` table layout.
  - Initialized `quiz-system` project on Neon.
- **Backend (FastAPI)**:
  - Developed `main.py` with `/auth/signup` and `/auth/signin` placeholder routes.
  - Added `render.yaml` for unified service management.
  - Deployed as a Web Service on Render.
- **Frontend (Next.js)**:
  - Scaffolded modern Next.js 15+ App Router application.
  - Created a glassmorphism landing page with vanilla CSS.
  - Integrated "Sign In" and "Sign Up" UI components.
  - Deployed to Vercel with automated GitHub synchronization.
- **Source Control**:
  - Pushed all components to GitHub repo: `OnlineQuizSystem`.

**Decisions:**
- Opted for manual Next.js initialization to bypass CLI environment limitations.
- Used `curl.exe` and PowerShell to interact with Render and Neon APIs directly.
- Prepared `render.yaml` to ensure scalable backend deployments.

---

*Next steps will be appended below as they are finalized.*

