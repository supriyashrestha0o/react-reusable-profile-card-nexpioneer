import React from "react";
import ProfileCard from "../components/ProfileCard";
import students from "../data/students";

function Students() {
  return (
    <section className="section" id="students">
      <div className="section__header">
        <span className="section__eyebrow">Learning</span>
        <h2>Our Students</h2>
        <p>Currently building skills across the frontend, backend, and beyond.</p>
      </div>
      <div className="card-grid">
        {students.map((student) => (
          <ProfileCard key={student.id} {...student} />
        ))}
      </div>
    </section>
  );
}

export default Students;