const router = require("express").Router();

// const { isLoggedIn } = require('./../middleware/session-guard')

router.get('/mi-perfil', (req, res) => {
    res.render('user/profile', { user: req.session.currentUser })
})

module.exports = router