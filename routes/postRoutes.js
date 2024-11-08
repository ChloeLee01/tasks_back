const router = require('express').Router(); // express 모듈에서 Router 클래스 import
const { postTask } = require("../controllers/postTaskCtrl");

router.post("/postTask", postTask); 

module.exports = router;