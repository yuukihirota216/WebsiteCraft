import { Star } from "lucide-react";

export default function TrustInfo() {
  return (
    <section id="trust-info" className="px-4 py-8 text-white" style={{ backgroundColor: 'var(--trust-blue)' }}>
      <div className="space-y-8">
        {/* Process Steps */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-6">かんたん5ステップで入居まで</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "お問い合わせ", desc: "LINEで友達追加するだけ！24時間いつでもOK" },
              { step: "2", title: "ヒアリング", desc: "ご希望条件をお聞かせください（未定でもOK）" },
              { step: "3", title: "物件探し", desc: "業者専用サイトを一緒に見ながら理想の物件を探索" },
              { step: "4", title: "内見", desc: "気になる物件を実際に見学（オンライン内見も可）" },
              { step: "5", title: "契約", desc: "来店・オンライン・郵送、お好きな方法で契約完了" }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div 
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'var(--hero-bg)' }}
                >
                  <span className="font-bold" style={{ color: 'var(--trust-blue)' }}>{item.step}</span>
                </div>
                <div>
                  <div className="font-bold text-lg">{item.title}</div>
                  <div className="text-sm opacity-90">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Methods */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-6">選べる相談スタイル</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-lg p-6" style={{ backgroundColor: 'var(--content-cream)', color: 'var(--trust-blue)' }}>
              <h3 className="font-bold text-lg mb-3">来店相談</h3>
              <ul className="text-sm space-y-1">
                <li>• 名古屋市内でじっくり相談</li>
                <li>• ご希望エリアのカフェでの相談もOK</li>
                <li>• 物件探し後、そのまま内見へ</li>
              </ul>
            </div>
            
            <div className="rounded-lg p-6" style={{ backgroundColor: 'var(--content-cream)', color: 'var(--trust-blue)' }}>
              <h3 className="font-bold text-lg mb-3">オンライン相談</h3>
              <ul className="text-sm space-y-1">
                <li>• Zoom・Google Meet対応</li>
                <li>• スマホ・PCどちらでもOK</li>
                <li>• 画面共有で一緒に物件検索</li>
                <li>• 土日・夜間も対応可能</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div>
          <h2 className="text-2xl font-bold text-center mb-6">お客様の声</h2>
          <div className="space-y-4">
            {[
              { name: "南様（20代・会社員）", highlight: "「初期費用が15万円も安くなりました！」", review: "最初はLINEだけで本当に良い物件が見つかるか不安でしたが、担当者さんの迅速な対応と的確な提案のおかげで理想の物件に出会えました。" },
              { name: "後藤様（30代・夫婦）", highlight: "「業者サイトを見せてもらえて安心」", review: "他社では見せてもらえなかった物件情報も全て見せていただき、納得して物件を選べました。" },
              { name: "石橋様（20代・新婚）", highlight: "「新生活の準備に余裕ができました」", review: "敷金・礼金なしの物件を紹介していただき、浮いたお金で家具家電を揃えることができました。" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-4" style={{ color: 'var(--trust-blue)' }}>
                <div className="flex items-center mb-2">
                  <div className="text-yellow-400 mr-2 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <div className="font-bold">{testimonial.name}</div>
                </div>
                <div className="font-bold mb-2" style={{ color: 'var(--highlight-red)' }}>{testimonial.highlight}</div>
                <div className="text-sm leading-relaxed">{testimonial.review}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}