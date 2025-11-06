

### 概要
この拡張機能は、Webページ内の主要な SEO / SNS 用メタタグを自動で検出し、設定漏れや内容の確認を簡単に行うためのツールです。

<hr/>

### インストール方法
① ファイルをダウンロードして、解凍する (緑の`<>code`ボタンをクリック → `Download ZIP`でダウンロード)　<br/>
<img width="312" height="268" alt="image" src="https://github.com/user-attachments/assets/b66e0d55-b136-45c5-99a6-ad3da7205d8b" /><br/><br/>
② Chrome のアドレスバーに <a href="chrome://extensions/"> chrome://extensions/ </a> を入力して開く　<br/><br/>
③ 右上の「デベロッパーモード」をオンにする　<br/>
<img width="556.5" height="48" alt="image" src="https://github.com/user-attachments/assets/533a05fd-c6c3-48d0-b5d8-487c5c8a49a1" /><br/><br/>
④ 「パッケージ化されていない拡張機能を読み込む」をクリックし、解凍したフォルダーを選択　<br/>
<img width="556.5" height="199.5" alt="image" src="https://github.com/user-attachments/assets/49a10084-a332-448c-962c-e392e9a5f193" /><br/><br/>
⑤ インストール完了！　<br/>

### 使い方：
確認したいページを開き、拡張機能リストから 「Meta Checker」 のアイコンをクリックすると、ページ内の meta 情報が表示されます。
<img width="2318" height="1298" alt="image" src="https://github.com/user-attachments/assets/6c111bbc-dbaf-46b7-8ee6-4b032382093b" /><br/><br/>

<hr/>

### 確認できる項目
| カテゴリ | 項目名 | 必須 | 内容・目的 |
|-----------|---------|------|-------------|
| **基本SEO** | title | ✅ | ページタイトル。検索結果やブラウザタブに表示される。 |
|  | favicon | ✅ | タブやブックマークに表示されるサイトアイコン。 |
|  | description | ✅ | 検索結果に表示されるページの説明文。クリック率に影響。 |
|  | keywords | － | ページの主要キーワード（※現在の検索エンジンでは無視される）|
| **Open Graph (OGP)** | og:title | ✅ | SNSシェア時に表示されるタイトル。 |
|  | og:description | ✅ | SNSシェア時の説明文。 |
|  | og:image | ✅ | シェア時に表示されるサムネイル画像。 |
|  | og:type | － | コンテンツの種類（例：website / article）。 |
|  | og:url | － | シェア時に使われるURL。 |
|  | og:site_name | － | サイト名。ブランドの一貫性に使用。 |
| **Twitter Card** | twitter:card | ✅ | Twitterでの表示形式（summaryなど）。 |
|  | twitter:title | ✅ | Twitter共有時のタイトル。 |
|  | twitter:description | ✅ | Twitter共有時の説明文。 |
|  | twitter:image | ✅ | Twitter共有時の画像。 |
|  | twitter:site | － | 投稿元アカウント（@ユーザー名）を指定。 |
| **その他** | theme-color | － | ブラウザやスマホUIのテーマカラー。 |
|  | manifest | － | PWA（Webアプリ）用の設定ファイル。 |
|  | apple-touch-icon | － | iPhoneのホーム画面に追加する際のアイコン。 |
|  | robots | － | 検索エンジンにインデックスさせるかの指定。 |
|  | canonical | － | 正規URLを指定して重複コンテンツを防止。 |
|  | viewport | ✅ | スマートフォンでの表示倍率やレイアウトを制御。 |
