/* eslint-disable */

import React, { useState } from "react";

const LANGUAGES = [
  { label: "Select a Language", value: "" },
  { label: "Afrikaans", value: "af" },
  { label: "Bulgarian", value: "bg" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Hebrew", value: "iw" },
  { label: "Hindi", value: "hi" },
  { label: "Italian", value: "it" },
  { label: "Latin", value: "la" },
  { label: "Portuguese", value: "pt" },
  { label: "Polish", value: "pl" },
  { label: "Russian", value: "ru" },
  { label: "Thai", value: "th" },
  { label: "Yiddish", value: "yi" }
];

const Languages = ({ language, onLanguageChange }) => {
  if (language === undefined) {
    language = "es";
  }
  const languageConfig = LANGUAGES.find((l) => l.value === language);
  if (!languageConfig) {
    throw new Error(`Unknown language code '${language}'`);
  }

  const [open, setOpen] = useState(false);

  const onSelect = (language) => {
    setOpen(false);
    onLanguageChange(language);
  };

  return (
    <div>
      <label className="label">Select Language</label>
      <div className={`dropdown ${open && "is-active"}`}>
        <div className="dropdown-trigger">
          <button className="button" onClick={() => setOpen(!open)}>
            <span>{languageConfig.label}</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu">
          <div className="dropdown-content">
            {LANGUAGES.map(({ label, value }) => {
              return (
                <a
                  href="#"
                  onClick={() => onSelect(value)}
                  className="dropdown-item"
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
