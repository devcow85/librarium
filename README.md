# Librarium

Librarium is a personal portfolio website built as a static one-page site. It uses JSON data to dynamically render all technical information in a single page and is easily deployed on Vercel for fast, reliable hosting.

---

## 🔗 Live Demo

Visit: [https://librarium-indol.vercel.app/](https://librarium-indol.vercel.app/)

---

## 🚀 Key Features

* **Single-Page Portfolio**: All sections (About, Skills, Projects, Blog links, etc.) are generated from a single JSON file.
* **Static Site Generation**: Built with Next.js (or your chosen SSG framework), providing fast load times and SEO benefits.
* **JSON-Driven Content**: Update portfolio content by editing JSON—no code changes required.
* **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices.
* **Vercel Deployment**: Connect your GitHub repo to Vercel for automatic builds and deployments on every commit.

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/devcow85/librarium.git
cd librarium

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

To create a production build and preview:

```bash
npm run build
npm start
# or
yarn build
yarn start
```

---

## 🗂️ Project Structure

```
librarium/
├─ public/             # Static assets (icons, images)
├─ app/
├─ components/         # React components
├─ data/
│  ├─ intro.json       # Portfolio content
│  ├─ articles.json    # Publication content
│  └─ projects.json    # Projects content
├─ .gitignore
├─ ...
├─ package.json
└─ README.md
```

---

## 🛠️ JSON Data Example

Define your portfolio in `src/data/intro.json`:

```json
{
  "name": "Your Name",
  "position": "Software Engineer, Researcher, Open Source Contributor",
  "description": "...",
  "expertise": [
    "SW Framework",
    "Simulation",
    "Quantum Computing",
    "SW-HW Co-design / optimization"
  ],
  "education": [
    {"university": "XX University",
    "degree": "M.S Degree",
    "major": "Electronics Engineering",
    "graduation_date": "Feb, 2012"},
    {"university": "XX University",
    "degree": "B.S Degree",
    "major": "Electronics Engineering",
    "graduation_date": "Feb, 2010"}
  ],
  "professional_experience": [
    {"job_title": "Researcher",
    "company": "XX",
    "location": "XX",
    "dates": "Dec, 2020 - Present"},
    {"job_title": "Senior Engineer",
    "company": "XX",
    "location": "XX",
    "dates": "Apr, 2010 - Mar, 2020"}]
}
```

---

## ☁️ Deployment on Vercel

1. Link your GitHub repository to Vercel.
2. Set the build command to `npm run build` (or `yarn build`).
3. Deploy and enjoy automatic updates on every push.

---

## 🤝 Contributing

1. Create an issue or submit a pull request.
2. Follow code style guidelines (Prettier + ESLint).
3. Ensure tests pass and build succeeds before merging.

---

## 📄 License

MIT © Seokhun
