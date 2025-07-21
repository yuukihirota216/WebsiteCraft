export default function ProblemSolution() {
  return (
    <section className="px-4 py-8" style={{ backgroundColor: 'var(--content-cream)' }}>
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--trust-blue)' }}>
            知ってましたか？不動産業界の真実
          </h2>
          
          {/* Real Estate Industry Truth Diagram */}
          <div>
            <img 
              src="/real-estate-truth.png" 
              alt="これが賃貸業界の真実 - 不動産会社の報酬構造の説明図"
              className="w-full h-auto max-w-2xl mx-auto"
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
        </div>

        {/* Customer Problems */}
        <div>
          <h3 className="text-xl font-bold text-center mb-6" style={{ color: 'var(--trust-blue)' }}>
            あなたのお部屋探し、<br />こんな悩みありませんか？
          </h3>
          <div className="space-y-4">
            {[
              { title: "✓ 初期費用が高すぎる", desc: "「引越し費用を抑えて、新生活の準備にお金を使いたい」" },
              { title: "✓ 理想の物件が見つからない", desc: "「ネットに載っていない物件も含めて探したい」" },
              { title: "✓ 仕事で不動産屋に行く時間がない", desc: "「平日18時までなんて無理...土日も忙しい」" },
              { title: "✓ おとり物件に騙されたくない", desc: "「実際に見に行ったら募集終了だった経験がある」" },
              { title: "✓ 営業マンの押し売りが心配", desc: "「自分のペースでじっくり選びたい」" }
            ].map((problem, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border-l-4" style={{ borderColor: 'var(--highlight-red)' }}>
                <div className="font-bold mb-2" style={{ color: 'var(--trust-blue)' }}>{problem.title}</div>
                <div className="text-sm text-gray-700">{problem.desc}</div>
              </div>
            ))}
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
                    <td className="px-4 py-4 text-center text-lg">18万円</td>
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