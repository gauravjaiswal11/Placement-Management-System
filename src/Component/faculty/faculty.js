import React from 'react'

function faculty() {
  return (
    <React.Fragment>
      <div className="bg">

        <h1 className="faculty">
          {" "}
          Faculty Module {" "}
        </h1>


        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="card">
                <img src="./Detail.jpg" className="card-img-top"
                  alt="..."
                  height="160px"
                />
                <div className="card-body">
                  <h5 className="card-title">Company Details</h5>
                  <p className="card-text"></p>
                  <a href="https://courseware.cutm.ac.in/" className="btn btn-primary">Go</a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card">
                <img src="./report.png" className="card-img-top"
                  alt="..."
                  height="160px"
                />
                <div className="card-body">
                  <h5 className="card-title">Download Reports</h5>
                  <p className="card-text"></p>
                  <a href="https://courseware.cutm.ac.in/" className="btn btn-primary">Go</a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card">
                <img src="./PLACEMENT dRIVE RECORD.png" className="card-img-top"
                  alt="..."
                  height="160px"
                />
                <div className="card-body">
                  <h5 className="card-title">PLACEMENT DRIVE RECORDS</h5>
                  <p className="card-text"></p>
                  <a href="https://courseware.cutm.ac.in/" className="btn btn-primary">Go</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default faculty
