# Running the Metropolitan Website

The application now has a **separate frontend and backend** architecture:
- **Frontend:** React + Vite (port 5173)
- **Backend:** Spring Boot REST API (port 8080)

## Prerequisites

### Backend
- Java 17 or higher (Java 21 works)
- Maven 3.6+
- PostgreSQL database

### Frontend
- Node.js 16+
- npm or yarn

## Setup

### 1. Database Setup

Ensure PostgreSQL is running and create a database:
```bash
createdb metropolitan
```

Set environment variables:
```bash
# Windows PowerShell
$env:DATABASE_URL="jdbc:postgresql://localhost:5432/metropolitan"
$env:DB_USERNAME="postgres"
$env:DB_PASSWORD="your_password"

# Linux/Mac
export DATABASE_URL="jdbc:postgresql://localhost:5432/metropolitan"
export DB_USERNAME="postgres"
export DB_PASSWORD="your_password"
```

**Important:** The database tables will be **automatically created** on first run! Spring Boot JPA will:
- Create all required tables based on entity definitions
- Automatically populate seed data from `data.sql` including:
  - 4 Divisions (Construction, Real Estate, Engineering, Architecture)
  - 16 Services across all divisions
  - Sample testimonials, projects, partners, news, case studies, and job openings

No manual SQL scripts needed - just create an empty database and run the application!

### 2. Backend Setup

```bash
cd backend

# Build the project
mvn clean install

# Run the Spring Boot backend
mvn spring-boot:run
```

The backend will start on **http://localhost:8080**

### 3. Frontend Setup

Open a **new terminal** (keep the backend running):

```bash
cd frontend

# Install dependencies (first time only)
npm install

# Run the development server
npm run dev
```

The frontend will start on **http://localhost:5173**

## Development Workflow

### Running Both Servers

You need **two terminal windows**:

**Terminal 1 - Backend:**
```bash
cd backend
mvn spring-boot:run
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### Access the Application

Open your browser to: **http://localhost:5173**

The Vite dev server automatically proxies API requests from `/api/*` to the Spring Boot backend at `http://localhost:8080`.

## API Endpoints

All endpoints are available at `http://localhost:8080/api/...`

### Available Endpoints

- `POST /api/inquiries` - Submit contact inquiry
- `GET /api/jobs` - List jobs (supports pagination)
- `GET /api/jobs/{id}` - Get job details
- `POST /api/jobs/{id}/apply` - Submit job application
- `GET /api/news` - List news (supports pagination)
- `GET /api/news/{id}` - Get news item
- `GET /api/case-studies` - List case studies (paginated)
- `GET /api/case-studies/{id}` - Get case study
- `GET /api/divisions` - List divisions (paginated)
- `GET /api/divisions/{slug}` - Get division with related data
- `GET /api/partners` - List partners (paginated)

### Pagination

Add query parameters for pagination:
```
GET /api/jobs?page=0&size=10
```

Response format:
```json
{
  "content": [...],
  "page": 0,
  "size": 10,
  "totalElements": 100,
  "totalPages": 10,
  "last": false
}
```

Without parameters, endpoints return a simple array (backwards compatible).

## Building for Production

### Backend
```bash
cd backend
mvn clean package
java -jar target/backend-1.0.0.jar
```

### Frontend
```bash
cd frontend
npm run build
```

Build output will be in `frontend/dist/public/`

## Troubleshooting

### Backend won't start
- Check that PostgreSQL is running
- Verify DATABASE_URL, DB_USERNAME, and DB_PASSWORD are set
- Ensure port 8080 is not in use

### Frontend shows API errors
- Make sure the Spring Boot backend is running on port 8080
- Check the browser console for CORS errors
- Verify the proxy configuration in `frontend/vite.config.ts`

### Port already in use
- Backend: Change port in `backend/src/main/resources/application.properties`
- Frontend: Run `npm run dev -- --port 3000` to use a different port

## Architecture

```
metropolitan-website/
├── backend/              # Spring Boot REST API
│   ├── src/main/java/
│   │   └── com/metropolitan/backend/
│   │       ├── controller/    # REST controllers
│   │       ├── entity/        # JPA entities
│   │       ├── repository/    # Data repositories
│   │       ├── dto/           # Request/Response DTOs
│   │       └── config/        # CORS & app config
│   └── pom.xml
└── frontend/            # React + Vite frontend
    ├── client/          # React application
    ├── shared/          # Shared types/schemas
    └── vite.config.ts   # Vite configuration (with proxy)
```
