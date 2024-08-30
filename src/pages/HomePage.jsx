import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
import Profile from '../components/UI/ProfileTeaser';
import ListItem from '../components/UI/ListItem';


export default function HomePage() {
  const projects = [
    {
      id: 1,
      pName: "Text-Editor",
      link: "https://github.com/akaufmanfrey/Text-Editor"
    },
    {
      id: 2,
      pName: "Employee-Tracker",
      link: "https://github.com/akaufmanfrey/Employee-Tracker"
    },
    {
      id: 3,
      pName: "E-Commerce",
      link: "https://github.com/akaufmanfrey/Employee-Tracker"
    },
    {
      id: 4,
      pName: "README-Generator",
      link: "https://github.com/akaufmanfrey/README-Generator"
    },
    {
      id: 5,
      pName: "Concert-Tracker",
      link: "https://github.com/akaufmanfrey/Concert-Tracker"
    },
    {
      id: 6,
      pName: "Payroll-Tracker",
      link: "https://github.com/akaufmanfrey/Payroll-Tracker"
    },
  ]
  // Iterate over each mock user to display their abridged profile data and a link to their page
  return (
    <div className="container pt-4">
      <ul className="list-group list-group">
        {projects.map((project) => (
          <ListItem key={project.id}>
            <Profile project={project} />
            {/* Link elements are anchors under-the-hood, but they allow the routing behavior to be controlled by the client rather than the server */}
            <Link
              to={project.link}
              className="badge bg-primary rounded-pill"
            >
              See More
            </Link>
          </ListItem>
        ))}
      </ul>
    </div>
  );
}
