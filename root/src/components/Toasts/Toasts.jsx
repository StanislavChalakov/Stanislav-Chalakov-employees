import { useContext } from 'react';
import { ToastContext } from '../../providers/toast-context';

export default function Toasts() {
  const { toasts } = useContext(ToastContext);

  return (
    <div className="toast z-50">
      {toasts.map((t, i) => (
        <div key={i} className={`alert ${t.class}`}>
          <div>
            <span>{t.message}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
