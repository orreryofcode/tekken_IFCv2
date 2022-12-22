function FrameDataTable({ frameData }) {
  return (
    <div className='framedata__container'>
      <div className='framedata__container--inner'>
        <div className='framedata__heading'>
          <h3>Frame Data</h3>
        </div>

        <div className='framedata__table'>
          <table>
            <thead>
              <tr>
                <th>Command</th>
                <th>S</th>
                <th>oB</th>
                <th>oH</th>
                <th>CH</th>
                <th>Spcl.</th>
                <th>Notes</th>
              </tr>
            </thead>

            <tbody>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FrameDataTable;
