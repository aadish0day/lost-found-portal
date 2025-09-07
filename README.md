# Lost & Found Portal

A modern web application for reporting and managing lost and found items on campus.

## Features

- Report lost or found items with detailed information
- Browse and search through all reported items
- Responsive design that works on all devices
- Dark mode support
- PostgreSQL database with Prisma ORM

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Styling**: Tailwind CSS, Radix UI
- **API**: Next.js API Routes

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aadish0day/lost-found-portal.git
cd lost-found-portal
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Set up environment variables:
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env and add your database URL
# For example, if using Neon PostgreSQL:
# DATABASE_URL="postgresql://username:password@ep-xxx-xxx-pooler.region.aws.neon.tech/database?sslmode=require"
```

4. Set up the database:
```bash
# Generate Prisma client
npx prisma generate
# Push the schema to the database
npx prisma db push
# Seed the database with sample data
npm run seed
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Schema

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

## API Endpoints

- `GET /api/reports` - Fetch all reports
- `POST /api/reports` - Create a new report

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Database management
npx prisma studio
npx prisma db push
npm run db:seed
```

## Production Deployment

### Deploy to Vercel

1. **Push your code to GitHub** (make sure no `.env` files are committed)

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository

3. **Set up Environment Variables**:
   - In Vercel dashboard, go to your project settings
   - Navigate to "Environment Variables"
   - Add: `DATABASE_URL` with your PostgreSQL connection string
   - Example: `postgresql://username:password@hostname:port/database?sslmode=require`

4. **Deploy**:
   - Vercel will automatically detect Next.js
   - Click "Deploy" and wait for deployment to complete
   - Your app will be available at `https://your-project-name.vercel.app`

### Additional Production Considerations

- ✅ PostgreSQL database (already configured)
- ✅ Environment variables properly set
- ⏳ Add authentication
- ⏳ Add image upload functionality
- ⏳ Set up email notifications

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.
