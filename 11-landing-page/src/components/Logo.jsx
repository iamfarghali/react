function Logo({ size = "sm" }) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
    '2xl': "w-16 h-16",
  };
  return (
    <div className="flex items-center cursor-pointer">
      <div
        className={`${sizes[size]} rounded-full bg-blue-600 opacity-75 hover:opacity-100 transition-opacity duration-200`}
      ></div>
      <div
        className={`${sizes[size]} rounded-full bg-red-500 opacity-100 hover:opacity-75 transition-opacity duration-200 -ml-2`}
      ></div>
    </div>
  );
}

export default Logo;
