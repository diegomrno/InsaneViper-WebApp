const express = require("express");
const router = express.Router();

// Create article
//router.post('/article')

const paths = {
    Test: '/test',
    Check: '/check/:rfid'
};

// Api Test
router.get(paths.Test, (req, res) => {
        res.send(true);
});

router.get(paths.Check, (req, res) => {
    res.send("Rfid check... : ");
})

export default module.exports = router;