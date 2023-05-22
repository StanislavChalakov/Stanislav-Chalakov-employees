import { useContext, useRef } from 'react';
import CSVReader from 'react-csv-reader';
import { ToastContext } from '../providers/toast-context';
import { toastClass } from '../common/toast-class.enum';

export default function Employees() {
  const { addToast } = useContext(ToastContext);
  const inputRef = useRef();

  const uploadFileHandler = (data, fileInfo) => {
    if (fileInfo.type === 'text/csv') {
      console.table(data);
    } else {
      inputRef.current.value = '';
      return addToast(toastClass.ERROR, 'Only CSV files are allowed!');
    }
  };

  return (
    <>
      <h1>Employees</h1>
      <CSVReader ref={inputRef} onFileLoaded={uploadFileHandler} parserOptions={{ header: true }} accept=".csv" cssInputClass="file-input file-input-secondary focus:outline-0 file-input-md w-full max-w-xs my-2" />
    </>
  );
}
