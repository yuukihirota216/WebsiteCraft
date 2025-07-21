import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function LineCTA() {
  const handleLineClick = () => {
    // TODO: Implement LINE integration
    console.log('LINE CTA clicked - implement LINE integration here');
  };

  return (
    <section id="line-cta" className="px-4 py-8" style={{ backgroundColor: 'var(--line-green)' }}>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">すでに気になる物件がある方へ</h2>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--trust-blue)' }}>
              仲介手数料が<br />いくら安くなるか無料診断！
            </h3>
            
            <div className="mb-4 bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-sm border-2 border-gray-200 max-w-sm">
                  <div className="mb-3">
                    <div className="bg-green-100 p-2 rounded text-center">
                      <span className="text-green-800 font-bold text-sm">SUUMO</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm text-gray-800 font-medium">毎月ビル2DK/2階/37.26m²の賃貸住宅</div>
                    <div className="text-orange-600 font-bold">8.0万円</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">1/21</div>
                    <div className="bg-orange-500 text-white px-2 py-1 rounded text-xs">1分で完了!</div>
                  </div>
                </div>
                <div className="ml-4">
                  <div className="bg-red-500 text-white px-3 py-2 rounded-lg font-bold text-sm whitespace-nowrap">
                    URLをコピーして送る
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <div className="font-bold text-lg mb-2">賃貸ポータルサイト完全対応！</div>
                <div className="flex justify-center items-center space-x-4 text-sm">
                  <span className="bg-green-100 px-2 py-1 rounded">SUUMO</span>
                  <span className="bg-orange-100 px-2 py-1 rounded">LIFULL HOME'S</span>
                  <span className="bg-red-100 px-2 py-1 rounded">at home</span>
                  <span className="bg-purple-100 px-2 py-1 rounded">Instagram</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">TikTok</span>
                </div>
              </div>
            </div>
            
            <p className="text-base leading-relaxed text-gray-800 mb-4">
              SUUMO・HOME'S・athome・Instagram・TikTokで見つけた物件のURLをLINEで送るだけ！<strong style={{ color: 'var(--highlight-red)' }}>最短5分で診断結果をお知らせします。</strong>
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <div className="text-sm font-bold mb-2" style={{ color: 'var(--trust-blue)' }}>【対応サイト】</div>
              <div className="text-sm text-gray-700">SUUMO / LIFULL HOME'S / at home / Instagram / TikTok</div>
            </div>
            
            <Button 
              className="w-full line-btn text-white font-bold text-lg py-3"
              onClick={handleLineClick}
            >
              URLをコピーして物件を送る
            </Button>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">これから物件を探す方へ</h2>
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--trust-blue)' }}>
              不動産会社のみが見れるサイトを一緒に見ながら理想の物件を紹介します！
            </h3>
            <p className="text-base leading-relaxed text-gray-800 mb-4">
              業者専用の物件データベースを使って、名古屋市内の最新物件情報をリアルタイムでチェック。おとり物件の心配なく、効率的にお部屋探しができます。
            </p>
            
            <Button 
              className="w-full line-btn text-white font-bold text-lg py-3"
              onClick={handleLineClick}
            >
              業者専用サイトで物件を探す
            </Button>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--trust-blue)' }}>
              SNSで見つけた物件もOK！
            </h3>
            <p className="text-base leading-relaxed text-gray-800 mb-4">
              最近増えているInstagram・TikTokの物件投稿。「この物件気になるけど、どこに問い合わせれば...」そんな物件も、スタイル不動産なら仲介可能です！
            </p>
            <p className="text-sm text-gray-700 mb-4">
              投稿のスクリーンショットやURLを送っていただければ、物件を特定して、仲介手数料を抑えてご案内いたします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}