# Contributing to Web Yarden

Thank you for your interest in contributing to Web Yarden! This document provides guidelines for contributing to the project.

## Development Setup

1. **Prerequisites**
   ```bash
   node >= 18.0.0
   npm >= 8.0.0
   ```

2. **Clone and Install**
   ```bash
   git clone https://github.com/shayacoca/web-yarden.git
   cd web-yarden
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Development Server**
   ```bash
   npm run dev
   ```

## Project Structure

```
├── app/                 # Next.js 14 App Router
├── components/          # Reusable React components
├── data/               # Static data files
├── lib/                # Utility functions
├── public/             # Static assets
├── store/              # Zustand state management
└── styles/             # Global styles
```

## Code Standards

### TypeScript
- Use TypeScript for all new code
- Maintain strict type checking
- Export types from component files

### React Components
- Use functional components with hooks
- Follow the component naming convention: `PascalCase`
- Use proper prop types with TypeScript interfaces

### Styling
- Use Tailwind CSS for styling
- Follow mobile-first responsive design
- Use semantic class names

### Code Quality
```bash
npm run lint          # Check linting
npm run lint:fix      # Fix auto-fixable issues
npm run type-check    # TypeScript checking
```

## Commit Guidelines

Use conventional commits:
- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Maintenance tasks

Example: `feat: add contact form validation`

## Pull Request Process

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Run tests and linting
5. Commit with conventional commit messages
6. Push to your fork
7. Create a Pull Request

## Testing

```bash
npm run build         # Test production build
npm run lint          # Run linting
npm run type-check    # Check TypeScript
```

## Deployment

The project supports multiple deployment platforms:
- **Vercel**: Automatic deployment via GitHub integration
- **Netlify**: Using `netlify.toml` configuration
- **Docker**: Using provided `Dockerfile`
- **Render**: Using `render.yaml` configuration

## Questions?

Contact: webyarden@gmail.com
