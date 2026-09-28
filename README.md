# PES 6 Pro Career Manager (Desktop Companion App)

![Status: Under Active Development](https://img.shields.io/badge/status-active--development-orange?style=for-the-badge)
![Platform: Windows](https://img.shields.io/badge/platform-Windows%2010%20%7C%2011-blue?style=for-the-badge)
![Tech: Electron | JavaScript](https://img.shields.io/badge/tech-Electron%20%7C%20Node.js%20%7C%20Win32-green?style=for-the-badge)

A modern desktop career mode engine and tactical companion application built for **Pro Evolution Soccer 6 (PC)**. Designed to replace legacy Master League systems with multi-league calendars, European cup brackets, an interactive tactical whiteboard, dynamic transfer economics, and automated match result logging via Win32 process tracking.

---

## ⚡ Current Development Milestone
> **Status:** Stabilization & Pre-Beta Refinement  
> The engine is currently in active development. Core modules are being hardened for performance, memory synchronization, and full roster consistency before an initial release build.

---

## 🚀 Key Architectural Features

- **Multi-League Championship Engine:** Complete 38-to-42 round domestic schedules supporting the English Premiership, Liga Española, Serie A, Ligue 1, Eredivisie, and Rest of Europe.
- **UEFA Champions League Hub:** Authentic 32-club tournament framework featuring dynamic midweek group stages and two-legged knockout bracket progression.
- **Interactive Tactical Board & Radar Analysis:** Real-time drag-and-swap formation whiteboard with dynamic matchday condition arrows, attribute hexagon radar analysis, and individual player dossiers.
- **Dynamic Transfer Market & Economy:** Real-time player valuation algorithms based on ratings, performance, and match fitness, complete with a structured bidding engine and wage budget management.
- **Multi-Season Rollover Pipeline:** Automated seasonal rollovers featuring domestic champions, UCL honours, Ballon d'Or calculation, Golden Boot tracking, and player age/growth progression curves.
- **Native Process Bridge:** Background OS process tracking interfacing with `pes6.exe` lifecycle events for match completion handling.

---

## 🛠️ Technology Stack

- **Framework:** Electron (Node.js runtime environment)
- **Frontend Architecture:** Modern Vanilla JS (ES6+), Semantic HTML5, CSS3 Custom Properties
- **System Integration:** Windows Win32 API hooks, child process lifecycle monitoring, native memory pointer scraping
- **Storage Layer:** High-speed client-side state caching with JSON roster validation

---

## 💻 Local Development Setup

To run this repository locally:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Jamal23-dev/pes6-pro-career-manager.git](https://github.com/Jamal23-dev/pes6-pro-career-manager.git)
   cd pes6-pro-career-manager
