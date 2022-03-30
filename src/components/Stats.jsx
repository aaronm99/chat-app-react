import React from "react";

const Stats = () => {
  return (
    <section id="stats">
      <div className="stats__container">
        <h2 className="stats__heading">Stats</h2>
        <div className="stats__figures--container">
          <div className="stats__figure">
            <div className="figure__number">0</div>
            <div className="figure__heading">Active Users</div>
          </div>
          <div className="stats__figure">
            <div className="figure__number">0</div>
            <div className="figure__heading">Total Messages Sent</div>
          </div>
          <div className="stats__figure">
            <div className="figure__number">0</div>
            <div className="figure__heading">Chat Rooms</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
