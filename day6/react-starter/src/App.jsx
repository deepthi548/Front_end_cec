import React, { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import List from "./components/List";
import FormExample from "./components/FormExample";
function App() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Components Demo</h1>

      {/* Nav Tabs */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("profile")}>Profile</button>
        <button onClick={() => setActiveTab("list")}>List</button>
        
        <button onClick={() => setActiveTab("formexample")}>FormExample</button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "profile" && <ProfileCard />}
        {activeTab === "list" && <List />}
        
         {activeTab === "formexample" && <FormExample/>}
      </div>
    </div>
  );
}

export default App;