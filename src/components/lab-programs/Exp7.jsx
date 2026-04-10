import React, { useState } from 'react';

const ProfileCard = ({ name, bio, image, initialColor }) => {
  const [bgColor, setBgColor] = useState(initialColor);

  return (
    <div style={{ backgroundColor: bgColor }}>
      <div>
        <img
          src={image}
          alt={name}
          width="100"
          height="100"
        />
        <h3>{name}</h3>
        <p>{bio}</p>
      </div>

      <div>
        <label>
          Card Background:
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
};

const Exp7ProfileCard = () => {
  return (
    <div>
      <h2>Experiment 7: ProfileCard Component</h2>
      <p>Dynamic styling using state.</p>

      <ProfileCard
        name="John Doe"
        bio="Full-stack developer from San Francisco."
        image="https://i.pravatar.cc/150?img=11"
        initialColor="#f8f8f8"
      />

      <ProfileCard
        name="Jane Smith"
        bio="Frontend engineer building web apps."
        image="https://i.pravatar.cc/150?img=5"
        initialColor="#f0f4f8"
      />
    </div>
  );
};

export default Exp7ProfileCard;