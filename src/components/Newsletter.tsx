export function Newsletter() {
  return (
    <section className="py-24 px-6 md:px-20 flex flex-col items-center text-center bg-primary/10 dark:bg-primary/5">
      <h2 className="text-5xl md:text-7xl font-black uppercase italic mb-4 text-primary brush-script-distressed">STAY IN THE LOOP</h2>
      <p className="text-xl font-medium mb-12 max-w-xl text-slate-700 dark:text-slate-300">Join our weekly newsletter for route updates, post-run social spots, and club news.</p>
      <form className="flex flex-col md:flex-row w-full max-w-2xl gap-0">
        <input className="flex-1 bg-white dark:bg-slate-800 border-2 border-primary border-r-0 py-5 px-6 font-bold focus:ring-0 focus:outline-none placeholder:text-slate-400" placeholder="YOUR EMAIL ADDRESS" type="email"/>
        <button className="bg-primary text-white font-black px-10 py-5 uppercase tracking-tighter hover:bg-black transition-colors" type="submit">
          SIGN UP FOR NEWS
        </button>
      </form>
    </section>
  );
}
