import React, { useEffect } from "react";
import axios from "axios";
import "./styles/App.css";

import PhoneForm from "./components/PhoneForm.tsx";

// todo : await try catch로 변경하기
function App() {
  // async 안됨.
  useEffect(() => {
    // 이렇게함
    async function init() {
      //
      //
    }

    axios
      .get("/api")
      .then((response) => console.log(response.data)) // 배열 데이터 불러오도록 수정
      .catch((error) => alert(`요청 실패 : ${error}`));
  }, []);

  return (
    <div className="App">
      <h1>My Phonebook</h1>

      {/* <input type="button" value="Add Contact" className="btnCreate" />
      <PhoneForm /> */}
    </div>
  );
}

export default App;
