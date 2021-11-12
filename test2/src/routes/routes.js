const router = require("express").Router();
const movieController = require("../controller/movieController");

router.get("/", movieController.home);
router.get("/search", movieController.search);
router.get("/detail", movieController.detail);
router.get("/*", movieController.notFound);

module.exports = router;
