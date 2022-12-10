import { useState, useEffect } from "react";

function FrameDataTable() {
  const [frameData, setFrameData] = useState([]);

  const getFrames = async () => {
    const response = await fetch("../data/jin.json");
    const data = await response.json();

    setFrameData(data);
  };

  useEffect(() => {
    getFrames();
  }, []);

  return (
    <div className='framedata__container'>
      <div className='framedata__container--inner'>
        <div className='framedata__heading'>
          <h4>Frame Data</h4>
        </div>

        <div className='framedata__table'>
          <table>
            <tr>
              <th>Command</th>
              <th>S</th>
              <th>oB</th>
              <th>oH</th>
              <th>CH</th>
              <th>Spcl.</th>
              <th>Notes</th>
            </tr>
            {frameData.map((data) => (
              <tr>
                <td>{data["Command"]}</td>
                <td>{data["Startup"]}</td>
                <td>{data["oB"]}</td>
                <td>{data["oH"]}</td>
                <td>{data["cH"]}</td>
                <td>{data["Hit Level"]}</td>
                <td>{data["Notes"]}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default FrameDataTable;
