# Lost & Found Portal

A modern web application for reporting and managing lost and found items on campus.

## Features

- **Report Items**: Submit lost or found item reports with detailed information
- **Browse Reports**: View all reported items with search and filter functionality
- **Database Storage**: Persistent storage using SQLite database with Prisma ORM
- **Modern UI**: Beautiful, responsive interface with dark mode support

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **UI Components**: Radix UI, Tailwind CSS
- **Database**: SQLite with Prisma ORM
- **Styling**: Tailwind CSS with custom components

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lost-found-portal
```

2. Install dependencies:
```bash
npm install
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

The application uses a simple `Report` model with the following fields:

- `id`: Unique identifier (CUID)
- `reporterName`: Name of the person reporting
- `type`: Either "Lost" or "Found"
- `itemName`: Name/description of the item
- `description`: Detailed description of the item
- `createdAt`: Timestamp when the report was created
- `updatedAt`: Timestamp when the report was last updated

## API Endpoints

- `GET /api/reports` - Fetch all reports
- `POST /api/reports` - Create a new report

## Development

### Database Commands

```bash
# View database in Prisma Studio
npx prisma studio

# Reset database
npx prisma db push --force-reset

# Seed database
npm run db:seed
```

### Adding New Features

1. Update the Prisma schema in `prisma/schema.prisma`
2. Run `npx prisma generate` to update the client
3. Run `npx prisma db push` to apply changes
4. Update API routes and components as needed

## Production Deployment

For production, consider:

1. **Database**: Switch to PostgreSQL or MySQL
2. **Environment Variables**: Set up proper environment configuration
3. **Security**: Add authentication and authorization
4. **File Uploads**: Add image upload functionality for items
5. **Notifications**: Add email/SMS notifications for matches

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is built for academic purposes. 
