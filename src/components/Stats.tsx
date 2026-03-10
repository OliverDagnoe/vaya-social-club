export function Stats() {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group p-8 border-l-4 border-primary bg-white dark:bg-slate-900 shadow-xl hover:shadow-primary/5 transition-all">
          <div className="text-primary mb-4">
            <span className="material-symbols-outlined text-4xl font-bold">bar_chart</span>
          </div>
          <h3 className="text-2xl font-black uppercase italic mb-2">25+ Nationalities</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Runners from all corners of the globe calling Lisbon home.</p>
        </div>
        <div className="group p-8 border-l-4 border-primary bg-white dark:bg-slate-900 shadow-xl hover:shadow-primary/5 transition-all">
          <div className="text-primary mb-4">
            <span className="material-symbols-outlined text-4xl font-bold">timer</span>
          </div>
          <h3 className="text-2xl font-black uppercase italic mb-2">AVG 5K: 23:30 MIN</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">A supportive pace for everyone, from sprinters to strollers.</p>
        </div>
        <div className="group p-8 border-l-4 border-primary bg-white dark:bg-slate-900 shadow-xl hover:shadow-primary/5 transition-all">
          <div className="text-primary mb-4">
            <span className="material-symbols-outlined text-4xl font-bold">handshake</span>
          </div>
          <h3 className="text-2xl font-black uppercase italic mb-2">150+ Connections</h3>
          <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">More than running, it's a social hub for the modern expat.</p>
        </div>
      </div>
    </section>
  );
}
