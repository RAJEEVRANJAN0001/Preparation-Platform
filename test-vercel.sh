#!/bin/bash
# Vercel Deployment Diagnostic Script
# Run this to check if your deployment is configured correctly

echo "=================================================="
echo "  VERCEL DEPLOYMENT DIAGNOSTIC"
echo "=================================================="
echo ""

# Get Vercel app URL from user
echo "Enter your Vercel app URL (e.g., my-app.vercel.app):"
read VERCEL_URL

if [ -z "$VERCEL_URL" ]; then
    echo "❌ Error: No URL provided"
    exit 1
fi

# Remove protocol if provided
VERCEL_URL=$(echo "$VERCEL_URL" | sed 's|https://||' | sed 's|http://||')

echo ""
echo "Testing: https://$VERCEL_URL"
echo ""

# Test 1: Check if site is reachable
echo "1️⃣ Testing if site is reachable..."
if curl -s -o /dev/null -w "%{http_code}" "https://$VERCEL_URL" | grep -q "200"; then
    echo "   ✅ Site is reachable"
else
    echo "   ❌ Site is not reachable"
    exit 1
fi

echo ""

# Test 2: Check API health endpoint
echo "2️⃣ Testing API health endpoint..."
HEALTH_RESPONSE=$(curl -s "https://$VERCEL_URL/api/health")
echo "   Response: $HEALTH_RESPONSE"

if echo "$HEALTH_RESPONSE" | grep -q "ok"; then
    echo "   ✅ API backend is running"
else
    echo "   ❌ API backend is NOT working"
    echo ""
    echo "   Possible issues:"
    echo "   - Serverless function not deployed"
    echo "   - vercel.json routing not configured"
    echo "   - Build failed on Vercel"
    echo ""
    echo "   Next steps:"
    echo "   1. Go to Vercel Dashboard → Deployments"
    echo "   2. Check the latest deployment logs"
    echo "   3. Look for errors in the build process"
    exit 1
fi

echo ""

# Test 3: Check if API key is configured
echo "3️⃣ Testing if GEMINI_API_KEY is configured..."
CHAT_RESPONSE=$(curl -s -X POST "https://$VERCEL_URL/api/chat" \
    -H "Content-Type: application/json" \
    -d '{"message":"test","context":""}')

if echo "$CHAT_RESPONSE" | grep -q "GEMINI_API_KEY is not set"; then
    echo "   ❌ GEMINI_API_KEY is NOT configured"
    echo ""
    echo "   Fix this:"
    echo "   1. Go to Vercel Dashboard → Your Project"
    echo "   2. Settings → Environment Variables"
    echo "   3. Add: GEMINI_API_KEY = (your API key)"
    echo "   4. Save and REDEPLOY"
    exit 1
elif echo "$CHAT_RESPONSE" | grep -q "error"; then
    echo "   ⚠️  API key may be set but there's an error:"
    echo "   Response: $CHAT_RESPONSE"
    exit 1
else
    echo "   ✅ GEMINI_API_KEY is configured"
    echo "   ✅ AI chat is working!"
fi

echo ""
echo "=================================================="
echo "  ✅ ALL TESTS PASSED!"
echo "  Your Vercel deployment is working correctly."
echo "=================================================="
