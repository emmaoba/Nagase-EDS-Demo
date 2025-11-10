# Medicalブロック実装完了

## 実装したファイル

### ✅ 作成済み

1. **blocks/medical/medical.js** - JavaScript実装
2. **blocks/medical/medical.css** - スタイル実装
3. **blocks/main/README.md** - オーサリングガイド
4. **index.md** - Mainブロックコンテンツ追加済み
5. **assets/README.md** - 画像配置ガイド

## 📝 オーサリング完了

index.mdに以下が追加されています：

```markdown
## Medical

| [![](/assets/btn_dmr_img.jpg)](./dmr/) | 医療関係者向け製品情報 |
| | 米国やイスラエルのベンチャー技術を中心とした先進画像処理システムを取り扱っております。<br>今後も診断支援技術等に注力してまいります。 |
```

## 🎨 実装した機能

### レイアウト

**デスクトップ:**
- Flexbox 2カラム
- 画像: 480px
- テキスト: 480px
- 中央配置、最大幅980px

**モバイル:**
- 縦積みレイアウト
- 100%幅
- vw単位でレスポンシブ

### デザイン

- **ボーダー**: 10px solid #ccc
- **タイトル**: 
  - 24px、太字
  - 左に5px赤ボーダー (#ea5413)
  - 字間: 0.05em
- **ホバー効果**: opacity 0.7、0.5s transition

## ⚠️ 次のステップ

### 画像の配置が必要

**btn_dmr_img.jpg**を`assets/`ディレクトリに配置してください：

1. 参照サイトからダウンロード
   - https://www.nagase.co.jp/med-eq/index.html
   
2. 配置先
   ```
   Nagase-EDS-Demo/assets/btn_dmr_img.jpg
   ```

3. 確認
   - http://localhost:3000/ でMainブロックを確認
   - 画像が表示されるか
   - ホバー効果が動作するか

## 🔄 動作の流れ

### 1. マークダウン → HTML（自動）

```markdown
## Medical
| 画像 | テキスト |
```
↓
```html
<div class="main">
  <div><div>画像</div><div>テキスト</div></div>
</div>
```

### 2. JavaScript処理（main.js）

```javascript
// 構造を再編成:
- .to-btnコンテナ作成
- リンク要素作成（.hv-o）
- 画像 → .img
- テキスト → .txt-block
  - 1段落目 → .ttl
  - 2段落目 → .des
```

### 3. 最終HTML

```html
<div class="main">
  <div class="to-btn">
    <a class="hv-o" href="./dmr/">
      <div class="img">
        <img src="/assets/btn_dmr_img.jpg">
      </div>
      <div class="txt-block">
        <p class="ttl">医療関係者向け製品情報</p>
        <p class="des">米国やイスラエルの...</p>
      </div>
    </a>
  </div>
</div>
```

## 参照サイトとの対応

| 要素 | 参照サイト | EDS実装 | 状態 |
|------|-----------|---------|------|
| コンテナ | .medical-content | .medical-wrapper | ✅ |
| ボタン枠 | .to-btn | .to-btn | ✅ |
| リンク | a.hv-o | a.hv-o | ✅ |
| 画像 | .img | .img | ✅ |
| テキスト | .txt-block | .txt-block | ✅ |
| タイトル | .ttl | .ttl | ✅ |
| 説明 | .des | .des | ✅ |

## 完成イメージ

実装完了後：
- 左側：製品画像（480px）
- 右側：テキスト（480px）
  - 赤い左ボーダー付きタイトル
  - 説明文
- ホバーで透明度変化
- モバイルで縦積み

全て参照サイトと同じデザインになります！

