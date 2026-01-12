import Client from 'ssh2-sftp-client';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import fs from 'fs';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sftp = new Client();

// SFTP configuration
const config = {
    host: 'ftp.graphnick.com',
    username: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    port: 22, // Standard SFTP port
    retries: 3,
    retry_factor: 2,
    retry_minTimeout: 2000
};

const localRoot = path.join(__dirname, "out");
const remoteRoot = "/public_html/ai-merit-badge/";

// Validate environment variables
if (!process.env.FTP_USER || !process.env.FTP_PASSWORD) {
    console.error('❌ Error: FTP_USER and FTP_PASSWORD environment variables must be set');
    console.log('💡 Set them in your .env file');
    process.exit(1);
}

async function uploadDirectory(localDir, remoteDir) {
    try {
        const files = fs.readdirSync(localDir, { withFileTypes: true });
        
        for (const file of files) {
            const localPath = path.join(localDir, file.name);
            const remotePath = path.posix.join(remoteDir, file.name);
            
            if (file.isDirectory()) {
                console.log(`📁 Creating directory: ${remotePath}`);
                try {
                    await sftp.mkdir(remotePath, true);
                } catch (err) {
                    // Directory might already exist, continue
                }
                await uploadDirectory(localPath, remotePath);
            } else {
                console.log(`⬆️  Uploading: ${file.name}`);
                await sftp.put(localPath, remotePath);
                console.log(`✅ Uploaded: ${file.name}`);
            }
        }
    } catch (err) {
        throw err;
    }
}

async function deploy() {
    try {
        console.log('🚀 Starting SFTP deployment...');
        console.log(`📁 Uploading from: ${localRoot}`);
        console.log(`🌐 Uploading to: ${config.host}${remoteRoot}`);
        console.log(`👤 User: ${config.username}`);
        
        console.log('🔍 Connecting to SFTP server...');
        await sftp.connect(config);
        
        console.log('✅ Connected! Starting upload...');
        
        // Create remote directory if it doesn't exist
        try {
            await sftp.mkdir(remoteRoot, true);
        } catch (err) {
            // Directory might already exist
        }
        
        await uploadDirectory(localRoot, remoteRoot);
        
        console.log('✅ Deployment completed successfully!');
        
    } catch (err) {
        console.error('❌ SFTP Deployment failed:', err.message);
        console.log('\n🛠️  Troubleshooting suggestions:');
        console.log('1. Check if your host supports SFTP on port 22');
        console.log('2. Verify your credentials are correct');
        console.log('3. Try the regular FTP deployment: npm run deploy:ftp');
        console.log('4. Contact your hosting provider for connection requirements');
        
        process.exit(1);
    } finally {
        await sftp.end();
    }
}

deploy();