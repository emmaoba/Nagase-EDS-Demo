/**
 * Medicalブロック - 製品情報リンクセクション
 * 参照: https://www.nagase.co.jp/med-eq/index.html
 * 
 * index.mdのオーサリング構造（テーブル形式）:
 * 
 * | 1列目: 画像（リンク付き） | 2列目: タイトル |
 * | 空欄 | 3列目: 説明文 |
 * 
 * 例:
 * ## Medical
 * 
 * | [![](/assets/btn_dmr_img.jpg)](./dmr/) | 医療関係者向け製品情報 |
 * | | 米国やイスラエルのベンチャー技術を中心とした...<br>今後も診断支援技術等に注力してまいります。 |
 * 
 * 出力HTML構造:
 * - .to-btn: コンテナ（最大幅980px、ボーダー付き）
 * - a.hv-o: リンク（ホバーでopacity: 0.7）
 *   - .img: 画像エリア（480px）
 *   - .txt-block: テキストエリア（480px）
 *     - .ttl: タイトル（左ボーダー付き）
 *     - .des: 説明文
 */

export default function decorate(block) {
  // .to-btnコンテナを作成
  const toBtn = document.createElement('div');
  toBtn.classList.add('to-btn');
  
  // ブロック内の行を取得
  const rows = [...block.children];
  
  // リンク要素を作成
  const link = document.createElement('a');
  link.classList.add('hv-o');
  
  rows.forEach((row) => {
    const cells = [...row.children];
    
    cells.forEach((cell, index) => {
      if (index === 0) {
        // 1列目: 画像（リンク付き）→ <div class="img"><img /></div>
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img');
        
        // 画像要素を移動
        const picture = cell.querySelector('picture');
        if (picture) {
          imgDiv.appendChild(picture);
        }
        
        // リンクURLを取得（[![画像](URL)](リンク)形式の場合）
        const imageLink = cell.querySelector('a');
        if (imageLink) {
          link.href = imageLink.href;
        }
        
        link.appendChild(imgDiv);
      } else if (index === 1) {
        // 2列目: テキストブロック → <div class="txt-block">
        const txtBlock = document.createElement('div');
        txtBlock.classList.add('txt-block');
        
        // セル内のコンテンツを処理
        const paragraphs = [...cell.querySelectorAll('p')];
        
        paragraphs.forEach((p, pIndex) => {
          if (pIndex === 0) {
            // 1行目: タイトル → <p class="ttl">タイトル</p>
            p.classList.add('ttl');
          } else {
            // 2行目以降: 説明文 → <p class="des">説明文</p>
            p.classList.add('des');
          }
          txtBlock.appendChild(p);
        });
        
        link.appendChild(txtBlock);
      }
    });
  });
  
  toBtn.appendChild(link);
  
  // ブロックをクリアして新構造を追加
  block.innerHTML = '';
  block.appendChild(toBtn);
}

