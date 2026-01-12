import FtpDeploy from 'ftp-deploy';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ftpDeploy = new FtpDeploy();

// FTP configuration
const config = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    host: "ftp.graphnick.com",
    port: 21,
    localRoot: path.join(__dirname, "out"),
    remoteRoot: "/nthpowered/ai-merit-badge/",
    include: ["*", "**/*"],
    exclude: [
        "dist/**/*.map",
        "node_modules/**",
        "node_modules/**/.*",
        ".git/**"
    ],
    deleteRemote: false, // Set to true if you want to delete files on server that don't exist locally
    forcePasv: true,
    sftp: false
};

// Validate environment variables
if (!process.env.FTP_USER || !process.env.FTP_PASSWORD) {
    console.error('❌ Error: FTP_USER and FTP_PASSWORD environment variables must be set');
    console.log('💡 Set them by running:');
    console.log('   export FTP_USER="your_username"');
    console.log('   export FTP_PASSWORD="your_password"');
    console.log('💡 Or create a .env file with these values');
    process.exit(1);
}

console.log('🚀 Starting FTP deployment...');
console.log(`📁 Uploading from: ${config.localRoot}`);
console.log(`🌐 Uploading to: ${config.host}${config.remoteRoot}`);

ftpDeploy.deploy(config)
    .then(res => {
        console.log('✅ Deployment completed successfully!');
        console.log(`📊 Files uploaded: ${res.length}`);
    })
    .catch(err => {
        console.error('❌ Deployment failed:', err);
        process.exit(1);
    });

// Log progress
ftpDeploy.on('uploading', function(data) {
    console.log(`⬆️  Uploading: ${data.filename}`);
});

ftpDeploy.on('uploaded', function(data) {
    console.log(`✅ Uploaded: ${data.filename}`);
});

ftpDeploy.on('log', function(data) {
    console.log('📝 Log:', data);
});