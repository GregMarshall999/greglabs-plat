#!/usr/bin/env node

/**
 * Helper script to get Render service information
 * Run this script to get your service ID and verify your API token
 */

const https = require('https');

// Get API token from command line argument or environment variable
const apiToken = process.argv[2] || process.env.RENDER_TOKEN;

if (!apiToken) {
  console.error('❌ Error: Please provide your Render API token');
  console.log('Usage: node scripts/get-render-info.js <YOUR_API_TOKEN>');
  console.log('Or set RENDER_TOKEN environment variable');
  process.exit(1);
}

function makeRequest(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.render.com',
      port: 443,
      path: path,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(new Error(`Failed to parse response: ${error.message}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

async function getRenderInfo() {
  try {
    console.log('🔍 Fetching your Render services...\n');
    
    // Get all services
    const services = await makeRequest('/v1/services');
    
    if (!services || services.length === 0) {
      console.log('❌ No services found. Make sure your API token is correct.');
      return;
    }
    
    console.log('📋 Your Render Services:');
    console.log('========================\n');
    
    services.forEach((service, index) => {
      console.log(`${index + 1}. Service Name: ${service.service.name}`);
      console.log(`   Service ID: ${service.service.id}`);
      console.log(`   Type: ${service.service.type}`);
      console.log(`   Status: ${service.service.status}`);
      console.log(`   URL: ${service.service.serviceDetails?.url || 'N/A'}`);
      console.log('');
    });
    
    console.log('🔧 CI/CD Setup Instructions:');
    console.log('============================');
    console.log('1. Copy the Service ID from your web service above');
    console.log('2. Add it as a GitHub secret named RENDER_SERVICE_ID');
    console.log('3. Add your API token as a GitHub secret named RENDER_TOKEN');
    console.log('');
    console.log('💡 Pro tip: You can also find the Service ID in your Render dashboard URL:');
    console.log('   https://dashboard.render.com/web/[SERVICE_ID]');
    
  } catch (error) {
    if (error.message.includes('401')) {
      console.error('❌ Authentication failed. Please check your API token.');
    } else if (error.message.includes('403')) {
      console.error('❌ Access denied. Make sure your API token has the correct permissions.');
    } else {
      console.error('❌ Error:', error.message);
    }
  }
}

getRenderInfo(); 