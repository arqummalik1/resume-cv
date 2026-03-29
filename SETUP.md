# Contact Form Setup Guide

This guide explains how to configure the contact form to send emails to `arqummalik1@gmail.com`.

## How It Works

The contact form uses [Resend](https://resend.com) to send emails. Resend provides a free tier with 3,000 emails/month.

## Setup Steps

### 1. Create a Resend Account

1. Go to https://resend.com
2. Sign up with your GitHub account
3. Verify your email address

### 2. Get Your API Key

1. In Resend dashboard, go to **API Keys**
2. Click **Create API Key**
3. Copy the key (starts with `re_`)

### 3. Add Environment Variable

Add the API key to your deployment platform:

**Vercel:**
1. Go to Project Settings → Environment Variables
2. Add: `RESEND_API_KEY` = your API key
3. Redeploy

**Local Development:**
Create a `.env.local` file:
```bash
RESEND_API_KEY=re_your_api_key_here
```

### 4. Verify It Works

1. Fill out the contact form on your site
2. Check your email (`arqummalik1@gmail.com`)
3. You should receive the message within seconds

## Troubleshooting

### Emails Not Sending

- Verify `RESEND_API_KEY` is set correctly
- Check Vercel function logs for errors
- Ensure Resend key has sufficient quota

### Emails Going to Spam

- In Resend dashboard, add and verify your domain
- Or use Resend's built-in deliverability features

### From Address Showing "onboarding@resend.dev"

This is normal for free tier. To use your own domain:
1. In Resend, go to **Domains**
2. Add and verify your domain
3. Update the `from` address in `src/app/api/contact/route.ts`

## Customization

To change the recipient email, edit:
```typescript
// src/app/api/contact/route.ts
to: 'your-email@gmail.com',
```

## Cost

- **Free Tier:** 3,000 emails/month
- **Paid:** Starting at $0/first 100 emails, then $0.40/100

## Alternative: Use Gmail Directly

If you prefer not to use Resend, you can also use:
- **Nodemailer + Gmail App Password** (less secure)
- **Formspree / Netlify Forms** (simpler but limited)
- **SendGrid** (similar to Resend)