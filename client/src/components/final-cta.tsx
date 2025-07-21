import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function FinalCTA() {
  const handleLineClick = () => {
    // TODO: Implement LINE integration
    console.log('LINE CTA clicked - implement LINE integration here');
  };

  return (
    <section className="px-4 py-8" style={{ backgroundColor: 'var(--line-green)' }}>
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold text-white">今すぐ無料相談を始めましょう</h2>
        
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--trust-blue)' }}>
            LINE追加で簡単スタート
          </h3>
          <p className="text-base text-gray-800 mb-4">24時間受付中 お問い合わせは何度でも無料</p>
          
          <div className="rounded-lg p-4 mb-4" style={{ backgroundColor: 'var(--hero-bg)' }}>
            <div className="font-bold text-lg mb-2" style={{ color: 'var(--trust-blue)' }}>今なら限定特典</div>
            <div className="space-y-1 text-sm" style={{ color: 'var(--trust-blue)' }}>
              <div>1. <strong>仲介手数料最大0円</strong></div>
              <div>2. <strong>物件リクエスト無制限</strong></div>
              <div>3. <strong>内見同行サービス無料</strong></div>
            </div>
          </div>
          
          <Button 
            className="w-full line-btn text-white font-bold text-lg py-4 shadow-lg mb-4"
            onClick={handleLineClick}
          >
            <div className="flex items-center justify-center space-x-2">
              <MessageCircle size={20} />
              <span>今すぐLINEでお部屋を探す</span>
            </div>
          </Button>
          
          <div className="text-sm text-gray-600">
            お問い合わせは何度でも無料！<br />
            お部屋探しの答えが見つかる♪
          </div>
        </div>
      </div>
    </section>
  );
}