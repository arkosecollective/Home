import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Bedrock Live Data Mock
const trailStatus = [
    { id: 'rtp-01', name: 'Manitou to Barr', status: 'Clear', condition: 'Dry', alert: null },
    { id: 'rtp-02', name: 'Section 16', status: 'Caution', condition: 'Icy', alert: 'Traction recommended on north-facing slopes.' },
    { id: 'trail-01', name: 'Red Rock Canyon', status: 'Clear', condition: 'Tacky', alert: 'Hero dirt today.' },
    { id: 'trail-02', name: 'Ute Valley', status: 'Closed', condition: 'Muddy', alert: 'Stay off trails to prevent erosion.' }
];

app.get('/api/status', (req, res) => {
    res.json({
        updated_at: new Date().toISOString(),
        weather: { temp: 42, condition: 'Partly Cloudy' },
        trails: trailStatus
    });
});

app.listen(PORT, () => {
    console.log(`ExploreCOS API running at http://localhost:${PORT}`);
});
