import * as React from 'react';

function Panel(props) {
  const sideLength = 50;
  const cityName = '';

  return (
    <div className="panel">

      <div className="input">
        <label>Bounding Square Side Length</label>
        <input
          type="number"
          value={sideLength}
        />
      </div>

      <div className="input">
        <label>City Name Filter</label>
        <input
          type="string"
          value={cityName}
        />
      </div>

    </div>
  );
}

export default React.memo(Panel);