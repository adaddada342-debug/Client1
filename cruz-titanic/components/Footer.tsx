"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="section relative pt-24 pb-12">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-lg p-8 md:p-10 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]"
        >
          <div>
            <p className="eyebrow mb-4">Dossier 001</p>
            <h3 className="font-display text-3xl md:text-4xl tracking-tightest leading-[1.05] text-bone-50">
              Cruz.
              <br />
              <span className="italic text-bone-200/70">A myth in motion.</span>
            </h3>
            <p className="mt-5 max-w-md text-bone-200/70 leading-relaxed">
              Compiled from witness statements, satellite imagery, and the silence
              of mountains that learned to bow.
            </p>
          </div>
          <div className="grid gap-2 text-sm">
            <p className="eyebrow mb-2">Sections</p>
            <a className="hover:text-bone-50 text-bone-200/75" href="#feats">Feats</a>
            <a className="hover:text-bone-50 text-bone-200/75" href="#timeline">Timeline</a>
            <a className="hover:text-bone-50 text-bone-200/75" href="#gallery">Showcase</a>
            <a className="hover:text-bone-50 text-bone-200/75" href="#cruz">Cruz</a>
          </div>
          <div className="grid gap-2 text-sm">
            <p className="eyebrow mb-2">Filed</p>
            <span className="text-bone-200/75">Sector 7 / Archive 4</span>
            <span className="text-bone-200/75 num">04 · 2026</span>
            <span className="text-bone-200/75">For posterity</span>
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] uppercase tracking-[0.22em] text-bone-300/60">
          <p>© The Cruz Archive — All myths reserved.</p>
          <p className="num">400 lbs · 16 yrs · 1 legend</p>
        </div>
      </div>
    </footer>
  );
}
