const PlaceDetails = require('../models/PlaceDetails');

const searchPlaces = async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ message: 'Query parameter is required' });
  }

  try {
    const searchResults = await PlaceDetails.find({
      $or: [
        { placeName: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { tags: { $regex: query, $options: 'i' } },
        { finalTags: { $regex: query, $options: 'i' } }
      ]
    });

    res.json(searchResults);
  } catch (error) {
    console.error('Error searching places:', error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  searchPlaces
};
