const router = require('express').Router(); // express 모듈에서 Router 클래스 import
const { updateTask, updateCompletedTask } = require("../controllers/updateTaskCtrl");

router.put("/updateTask", updateTask); 
router.patch("/updateCompletedTask", updateCompletedTask); 

module.exports = router;