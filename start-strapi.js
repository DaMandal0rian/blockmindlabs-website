#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Start Strapi development server
const strapiPath = path.join(__dirname, 'strapi-cms', 'backend');

console.log('🚀 Starting Strapi CMS on port 1337...');

const strapi = spawn('npm', ['run', 'develop'], {
  cwd: strapiPath,
  stdio: 'inherit',
  shell: false
});

strapi.on('close', (code) => {
  console.log(`Strapi process exited with code ${code}`);
});

strapi.on('error', (error) => {
  console.error(`Failed to start Strapi: ${error}`);
});

// Handle cleanup
process.on('SIGINT', () => {
  console.log('Shutting down Strapi...');
  strapi.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('Shutting down Strapi...');
  strapi.kill('SIGTERM');
});