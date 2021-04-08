import "./styles.css";
import React, { useState } from "react";
import Field from "./components/field";
import Languages from "./components/languages";
import Translate from "./components/translate";

//useState works with react's state system
//state tracks data that changes over time
//it updates the html on the user's screen
export default function App() {
  const [language, setLanguage] = useState("");
  const [text, setText] = useState("");

  return (
    <div>
      <Field label="Enter English" onChange={setText} value={text} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
