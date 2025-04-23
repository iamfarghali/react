function Button({ children }) {
  return (
    <button className="mt-6 py-4 px-6 mx-auto bg-slate-950 border border-blue-400 rounded-sm shadow-sm cursor-pointer shadow-blue-400 font-bold blueShadow">
      {children}
    </button>
  );
}

export default Button;
