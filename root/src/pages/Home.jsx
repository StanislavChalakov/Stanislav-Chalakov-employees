import { useContext, useRef, useState } from 'react';
import CSVReader from 'react-csv-reader';
import { ToastContext } from '../providers/toast-context';
import { toastClass } from '../common/toast-class.enum';
import InputData from '../components/InputData/InputData';
import { csvFileColumn } from '../common/csv-file-column';

export default function Home() {
  const { addToast } = useContext(ToastContext);
  const fileInputRef = useRef();
  const [employees, setEmployees] = useState([]);

  const loadFileDataHandler = (data, fileInfo) => {
    if (fileInfo.type === 'text/csv') {
      const requiredColumns = [csvFileColumn.EMP_ID, csvFileColumn.PROJECT_ID, csvFileColumn.DATE_FROM, csvFileColumn.DATE_TO];
      const fileColumns = data.length > 0 ? Object.keys(data[0]) : [];
      const hasRequiredColumns = requiredColumns.every((column) => fileColumns.includes(column));

      if (hasRequiredColumns) {
        setEmployees(data);
      } else {
        fileInputRef.current.value = '';
        addToast(toastClass.ERROR, 'The CSV file has missing columns!');
        setEmployees([]);
      }
    } else {
      fileInputRef.current.value = '';
      addToast(toastClass.ERROR, 'Only CSV files are allowed!');
      setEmployees([]);
    }
  };

  return (
    <>
      <h1>Employees</h1>
      <CSVReader ref={fileInputRef} onFileLoaded={loadFileDataHandler} parserOptions={{ header: true, skipEmptyLines: true }} accept=".csv, text/csv" cssInputClass="file-input file-input-secondary focus:outline-0 file-input-md w-full max-w-xs my-2 rounded hover:border-primary" />
      <InputData employees={employees} />
    </>
  );
}
