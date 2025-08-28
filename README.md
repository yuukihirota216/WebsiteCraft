# サクッと賃貸 - 静的ランディングページ

名古屋の不動産会社「サクッと賃貸」の静的ランディングページです。エックスサーバーなどの一般的なレンタルサーバーにアップロードして使用できます。

## ファイル構成

```
static-landing-page/
├── index.html          # メインHTMLファイル
├── styles.css          # CSSスタイルファイル
├── script.js           # JavaScriptファイル
├── images/             # 画像フォルダ
│   ├── woman-illustration.png
│   ├── real-estate-truth.png
│   └── sakutto-comparison.png
└── README.md           # このファイル
```

## セットアップ手順

### 1. ファイルのアップロード
エックスサーバーなどのレンタルサーバーの `public_html` フォルダ（またはドキュメントルート）に以下のファイルをアップロードしてください：

- `index.html`
- `styles.css`
- `script.js`
- `images/` フォルダ（中身の画像ファイルも含む）

### 2. LINE連携の設定
`script.js` ファイルの `handleLineClick()` 関数を編集して、実際のLINE公式アカウントのURLに置き換えてください：

```javascript
function handleLineClick() {
    // この部分を実際のLINE URLに変更
    window.open('https://line.me/R/ti/p/@your-line-id', '_blank');
}
```

### 3. 会社情報の更新
必要に応じて以下の情報を実際のものに更新してください：

- **住所**: `index.html` の footer セクション
- **免許番号**: `index.html` の footer セクション
- **営業時間**: 必要に応じて調整

## 主な機能

### デザイン機能
- **レスポンシブデザイン**: スマートフォン、タブレット、PC対応
- **モダンなUI**: カードデザインとグラデーション
- **アニメーション**: ホバーエフェクトとスムーズスクロール

### インタラクティブ機能
- **FAQ展開**: よくある質問の展開・折りたたみ
- **LINEボタン**: LINE公式アカウントへの導線
- **スムーズスクロール**: ページ内リンクでの滑らかな移動

### SEO対策
- **メタタグ最適化**: title、description、viewport設定
- **構造化マークアップ**: 適切なHTML構造
- **画像最適化**: alt属性とファイルサイズ最適化

## カスタマイズ方法

### 色の変更
`styles.css` の `:root` セクションで色を変更できます：

```css
:root {
    --hero-bg: hsl(43, 95%, 63%);        /* ヒーローセクション背景色 */
    --line-green: hsl(112, 65%, 38%);    /* LINEボタン色 */
    --highlight-red: hsl(0, 100%, 45%);  /* 強調色（赤） */
    --trust-blue: hsl(211, 39%, 23%);    /* メインテキスト色（青） */
}
```

### フォントの変更
現在は Noto Sans JP を使用していますが、他のフォントに変更する場合は：

1. `index.html` の Google Fonts リンクを変更
2. `styles.css` の `font-family` を変更

### セクションの追加・削除
`index.html` でセクションを編集できます。各セクションは独立しているため、不要なセクションは削除可能です。

## ブラウザ対応

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- iOS Safari 12+
- Android Chrome 60+

## パフォーマンス

- **ページサイズ**: 約200KB（画像込み）
- **読み込み時間**: 3G回線で約2秒
- **Lighthouse スコア**: パフォーマンス90+を目標

## Google Analytics設定（オプション）

Google Analytics を設定する場合は、`index.html` の `</head>` タグ直前に以下を追加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## サポート

技術的な質問やカスタマイズが必要な場合は、Web開発者にご相談ください。

---

**更新日**: 2025年1月31日  
**バージョン**: 1.0  
**作成者**: サクッと賃貸 開発チーム