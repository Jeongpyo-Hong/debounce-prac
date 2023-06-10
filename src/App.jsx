import React, { useCallback, useState } from "react";
// import _ from "lodash";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [inputText, setInputText] = useState("");

  const debounce = (callback, delay) => {
    let timerId = null;
    return (...args) => {
      if (timerId) clearTimeout(timerId);
      timerId = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  // useCallback을 사용해야 함(메모이제이션)
  const handleSearchText = useCallback(
    debounce((text) => {
      setSearchText(text);
    }, 2000),
    []
  );

  const handleChange = (e) => {
    setInputText(e.target.value);
    handleSearchText(e.target.value);
  };

  return (
    <div
      style={{
        padding: "0 20px",
      }}
    >
      <h1>디바운싱 예제</h1>
      <input
        type="text"
        placeholder="입력값을 넣고 디바운싱 테스트를 해보세요."
        style={{ width: "300px" }}
        onChange={handleChange}
      />
      <p>Search Text: {searchText}</p>
      <p>Input Text: {inputText}</p>
    </div>
  );
};

export default App;
