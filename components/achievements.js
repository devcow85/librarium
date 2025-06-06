/* components/Achievements.js ------------------------------------------------ */
'use client';

import { useState, useMemo } from 'react';
import achievements from '@/data/articles.json';

// 탭: Publications, Patents, Tech Transfer
const TABS = [
  { id: 'publications', label: 'Publications' },
  { id: 'patents', label: 'Patents' },
  { id: 'tech-transfer', label: 'Tech Transfer' }
];

// 타입별 필터 함수
const filterByType = (type) => {
  if (type === 'publications') return (a) => a.type === 'publication';
  if (type === 'patents') return (a) => a.type === 'patent';
  if (type === 'tech-transfer') return (a) => a.type === 'transfer';
  return () => true;
};

// 저자 표시: 첫 번째만, 나머지는 “외 N명”
const formatAuthor = (authorStr) => {
  const parts = authorStr.split(' and ').map((p) => p.trim());
  if (parts.length === 1) return parts[0];
  return `${parts[0]} 외 ${parts.length - 1}명`;
};

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('publications');
  const [showAll, setShowAll] = useState(false);

  // data: type이 없으면 기본 publication
  const data = achievements.map((a) => ({ type: 'publication', ...a }));

  // 각 탭별 항목 개수
  const counts = useMemo(() => {
    return {
      publications: data.filter(filterByType('publications')).length,
      patents: data.filter(filterByType('patents')).length,
      'tech-transfer': data.filter(filterByType('tech-transfer')).length
    };
  }, [data]);

  const rows = data
    .filter(filterByType(activeTab))
    // 연도 내림차순 정렬
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));

  const visible = showAll ? rows : rows.slice(0, 3);

  return (
    <div className="py-16 md:py-24 bg-black text-gray-200 mt-4">
      <div className="container mx-auto px-6">
        {/* 타이틀 & 요약 */}
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <p className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-100">
            Research Achievements Overview
          </p>
          <p className="mt-4 text-gray-400">
            The overall statistics and detailed records of our research outputs—publications, patents, and technology transfers.
          </p>
        </div>

        {/* 통계 박스 (클릭 시 탭 전환) */}
        <div className="max-w-2xl mx-auto grid grid-cols-3 border-l border-gray-700 mb-12">
          {TABS.map((t) => (
            <div
              key={t.id}
              onClick={() => {
                setActiveTab(t.id);
                setShowAll(false);
              }}
              className={`cursor-pointer border-r border-gray-700 p-2 text-center transition-colors ${
                activeTab === t.id
                  ? 'bg-[var(--brand)] text-white'
                  : 'text-gray-200 hover:bg-gray-700/60'
              }`}
            >
              <p className="text-lg font-semibold">{counts[t.id]}</p>
              <p className="text-sm">{t.label}</p>
            </div>
          ))}
        </div>

        {/* 콘텐츠 영역: 리스트 형태로 (년도별 섹션) */}
        <div id="tab-content-area">
          {activeTab === 'publications' && (
            <div className="space-y-2">
              {visible.map((a, idx) => {
                const prevYear = idx === 0 ? null : visible[idx - 1].year;
                const showYearLabel = a.year !== prevYear;
                return (
                  <div key={a.title}>
                    {showYearLabel && (
                      <div className="py-2 border-b border-gray-700">
                        <p className="text-2xl font-extrabold text-gray-500">{a.year}</p>
                      </div>
                    )}
                    <div className="bg-gray-900/30 border-b border-gray-700/80 p-3 hover:border-gray-600 transition-colors">
                      <h4 className="text-sm font-semibold text-white mb-1">
                        {a.title}{' '}
                        {a.link && (
                          <a
                            href={a.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-blue-400 hover:text-blue-300 ml-1"
                          >
                            <i className="fas fa-link text-xs" />
                          </a>
                        )}
                      </h4>
                      <p className="text-gray-400 text-xs mb-1">
                        <span className="font-medium text-gray-500">Name:</span> {a.name}
                      </p>
                      <p className="text-gray-400 text-xs mb-1">
                        <span className="font-medium text-gray-500">Author:</span>{' '}
                        {formatAuthor(a.author)}
                      </p>
                      <p className="text-gray-400 text-xs mb-1">
                        <span className="font-medium text-gray-500">Year:</span> {a.year}
                      </p>
                      <p className="text-gray-400 text-xs">
                        <span className="font-medium text-gray-500">Date:</span> {a.date}
                      </p>
                    </div>
                  </div>
                );
              })}

              {rows.length > 3 && (
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="bg-gray-700 text-gray-200 font-medium py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-300 text-sm"
                  >
                    {showAll ? 'Show Less' : 'Show More'}
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'patents' && (
            <div className="space-y-6">
              {visible.map((a) => (
                <div
                  key={a.title}
                  className="bg-gray-900/30 rounded-lg border border-gray-700/80 p-4 hover:border-gray-600 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-white mb-1">{a.title}</h4>
                  <p className="text-gray-400 text-sm mb-1">
                    <span className="font-medium text-gray-500">Patent No.:</span> {a.patentNumber || '–'}
                  </p>
                  <p className="text-gray-400 text-sm">
                    <span className="font-medium text-gray-500">Year:</span> {a.year}
                  </p>
                </div>
              ))}

              {rows.length > 3 && (
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="bg-gray-700 text-gray-200 font-medium py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-300 text-sm"
                  >
                    {showAll ? 'Show Less' : 'Show More'}
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'tech-transfer' && (
            <div className="space-y-6">
              {visible.map((a) => (
                <div
                  key={a.title}
                  className="bg-gray-900/30 rounded-lg border border-gray-700/80 p-4 hover:border-gray-600 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-white mb-1">{a.technology || a.title}</h4>
                  <p className="text-gray-400 text-sm mb-1">
                    <span className="font-medium text-gray-500">Transfer To:</span> {a.transferredTo || '–'}
                  </p>
                  <p className="text-gray-400 text-sm">
                    <span className="font-medium text-gray-500">Year:</span> {a.year}
                  </p>
                </div>
              ))}

              {rows.length > 3 && (
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="bg-gray-700 text-gray-200 font-medium py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-300 text-sm"
                  >
                    {showAll ? 'Show Less' : 'Show More'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}