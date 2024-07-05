const router = require("express").Router();
const { addAttraction, getAttraction } = require("../controllers/attraction");

router.post("/add", addAttraction);
router.get("/:gmap_id", getAttraction);

module.exports = router;

