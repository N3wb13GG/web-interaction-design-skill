# Web Interaction Design Skill

Webの選択・ドラッグ・タッチ操作と、モバイル固有のUI挙動を調整するCodex向けスキルです。

## 対象

- 画像やボタンの選択、右クリック、ドラッグ、長押し
- 高速スクロール時の固定ヘッダーとセーフエリア
- モーダルの初期・復帰フォーカスとキーボード表示
- iOS Safariの上下ブラウザー領域のtint

必要な節だけ適用し、通常のタップ、スクロール、入力、キーボード操作、支援技術を維持します。Safari tint用のReactコンポーネントとCSSは `web-interaction-design/assets` にあります。React以外では構造とCSSを移植できます。iOS Safariのtintはブラウザーのヒューリスティックに依存するため、対象の実機での確認が必要です。

## インストール

`web-interaction-design` フォルダーをCodexのスキルディレクトリ（通常 `~/.codex/skills/`）にコピーし、Codexを再起動してください。

## 使用例

`$web-interaction-design iPhoneで画像の長押しを制限しつつ、スクロールと入力を維持して`

`$web-interaction-design iOS Safariのメニュー表示中の上下のtintを調整して`
