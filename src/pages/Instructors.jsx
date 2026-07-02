import React from "react";
import ProfileCard from "../components/ProfileCard";
import instructors from "../data/instructors";

function Instructors() {
  return (
    <section className="section" id="instructors">
      <div className="section__header">
        <span className="section__eyebrow">New This Month</span>
        <h2>Our Instructors</h2>
        <p>The people who design and lead our courses, added without a new component.</p>
      </div>
      <div className="card-grid">
        {instructors.map((instructor) => (
          <ProfileCard key={instructor.id} {...instructor} />
        ))}
      </div>
    </section>
  );
}

export default Instructors;