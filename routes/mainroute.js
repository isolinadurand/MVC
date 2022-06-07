const express = require('express');
const mainController = require ('../controllers/mainController');
const path = require('path');
const router = express.Router();

const httpRaiz = '/';
const httpHome = '/home';
const httpAbout = '/about';


router.get(httpRaiz, mainController.main);
router.get(httpHome, mainController.main);

router.get(httpAbout, mainController.about);




module.exports = router;

