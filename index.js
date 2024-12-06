import express from 'express';
import dotenv from 'dotenv';

import { getClubSquad } from './src/tm.js'

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to API.');
});

app.get('/api/club/:id/players', async (req, res) => {

    const clubId = req.params.id;

    try {

      const players = await getClubSquad(clubId);
      res.json(players);

    } catch (error) {

      console.error('Erro ao buscar dados dos jogadores:', error);
      res.status(500).json({ message: 'Erro ao buscar dados dos jogadores' });

    }
});

app.listen(process.env.PORT, () => {
    console.log("App is running!")
})