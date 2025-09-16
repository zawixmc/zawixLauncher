const express = require('express');
const path = require('path');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

function getLocalIp() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return '127.0.0.1';
}

const localIp = getLocalIp();

app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log('');
    console.log('🚀 Strona zawixLauncher wystartowała!');
    console.log('✨ Neonowe efekty załadowane');
    console.log(`🌐 Strona dostępna pod adresem: http://localhost:${PORT}`);
    console.log(`🔥 IP lokalne: http://${localIp}:${PORT}`);
    console.log('⚡ Gotowe do użycia!');
    console.log('');
});