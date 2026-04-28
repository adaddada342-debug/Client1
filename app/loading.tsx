export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="h-16 w-16 animate-spin rounded-full border border-white/10 border-t-white/60" />
        <div className="space-y-2">
          <p className="text-[0.72rem] uppercase tracking-[0.38em] text-white/45">Summoning Cruz</p>
          <p className="text-sm text-white/60">Preparing the myth, the weight, the wake.</p>
        </div>
      </div>
    </main>
  );
}
