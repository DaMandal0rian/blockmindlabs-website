#!/bin/bash

echo "🚀 Starting BlockMind Labs with Strapi CMS"
echo "========================================="

# Function to cleanup background processes
cleanup() {
    echo "Shutting down servers..."
    kill $STRAPI_PID $MAIN_PID 2>/dev/null
    exit
}

# Set up signal handlers
trap cleanup SIGINT SIGTERM

# Start Strapi in background
echo "📦 Starting Strapi CMS on port 1337..."
cd strapi-cms/backend && npm run develop &
STRAPI_PID=$!

# Wait a moment for Strapi to start
sleep 3

# Return to root and start main app
cd ../..
echo "🌐 Starting main application on port 5000..."
npm run dev &
MAIN_PID=$!

echo ""
echo "✅ Both servers are starting up!"
echo ""
echo "🌐 Main Website: http://localhost:5000"
echo "⚙️  Strapi Admin: http://localhost:1337/admin"
echo "📊 CMS Dashboard: http://localhost:5000/admin"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for background processes
wait