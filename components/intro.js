'use client';

import { useState } from 'react';
import Image from 'next/image';
import intro from '@/data/intro.json';

export default function Intro() {
  const {name, position, description, expertise, education, professional_experience} = intro;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="container mx-auto text-white mt-4">
      {/* ───────── Intro 카드 ───────── */}
      <div className="grid md:grid-cols-3 gap-px bg-gray-700 border border-gray-700 rounded-lg overflow-hidden">
        {/* 소개 영역 (왼쪽 2/3) */}
        <div className="md:col-span-2 bg-black p-8 md:p-12">
          <div className="flex items-start gap-5 mb-2">
            {/* 프로필 이미지 */}
            <div className="relative aspect-square w-24 sm:w-28 md:w-32 flex-shrink-0">
              <Image
                src="/mymy.png"
                alt="Profile"
                fill
                sizes="(min-width: 768px) 96px, 64px"
                className="rounded-full object-cover"
                priority
              />
            </div>
            <div>
              {/* 포지션 */}
              <h2 className="text-2xl md:text-3xl font-extrabold leading-snug uppercase">
                {name}
              </h2>
              {/* 이름 */}
              <p className="mt-1 text-lg font-semibold text-gray-100 ">
                {position}
              </p>
              {/* 설명 */}
              <p className="text-gray-400 mb-4 mt-4 text-sm md:text-base">
                {description}
              </p>
            </div>
          </div>

          {/* 배지 목록 */}
          <ul className="flex flex-wrap gap-2 mb-4">
            {expertise.map((skill) => (
              <li
                key={skill}
                className="bg-gray-800 text-white border border-gray-700 text-xs px-3 py-1 rounded-full"
              >
                {skill}
              </li>
            ))}
          </ul>

          {/* ───────── 화살표 아이콘: 이미지 바로 아래 ───────── */}
          <div className="flex justify-center">
            <svg
              onClick={() => setExpanded(!expanded)}
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {expanded ? (
                // 화살표 위로
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              ) : (
                // 화살표 아래로
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              )}
            </svg>
          </div>
        </div>

        {/* 연락/CTA 영역 (오른쪽 1/3) */}
        <div className="bg-black p-8 md:p-12 flex flex-col">
          <h3 className="text-xl md:text-2xl font-bold mb-4 leading-snug">
            Get in Touch
          </h3>
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Have a project in mind or just want to chat? Let’s connect!
          </p>
          <a
            href="mailto:seokhun.jeon@keti.re.kr"
            className="mt-auto bg-gray-800 text-white border border-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-700 hover:border-gray-600 transition duration-300 text-center w-full sm:w-auto flex items-center justify-center"
          >
            <img src="/mail.svg" width={20} height={20} className="mr-2" />
            Email Me
          </a>
        </div>
      </div>

      {/* ───────── 확장 부분: 그리드 레이아웃 ───────── */}
      {expanded && (
        <div className="mt-4 bg-black">
          <div className="grid md:grid-row-2 gap-px border border-gray-700 rounded-lg overflow-hidden">
            {/* ───── 학업 정보 (왼쪽) ───── */}
            <div className="border-b border-gray-600">
              <h3 className="flex items-center p-2 pl-5 text-lg font-semibold text-white mb-2 border-b border-gray-600">
                <img src="/eduhat.svg" width={20} height={20} className="mr-2" /> Education
              </h3>
              <ul className="space-y-2 p-2 pl-7">
                {education.map((edu) => (
                  <li key={edu.university} className="text-gray-300 text-sm pl-3 pb-2">
                    <p className="font-bold text-gray-500"> + {edu.graduation_date} - {edu.degree}</p>
                    <p className="pl-4">
                       {edu.university}, {edu.major}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* ───── 경력 정보 (오른쪽) ───── */}
            <div className="">
              <h3 className="flex items-center p-2 text-lg pl-5 font-medium text-white mb-2 border-b border-gray-600">
                <img src="/building.svg" width={20} height={20} className="mr-2" /> Professional Experience
              </h3>
              <ul className="space-y-2 p-2 pl-7">
                {professional_experience.map((job) => (
                  <li key={job.company} className="text-gray-300 text-sm pl-3 pb-2">
                    <p className="font-bold text-gray-500">+ {job.dates} ({job.job_title})</p>
                    <p className="pl-4"> 
                      <b>{job.company}</b> / {job.location}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}