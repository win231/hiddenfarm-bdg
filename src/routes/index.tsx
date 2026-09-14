import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import heroAsset from "@/assets/hidden-farm-night.jpg.asset.json";
import suasanaFruitAsset from "@/assets/hidden-farm-fruit-station.jpg.asset.json";
import suasanaLibraryAsset from "@/assets/hidden-farm-library.jpg.asset.json";
import suasanaCatAsset from "@/assets/hidden-farm-cat.jpg.asset.json";
import buburAsset from "@/assets/bubur-kacang-hijau-croffle.jpg.asset.json";
import smoothieAsset from "@/assets/berry-smoothie-bowls.jpg.asset.json";
import riceBowlAsset from "@/assets/comfort-rice-bowls.jpg.asset.json";

const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Hidden+Farm+Cafe+Bukit+Pakar+Utara+Cimenyan+Bandung";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Jl.+Bukit+Pakar+Utara+No.40,+Ciburial,+Cimenyan,+Bandung,+Jawa+Barat+40198&output=embed";
const MENU_PDF =
  "https://drive.google.com/drive/mobile/folders/1XbcOW2KIn3fyYXGzH3b292tAE_ZSe7Tn";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hidden Farm Cafe — Oasis Hijau di Bukit Pakar, Bandung" },
      {
        name: "description",
        content:
          "Hidden Farm Cafe — kebun kopi & suasana alam di Bukit Pakar Utara, Bandung. Kopi pilihan, pastry, dan area outdoor yang ramah hewan peliharaan.",
      },
      { property: "og:title", content: "Hidden Farm Cafe — Bukit Pakar, Bandung" },
      {
        property: "og:description",
        content:
          "Nikmati rehat sejenak di tengah asrinya kebun Bandung. Sajian kopi pilihan & kehangatan suasana alam di Bukit Pakar Utara.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#suasana", label: "Suasana" },
  { href: "#menu", label: "Menu" },
  { href: "#lokasi", label: "Lokasi" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream font-body text-forest antialiased selection:bg-leaf/30">
      {/* decorative frosted light blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-sage/40 blur-3xl"></div>
        <div className="absolute top-1/3 -right-32 h-[460px] w-[460px] rounded-full bg-clay/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 h-[420px] w-[420px] rounded-full bg-leaf/20 blur-3xl"></div>
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-50">
        <nav className="mx-auto mt-4 flex max-w-6xl items-center justify-between gap-4 rounded-2xl border border-white/50 bg-white/60 px-5 py-3 backdrop-blur-xl shadow-[0_8px_30px_rgba(47,74,56,0.08)] sm:mx-6 lg:mx-auto">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-forest/90 text-cream text-lg leading-none">
              H
            </span>
            <span className="font-display text-lg font-medium tracking-tight">
              Hidden Farm Cafe
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-forest/70 transition-colors hover:text-forest"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener"
              className="rounded-xl bg-forest px-4 py-2 text-sm font-semibold text-cream shadow-sm transition-transform hover:-translate-y-0.5"
            >
              📍 Petunjuk Rute
            </a>
            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label="Buka menu navigasi"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-xl border border-forest/15 bg-white/60 text-forest md:hidden"
            >
              <span className="text-lg leading-none">{menuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </nav>
        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="mx-4 mt-2 rounded-2xl border border-white/50 bg-white/80 p-2 backdrop-blur-xl shadow-[0_8px_30px_rgba(47,74,56,0.12)] md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-forest/80 transition-colors hover:bg-leaf/10 hover:text-forest"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative scroll-mt-24 overflow-hidden px-5 pb-8 pt-14 sm:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div className="grain relative">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-leaf/30 bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-leaf backdrop-blur">
              Bukit Pakar · Bandung
            </span>
            <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Nikmati Rehat Sejenak di Tengah Asrinya Kebun Bandung
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-forest/70 sm:text-lg">
              Sajian kopi pilihan & kehangatan suasana alam di Bukit Pakar
              Utara.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener"
                className="rounded-xl bg-forest px-6 py-3.5 text-sm font-semibold text-cream shadow-lg shadow-forest/20 transition-transform hover:-translate-y-0.5"
              >
                📍 Petunjuk Rute ke Kafe
              </a>
              <a
                href="#menu"
                className="rounded-xl border border-forest/20 bg-white/50 px-6 py-3.5 text-sm font-semibold text-forest backdrop-blur transition-colors hover:bg-white/80"
              >
                📖 Lihat Menu
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/60 bg-sage/30 shadow-2xl shadow-forest/15 outline-1 -outline-offset-1 outline-black/5 aspect-[9/10]">
              <img
                 src={heroAsset.url}
                width={1080}
                height={1200}
                 alt="Area duduk outdoor Hidden Farm Cafe pada malam hari dengan meja kayu, pepohonan, dan lampu hangat"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 backdrop-blur-xl shadow-xl">
              <span className="grid size-10 place-items-center rounded-xl bg-leaf/20 text-xl">
                🌿
              </span>
              <div>
                <p className="text-sm font-semibold leading-tight">Pet Friendly</p>
                <p className="text-xs text-forest/60">Outdoor garden seating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUASANA */}
      <section id="suasana" className="scroll-mt-24 px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
              Suasana Kafe
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Oasis Hijau di Tengah Perbukitan
            </h2>
            <p className="mt-4 text-base leading-relaxed text-forest/70">
               Di antara rimbunnya kebun dan sejuknya udara pegunungan, temukan
               kehangatan sudut baca bambu, singgah di stasiun buah rustic yang
               penuh warna, lalu bersantai ditemani kucing-kucing penghuni yang
               ramah—sebuah rumah kecil untuk jeda yang tenang dan berkesan.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
               { src: suasanaFruitAsset.url, alt: "Stasiun pemesanan buah rustic dari kayu dan bambu di Hidden Farm Cafe", cls: "" },
               { src: suasanaLibraryAsset.url, alt: "Sudut perpustakaan bambu dengan rak buku, gitar, dan pemandangan kebun", cls: "sm:mt-8" },
               { src: suasanaCatAsset.url, alt: "Kucing penghuni Hidden Farm Cafe tidur tenang di samping sebuah buku", cls: "" },
            ].map((img) => (
              <div
                key={img.src}
                className={`relative w-full overflow-hidden rounded-3xl border border-white/60 bg-leaf/20 shadow-xl shadow-forest/10 outline-1 -outline-offset-1 outline-black/5 aspect-[4/5] ${img.cls}`}
              >
                <img
                  src={img.src}
                  loading="lazy"
                  alt={img.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="scroll-mt-24 px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-white/60 bg-white/40 p-6 backdrop-blur-xl shadow-xl shadow-forest/10 sm:p-10 lg:p-14">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
              Menu Favorit
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Pilihan Favorit Pengunjung
            </h2>
            <p className="mt-4 text-base leading-relaxed text-forest/70">
              Nikmati aneka kopi, minuman segar, dan hidangan penutup terbaik
              kami.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                 src: buburAsset.url,
                 title: "Bubur Kacang Hijau with Croffle",
                 desc: "Perpaduan unik kehangatan bubur kacang hijau gurih dan manisnya croffle renyah dengan sentuhan es krim lembut.",
              },
              {
                 src: smoothieAsset.url,
                 title: "Healthy Berry Smoothie Bowl",
                 desc: "Kesegaran racikan buah berry alami bertabur topping pisang manis dan biji-bijian bernutrisi.",
              },
              {
                 src: riceBowlAsset.url,
                 title: "Special Comfort Rice Bowl",
                 desc: "Sajian nasi hangat lezat khas rumah dengan lauk kaya rasa untuk menemani momen santap siangmu.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-white/60 bg-white/60 p-4 backdrop-blur transition-transform hover:-translate-y-1"
              >
                <div className="w-full overflow-hidden rounded-2xl border border-white/60 bg-beige outline-1 -outline-offset-1 outline-black/5 aspect-square">
                  <img
                    src={item.src}
                    loading="lazy"
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                 <div className="mt-4">
                  <h3 className="font-display text-lg font-medium leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-forest/65">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href={MENU_PDF}
              target="_blank"
              rel="noopener"
              className="rounded-xl bg-forest px-8 py-4 text-sm font-semibold text-cream shadow-lg shadow-forest/20 transition-transform hover:-translate-y-0.5"
            >
              📄 Lihat Menu Lengkap (PDF Drive)
            </a>
          </div>
        </div>
      </section>

      {/* LOKASI */}
      <section id="lokasi" className="scroll-mt-24 px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
              Lokasi & Jam Buka
            </span>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Mampir ke Kebun Kami
            </h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_1fr]">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-sage/25 shadow-xl shadow-forest/10 outline-1 -outline-offset-1 outline-black/5 min-h-[320px]">
              <iframe
                title="Peta lokasi Hidden Farm Cafe di Bukit Pakar Bandung"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
              />
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener"
                className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-xl bg-white/80 px-5 py-3 text-sm font-semibold text-forest backdrop-blur transition-transform hover:-translate-y-0.5"
              >
                📍 Buka di Google Maps
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-white/60 bg-white/60 p-5 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-leaf">
                  Alamat
                </p>
                <p className="mt-2 text-sm leading-relaxed text-forest/80">
                  Jl. Bukit Pakar Utara No.40, Ciburial, Kec. Cimenyan, Kabupaten
                  Bandung, Jawa Barat 40198
                </p>
              </div>
              <div className="rounded-2xl border border-white/60 bg-white/60 p-5 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-leaf">
                  Jam Operasional
                </p>
                <p className="mt-2 text-sm leading-relaxed text-forest/80">
                  Setiap Hari (Senin - Minggu)
                </p>
                <p className="font-display text-lg font-medium">
                  07.30 - 23.00 WIB
                </p>
              </div>
              <div className="rounded-2xl border border-leaf/30 bg-leaf/10 p-5 backdrop-blur">
                <p className="text-sm font-medium text-forest">
                  Area parkir tersedia & Pet Friendly 🐶
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-5 pb-10 pt-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl border border-white/60 bg-white/50 px-6 py-8 text-center backdrop-blur-xl sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-forest/90 font-display text-lg text-cream">
              H
            </span>
            <div>
              <p className="font-display text-lg font-medium">Hidden Farm Cafe</p>
              <p className="text-xs text-forest/60">Bukit Pakar, Bandung</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 sm:items-end">
            <a
              href="https://instagram.com/hiddenfarm.cafe"
              target="_blank"
              rel="noopener"
              className="text-sm font-semibold text-forest hover:text-leaf"
            >
              Instagram · @hiddenfarm.cafe
            </a>
            <a
              href="mailto:hiddenfarm.bdg@gmail.com"
              className="text-sm font-medium text-forest/70 hover:text-leaf"
            >
              hiddenfarm.bdg@gmail.com
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-forest/50">
          © 2026 Hidden Farm Cafe Bandung. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
