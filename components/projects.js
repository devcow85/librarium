/* components/ProjectCards.js --------------------------------------------- */
'use client';

import { useState } from 'react';
import projects from '@/data/projects.json';

export default function ProjectCards() {
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState(null);

  const visible = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="py-16 md:py-10 mt-15 bg-black rounded-lg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* ───────── 왼쪽 설명 ───────── */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Research Projects Snapshot
            </h2>
            <ul className="space-y-5 text-gray-300 text-sm">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 flex-shrink-0 mt-1 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
                <span>Hardware-aware software infrastructure</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 flex-shrink-0 mt-1 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                  />
                </svg>
                <span>Profiling &amp; performance analysis</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 flex-shrink-0 mt-1 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  />
                </svg>
                <span>LLM &amp; AI system optimization</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 flex-shrink-0 mt-1 mr-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                  />
                </svg>
                <span>Completed &amp; in-progress national R&amp;D</span>
              </li>
            </ul>
          </div>

          {/* ───────── 카드 그리드 ───────── */}
          <div className="lg:col-span-2 pt-3">
            <div
              id="project-cards-grid"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
            >
              {visible.map((p) => (
                <button
                  key={p.title}
                  onClick={() => setSelected(p)}
                  className="bg-gray-800/50 border border-gray-700/80 rounded-lg p-5 flex items-center gap-2 hover:border-gray-600 transition-all duration-300 text-left w-full"
                >
                  {/* 아이콘 원형: in-progress 프로젝트는 브랜드 색상으로 배경 */}
                  <div
                    className={`relative aspect-square w-12 h-12 rounded-full flex items-center justify-center ${
                      p.status === 'in-progress'
                        ? 'bg-[var(--brand)]'
                        : 'bg-black'
                    } shrink-0`}
                  >
                    <i
                      className={`${
                        p.keywords?.[2]?.icon || 'fas fa-book'
                      } text-white text-lg`}
                    />
                  </div>
                  {/* 제목 */}
                  <h3 className="text-xs font-medium text-white leading-tight">
                    {p.title}
                  </h3>
                </button>
              ))}
            </div>

            {projects.length > 4 && (
              <div className="mt-8 text-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className=""
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    {showAll ? (
                        // 화살표 위로
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    ) : (
                        // 화살표 아래로
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    )}
                    </svg>
                  
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ───────── 모달 ───────── */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 w-[70%] md:w-1/2 rounded-lg border border-gray-700 text-white grid grid-rows-[auto_1fr] overflow-hidden"
          >
            {/* ① Title 영역 */}
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-2xl font-semibold">{selected.title}</h3>
              {/* ② 배지 및 기간: Title 바로 아래에 배치 */}
              <div className="mt-2 flex items-center space-x-3">
                <img src="/calendar.svg" width={15} height={15} className="mr-2" />
                <span className="text-xs text-gray-400">
                  {selected.period.split('(')[0].trim()}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    selected.status === 'in-progress'
                      ? 'bg-[var(--brand)] text-white'
                      : 'bg-black text-gray-400'
                  }`}
                >
                  {selected.status.replace('-', ' ')}
                </span>
              </div>
            </div>

            {/* ③ Content 영역: status와 period 제외 */}
            <div className="p-6 overflow-y-auto">
              <p className="text-gray-300 mb-4 text-sm">
                {selected.short_description}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                <div>
                  <p>
                    <span className="text-gray-500">Organization:</span>{' '}
                    {selected.orginization}
                  </p>
                  <p>
                    <span className="text-gray-500">Role:</span> {selected.role}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="text-gray-500">Main Org:</span>{' '}
                    {selected.main_org}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {selected.keywords?.map((k) => (
                  <span
                    key={k.name}
                    className="bg-gray-800 border border-gray-700 text-xs px-3 py-1 rounded-full flex items-center gap-1"
                  >
                    <i className={`${k.icon}`} /> {k.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}