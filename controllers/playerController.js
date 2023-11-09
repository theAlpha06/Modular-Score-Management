import Player from '../models/Player.js';

const createPlayer = async (req, res) => {
  try {
    const { name, country, score } = req.body;
    const player = new Player({ name, country, score });
    await player.save();
    res.json(player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, score } = req.body;
    const player = await Player.findByIdAndUpdate(id, { name, score }, { new: true });
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }
    res.json(player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await Player.findByIdAndDelete(id);
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }
    res.json({ message: 'Player deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find().sort({ score: 'desc' });
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPlayerByRank = async (req, res) => {
  try {
    const { val } = req.params;
    const rank = parseInt(val);
    const player = await Player.findOne().sort({ score: 'desc' }).skip(rank - 1);
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }
    res.json(player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRandomPlayer = async (req, res) => {
  try {
    const count = await Player.countDocuments();
    const random = Math.floor(Math.random() * count);
    const player = await Player.findOne().skip(random);
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }
    res.json(player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export {
  createPlayer,
  updatePlayer,
  deletePlayer,
  getAllPlayers,
  getPlayerByRank,
  getRandomPlayer
}