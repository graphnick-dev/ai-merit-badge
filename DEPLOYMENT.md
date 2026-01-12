# FTP Deployment Setup

This project includes automated FTP deployment to your production server.

## Setup Instructions

### 1. Configure FTP Credentials

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Edit the `.env` file and add your FTP credentials:

```env
FTP_USER=your_actual_ftp_username
FTP_PASSWORD=your_actual_ftp_password
```

### 2. Available Deployment Commands

```bash
# Build and deploy in one command
npm run deploy

# Deploy only (without rebuilding)
npm run deploy:only

# Build static files only
npm run build:static
```

## What happens during deployment:

1. **Build Process**: Creates static HTML/CSS/JS files in the `out/` directory
2. **FTP Upload**: Uploads all files to `ftp.graphnick.com/public_html/ai-merit-badge/`
3. **Progress Logging**: Shows upload progress for each file

## Deployment Configuration

The deployment script (`deploy.js`) is configured to:

- **Server**: ftp.graphnick.com
- **Remote Directory**: /public_html/ai-merit-badge/
- **Local Source**: out/ (static build output)
- **File Types**: All files (HTML, CSS, JS, images)

## Security Notes

- ✅ The `.env` file is gitignored and won't be committed
- ✅ Use the `.env.example` as a template
- ⚠️ Never commit real FTP credentials to version control

## Troubleshooting

If deployment fails:
1. Check your FTP credentials in the `.env` file
2. Ensure the remote directory exists on the server
3. Verify you have write permissions to the remote directory
4. Check your internet connection