'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import BackgroundLayout from '../../components/BackgroundLayout';

const APP_MODE_KEY = 'as-courage.appMode.v1';

type AppMode = 'free' | 'full' | null;

function readMode(): AppMode {
  try {
    const v = localStorage.getItem(APP_MODE_KEY);
    if (v === 'free' || v === 'full') return v;
    return null;
  } catch {
    return null;
  }
}

export default function StartPage() {
  const [mode, setMode] = useState<AppMode>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // ✅ Freeware-Variante: immer "free" sicherstellen (ohne /version-Umweg)
    const m = readMode();

    if (m === null || m === 'full') {
      try {
        localStorage.setItem(APP_MODE_KEY, 'free');
      } catch {}
      setMode('free');
    } else {
      setMode(m);
    }

    setReady(true);
  }, []);

  if (!ready || mode === null) return null;

  return (
    <BackgroundLayout>
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-6">
        <section className="rounded-2xl bg-white/85 p-6 shadow-xl backdrop-blur-md">
          <h1 className="text-2xl font-semibold text-slate-900">
            Thema der Woche <span className="text-slate-600">(Edition 1)</span>
          </h1>

          <div className="mt-2 text-sm text-slate-700">
            <span className="font-semibold">Free-Version</span>
            <span className="ml-2 text-slate-500">• Freeware</span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              href="/themes"
              className="block rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left shadow-sm transition hover:bg-slate-50"
            >
              <div className="text-base font-semibold text-slate-900">Themen auswählen</div>
              <div className="mt-1 text-sm text-slate-700">weiter zur Themenübersicht</div>
            </Link>

            <Link
              href="/setup"
              className="block rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left shadow-sm transition hover:bg-slate-50"
            >
              <div className="text-base font-semibold text-slate-900">Setup starten</div>
              <div className="mt-1 text-sm text-slate-700">Wochenanzahl & Startdatum festlegen</div>
            </Link>
          </div>

          {/* ✅ Full sichtbar, aber deaktiviert */}
          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-sm font-semibold text-slate-900">Full-Version (deaktiviert)</div>
                <div className="mt-1 text-sm text-slate-600">
                  In der Freeware ist die Full-Version sichtbar, aber nicht nutzbar.
                </div>
              </div>

              <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                nur Vorschau
              </span>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="cursor-not-allowed rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left opacity-50">
                <div className="text-base font-semibold text-slate-900">Full aktivieren</div>
                <div className="mt-1 text-sm text-slate-700">Lizenz auswählen & freischalten</div>
              </div>

              <div className="cursor-not-allowed rounded-2xl border border-slate-200 bg-white px-4 py-4 text-left opacity-50">
                <div className="text-base font-semibold text-slate-900">Teamkalender / iCal</div>
                <div className="mt-1 text-sm text-slate-700">nur in Full (C) verfügbar</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </BackgroundLayout>
  );
}