# Metropolitan Backend

Spring Boot REST API backend for the Metropolitan website.

## Technology Stack

- **Java 17**
- **Spring Boot 3.2.1**
- **Spring Data JPA**
- **PostgreSQL**
- **Maven**
- **Lombok**

## Features

- RESTful API endpoints for all frontend operations
- Pagination support for all list endpoints
- PostgreSQL database integration
- CORS configuration for frontend integration
- Input validation
- Clean architecture with DTOs and entities

## API Endpoints

### Inquiries
- `POST /api/inquiries` - Submit contact form inquiry

### Jobs & Applications
- `GET /api/jobs?page=0&size=10` - List all job openings (paginated)
- `GET /api/jobs/{id}` - Get single job details
- `POST /api/jobs/{id}/apply` - Submit job application

### News
- `GET /api/news?page=0&size=10` - List all news items (paginated)
- `GET /api/news/{id}` - Get single news item

### Case Studies
- `GET /api/case-studies?page=0&size=10` - List all case studies (paginated)
- `GET /api/case-studies/{id}` - Get single case study

### Divisions
- `GET /api/divisions?page=0&size=10` - List all divisions (paginated)
- `GET /api/divisions/{slug}` - Get division with related services, testimonials, projects, and partners

### Partners
- `GET /api/partners?page=0&size=10` - List all partners (paginated)

## Pagination

All list endpoints support pagination via query parameters:
- `page` - Page number (0-indexed, default: 0)
- `size` - Number of items per page (default: 10)

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

## Setup & Running

### Prerequisites
- Java 17 or higher
- Maven 3.6+
- PostgreSQL database

### Configuration

Set the following environment variables:
```bash
DATABASE_URL=jdbc:postgresql://localhost:5432/metropolitan
DB_USERNAME=postgres
DB_PASSWORD=your_password
```

Or configure in `src/main/resources/application.properties`

### Build & Run

```bash
# Build the project
mvn clean install

# Run the application
mvn spring-boot:run
```

The server will start on `http://localhost:8080`

### Build JAR

```bash
mvn clean package
java -jar target/backend-1.0.0.jar
```

## Database

The application uses the existing PostgreSQL database schema. Ensure your database is already set up with the required tables:
- inquiries
- jobs
- job_applications
- news
- case_studies
- divisions
- services
- testimonials
- projects
- partners

## Development

The project uses Lombok to reduce boilerplate code. Make sure your IDE has the Lombok plugin installed.

### Project Structure
```
src/main/java/com/metropolitan/backend/
├── entity/          # JPA entities
├── repository/      # Spring Data repositories
├── controller/      # REST controllers
├── dto/            # Data Transfer Objects
├── config/         # Configuration classes
└── MetropolitanBackendApplication.java
```
