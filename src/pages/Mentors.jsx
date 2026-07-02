import React from "react";
import ProfileCard from "../components/ProfileCard";
import mentors from "../data/mentors";

function Mentors() {
  return (
    <section className="section" id="mentors">
      <div className="section__header">
        <span className="section__eyebrow">Guidance</span>
        <h2>Our Mentors</h2>
        <p>People who help you learn faster by learning from their mistakes.</p>
      </div>
      <div className="card-grid">
        {mentors.map((mentor) => (
          <ProfileCard key={mentor.id} {...mentor} />
        ))}
      </div>
    </section>
  );
}

export default Mentors;