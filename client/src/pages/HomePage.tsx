import { useState } from 'react';
import { MessageCircle, Plus, Minus } from 'lucide-react';
// Image paths for the real estate site
const womanIllustrationPath = '/images/woman-illustration.png';
const realEstateTruthPath = '/images/real-estate-truth.png';
const sakuttoComparisonPath = '/images/sakutto-comparison.png';

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "仲介手数料が0円になるのはどんな物件ですか？",
    answer: "大家さんから広告料（AD）が支払われる物件については、その分を仲介手数料から割引いたします。ADがない物件については、通常通りの仲介手数料をいただきます。どの物件がAD対象かは、お問い合わせ時にお伝えします。"
  },
  {
    question: "本当に費用は仲介手数料だけですか？",
    answer: "はい、当社でいただくのは仲介手数料のみです。その他の初期費用（敷金・礼金・保険料など）は、大家さんや管理会社が定めた金額をそのままお支払いいただきます。余計な手数料は一切ありません。"
  },
  {
    question: "業者専用サイトって何ですか？",
    answer: "不動産業者だけが見ることができる「レインズ」という物件データベースです。一般の賃貸サイトに掲載される前の新着物件や、掲載されていない物件情報を確認できます。お客様と一緒に画面を見ながら物件探しをします。"
  },
  {
    question: "名古屋のどのエリアに対応していますか？",
    answer: "名古屋市全区（千種区、東区、北区、西区、中村区、中区、昭和区、瑞穂区、熱田区、中川区、港区、南区、守山区、緑区、名東区、天白区）および近郊都市に対応しています。詳しいエリアはお気軽にお問い合わせください。"
  },
  {
    question: "LINEでの相談はどのように進みますか？",
    answer: "まずはLINEで希望条件をお聞かせください。その後、業者専用サイトで条件に合う物件をお探しし、物件情報をLINEでお送りします。気になる物件があれば、内見の手配も承ります。すべてLINE上で完結できます。"
  }
];

