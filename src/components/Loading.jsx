import { AiOutlineLoading3Quarters as LoadingSpinner } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-32">
      <span className="animate-spin">
        <LoadingSpinner />
      </span>
    </div>
  );
};
export default Loading;
