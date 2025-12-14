# JSAR Keynotes

This repository continuously publishes JSAR’s latest thinking, design, and progress in the form of Keynotes. It serves both internal stakeholders and the community to align on milestones, decisions, and practical learnings.

**Official Website**: https://m-creativelab.github.io/jsar-runtime/

## Overview
- Stack: `React` + `TypeScript` + `Vite`
- Purpose: present JSAR evolution as demoable, readable Keynotes
- Cadence: milestone-based updates with full history retained

## View Locally
- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build for production: `npm run build`
- Preview build: `npm run preview`

## Content Structure
- Each Keynote captures a phase-aligned snapshot: topic, problem, approach, conclusion
- Pages and components structure the content for reuse and presentation
- Versioned history preserves context across iterations

## Release & Updates
- Automated build and deploy via CI/CD (see `.github/workflows`)
- Pushes to `main` trigger preview updates to keep content in sync

## Contributing
- Add or revise Keynotes using consistent structure and terminology
- Before submitting, run: `npm run lint` and `npm run check`
- In PRs, include background and impact scope to aid review

## License
- Content follows the project’s license. For external references, clearly attribute source and authorization in the relevant pages.
