import React from 'react';

const Statastics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title"> {title === '' ? 'Upload stats' : title} </h2>
      <ul className="stat-list">
        {stats.map(stat => (
          <li class="item" key={stat.id}>
            <span class="label">{stat.label}</span>
            <span class="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statastics;
