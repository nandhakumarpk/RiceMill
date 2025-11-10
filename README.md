# Rice Mill E-Commerce Platform

## 🌾 Overview
A secure, scalable microservices-based e-commerce platform for rice mill online orders, built with Spring Boot, OAuth2, MongoDB, React, and enterprise-grade security features.

## 🏗️ Architecture

### Microservices Architecture
```
┌─────────────────┐
│   React Web     │
│   Application   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   NGINX Load    │
│   Balancer      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  API Gateway    │
│  (Spring Cloud) │
└────────┬────────┘
         │
    ┌────┴────┬────────────┬──────────┐
    ▼         ▼            ▼          ▼
┌────────┐┌────────┐┌──────────┐┌─────────┐
│  Auth  ││Product ││  Order   ││ Payment │
│Service ││Service ││ Service  ││ Service │
└───┬────┘└───┬────┘└────┬─────┘└────┬────┘
    │         │           │           │
    └─────────┴───────────┴───────────┘
                   │
            ┌──────┴──────┐
            ▼             ▼
      ┌──────────┐  ┌──────────┐
      │ MongoDB  │  │  Redis   │
      │ Cluster  │  │  Cache   │
      └──────────┘  └──────────┘
```

## 🔒 Security Features

### 1. **Authentication & Authorization**
- OAuth2 with JWT tokens
- Role-based access control (RBAC)
- Multi-factor authentication ready
- Session management with Redis

### 2. **API Security**
- Rate limiting (100 requests/minute per IP)
- CORS configuration
- CSRF protection
- XSS prevention
- SQL/NoSQL injection prevention

### 3. **Data Security**
- AES-256 encryption for sensitive data
- Password hashing with BCrypt
- TLS/SSL encryption (HTTPS only)
- Data masking for PII

### 4. **Infrastructure Security**
- DDoS protection
- Web Application Firewall (WAF)
- Security headers (HSTS, CSP, etc.)
- Regular security audits

## ⚖️ Load Balancing & Scalability

### 1. **NGINX Load Balancer**
- Round-robin load distribution
- Health checks
- SSL termination
- Request buffering
- Failover support

### 2. **Service Discovery**
- Eureka service registry
- Dynamic service registration
- Health monitoring
- Auto-scaling support

### 3. **Database Optimization**
- MongoDB replica sets
- Read replicas
- Connection pooling
- Query optimization
- Caching with Redis

### 4. **Performance**
- CDN for static assets
- Lazy loading
- API response caching
- Database indexing
- Compression (Gzip)

## 📦 Technology Stack

### Backend
- **Framework**: Spring Boot 3.x
- **Security**: Spring Security + OAuth2
- **Database**: MongoDB 6.x
- **Cache**: Redis
- **API Gateway**: Spring Cloud Gateway
- **Service Discovery**: Netflix Eureka
- **Build Tool**: Maven
- **Java Version**: 17+

### Frontend
- **Framework**: React 18.x
- **State Management**: Redux Toolkit
- **UI Library**: Material-UI / Ant Design
- **HTTP Client**: Axios
- **Routing**: React Router
- **Build Tool**: Vite

### DevOps & Infrastructure
- **Containerization**: Docker
- **Orchestration**: Docker Compose / Kubernetes
- **Load Balancer**: NGINX
- **CI/CD**: GitHub Actions
- **Monitoring**: Prometheus + Grafana
- **Logging**: ELK Stack (Elasticsearch, Logstash, Kibana)

## 🚀 Quick Start

### Prerequisites
- Java 17 or higher
- Node.js 18+ and npm
- MongoDB 6.x
- Redis 7.x
- Docker & Docker Compose (optional)

### Using Docker Compose (Recommended)
```bash
# Clone the repository
git clone <repository-url>
cd RiceMill

# Start all services
docker-compose up -d

# Access the application
# Frontend: http://localhost:3000
# API Gateway: http://localhost:8080
# Eureka Dashboard: http://localhost:8761
```

### Manual Setup

#### 1. Setup Backend Services
```bash
# Start MongoDB
mongod --dbpath /data/db --replSet rs0

# Start Redis
redis-server

# Build and run each microservice
cd backend/auth-service
mvn clean install
mvn spring-boot:run

cd backend/product-service
mvn spring-boot:run

cd backend/order-service
mvn spring-boot:run

cd backend/payment-service
mvn spring-boot:run

cd backend/api-gateway
mvn spring-boot:run

cd backend/service-registry
mvn spring-boot:run
```

