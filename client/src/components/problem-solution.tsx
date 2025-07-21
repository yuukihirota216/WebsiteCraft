export default function ProblemSolution() {
  return (
    <section className="px-4 py-8" style={{ backgroundColor: 'var(--content-cream)' }}>
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--trust-blue)' }}>
            知ってましたか？不動産業界の真実
          </h2>
          
          {/* Real Estate Industry Truth Diagram */}
          <div className="mb-6">
            <img 
              src="/real-estate-truth-new.png" 
              alt="これが賃貸業界の真実 - 不動産会社の報酬構造の説明図"
              className="w-full h-auto max-w-2xl mx-auto rounded-lg"
            />
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--highlight-red)' }}>
              どの不動産会社も扱っている物件は同じです
            </h3>
            <p className="text-base leading-relaxed text-gray-800 mb-4">
              不動産会社は全て同じ「業者専用サイト」を使用しているため、<strong>SUUMO・HOME'S・athomeに掲載の物件もすべて当社でご紹介可能です</strong>
            </p>
            <p className="text-base leading-relaxed text-gray-800">
              だからこそ、大切なのは物件の数ではなく<br />
              <strong style={{ color: 'var(--highlight-red)' }}>「どれだけお客様の立場に立てるか」<br />「どれだけ初期費用を抑えられるか」</strong>
            </p>
          </div>
          
          {/* Commission Comparison Image */}
          <div className="mt-6">
            <img 
              src="/attached_assets/グループ 394_1753115700325.png" 
              alt="なのでスタイル不動産は自社に入る報酬をすべて公開しています - 仲介手数料の比較図"
              className="w-full h-auto max-w-2xl mx-auto rounded-lg"
            />
          </div>
        </div>



        {/* Three Reasons Section - Moved from merit-badges */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--trust-blue)' }}>スタイル不動産が選ばれる3つの理由</h2>
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
                <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--trust-blue)' }}>LINEでいつでも相談OK</h3>
                <p className="text-sm leading-relaxed text-gray-700">
                  <strong>名古屋全域・24時間受付</strong><br />
                  忙しいあなたも安心。深夜や早朝でもLINEで気軽にご相談ください。翌営業日までには必ずお返事いたします。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Comparison */}
        <div>
          <h3 className="text-xl font-bold text-center mb-6" style={{ color: 'var(--trust-blue)' }}>
            初期費用はこんなに変わります
          </h3>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="text-white p-4 text-center" style={{ backgroundColor: 'var(--trust-blue)' }}>
              <div className="font-bold text-lg">家賃10万円の物件で比較</div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">項目</th>
                    <th className="px-4 py-3 text-center font-bold">他社</th>
                    <th className="px-4 py-3 text-center font-bold" style={{ color: 'var(--line-green)' }}>スタイル不動産</th>
                    <th className="px-4 py-3 text-center font-bold" style={{ color: 'var(--highlight-red)' }}>お得額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-4 py-3">仲介手数料</td>
                    <td className="px-4 py-3 text-center">11万円</td>
                    <td className="px-4 py-3 text-center font-bold" style={{ color: 'var(--highlight-red)' }}>0円〜</td>
                    <td className="px-4 py-3 text-center font-bold" style={{ color: 'var(--highlight-red)' }}>最大11万円お得</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">事務手数料</td>
                    <td className="px-4 py-3 text-center">2万円</td>
                    <td className="px-4 py-3 text-center font-bold" style={{ color: 'var(--highlight-red)' }}>0円</td>
                    <td className="px-4 py-3 text-center font-bold" style={{ color: 'var(--highlight-red)' }}>2万円お得</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-4 py-3">除菌・消臭等</td>
                    <td className="px-4 py-3 text-center">5万円</td>
                    <td className="px-4 py-3 text-center font-bold" style={{ color: 'var(--highlight-red)' }}>0円</td>
                    <td className="px-4 py-3 text-center font-bold" style={{ color: 'var(--highlight-red)' }}>5万円お得</td>
                  </tr>
                  <tr className="bg-yellow-50 font-bold">
                    <td className="px-4 py-4">合計</td>
                    <td className="px-4 py-4 text-center text-lg whitespace-nowrap">18万円</td>
                    <td className="px-4 py-4 text-center text-lg" style={{ color: 'var(--highlight-red)' }}>0円〜</td>
                    <td className="px-4 py-4 text-center text-xl" style={{ color: 'var(--highlight-red)' }}>最大18万円お得！</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-2 text-xs text-gray-600 text-center">※物件により異なります</div>
          </div>
        </div>
      </div>
    </section>
  );
}