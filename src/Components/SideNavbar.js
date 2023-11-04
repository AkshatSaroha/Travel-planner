import React, { useState } from 'react';
import '../Styles/sideNavbar.css'; // Import your CSS file for styling

const SideNavbar = () => {
  const sections = [
    {
      title: 'Overview',
      subsections: ['Explore', 'Bookings', 'Notes'],
    },
    {
      title: 'Itinerary',
      subsections: ['14 Nov', '15 Nov', '16 Nov', '17 Nov'],
    },
    {
      title: 'Expense Tracker',
      subsections: ['Expense List'],
    },
  ];

  const [activeSections, setActiveSections] = useState([]);

  const toggleSection = (index) => {
    if (activeSections.includes(index)) {
      setActiveSections(activeSections.filter((activeIndex) => activeIndex !== index));
    } else {
      setActiveSections([...activeSections, index]);
    }
  };

  return (
    <>
    <div className="sidebar">
        <h3 style={{fontWeight:"bold"}}>Travel Ease</h3>
      {sections.map((section, index) => (
        <div key={index} className={`section ${activeSections.includes(index) ? 'active' : ''}`}>
          <div className="section-header" onClick={() => toggleSection(index)}>
            {section.title}
          </div>
          {activeSections.includes(index) && (
            <ul className="subsection-list">
              {section.subsections.map((subsection, subIndex) => (
                <li key={subIndex} className="subsection-item">
                  {subsection}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
    
    </>

  );
};

export default SideNavbar;
