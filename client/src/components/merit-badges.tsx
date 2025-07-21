export default function MeritBadges() {
  return (
    <section id="merit-badges" className="px-4 py-8" style={{ backgroundColor: 'var(--line-green)' }}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">スタイル不動産が選ばれる3つの理由</h2>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4 bg-white rounded-lg p-4">
          <div 
            className="flex-shrink-0 w-14 h-14 rounded-full border-2 flex items-center justify-center mt-0"
            style={{ 
              backgroundColor: 'var(--hero-bg)', 
              borderColor: 'var(--trust-blue)' 
            }}
          >
            <span className="text-lg font-black" style={{ color: 'var(--trust-blue)' }}>01</span>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--trust-blue)' }}>仲介手数料最大0円</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              大家さんからの広告料がある物件は、その分を仲介手数料から割引。他社では隠される情報も、すべて開示してお客様に還元します。
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 bg-white rounded-lg p-4">
          <div 
            className="flex-shrink-0 w-14 h-14 rounded-full border-2 flex items-center justify-center mt-0"
            style={{ 
              backgroundColor: 'var(--hero-bg)', 
              borderColor: 'var(--trust-blue)' 
            }}
          >
            <span className="text-lg font-black" style={{ color: 'var(--trust-blue)' }}>02</span>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--trust-blue)' }}>業者専用サイトを一緒に閲覧</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              不動産業者しか見られない「REINS」「athome BB」などの物件データベースをお客様と一緒に見ながら物件探し。<strong>名古屋市内の全物件から、リアルタイムで検索可能です。</strong>
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 bg-white rounded-lg p-4">
          <div 
            className="flex-shrink-0 w-14 h-14 rounded-full border-2 flex items-center justify-center mt-0"
            style={{ 
              backgroundColor: 'var(--hero-bg)', 
              borderColor: 'var(--trust-blue)' 
            }}
          >
            <span className="text-lg font-black" style={{ color: 'var(--trust-blue)' }}>03</span>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--trust-blue)' }}>完全透明な料金体系</h3>
            <ul className="text-sm leading-relaxed text-gray-700 space-y-1">
              <li>• 仲介手数料の内訳を明示</li>
              <li>• 大家さんからの手数料も開示</li>
              <li>• 不要なオプション費用は一切なし</li>
              <li>• 契約前に全費用を明確にご提示</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}