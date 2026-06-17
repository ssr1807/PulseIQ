function DepartmentPanel({ departments = [] }) {

  if (departments.length === 0) {

    return (

      <div className="agent-card">

        <h2 className="section-title">

          Departments

        </h2>

        <p>

          Type a request to automatically detect departments.

        </p>

      </div>

    );

  }

  return (

    <div>

      <h2 className="section-title">

        Departments Involved

      </h2>

      <div className="agent-grid">

        {

          departments.map((department,index)=>(

            <div
              key={index}
              className="agent-card"
            >

              <div className="agent-header">

                <h3>

                  {department}

                </h3>

                <div className="agent-status active">

                  Active

                </div>

              </div>

              <p className="agent-role">

                Participating in this workflow

              </p>

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default DepartmentPanel;