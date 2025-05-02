const Inner = ({children, className = ''}) => {
  return (
    <div className={`w-full mx-auto lg:max-w-5xl xl:max-w-7xl ${className}`}>
      {children}
    </div>
  );
}

export default Inner