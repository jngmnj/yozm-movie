const LoadingSpinner = ({ height = '' }) => {
  return (
    <div className={`flex justify-center items-center w-full ${height}`}>
      <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
