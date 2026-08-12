# Ashoka Data Society

A static website for the Ashoka Data Society (ADS) — a student-led community at Ashoka University for data science, analytics, machine learning, and collaborative research.

## Pages

- **Home** (`index.html`) — Landing page with background video, logo, and social links
- **Events** (`pages/events.html`) — Past and upcoming ADS events with descriptions
- **Research** (`pages/research.html`) — Published research articles by ADS members
- **About Us** (`pages/about.html`) — Team listing with presidents and department heads

## Project Structure

```
├── index.html                    # Home page (must stay at root for hosting)
├── pages/
│   ├── about.html                # Team page
│   ├── events.html                # Events listing
│   ├── research.html             # Research listing
│   ├── research1.html            # NBA free throw analysis (full article)
│   ├── research2.html            # NLP for sentiment analysis (full article)
│   ├── research3.html            # Computer vision for wildlife monitoring (full article)
│   ├── research-insights.html    # Research & Insights vertical page
│   ├── strategy-events.html      # Strategy & Events vertical page
│   ├── outreach.html             # Outreach vertical page
│   └── media-marketing.html      # Media & Marketing vertical page
├── css/
│   └── styles.css                # Shared stylesheet
├── media/
│   ├── logo.png                  # ADS logo
│   ├── background.mp4            # Background video for homepage
│   ├── events/                   # Event poster images
│   ├── team/                     # Team member photos
│   └── Logos/                    # Partner/collaboration logos
├── .gitignore
└── README.md
```

## Development

The site uses vanilla HTML + CSS with a shared stylesheet. Pages in `pages/` reference shared assets with a `../` prefix (e.g. `../css/styles.css`, `../media/logo.png`); links between pages within `pages/` stay relative to each other. Open any `.html` file in a browser to view.

## Links

- Instagram: [@ashokadatasociety](https://www.instagram.com/ashokadatasociety/)
- LinkedIn: [Ashoka Data Society](https://www.linkedin.com/company/ashoka-data-society/posts/)
