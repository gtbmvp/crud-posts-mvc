const { Router } = require('express');
const getContacts = require('../controllers/contact-controller')

const router = Router();

router.get('/contacts', getContacts);
  
module.exports = router;



  