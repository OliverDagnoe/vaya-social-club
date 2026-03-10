export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-20 border-t border-primary/10 bg-background-light dark:bg-background-dark">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl font-bold">directions_run</span>
          <span className="font-black italic text-xl">VAYA SOCIAL CLUB</span>
        </div>
        <div className="flex gap-6">
          <a className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all" href="#">
            <span className="material-symbols-outlined text-xl">camera</span>
          </a>
          <a className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all" href="#">
            <span className="material-symbols-outlined text-xl">share</span>
          </a>
          <a className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all" href="#">
            <span className="material-symbols-outlined text-xl">location_on</span>
          </a>
        </div>
        <p className="text-slate-500 text-sm font-bold tracking-widest uppercase">© 2024 VAYA SOCIAL CLUB • LISBON</p>
      </div>
    </footer>
  );
}
