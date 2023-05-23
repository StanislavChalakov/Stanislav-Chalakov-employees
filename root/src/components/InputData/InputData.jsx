import { csvFileColumn } from '../../common/csv-file-column';

export default function InputData({ employees }) {
  return (
    <>
      <p>Input data:</p>
      <div className="overflow-x-auto w-full border border-secondary rounded">
        <table className="table table-zebra w-full text-center">
          <thead>
            <tr className={employees.length > 0 ? 'border-b border-secondary' : ''}>
              <th className="normal-case text-lg">{csvFileColumn.EMP_ID}</th>
              <th className="normal-case text-lg">{csvFileColumn.PROJECT_ID}</th>
              <th className="normal-case text-lg">{csvFileColumn.DATE_FROM}</th>
              <th className="normal-case text-lg">{csvFileColumn.DATE_TO}</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, i) => (
              <tr key={i + 1} className={i + 1 < employees.length ? 'border-b border-secondary' : ''}>
                <td>{employee.EmpID}</td>
                <td>{employee.ProjectID}</td>
                <td>{employee.DateFrom}</td>
                <td>{employee.DateTo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
