const express = require("express");
const router = express.Router();

// Create article
//router.post('/article')

const paths = {
    Test: '/test',
};

// Api Test
router.post(paths.Test, (req, res) => {
        res.send("The QGDH REST API working correctly !");
});

export default module.exports = router;