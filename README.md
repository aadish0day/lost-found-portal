# Lost & Found Portal

A modern web application for reporting and managing lost and found items on campus.

## Features

- Report lost or found items with detailed information
- Browse and search through all reported items
- Responsive design that works on all devices
- Dark mode support
- SQLite database with Prisma ORM

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Database**: SQLite with Prisma ORM
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

3. Set up the database:
```bash
# Generate Prisma client
npx prisma generate
# Push the schema to the database
npx prisma db push
# Seed the database with sample data
npm run db:seed
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

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

For production deployment:

1. Switch to PostgreSQL or MySQL
2. Set up proper environment variables
3. Configure authentication
4. Add image upload functionality
5. Set up email notifications

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.
