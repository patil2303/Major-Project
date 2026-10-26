# Contributing to Homigo 🏡

Thank you for your interest in contributing to **Homigo**! We welcome community contributions, UI enhancements, bug fixes, and documentation improvements.

## Code of Conduct

All contributors and participants are expected to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure an open, welcoming, and inclusive community.

## Getting Started

### 1. Prerequisites
Before running Homigo locally, ensure you have:
* **Node.js** (v18.x or higher)
* **npm** (Node Package Manager)
* **MongoDB** (Local instance or MongoDB Atlas connection string)
* **Cloudinary Account** (for image upload storage)

### 2. Fork and Clone
1. Fork the repository to your own GitHub account:
   `https://github.com/patil2303/Major-Project`
2. Clone your personal fork locally:
   ```bash
   git clone https://github.com/<your-username>/Major-Project.git
   cd Major-Project
   ```

### 3. Environment Setup
Create a `.env` file in the root directory following `.env.example`:
```env
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_token
SECRET=your_session_secret
ATLASDB_URL=your_mongodb_connection_string
```

### 4. Install Dependencies & Run
```bash
# Install required npm packages
npm install

# Start development server
npm start
```
The application will be live at `http://localhost:8080`.

## Contribution Workflow

We follow a structured branch-based GitHub workflow:

1. **Keep your main in sync:**
   ```bash
   git checkout main
   git pull origin main
   ```
2. **Create an isolated feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes:**
   - Adhere to existing code conventions.
   - Keep styles consistent with Bootstrap and existing CSS.
   - Test UI responsiveness on both mobile and desktop screens.
4. **Stage and commit your changes:**
   ```bash
   git add .
   git commit -m "feat(ui): add floating back-to-top button and footer improvements"
   ```
5. **Push to your fork:**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request:**
   - Navigate to `https://github.com/patil2303/Major-Project`.
   - Open a Pull Request comparing your feature branch against `main`.
   - Provide a clear title and description of your changes.

## Areas for Contribution
* **UI/UX Enhancements**: Responsive styling, micro-animations, accessible navigation controls.
* **Documentation**: Setup guides, API documentation, and code comments.
* **Bug Fixes**: Route validation, error handling, and form validations.
