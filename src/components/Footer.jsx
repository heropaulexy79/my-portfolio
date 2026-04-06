export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-8 text-center mt-20 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      <p className="text-white/30 text-sm m-0 transition-colors hover:text-white/50 duration-300">
        &copy; {new Date().getFullYear()} <span className="text-purple-500 font-semibold px-1">Oke Oluwaseun</span>. All Rights Reserved.
      </p>
    </footer>
  );
}
