import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <div className="mb-12 md:mb-0">
            <div className="text-4xl font-black tracking-tighter mb-8">IPARTNERS</div>
            <div className="text-gray-500 text-sm space-y-3 font-light">
              <p>서울시 강남구 테헤란로 123, 아이파트너스 빌딩</p>
              <p>T. 02-1234-5678</p>
              <p>E. contact@ipartners.co.kr</p>
            </div>
          </div>
          <div className="flex gap-16 md:gap-24">
            <div className="flex flex-col space-y-4 text-sm font-medium text-gray-400">
              <a href="#" className="hover:text-white transition-colors">ABOUT</a>
              <a href="#" className="hover:text-white transition-colors">WORK</a>
              <a href="#" className="hover:text-white transition-colors">CAREER</a>
              <a href="#" className="hover:text-white transition-colors">CONTACT</a>
            </div>
            <div className="flex flex-col space-y-4 text-sm font-medium text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">YouTube</a>
              <a href="#" className="hover:text-white transition-colors">Blog</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-light">
          <p>&copy; {new Date().getFullYear()} IPARTNERS. All rights reserved.</p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-gray-300 transition-colors">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
