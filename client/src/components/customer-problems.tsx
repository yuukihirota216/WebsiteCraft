export default function CustomerProblems() {
  return (
    <section className="px-4 py-8" style={{ backgroundColor: 'var(--content-cream)' }}>
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
    </section>
  );
}