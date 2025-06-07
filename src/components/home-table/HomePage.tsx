import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import { useEffect, useState } from "react";
import SideBar from "../SideBar";

const HomePage = () => {
  const navigate = useNavigate();
  const [isDarkmode, setIsDarkMode] = useState<boolean>(false);
  const [recipeUrl, setRecipeUrl] = useState<string>("");
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleDarmode = () => {
    setIsDarkMode(!isDarkmode);
  };

  const handleNavigationClick = (path: string) => {
    navigate(path);
  };

  const handleSubmitRecipe = () => {
    if (recipeUrl.trim()) {
      setShowPreview(true);
      // Здесь можно добавить логику для обработки URL рецепта
      console.log("Processing recipe URL:", recipeUrl);
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipeUrl(e.target.value);
  };

  const toggleDarkmode = () => {
    setIsDarkMode(!isDarkmode);
  };

  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      if (isSidebarOpen) {
        sidebar.classList.add("mobile-open");
      } else {
        sidebar.classList.remove("mobile-open");
      }
    }
  }, [isSidebarOpen]);

  return (
    <div className={`home-container ${isDarkmode ? "dark" : "light"}`}>
      {/* Кнопка бургер-меню */}
      <button className="hamburger-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <SideBar
        isDarkmode={isDarkmode}
        onNavigate={handleNavigationClick}
        onLogout={() => {}}
        className={isSidebarOpen ? "mobile-open" : ""}
      />

      <div className="content-container">
        {/* Dark/Light mode button */}
        <button
          onClick={toggleDarkmode}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            borderRadius: "4px",
          }}
        >
          {isDarkmode ? "☀️" : "🌙"}
        </button>

        <div className="header-board"></div>

        <div className="top-logo">
          <h1>Tastify</h1>
          <hr />
        </div>

        <div className="menu-container ">
          <h2 className="user-header"></h2>
        </div>

        {showPreview && <h3 className="recipe-preview-text">Recipe preview</h3>}

        <div className="actions-table">
          <div className="smart-recipe-input">
            <h2>Smart recipe generator</h2>

            <label htmlFor="url">Enter recipe link here</label>
            <input
              type="url"
              id="url"
              value={recipeUrl}
              onChange={handleUrlChange}
              placeholder="Recipe URL"
            />
            <button
              className="submit-btn"
              onClick={handleSubmitRecipe}
              disabled={!recipeUrl.trim()}
            >
              Submit
            </button>
          </div>

          {showPreview && (
            <div className="smart-recipe-preview action-section">
              <hr className="top-hr" />
              <div className="preview-container">
                <button className="preview-action-btns">Edit</button>
                <button className="preview-action-btns">Accept</button>
              </div>
            </div>
          )}

          <div className="shopping-list-container action-section">
            <h2
              onClick={() => handleNavigationClick("/shopping-list")}
              style={{ cursor: "pointer" }}
            >
              Shopping list
            </h2>
            <hr />
          </div>
        </div>

        <div className="week-container action-section">
          <h2 className="weekplate-header">Weekplate</h2>
          <button className="edit-weektable">
            {isDarkmode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFFFF"
              >
                <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
              </svg>
            )}
          </button>
        </div>

        <table className="week-table">
          <thead>
            <tr>
              <th>
                <span className="th-content">
                  Day
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
                  </svg>
                </span>
              </th>
              <th>
                <span className="th-content">
                  Breakfast
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M160-120v-80h640v80H160Zm160-160q-66 0-113-47t-47-113v-400h640q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v120q0 66-47 113t-113 47H320Zm0-80h240q33 0 56.5-23.5T640-440v-320H240v320q0 33 23.5 56.5T320-360Zm400-280h80v-120h-80v120ZM320-360h-80 400-320Z" />
                  </svg>
                </span>
              </th>
              <th>
                <span className="th-content">
                  Branch
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M240-120q-33 0-56.5-23.5T160-200v-342q-37-22-58.5-58.5T80-680q0-66 47-113t113-47h480q66 0 113 47t47 113q0 43-21.5 79.5T800-542v342q0 33-23.5 56.5T720-120H240Zm0-80h480v-388l40-24q18-11 29-29t11-39q0-33-23.5-56.5T720-760H240q-33 0-56.5 23.5T160-680q0 22 10.5 40.5T200-610l40 22v388Zm212-92q12 11 28.5 11t27.5-11l120-120q12-12 12-28.5T628-468L508-588q-11-12-27.5-12T452-588L332-468q-11 11-11 27.5t11 28.5l120 120Zm28-84-64-64 64-64 64 64-64 64Zm0-104Z" />
                  </svg>
                </span>
              </th>
              <th>
                <span className="th-content">
                  Lunch
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z" />
                  </svg>
                </span>
              </th>
              <th>
                <span className="th-content">
                  Dinner
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M177-560q14-36 4.5-64T149-680q-33-40-43.5-75.5T102-840h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78Zm160 0q14-36 5-64t-32-56q-33-40-44-75.5t-4-84.5h78q-8 38-2.5 62t28.5 52q38 46 48.5 81.5t.5 84.5h-78ZM200-160q-50 0-85-35t-35-85v-200h561q5-34 27-59.5t54-36.5l185-62 25 76-185 62q-12 4-19.5 14.5T720-462v182q0 50-35 85t-85 35H200Zm0-80h400q17 0 28.5-11.5T640-280v-120H160v120q0 17 11.5 28.5T200-240Zm200-80Z" />
                  </svg>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monday</td>
            </tr>
            <tr>
              <td>Tuesday</td>
            </tr>
            <tr>
              <td>Wednesday</td>
            </tr>
            <tr>
              <td>Thursday</td>
            </tr>
            <tr>
              <td>Friday</td>
            </tr>
            <tr>
              <td>Saturday</td>
            </tr>
            <tr>
              <td>Sunday</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
