import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Toasts from '../components/Toasts/Toasts';

export default function Layout({ children }) {
  return (
    <>
      <div className="App flex flex-col">
        <Header />
        <main className="grow">
          <div className="flex flex-col text-center text-xl items-center my-2 md:px-6 max-w-5xl mx-auto w-full">{children}</div>
        </main>
        <Toasts />
        <Footer />
      </div>
    </>
  );
}
