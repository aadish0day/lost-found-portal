# 🎒 Lost & Found Portal

> A modern, responsive web application for managing lost and found items on campus or in any community setting.

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?style=for-the-badge&logo=postgresql)](https://postgresql.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)](https://prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

### 🔍 **Core Functionality**
- **Report Lost Items**: Easily report lost items with detailed descriptions
- **Report Found Items**: Help others by reporting found items
- **Browse All Reports**: View all lost and found items in one place
- **Real-time Updates**: See new reports as they're added

### 🎨 **User Experience**
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark Mode Support**: Toggle between light and dark themes
- **Modern UI**: Clean, intuitive interface built with Radix UI components
- **Fast Performance**: Optimized with Next.js 15 and React 19

### 🛠 **Technical Features**
- **Type Safety**: Full TypeScript support
- **Database Integration**: PostgreSQL with Prisma ORM
- **API Routes**: RESTful API for data management
- **Environment Security**: Secure environment variable handling

## 🚀 Live Demo

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/aadish0day/lost-found-portal)

**Live URL**: `https://your-project-name.vercel.app` (after deployment)

## 📸 Screenshots

> *Screenshots coming soon! The app features a clean, modern interface with:*
> - **Homepage**: Welcome screen with quick access to report items
> - **Report Form**: Easy-to-use form for reporting lost/found items
> - **Items List**: Organized view of all reports with filtering options
> - **Dark Mode**: Beautiful dark theme for comfortable viewing

## 🛠 Tech Stack

### **Frontend**
- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **UI Library**: [Radix UI](https://www.radix-ui.com/) - Accessible component primitives
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful, customizable icons

### **Backend**
- **Database**: [PostgreSQL](https://postgresql.org/) - Robust relational database
- **ORM**: [Prisma](https://prisma.io/) - Next-generation ORM
- **API**: Next.js API Routes - Serverless API endpoints
- **Hosting**: [Vercel](https://vercel.com/) - Optimal deployment platform

### **Development Tools**
- **Package Manager**: npm with legacy peer deps support
- **Code Quality**: ESLint, TypeScript compiler
- **Database Management**: Prisma Studio, Prisma CLI

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **PostgreSQL** database (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aadish0day/lost-found-portal.git
   cd lost-found-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
   > **Note**: If you encounter peer dependency issues, try `npm install --legacy-peer-deps`

3. **Set up environment variables**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env and add your database URL
   # Example for Neon PostgreSQL:
   DATABASE_URL="postgresql://username:password@hostname:port/database?sslmode=require"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Push the schema to the database
   npx prisma db push
   
   # Seed the database with sample data
   npm run seed
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

```prisma
model Report {
  id           String   @id @default(cuid())
  reporterName String
  type         String   // "Lost" or "Found"
  itemName     String
  description  String
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt
}
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/reports` | Fetch all reports (ordered by creation date) |
| `POST` | `/api/reports` | Create a new report |
| `GET` | `/api/debug-env` | Debug environment variables (development only) |

### Example API Usage

**Create a new report:**
```bash
curl -X POST http://localhost:3000/api/reports \
  -H "Content-Type: application/json" \
  -d '{
    "reporterName": "John Doe",
    "type": "Lost",
    "itemName": "iPhone 13",
    "description": "Black iPhone 13 with a cracked screen"
  }'
```

**Fetch all reports:**
```bash
curl http://localhost:3000/api/reports
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository

3. **Set up Environment Variables**
   - In Vercel dashboard, go to your project settings
   - Navigate to "Environment Variables"
   - Add: `DATABASE_URL` with your PostgreSQL connection string

4. **Deploy**
   - Click "Deploy" and wait for deployment to complete
   - Your app will be available at `https://your-project-name.vercel.app`

### Other Deployment Options

- **Netlify**: Use Next.js static export
- **Railway**: Full-stack deployment with database
- **DigitalOcean**: VPS deployment with Docker

## 🛠 Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Database management
npx prisma studio          # Open Prisma Studio
npx prisma db push         # Push schema changes
npx prisma generate        # Generate Prisma client
npm run seed              # Seed database with sample data

# Code quality
npm run lint              # Run ESLint
npx tsc --noEmit          # Run TypeScript compiler
```

## 📁 Project Structure

```
lost-found-portal/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── items/             # Items listing page
│   ├── report/            # Report form page
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # Radix UI components
│   ├── header.tsx        # Navigation header
│   └── theme-*.tsx       # Theme management
├── lib/                   # Utility functions
│   ├── db.ts             # Database connection
│   └── utils.ts          # Helper functions
├── prisma/               # Database schema and migrations
│   ├── schema.prisma     # Database schema
│   └── seed.ts           # Sample data
├── public/               # Static assets
└── styles/               # Global styles
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### **Ways to Contribute**
- 🐛 **Report bugs** - Found an issue? Open a bug report
- 💡 **Suggest features** - Have ideas? Open a feature request
- 🔧 **Fix bugs** - Submit a pull request with bug fixes
- ✨ **Add features** - Implement new functionality
- 📚 **Improve docs** - Help make the documentation better

### **Getting Started**
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### **Development Guidelines**
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 🐛 Known Issues

- [ ] Image upload functionality not yet implemented
- [ ] Email notifications not configured
- [ ] User authentication not implemented
- [ ] Search and filtering features pending

## 🗺 Roadmap

### **Phase 1** - Core Features ✅
- [x] Basic lost/found reporting
- [x] Database integration
- [x] Responsive design
- [x] Dark mode support

### **Phase 2** - Enhanced Features 🚧
- [ ] Image upload for items
- [ ] Search and filtering
- [ ] User authentication
- [ ] Email notifications

### **Phase 3** - Advanced Features 📋
- [ ] Mobile app (React Native)
- [ ] Push notifications
- [ ] Admin dashboard
- [ ] Analytics and reporting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Aadish** - *Initial work* - [@aadish0day](https://github.com/aadish0day)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Prisma](https://prisma.io/) for the excellent ORM
- [Vercel](https://vercel.com/) for seamless deployment

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/aadish0day/lost-found-portal/issues)
- **Discussions**: [GitHub Discussions](https://github.com/aadish0day/lost-found-portal/discussions)
- **Email**: [Your Email](mailto:your-email@example.com)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Aadish](https://github.com/aadish0day)

</div>