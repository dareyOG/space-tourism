import { useLocation } from 'react-router-dom';

function Main({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  return (
    <main
      className={`grid grid-rows-[auto_1fr] ${
        pathname.split('/').includes('crew')
          ? 'bg-crew md:bg-crew_tablet lg:bg-crew_desktop'
          : pathname.split('/').includes('destination')
          ? 'bg-destination md:bg-destination_tablet lg:bg-destination_desktop'
          : pathname.split('/').includes('technology')
          ? 'bg-technology md:bg-technology_tablet lg:bg-technology_desktop'
          : 'bg-home md:bg-home_tablet lg:bg-home_desktop'
      } bg-center bg-cover bg-no-repeat`}
    >
      {children}
    </main>
  );
}

export default Main;
