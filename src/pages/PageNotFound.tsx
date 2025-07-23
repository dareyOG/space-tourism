import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  const handleMoveBack = () => navigate(-1);
  return (
    <div className="h-screen bg-dark-blue flex flex-col gap-y-5 text-center text-light-blue justify-center items-center">
      <h1 className="text-3xl capitalize ">Page not found 🔎❗</h1>
      <button
        onClick={handleMoveBack}
        className="border px-[2rem] py-[1rem] rounded-full flex gap-x-2 hover:bg-light-blue hover:text-dark-blue"
      >
        <span>&larr;</span>
        <>Go back</>
      </button>
    </div>
  );
}

export default PageNotFound;
