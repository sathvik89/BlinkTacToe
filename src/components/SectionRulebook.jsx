const Section = ({ number, title, children }) => (
  <div className="mt-6">
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-400 text-white text-xs font-bold">
        {number}
      </div>
      <h3 className="font-semibold text-[#B3BFFA] text-base sm:text-lg">
        {title}
      </h3>
    </div>
    <div className="mt-2 text-sm text-white/90 space-y-1 pl-9">{children}</div>
  </div>
);
export default Section;
