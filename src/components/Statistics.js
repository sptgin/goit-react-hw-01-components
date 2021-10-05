import React from 'react';

function getBgColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const Statastics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="statistics__title">
        {' '}
        {title === '' ? 'UPLOAD STATS' : title.toUpperCase()}{' '}
      </h2>
      <ul className="statistics__stat-list">
        {stats.map(stat => (
          <li
            class="statistics__stat-item"
            style={{
              backgroundColor: getBgColor(),
            }}
            key={stat.id}
          >
            <span class="statistics__stat-label">{stat.label}</span>
            <span class="statistics__stat-percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statastics;
