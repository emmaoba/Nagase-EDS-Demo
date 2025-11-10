# アセット（画像）ディレクトリ

## 必要な画像ファイル

### KVブロック用

1. **kv_bg.jpg** ✅ 配置済み
   - 用途: KVセクション背景
   - サイズ: 80KB

2. **kv_logo.png** ✅ 配置済み
   - 用途: カラフルな円形ロゴ
   - サイズ: 76KB

3. **kv_copy.png** ✅ 配置済み
   - 用途: IMAGING-INTELLIGENCEテキスト画像
   - サイズ: 4KB

### Mainブロック用

4. **btn_dmr_img.jpg** ❌ 未配置
   - 用途: 製品情報リンクボタンの画像
   - 推奨サイズ: 480px幅
   - 形式: JPEG
   - 取得元: https://www.nagase.co.jp/med-eq/index.html

## 画像の取得方法

参照サイトから画像をダウンロード：

1. https://www.nagase.co.jp/med-eq/index.html を開く
2. ブラウザの開発者ツールを開く
3. Networkタブで画像URLを確認
4. 画像を右クリック → 「名前を付けて保存」
5. このディレクトリに保存

## ファイルパス

EDSでは、画像は以下のパスで参照：
```
/assets/ファイル名
```

例:
```markdown
![Logo](/assets/kv_logo.png)
[![](./assets/btn_dmr_img.jpg)](./dmr/)
```

## 画像最適化

### 推奨事項

- **JPEG画像**: 品質80-90%で圧縮
- **PNG画像**: 透過が必要な場合のみ使用
- **サイズ**: Web用に最適化（過度に大きくしない）
- **レスポンシブ**: 最大表示サイズに合わせて準備

### ツール

- ImageOptim (Mac)
- TinyPNG (Web)
- Photoshop / GIMP (画像編集)

## プレースホルダー

画像が未配置の場合、EDSはalt属性のテキストを表示します。
開発中はプレースホルダーとして機能します。

