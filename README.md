# フリーランスセラピストDAO

フリーランスセラピストが交流し、学び合い、成長できるコミュニティのランディングページ。

## 🌟 コンセプト

- **まずは自分自身が健康で幸せに** - 他者をサポートする前に、自分自身のウェルビーイングを大切に
- **やりがいとビジネスを両立する** - プロフェッショナルとして、情熱と持続可能なビジネスモデルを構築
- **クリエイティブに活動しよう** - 固定概念に縛られず、自由な発想で

## 🚀 デモ

Cloudflare Workers Static Assetsで公開: https://community.freelance-therapist.com/

## 📦 ファイル構成

```
.
├── index.html    # メインHTMLファイル
├── style.css     # スタイルシート
├── script.js     # インタラクティブ機能
└── README.md     # このファイル
```

## ✨ 機能

- **モダンなデザイン**: ダークモード、グラデーション、グラスモーフィズム
- **アニメーション**: スクロールアニメーション、ホバーエフェクト、パララックス効果
- **レスポンシブ**: モバイルからデスクトップまで対応
- **SEO最適化**: メタタグ、セマンティックHTML

## 🎨 技術スタック

- HTML5
- CSS3 (カスタムプロパティ、グリッド、フレックスボックス)
- Vanilla JavaScript
- Google Fonts (Noto Sans JP, Outfit)

## 🔗 リンク

- [Discordコミュニティ](https://discord.gg/rTXuBChSAw) - 無料で参加できます

## 📝 ライセンス

© 2024 フリーランスセラピストコミュニティ. All rights reserved.

## Cloudflareへの公開

Node.js 24以降を使用します。

```sh
npm ci
npm run dev          # ローカル確認
npm run deploy:check # 公開前の検証
npm run deploy       # 指定の本番ドメインへ公開
```

`wrangler.jsonc` が公開先の設定です。配信対象は `npm run build` がdistへコピーしたHTML/CSS/JavaScriptの3ファイルだけです。ソース管理ファイルや認証情報は配信しません。参加申込は既存のGoogleフォームへ遷移し、このサイトでは受信・保存しません。

アカウントはEmbodied Eutopia、Worker名はtherapist-community。カスタムドメイン設定によってCloudflareがDNSと証明書を管理します。workers.devとpreview URLは無効です。GitHubへのpushによる自動公開は未設定で、更新時は上記deployを実行します。
