# VI Coding Challenge

A modern web component project built with **Lit**, **TypeScript**, and **Vite**. Features a product showcase with Pokemon-themed components and Storybook integration.

## Features

- 🎨 **Web Components** built with Lit
- 📱 **Responsive Design**
- 🧩 **Storybook Integration** for component documentation
- 🚀 **GitHub Pages Deployment** via GitHub Actions

## Tech Stack

- **Lit**
- **TypeScript**
- **Vite**
- **Storybook**

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

Create an optimized production build:

```bash
npm run build
```

The output will be in the `dist/` folder.

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Storybook

Launch Storybook for component development:

```bash
npm run storybook
```

Build Storybook:

```bash
npm run build-storybook
```

## Project Structure

```
src/
├── index.css              # Global styles
├── my-element.ts          # Main component
├── components/
│   ├── product-card.ts
│   └── product-overview.ts
├── services/
│   └── pokemon-service.ts
├── assets/                # Images and SVGs
└── stories/               # Storybook stories
```

## Deployment

This project is automatically deployed to GitHub Pages via GitHub Actions.

### Live Demo

Visit: [https://nicolegomes1905.github.io/vi-coding-challenge/](https://nicolegomes1905.github.io/vi-coding-challenge/)

## Author

Created by Nicole Gomes (@nicolegomes1905)
