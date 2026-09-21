import React, { useState } from 'react';
import { content } from './data';
import { 
  Globe, Mail, ExternalLink, Award, BookOpen, 
  Briefcase, Sparkles, ChevronDown, 
  Check, GraduationCap, Mic, Wrench, List, Landmark
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('en');
  const t = content[lang];
  const links = content.links;

  const languages = [
    { code: 'en', label: 'English', sub: 'United States' },
    { code: 'ja', label: '日本語', sub: 'Japan' }
  ];

  const navItems = [
    { id: 'about', label: t.nav.about, icon: Sparkles },
    { id: 'education', label: t.nav.education, icon: GraduationCap },
    { id: 'experience', label: t.nav.experience, icon: Briefcase },
    { id: 'publications', label: t.nav.publications, icon: BookOpen },
    { id: 'skills', label: t.nav.skills, icon: Wrench },
    { id: 'conferences', label: t.nav.presentations, icon: Mic },
    { id: 'awards', label: t.nav.awards, icon: Award },
    { id: 'scholarships', label: t.nav.scholarships, icon: Landmark },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans">
      
      {/* 画面右上固定のフローティングバー */}
      <div className="fixed top-5 right-5 z-50 flex items-center gap-2.5">
        
        {/* 目次メニュー */}
        <div className="relative group">
          <button 
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 shadow-lg text-xs font-semibold cursor-pointer transition-all duration-200"
            aria-label="Table of Contents"
          >
            <List size={14} className="text-indigo-400" />
            <span className="hidden sm:inline">Menu</span>
            <ChevronDown size={12} className="text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
          </button>

          {/* ホバー領域を途切れさせない透明ブリッジ */}
          <div className="absolute right-0 top-full pt-2 w-52 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
            <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl p-1.5 text-slate-800">
              <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                Jump to Section
              </div>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-3 py-2 flex items-center gap-2.5 text-xs text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/70 rounded-xl transition-colors cursor-pointer"
                  >
                    <Icon size={14} className="text-indigo-500 shrink-0" />
                    <span className="font-medium truncate">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 言語選択メニュー */}
        <div className="relative group">
          <button 
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md border border-white/20 shadow-lg text-xs font-semibold cursor-pointer transition-all duration-200"
            aria-label="Language Selector"
          >
            <Globe size={14} className="text-indigo-400" />
            <span>{languages.find(l => l.code === lang)?.label}</span>
            <ChevronDown size={12} className="text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
          </button>

          {/* ホバー領域を途切れさせない透明ブリッジ */}
          <div className="absolute right-0 top-full pt-2 w-44 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200">
            <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl p-1.5 text-slate-800">
              <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                Select Language
              </div>
              {languages.map((l) => {
                const isSelected = lang === l.code;
                return (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className="w-full text-left px-3 py-2 flex items-center justify-between text-xs hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                  >
                    <div>
                      <div className={`font-medium ${isSelected ? 'text-indigo-600 font-semibold' : 'text-slate-700'}`}>
                        {l.label}
                      </div>
                      <div className="text-[10px] text-slate-400">{l.sub}</div>
                    </div>
                    {isSelected && (
                      <Check size={14} className="text-indigo-600 stroke-[2.5]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* 1. フルスクリーン・ヒーローセクション */}
      <section className="relative min-h-[92vh] flex flex-col justify-between text-white overflow-hidden bg-slate-900">
        
        {/* 背景画像 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ 
            backgroundImage: "url('/background.jpg'), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80')" 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

        {/* トップブランドタグ */}
        <header className="relative z-20 max-w-6xl mx-auto w-full px-6 py-6 flex items-center justify-between">
          <span className="text-sm font-semibold tracking-wide text-white/90 drop-shadow-md">
            YN Portfolio
          </span>
        </header>

        {/* ヒーロー中央コンテンツ */}
        <div className="relative z-10 max-w-4xl mx-auto w-full px-6 py-12 flex flex-col items-center text-center space-y-6">
          
          {/* プロフィール画像 */}
          <div className="relative group">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-white/90 shadow-2xl overflow-hidden bg-slate-200 flex items-center justify-center">
              <img 
                src="/profile.jpg" 
                alt="Yuta Namekawa" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.classList.add('flex', 'items-center', 'justify-center', 'text-slate-600', 'font-bold');
                  e.target.parentNode.innerText = 'YN';
                }}
              />
            </div>
          </div>

          {/* 名前 & 所属 */}
          <div className="space-y-2 drop-shadow-md">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              滑川 勇太 <span className="font-light text-white/80 text-2xl sm:text-4xl">| Yuta Namekawa</span>
            </h1>
            <p className="text-base sm:text-lg font-medium text-white/95">
              東京科学大学 物質理工学院 材料系 修士2年
            </p>
          </div>

          {/* Welcome メッセージ */}
          <div className="pt-2">
            <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white flex items-center justify-center gap-2 drop-shadow-lg">
              Welcome to my website! <span className="animate-bounce">🎉</span>
            </h2>
          </div>

          {/* メールアドレス表示部 */}
          <div className="text-xs sm:text-sm text-white/90 drop-shadow">
            <a 
              href={`mailto:${links.email.replace(' [at] ', '@')}`}
              className="inline-flex items-center gap-1.5 hover:underline font-mono"
            >
              <Mail size={15} />
              {links.email}
            </a>
          </div>

          {/* リンクアイコンバー（Scholar, LinkedIn, ORCID） */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 pt-2">
            <a 
              href={links.googleScholar} 
              target="_blank" 
              rel="noreferrer" 
              title="Google Scholar"
              className="w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 border border-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-lg"
            >
              <GraduationCap size={19} />
            </a>

            <a 
              href={links.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              title="LinkedIn"
              className="w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 border border-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-lg"
            >
              <span className="font-bold text-sm">in</span>
            </a>

            <a 
              href={links.orcid} 
              target="_blank" 
              rel="noreferrer" 
              title="ORCID"
              className="w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 border border-white/30 backdrop-blur-md flex items-center justify-center text-[#A6CE39] font-bold text-sm transition-all transform hover:scale-110 shadow-lg"
            >
              iD
            </a>
          </div>

        </div>

        {/* スクロール案内 */}
        <div className="relative z-10 pb-6 flex justify-center text-white/70 animate-bounce">
          <ChevronDown size={28} />
        </div>

      </section>

      {/* 2. メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-14 space-y-16">
        
        {/* ① About Card */}
        <section id="about" className="scroll-mt-24 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2 border-b pb-3">
            <Sparkles size={16} className="text-amber-500" /> {t.aboutTitle}
          </h2>
          {t.aboutIntro && (
            <p className="text-sm font-medium text-slate-700 leading-relaxed">
              {t.aboutIntro}
            </p>
          )}
          {t.aboutPoints && (
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed list-disc list-outside pl-5 marker:text-indigo-500">
              {t.aboutPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}
        </section>

        {/* ② 学歴タイムライン */}
        <section id="education" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-2 px-1 border-b border-slate-200 pb-3">
            <GraduationCap size={20} className="text-indigo-600" />
            <h2 className="text-base font-bold uppercase tracking-wider text-slate-800">
              {t.educationTitle}
            </h2>
          </div>

          <div className="relative pl-7 sm:pl-9 border-l-2 border-indigo-200 space-y-8 ml-3 sm:ml-4 py-2">
            {t.education.map((edu, i) => {
              const isCurrent = i === 0;
              return (
                <div key={i} className="relative group">
                  <span 
                    className={`absolute -left-[35px] sm:-left-[43px] top-2 w-4 h-4 rounded-full border-2 border-white transition-all duration-300 ${
                      isCurrent 
                        ? 'bg-indigo-600 ring-4 ring-indigo-100 scale-110' 
                        : 'bg-slate-300 ring-2 ring-slate-100 group-hover:bg-indigo-400'
                    }`} 
                  />

                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50/90 px-2.5 py-0.5 rounded border border-indigo-100">
                      {edu.period}
                    </span>
                    {isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-600 border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        NOW
                      </span>
                    )}
                  </div>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-slate-100 border border-indigo-100/80 shrink-0 flex items-center justify-center shadow-inner">
                        <span className="font-extrabold text-indigo-400 text-sm tracking-widest">{edu.shortName}</span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-bold text-slate-900 text-base leading-tight">
                          {edu.school}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-indigo-600">
                          {edu.degree}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

        {/* ③ 研究・実務経歴 */}
        <section id="experience" className="scroll-mt-24 space-y-6">
          <div className="flex items-center gap-2 px-1 border-b border-slate-200 pb-3">
            <Briefcase size={20} className="text-indigo-600" />
            <h2 className="text-base font-bold uppercase tracking-wider text-slate-800">
              {t.researchExpTitle}
            </h2>
          </div>

          <div className="relative pl-7 sm:pl-9 border-l-2 border-indigo-200 space-y-8 ml-3 sm:ml-4 py-2">
            {t.experiences.map((exp, i) => (
              <div key={i} className="relative group">
                
                <span className="absolute -left-[35px] sm:-left-[43px] top-2 w-4 h-4 rounded-full border-2 border-white bg-slate-300 ring-2 ring-slate-100 group-hover:bg-indigo-500 transition-colors" />

                <div className="mb-2">
                  <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50/90 px-2.5 py-0.5 rounded border border-indigo-100">
                    {exp.period}
                  </span>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-slate-300 transition-all flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-slate-100 border border-indigo-100/80 shrink-0 flex items-center justify-center shadow-inner">
                    <span className="font-extrabold text-indigo-400 text-sm tracking-widest">{exp.shortName}</span>
                  </div>

                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="font-bold text-slate-900 text-base">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-semibold text-indigo-600 bg-indigo-50/60 px-2.5 py-1 rounded w-fit">
                        {exp.org}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1 border-t border-slate-50">
                      {exp.desc}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* ④ 論文・スキル & 学会・受賞・奨学金（2カラム） */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          
          {/* 左カラム：発表論文 & 研究スキル */}
          <div className="lg:col-span-6 space-y-12">
            
            {/* Publications */}
            <section id="publications" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-2 px-1 border-b border-slate-200 pb-3">
                <BookOpen size={18} className="text-indigo-600" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                  {t.publicationsTitle}
                </h2>
              </div>

              <div className="space-y-4">
                {t.publications.map((pub, i) => (
                  <div 
                    key={i} 
                    className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs hover:border-indigo-200 hover:shadow-sm transition-all space-y-2.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-slate-900 text-sm leading-snug">
                        {pub.title}
                      </h3>
                      {pub.status && (
                        <span className="shrink-0 px-2.5 py-0.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-[10px] font-semibold">
                          {pub.status}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 font-medium">
                      {pub.authors}
                    </p>

                    <div className="pt-2 border-t border-slate-50 flex items-center justify-between text-xs">
                      <span className="text-slate-500 italic font-serif">
                        {pub.journal}
                      </span>
                      {pub.doi && (
                        <a 
                          href={pub.doi} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-semibold bg-indigo-50/60 hover:bg-indigo-50 px-2.5 py-1 rounded-md transition-colors"
                        >
                          DOI <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Research Capabilities & Skills */}
            {t.skills && (
              <section id="skills" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 px-1 border-b border-slate-200 pb-3">
                  <Wrench size={18} className="text-indigo-600" />
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                    {t.skillsTitle}
                  </h2>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
                  {t.skills.map((skillGroup, i) => (
                    <div key={i} className="space-y-2">
                      <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                        {skillGroup.category}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {skillGroup.items.map((item, idx) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200/80 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-colors"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* 右カラム：学会発表 & 受賞歴 & 奨学金 */}
          <div className="lg:col-span-6 space-y-12">
            
            {/* Conferences */}
            <section id="conferences" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-2 px-1 border-b border-slate-200 pb-3">
                <Mic size={18} className="text-indigo-600" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                  {t.presentationsTitle}
                </h2>
              </div>

              <div className="space-y-2.5">
                {t.presentations.map((pres, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-start justify-between gap-3 hover:border-slate-300 transition-all">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded text-[10px] font-semibold">
                          {pres.type}
                        </span>
                        <p className="font-semibold text-slate-900 text-xs sm:text-sm">{pres.title}</p>
                      </div>
                      <p className="text-[11px] text-slate-500 pl-1">{pres.place}</p>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 shrink-0">
                      {pres.date}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Awards */}
            <section id="awards" className="scroll-mt-24 space-y-4">
              <div className="flex items-center gap-2 px-1 border-b border-slate-200 pb-3">
                <Award size={18} className="text-amber-500" />
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                  {t.awardsTitle}
                </h2>
              </div>

              <div className="space-y-2.5">
                {t.awards.map((award, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-start justify-between gap-3">
                    <div className="space-y-0.5">
                      <p className="font-semibold text-slate-900 text-xs sm:text-sm">{award.title}</p>
                      <p className="text-[11px] text-slate-500">{award.org}</p>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 shrink-0">
                      {award.date}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Scholarships & Fellowships */}
            {t.scholarships && (
              <section id="scholarships" className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-2 px-1 border-b border-slate-200 pb-3">
                  <Landmark size={18} className="text-indigo-600" />
                  <h2 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                    {t.scholarshipsTitle}
                  </h2>
                </div>

                <div className="space-y-2.5">
                  {t.scholarships.map((sch, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs flex items-start justify-between gap-3 hover:border-slate-300 transition-all">
                      <div className="space-y-0.5">
                        <p className="font-semibold text-slate-900 text-xs sm:text-sm">{sch.title}</p>
                        <p className="text-[11px] text-slate-500">{sch.org}</p>
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 shrink-0">
                        {sch.period}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

        </div>
      </main>

      {/* フッター */}
      <footer className="border-t border-slate-200 py-8 text-center text-xs text-slate-400 bg-white">
        © {new Date().getFullYear()} 滑川 勇太 (Yuta Namekawa). All rights reserved.
      </footer>
    </div>
  );
}