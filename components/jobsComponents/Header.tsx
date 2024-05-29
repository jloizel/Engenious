import React from "react";
// import close from "./images/icon-remove.svg";
import CloseIcon from '@mui/icons-material/Close';


// Define the types for the props
interface HeaderProps {
  keywords: string[];
  removeKeywords: (keyword: string) => void;
  clearAll: () => void;
}

const Header: React.FC<HeaderProps> = ({ keywords, removeKeywords, clearAll }) => {
  return (
    <div className="header-container">
      <ul>
        {keywords.map((key, id) => {
          return (
            <li key={id}>
              {key}
              <button className="close" onClick={() => removeKeywords(key)}>
                <CloseIcon/>
              </button>
            </li>
          );
        })}
        <a href="/#" onClick={() => clearAll()}>
          Clear
        </a>
      </ul>
    </div>
  );
};

export default Header;
