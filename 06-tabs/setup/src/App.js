import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const fetchTabs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setTabs(data);
    setActiveTab(data[0]);
  }

  const changeTab = (id) => {
    const filteredTab = tabs.filter((tab) => tab.id === id)
    setActiveTab(filteredTab[0]);
  }

  useEffect(() => fetchTabs, []);

  if (tabs.length === 0) {
    return <h1 className='loading'>Loading...</h1>
  }
  return <main>
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container'>
          {tabs.map((tab) => <button className={`job-btn ${tab.id === activeTab.id && 'active-btn'}`} onClick={() => changeTab(tab.id)} key={tab.id}>{tab.company}</button>)}
        </div>
        <div className='job-info'>
          <h3>{activeTab.title}</h3>
          <h4>{activeTab.company}</h4>
          <p className='job-date'>{activeTab.dates}</p>
          <div className='job-desc'>
            {activeTab.duties.map((duty) => <>              
              <FaAngleDoubleRight className='job-icon' />
              <p>{duty}</p>
            </>
            )}
          </div>
          <button type="button" className="btn">
            more info
          </button>
        </div>
      </div>
    </section>
  </main>
}

export default App