#### 2. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```

#### 3. Setup NGINX
```bash
# Copy nginx configuration
sudo cp nginx/nginx.conf /etc/nginx/nginx.conf

# Test configuration
sudo nginx -t

# Restart NGINX
sudo nginx -s reload
```

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - User logout

### Product Endpoints
- `GET /api/products` - List all products
- `GET /api/products/{id}` - Get product details
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/{id}` - Update product (Admin)
- `DELETE /api/products/{id}` - Delete product (Admin)

### Order Endpoints
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/{id}` - Get order details
- `PUT /api/orders/{id}/cancel` - Cancel order

### Payment Endpoints
- `POST /api/payments/initiate` - Initiate payment
- `POST /api/payments/verify` - Verify payment
- `GET /api/payments/{orderId}` - Get payment status

## 🔧 Configuration

### Environment Variables
Create `.env` files in each service directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/ricemill
REDIS_HOST=localhost
REDIS_PORT=6379

# Security
JWT_SECRET=your-secret-key-change-in-production
JWT_EXPIRATION=3600000
OAUTH2_CLIENT_ID=your-client-id
OAUTH2_CLIENT_SECRET=your-client-secret

# Services
EUREKA_SERVER=http://localhost:8761/eureka
API_GATEWAY_URL=http://localhost:8080

# External Services
PAYMENT_GATEWAY_KEY=your-payment-key
SMS_API_KEY=your-sms-key
EMAIL_API_KEY=your-email-key
```

## 🧪 Testing

### Backend Tests
```bash
cd backend/[service-name]
mvn test
mvn verify
```

### Frontend Tests
```bash
cd frontend
npm test
npm run test:coverage
```

### Integration Tests
```bash
docker-compose -f docker-compose.test.yml up
```

## 📊 Monitoring & Logging

### Access Monitoring Dashboards
- **Grafana**: http://localhost:3001
- **Prometheus**: http://localhost:9090
- **Kibana**: http://localhost:5601
- **Eureka Dashboard**: http://localhost:8761

### Log Locations
- Application logs: `logs/[service-name].log`
- Access logs: `logs/access.log`
- Error logs: `logs/error.log`

## 🔐 Security Best Practices

1. **Always use HTTPS in production**
2. **Change default JWT secrets**
3. **Enable rate limiting**
4. **Regular security updates**
5. **Implement IP whitelisting for admin panel**
6. **Use strong password policies**
7. **Enable audit logging**
8. **Regular backups (MongoDB & Redis)**
9. **Use environment-specific configurations**
10. **Implement CAPTCHA for sensitive operations**

## 📈 Scalability Guidelines

### Horizontal Scaling
```bash
# Scale specific service
docker-compose up -d --scale product-service=3

# Kubernetes deployment
kubectl scale deployment product-service --replicas=3
```

### Database Scaling
- Enable MongoDB sharding for large datasets
- Use read replicas for read-heavy operations
- Implement caching strategy with Redis

## 🚢 Deployment

### Production Deployment Checklist
- [ ] Update all secrets and keys
- [ ] Enable HTTPS/SSL certificates
- [ ] Configure firewall rules
- [ ] Set up automated backups
- [ ] Enable monitoring and alerting
- [ ] Configure CDN for static assets
- [ ] Set up CI/CD pipeline
- [ ] Perform security audit
- [ ] Load testing
- [ ] Disaster recovery plan

### Cloud Deployment Options
- AWS (ECS/EKS + RDS + ElastiCache)
- Google Cloud Platform (GKE + Cloud SQL + Memorystore)
- Azure (AKS + Cosmos DB + Cache for Redis)
- Self-hosted with Kubernetes

## 🤝 Contributing
Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support
For issues and questions, please create an issue in the repository or contact support@ricemill.com.

## 🎯 Roadmap
- [ ] Mobile app (React Native)
- [ ] AI-powered product recommendations
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Subscription-based ordering
- [ ] Loyalty program
- [ ] Real-time order tracking
- [ ] Chatbot support
