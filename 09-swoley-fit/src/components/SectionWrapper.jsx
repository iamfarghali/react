function SectionWrapper({ children, header, title }) {
  return (
    <section className="min-h-screen flex flex-col gap-12 pb-22">
      <div className="flex flex-col gap-2 justify-center items-center bg-slate-900 py-10">
        <p className="font-medium uppercase">{header}</p>
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {title.map((word, idx) =>
            idx === 1 ? (
              <span key={idx} className="uppercase text-blue-400">
                {" "}
                {word}{" "}
              </span>
            ) : (
              <span key={idx}>{word}</span>
            )
          )}
        </h2>
      </div>

      <div className="max-w-[800px] w-full flex flex-col gap-18 mx-auto px-4">
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
