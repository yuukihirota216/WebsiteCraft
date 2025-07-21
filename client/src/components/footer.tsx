export default function Footer() {
  return (
    <footer className="px-4 py-6 text-white text-center" style={{ backgroundColor: 'var(--trust-blue)' }}>
      <div className="space-y-4">
        <div>
          <h3 className="font-bold text-lg mb-2">営業時間</h3>
          <p className="text-sm">
            平日：10:00〜20:00<br />
            土日祝：10:00〜19:00<br />
            ※LINEは24時間受付中
          </p>
          <p className="text-sm mt-2">定休日：水曜日（祝日の場合は営業）</p>
        </div>
        
        <div className="text-sm">
          <strong>名古屋の賃貸探しは、スタイル不動産にお任せください</strong><br />
          株式会社スタイル不動産<br />
          愛知県知事免許(1)第●●●●●号<br />
          名古屋市●●区●●●
        </div>
      </div>
    </footer>
  );
}