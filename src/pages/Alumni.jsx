import React from "react";
import ProfileCard from "../components/ProfileCard";
import alumni from "../data/alumni";

function Alumni() {
  return (
    <section className="section section--dark" id="alumni">
      <div className="section__header">
        <span className="section__eyebrow">Alumni Network</span>
        <h2>Where They Are Now</h2>
        <p>Graduates working across engineering, design, and data roles.</p>
      </div>
      <div className="card-grid">
        {alumni.map((person) => (
          <ProfileCard key={person.id} {...person} />
        ))}

        {/* <ProfileCard
          image="https://i.pravatar.cc/300?img=38"
          name="Ishaan Gupta"
          role="Software Engineer"
          description="Prefers not to be contacted directly right now — reach out via the alumni office instead."
          skills={["React", "GraphQL"]}
          showButton={true}
          isVerified={true}
          theme="dark"
          rating={4}
          borderColor="#74B9FF"
        /> */}
      </div>
    </section>
  );
}

export default Alumni;