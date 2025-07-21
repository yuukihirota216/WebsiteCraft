import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Q. 本当に仲介手数料0円になりますか？",
      answer: "A. 大家さんから広告料が出る物件は0円になります。全物件の約40%が対象です。それ以外の物件でも、業界最安水準でご案内いたします。"
    },
    {
      question: "Q. 名古屋市外の物件も紹介してもらえますか？",
      answer: "A. はい、名古屋市近郊（春日井市、一宮市、豊田市など）の物件もご紹介可能です。"
    },
    {
      question: "Q. SUUMOで見つけた物件でも仲介してもらえますか？",
      answer: "A. もちろん可能です！物件URLをLINEでお送りください。仲介手数料がお安くなるかすぐに判定いたします。"
    },
    {
      question: "Q. 強引な営業はありませんか？",
      answer: "A. 一切ございません。お客様のペースで、納得いくまでお部屋探しをサポートいたします。"
    },
    {
      question: "Q. 家賃の値下げ交渉はしてもらえますか？",
      answer: "A. はい、もちろん可能です。初期費用だけでなく、月々の家賃や更新料などの交渉も、お客様に代わって積極的に行います。交渉成功率は約60%です。"
    },
    {
      question: "Q. 仲介手数料以外に特別な費用が発生しますか？",
      answer: "A. いいえ、原則発生しません。仲介手数料、事務手数料、その他不透明な費用等は一切いただきません。お客様が契約する際に必要な費用をすべて事前にご提示いたします。"
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="px-4 py-8" style={{ backgroundColor: 'var(--content-cream)' }}>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center mb-8" style={{ color: 'var(--trust-blue)' }}>
          よくあるご質問
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button 
                className="w-full p-4 text-left font-bold flex justify-between items-center"
                style={{ color: 'var(--trust-blue)' }}
                onClick={() => toggleAccordion(index)}
              >
                <span className="pr-4">{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp size={20} className="flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="flex-shrink-0" />
                )}
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4">
                  <div className="text-sm leading-relaxed text-gray-700">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}