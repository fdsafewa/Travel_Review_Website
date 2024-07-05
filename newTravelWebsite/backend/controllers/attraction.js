const Attraction = require("../models/attraction");

exports.addAttraction = async (req, res) => {
  const { name, address, gmap_id, description, latitude, longitude } = req.body;

  const newAttraction = new Attraction({
    name,
    address,
    gmap_id,
    description,
    latitude,
    longitude,
  });

  await newAttraction.save();

  res.json({ message: "Attraction added successfully." });
};

exports.getAttraction = async (req, res) => {
  const { gmap_id } = req.params;

  const attraction = await Attraction.findOne({ gmap_id });
  if (!attraction) return res.status(404).json({ error: "Attraction not found!" });

  res.json(attraction);
};

