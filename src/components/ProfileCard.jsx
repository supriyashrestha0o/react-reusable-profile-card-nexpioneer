import React from "react";
import "./ProfileCard.css";

function ProfileCard({
  image,
  name,
  role,
  description,
  skills = [],
  buttonText = "View Profile",
  showButton = true,
  isVerified = false,
  theme = "light",
  borderColor,
  rating = 0,
  onButtonClick,
}) {
  const fullStars = Math.round(Math.min(Math.max(rating, 0), 5));

  return (
    <div
      className={`profile-card profile-card--${theme}`}
      style={borderColor ? { "--card-border": borderColor } : undefined}
    >
      <div className="profile-card__image-wrap">
        <img
          className="profile-card__image"
          src={image}
          alt={name}
          onError={(e) => {
            e.currentTarget.src =
              "https://api.dicebear.com/7.x/initials/svg?seed=" + name;
          }}
        />
      </div>

      <div className="profile-card__body">
        <h3 className="profile-card__name">
          {name}
          {isVerified && (
            <span className="profile-card__badge" title="Verified">
              ✅
            </span>
          )}
        </h3>

        <p className="profile-card__role">{role}</p>

        {rating > 0 && (
          <div className="profile-card__rating" aria-label={`${rating} out of 5 stars`}>
            {"⭐".repeat(fullStars)}
            <span className="profile-card__rating-empty">
              {"☆".repeat(5 - fullStars)}
            </span>
          </div>
        )}

        <p className="profile-card__description">{description}</p>

        {skills.length > 0 && (
          <ul className="profile-card__skills">
            {skills.map((skill) => (
              <li key={skill} className="profile-card__skill-tag">
                {skill}
              </li>
            ))}
          </ul>
        )}

        {showButton && (
          <button className="profile-card__button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;