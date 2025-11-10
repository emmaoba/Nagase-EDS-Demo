# 画像ディレクトリ

## 必要な画像ファイル

### Footerブロック用

1. **bg-footer.png** ❌ 未配置
   - 用途: フッターのアドレスセクション背景
   - 配置: repeat-x（横リピート）
   - 形式: PNG
   - 取得元: https://www.nagase.co.jp/med-eq/

2. **totop.gif** ❌ 未配置
   - 用途: TOPに戻るボタン画像
   - 配置: 固定位置（bottom: 60px, right: 30px）
   - 形式: GIF または PNG
   - 取得元: https://www.nagase.co.jp/med-eq/

## 画像の取得方法

参照サイトから画像をダウンロード：

1. https://www.nagase.co.jp/med-eq/index.html を開く
2. ブラウザの開発者ツールを開く（F12）
3. Elementsタブでフッターを検査
4. 背景画像のURLを確認
5. 画像を右クリック → 「名前を付けて保存」
6. このディレクトリ（img/）に保存

### 具体的な手順

**bg-footer.png:**
```
1. 参照サイトのフッター部分を検査
2. background-image: url(../img/bg-footer.png) を探す
3. URLをブラウザで開く: https://www.nagase.co.jp/med-eq/img/bg-footer.png
4. 保存先: Nagase-EDS-Demo/img/bg-footer.png
```

**totop.gif:**
```
1. 参照サイトの右下のTOPボタンを検査
2. img src="img/totop.gif" を探す
3. URLをブラウザで開く: https://www.nagase.co.jp/med-eq/img/totop.gif
4. 保存先: Nagase-EDS-Demo/img/totop.gif
```

## ファイルパス

EDSでは、画像は以下のパスで参照：

**CSS内:**
```css
background: url(../img/bg-footer.png) repeat-x;
```

**HTML内:**
```html
<img src="img/totop.gif" alt="TOPに戻る">
```

## プレースホルダー

画像が未配置の場合：
- 背景画像: 背景色のみ表示
- TOPボタン: alt属性のテキスト表示

開発中はこれで基本的なレイアウト確認が可能です。

## 画像最適化

### 推奨事項

- **PNG画像**: Web用に最適化
- **GIF画像**: 必要最小限の色数
- **サイズ**: 過度に大きくしない
- **解像度**: Retina対応の場合は@2xも準備

### ツール

- ImageOptim (Mac)
- TinyPNG (Web)
- Photoshop / GIMP (画像編集)

