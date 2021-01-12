const express = require('express');
const router = express.Router();

const { Error405, error_handler } = require('../middlewares/error_405_handler');
const err405 = new Error405();

const users = require("../data/users");

//émule une opération I/O asynchrone
const fake_IO_operation = async () => {

  return new Promise((resolve, reject) => {
    function callback() {
      resolve(users);
    }

    setTimeout(callback
      , 500);
  });

}

/* GET users listing. */
router.get('/', async (req, res, next) => {

  //l'utilisation de try / catch évite de faire planter le serveur
  try {
    data = await fake_IO_operation();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.json(data);

});

/*ERR0R 405 HANDLER : METHOD NOT ALLOWED*/
err405.explore(router);//first, set allowed http verbs
router.use(error_handler);//then use middleware 

module.exports = router;
