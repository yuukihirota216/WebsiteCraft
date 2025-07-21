import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function HeroSection() {
  const handleLineClick = () => {
    // TODO: Implement LINE integration
    console.log('LINE CTA clicked - implement LINE integration here');
  };

  return (
    <section id="hero" className="px-4 py-8 text-center" style={{ backgroundColor: 'var(--hero-bg)' }}>
      <div className="space-y-6">
        {/* Hero character illustration placeholder */}
        <div className="w-24 h-24 mx-auto hero-character"></div>
        
        <div className="space-y-4">
          <h1 className="text-3xl font-black leading-tight tracking-tight" style={{ color: 'var(--trust-blue)' }}>
            名古屋の賃貸探しで、<br />
            <span style={{ color: 'var(--highlight-red)' }}>もう損しない。</span>
          </h1>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-xl font-bold mb-2" style={{ color: 'var(--trust-blue)' }}>
              仲介手数料<span className="numeric-large">最大0円</span>
            </div>
            <div className="text-base font-bold" style={{ color: 'var(--trust-blue)' }}>
              スタイル不動産
            </div>
          </div>
          
          <div className="text-base font-medium" style={{ color: 'var(--trust-blue)' }}>
            名古屋全域対応・お問い合わせは24時間無料受付中
          </div>
          
          <div className="text-white p-3 rounded-lg" style={{ backgroundColor: 'var(--highlight-red)' }}>
            <div className="text-sm font-bold">＼ このページ限定特典 ／</div>
            <div className="text-lg font-black">仲介手数料 最大0円キャンペーン実施中</div>
          </div>
        </div>

        {/* LINE CTA Button */}
        <Button 
          className="w-full line-btn text-white font-bold text-lg py-3 shadow-lg transition-colors"
          onClick={handleLineClick}
        >
          <div className="flex items-center justify-center space-x-2">
            <MessageCircle size={20} />
            <span>LINEで無料相談を始める</span>
          </div>
        </Button>
      </div>
    </section>
  );
}
