# Strapi CMS Integration Guide

## Overview

Your BlockMind Labs website now includes a complete Strapi headless CMS integration. This allows you to manage all your website content through a user-friendly admin interface while maintaining the performance and flexibility of your React frontend.

## What's Included

### 🏗️ **Strapi Backend Setup**
- Complete Strapi v5.21.0 installation in `strapi-cms/backend/`
- SQLite database for development (easily switchable to PostgreSQL for production)
- Built-in admin panel with user management
- Ready-to-use content types

### 🔗 **Frontend Integration**
- TypeScript API client (`client/src/lib/strapi.ts`)
- React Query hooks for data fetching (`client/src/hooks/useStrapi.ts`)
- Admin dashboard component (`client/src/components/admin/StrapiAdmin.tsx`)
- Seamless integration with existing components

### 📊 **Content Types Ready to Use**
- **Blog Posts**: Title, content, excerpt, SEO meta, tags, author
- **Services**: Title, description, features, icons, ordering
- **Testimonials**: Name, company, role, content, ratings, avatars
- **Pages**: Dynamic page content with JSON blocks

## Getting Started

### 1. Start Strapi CMS
```bash
cd strapi-cms/backend
npm run develop
```

This will:
- Start Strapi on http://localhost:1337
- Open the admin panel at http://localhost:1337/admin
- Prompt you to create your first admin user

### 2. Create Content Types

In the Strapi admin panel, create these collection types:

#### Blog Posts (`blog-posts`)
```
- title (Text, required)
- slug (UID, required, target field: title)
- content (Rich Text, required)
- excerpt (Text, required, max 200 chars)
- coverImage (Media, single)
- tags (JSON)
- author (Text, default: "BlockMind Labs")
- metaTitle (Text)
- metaDescription (Text)
- published (Boolean, default: false)
```

#### Services (`services`)
```
- title (Text, required)
- description (Text, required)
- icon (Text, required) // Lucide icon name
- features (JSON, required)
- order (Number)
- published (Boolean, default: true)
```

#### Testimonials (`testimonials`)
```
- name (Text, required)
- company (Text, required)
- role (Text, required)
- content (Text, required)
- avatar (Media, single)
- rating (Number, min: 1, max: 5, default: 5)
- published (Boolean, default: true)
```

### 3. Configure Permissions

Go to Settings > Users & Permissions Plugin > Roles > Public:

Enable `find` and `findOne` permissions for:
- blog-posts
- services
- testimonials
- pages

### 4. Add Sample Content

Create some sample blog posts, services, and testimonials to see the integration in action.

## Using in Your React Components

### Fetching Blog Posts
```typescript
import { useBlogPosts } from '@/hooks/useStrapi';

function BlogSection() {
  const { data: posts, isLoading } = useBlogPosts();
  
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      {posts?.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
```

### Fetching Services
```typescript
import { useServices } from '@/hooks/useStrapi';

function ServicesSection() {
  const { data: services, isLoading } = useServices();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services?.map(service => (
        <div key={service.id} className="p-6 border rounded-lg">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <ul>
            {service.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
```

## API Endpoints

Once Strapi is running, these endpoints will be available:

- `GET http://localhost:1337/api/blog-posts` - List blog posts
- `GET http://localhost:1337/api/blog-posts?filters[slug][$eq]=my-post` - Get post by slug
- `GET http://localhost:1337/api/services?sort=order:asc` - List services
- `GET http://localhost:1337/api/testimonials?populate=*` - List testimonials with images

## Admin Dashboard

Access your custom admin dashboard at `/admin` in your React app to:
- View content statistics
- Quick links to Strapi admin
- Monitor CMS status
- Setup guidance

## Production Deployment

### Database
For production, switch from SQLite to PostgreSQL:

1. Install PostgreSQL adapter:
   ```bash
   cd strapi-cms/backend
   npm install pg
   ```

2. Update `config/database.js`:
   ```javascript
   module.exports = ({ env }) => ({
     connection: {
       client: 'postgres',
       connection: {
         host: env('DATABASE_HOST', '127.0.0.1'),
         port: env.int('DATABASE_PORT', 5432),
         database: env('DATABASE_NAME', 'strapi'),
         user: env('DATABASE_USERNAME', 'strapi'),
         password: env('DATABASE_PASSWORD', 'strapi'),
         ssl: env.bool('DATABASE_SSL', false),
       },
     },
   });
   ```

### Security
- Set up proper authentication tokens
- Configure CORS for your domain
- Use environment variables for sensitive data
- Enable SSL in production

## Benefits of This Integration

✅ **Headless Architecture**: Separate content management from presentation
✅ **Developer-Friendly**: TypeScript support, React Query integration
✅ **Content Creator-Friendly**: Intuitive admin interface
✅ **Scalable**: Easy to add new content types and fields
✅ **SEO-Ready**: Built-in meta fields and structured content
✅ **Real-time**: Live preview and instant updates
✅ **Secure**: Role-based permissions and API tokens

## Next Steps

1. Start Strapi and create your admin user
2. Set up the content types as described above
3. Add sample content to test the integration
4. Update your existing components to use Strapi data
5. Deploy both frontend and backend to production

Your website now has enterprise-level content management capabilities!