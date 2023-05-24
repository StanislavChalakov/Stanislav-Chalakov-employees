import { useEffect } from 'react';
import { outputColumn } from '../../common/output-column.enum';

export default function OutputData({ employees }) {
  useEffect(() => {
    if (employees.length > 0) {
      console.log(employees);
    }
  }, [employees]);

  return (
    <>
      <p className="mt-2">Output data:</p>
      <div className="overflow-x-auto w-full border border-secondary rounded">
        <table className="table table-zebra w-full text-center">
          <thead>
            <tr className={employees.length > 0 ? 'border-b border-secondary' : ''}>
              <th className="normal-case text-lg">{outputColumn.EMP_ID1}</th>
              <th className="normal-case text-lg">{outputColumn.EMP_ID2}</th>
              <th className="normal-case text-lg">{outputColumn.PROJECT_ID}</th>
              <th className="normal-case text-lg">{outputColumn.DAYS_WORKED}</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}
