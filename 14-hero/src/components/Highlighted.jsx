function Highlighted({ children }) {
  return (
    <span className="bg-gradient-to-r from-theme-600 via-theme-700 to-theme-600 bg-clip-text text-transparent font-medium sm:font-bold">
      {children}
    </span>
  );
}

export default Highlighted;
