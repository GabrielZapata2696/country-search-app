# 🌍 Country App

<div align="center">
  <h3>A comprehensive Angular application for exploring countries around the world</h3>
  <p><em>Built with Angular 20, TailwindCSS, and DaisyUI</em></p>
</div>

---

## 📖 About

Country App is a modern, responsive web application that allows users to search and explore detailed information about countries worldwide. The app provides multiple search options and displays comprehensive country data in an intuitive, user-friendly interface.

## ✨ Features

### 🔍 Multiple Search Options
- **Search by Capital**: Find countries by their capital cities
- **Search by Country Name**: Look up countries by their common or official names
- **Search by Region**: Browse countries by continental regions (Africa, Americas, Asia, Europe, Oceania, Antarctic)
- **Country Details**: View detailed information about individual countries

### 🚀 Modern Tech Stack
- **Angular 20**: Latest Angular framework with standalone components
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **DaisyUI**: Beautiful component library for Tailwind CSS
- **RxJS**: Reactive programming with Observables
- **REST Countries API**: Real-time country data

### ⚡ Performance Features
- **Smart Caching**: Built-in cache system for improved performance
- **Lazy Loading**: Route-based code splitting for faster load times
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Error Handling**: Comprehensive error management and user feedback

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Angular CLI

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/country-app.git
   cd country-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 🏗️ Project Structure

```
src/
├── app/
│   ├── country/                    # Country module
│   │   ├── components/             # Reusable components
│   │   │   ├── country-list/       # Country list display
│   │   │   ├── country-search-bar/ # Search input component
│   │   │   └── top-menu/           # Navigation menu
│   │   ├── interfaces/             # TypeScript interfaces
│   │   ├── layouts/                # Layout components
│   │   ├── pages/                  # Page components
│   │   │   ├── by-capital-page/    # Search by capital
│   │   │   ├── by-country/         # Search by country name
│   │   │   ├── by-region/          # Search by region
│   │   │   └── country-page/       # Individual country details
│   │   ├── services/               # Data services
│   │   └── Mapper/                 # Data transformation
│   ├── shared/                     # Shared components
│   │   ├── components/             # Common components
│   │   └── pages/                  # Shared pages
│   └── app.routes.ts              # Application routing
└── ...
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run unit tests |
| `npm run watch` | Build in watch mode |

## 🌐 API Integration

This application uses the [REST Countries API](https://restcountries.com/) to fetch real-time country data. The API provides comprehensive information including:

- Country names (common and official)
- Capital cities
- Population data
- Geographic regions and subregions
- Languages and currencies
- Country flags
- And much more...

## 🎨 UI Components

The app features a modern, clean design using:
- **TailwindCSS** for utility-first styling
- **DaisyUI** for pre-built components
- **Responsive grid layouts**
- **Interactive cards and buttons**
- **Loading states and error messages**
- **Hero section with call-to-action**

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 🖥️ Desktop computers (1200px+)
- 💻 Laptops and tablets (768px - 1199px)
- 📱 Mobile devices (< 768px)

## 🔄 State Management

The app implements efficient state management using:
- **Angular Signals** for reactive state
- **RxJS Observables** for async operations
- **Local caching** for improved performance
- **Route-based state** persistence

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, optimized for production deployment.

### Deployment Options
- **Vercel**: `vercel --prod`
- **Netlify**: Deploy `dist/` folder
- **Firebase Hosting**: `firebase deploy`
- **GitHub Pages**: Use GitHub Actions

## 🧪 Testing

Run unit tests using:
```bash
npm test
```

This executes the unit tests via [Karma](https://karma-runner.github.io) test runner.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [REST Countries API](https://restcountries.com/) for providing comprehensive country data
- [Angular Team](https://angular.io/) for the amazing framework
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [DaisyUI](https://daisyui.com/) for beautiful UI components

---

<div align="center">
  <p>Made with ❤️ and Angular</p>
</div>