export default function HomePage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleLineClick = () => {
    // TODO: 実際のLINE URLに置き換え
    alert('LINEでのお問い合わせ機能を実装してください。\n\n実装方法：\n1. LINE公式アカウントを作成\n2. 友達追加URLを取得\n3. このアラートをwindow.open()に置き換え');
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg py-8 text-center">
        <div className="container">
          {/* Hero character illustration */}
          <div className="mb-6">
            <img 
              src={womanIllustrationPath} 
              alt="スマートフォンを持つ女性のイラスト"
              className="w-32 h-auto mx-auto"
              data-testid="hero-image"
            />
          </div>
          
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-black text-trust-blue leading-tight mb-6">
              名古屋の賃貸探しで、<br />
              <span className="text-highlight-red">もう損しない。</span>
            </h1>
            
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto mb-6">
              <div className="text-trust-blue">
                <div className="text-xl font-bold mb-2">
                  仲介手数料<span className="text-3xl font-black">最大0円</span>
                </div>
                <div className="text-2xl font-black">
                  サクッと賃貸
                </div>
              </div>
            </div>
            
            <div className="text-trust-blue mb-6">
              名古屋全域対応・お問い合わせは24時間無料受付中
            </div>
            
            <div className="bg-white rounded-lg p-4 max-w-sm mx-auto mb-8">
              <div className="text-sm text-trust-blue mb-1">＼ このページ限定特典 ／</div>
              <div className="text-lg font-bold text-highlight-red">仲介手数料 最大0円キャンペーン実施中</div>
            </div>
          </div>

          {/* LINE CTA Button */}
          <button 
            className="line-btn flex items-center gap-2 mx-auto mb-4"
            onClick={handleLineClick}
            data-testid="button-line-contact"
          >
            <MessageCircle className="w-6 h-6" />
            LINEで今すぐ無料相談
          </button>

          <div className="text-sm text-trust-blue">
            <p>24時間受付中・返信は営業時間内に行います</p>
          </div>
        </div>
      </section>

      {/* Merit Badges Section */}
      <section className="bg-trust-blue py-12 text-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-10">
            サクッと賃貸が選ばれる3つの理由
          </h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-6" data-testid="merit-item-01">
              <div className="merit-number shrink-0">01</div>
              <div>
                <h3 className="text-xl font-bold mb-3">仲介手数料最大0円</h3>
                <p className="text-gray-200 leading-relaxed">
                  大家さんからの広告料がある物件は、その分を仲介手数料から割引。他社では隠される情報も、すべて開示してお客様に還元します。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6" data-testid="merit-item-02">
              <div className="merit-number shrink-0">02</div>
              <div>
                <h3 className="text-xl font-bold mb-3">業者専用サイトを一緒に閲覧</h3>
                <p className="text-gray-200 leading-relaxed">
                  業者しか見られない物件データベースを、お客様と一緒に画面共有。隠れた優良物件や最新情報をリアルタイムでご確認いただけます。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6" data-testid="merit-item-03">
              <div className="merit-number shrink-0">03</div>
              <div>
                <h3 className="text-xl font-bold mb-3">透明な料金体系</h3>
                <p className="text-gray-200 leading-relaxed">
                  すべての費用を事前に明示。追加費用や隠れた手数料は一切ありません。安心して物件探しをお任せください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solution Section */}
      <section className="bg-content-cream py-12">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-black text-trust-blue text-center mb-10">
            賃貸業界の真実をご存知ですか？
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 mb-8">
              <img 
                src={realEstateTruthPath} 
                alt="賃貸業界の真実"
                className="w-full h-auto mb-6"
                data-testid="img-real-estate-truth"
              />
              <p className="text-trust-blue leading-relaxed">
                多くの不動産会社では、大家さんからの広告料があっても、それをお客様に還元することはありません。
                サクッと賃貸では、この広告料をしっかりとお客様に還元し、仲介手数料を最大0円にします。
              </p>
            </div>

            <div className="bg-white rounded-lg p-6">
              <img 
                src={sakuttoComparisonPath} 
                alt="サクッと賃貸との比較"
                className="w-full h-auto mb-6"
                data-testid="img-sakutto-comparison"
              />
              <p className="text-trust-blue leading-relaxed">
                一般的な不動産会社と比較して、サクッと賃貸なら初期費用を大幅に削減できます。
                浮いた費用は、新生活の準備や引越し費用にお使いいただけます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-black text-trust-blue text-center mb-10">
            よくあるご質問
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden"
                data-testid={`faq-item-${index}`}
              >
                <button
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
                  onClick={() => toggleFaq(index)}
                  data-testid={`button-faq-toggle-${index}`}
                >
                  <span className="font-medium text-trust-blue pr-4">
                    {faq.question}
                  </span>
                  {expandedFaq === index ? (
                    <Minus className="w-5 h-5 text-trust-blue shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-trust-blue shrink-0" />
                  )}
                </button>
                
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed" data-testid={`text-faq-answer-${index}`}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="hero-bg py-12 text-center">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-black text-trust-blue mb-6">
            まずはお気軽にご相談ください
          </h2>
          
          <p className="text-trust-blue mb-8 max-w-2xl mx-auto">
            物件探しのプロが、あなたの希望条件に合った物件を無料でお探しします。
            LINE相談は24時間受付中です。
          </p>

          <button 
            className="line-btn flex items-center gap-2 mx-auto mb-4"
            onClick={handleLineClick}
            data-testid="button-line-contact-bottom"
          >
            <MessageCircle className="w-6 h-6" />
            LINEで今すぐ無料相談
          </button>

          <div className="text-sm text-trust-blue">
            <p>営業時間：平日9:00-18:00 / 土日祝10:00-17:00</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-trust-blue text-white py-8">
        <div className="container text-center">
          <div className="text-xl font-bold mb-2">サクッと賃貸</div>
          <div className="text-sm text-gray-300">
            名古屋の賃貸探しで、もう損しない。
          </div>
        </div>
      </footer>
    </div>
  );
}