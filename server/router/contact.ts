const express = require("express");
const cors = require("cors");
const router = express.Router();

var user = {}; // TODO : 일단 정보 임의로 넣고 데이터 가져와서 출력해보기

router.get("/", cors(), (req: any, res: any) => {
  if (user === null) {
    res.send("유저 정보가 없습니다.");
  } else {
    res.send({
      name: "yeonhee",
      age: 29,
      tel: "010-2381-6094",
    });
  }
});
module.exports = router;
