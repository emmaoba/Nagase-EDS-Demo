/**
 * KVブロック（キービジュアル）
 * 参照: https://www.nagase.co.jp/med-eq/index.html
 * 
 * index.mdのオーサリング構造:
 * 
 * 1行目: ロゴ画像
 * - 出力: <div class="kv__logo"><img src="..." /></div>
 * - 例: ![Logo](/assets/kv_logo.png)
 * 
 * 2行目: IMAGING-INTELLIGENCEコピー画像
 * - 出力: <p class="copy"><img src="..." /></p>
 * - 例: ![IMAGING-INTELLIGENCE](/assets/kv_copy.png)
 * 
 * 3行目: メインテキスト（複数行可）
 * - 出力: <p class="txt">テキスト</p>
 * - 例: 検査ワークフローの効率化。  
 *       患者さんの身体的負担の軽減。  
 *       （行末にスペース2つで改行）
 * 
 * 構造:
 * - .kv__inner: 内側のコンテナ（最大幅980px、中央配置）
 * - .kv__logo: ロゴ画像エリア
 * - .kv__copy-block: コピーテキストエリア
 *   - .copy: IMAGING-INTELLIGENCEロゴ画像
 *   - .txt: メインテキスト
 */

export default function decorate(block) {
  // ブロック全体に.kvクラスを追加（自動的に付与されるが明示的に確認）
  block.classList.add('kv');
  
  // ブロック内の構造を取得
  const rows = [...block.children];
  
  // .kv__innerコンテナを作成
  const kvInner = document.createElement('div');
  kvInner.classList.add('kv__inner');
  
  // ロゴエリアを作成
  const logoDiv = document.createElement('div');
  logoDiv.classList.add('kv__logo');
  
  // コピーブロックを作成
  const copyBlock = document.createElement('div');
  copyBlock.classList.add('kv__copy-block');
  
  // 各行を処理
  rows.forEach((row, index) => {
    const content = row.querySelector('div');
    if (!content) return;
    
    if (index === 0) {
      // 1行目: ロゴ画像 → <div class="kv__logo"><img /></div>
      logoDiv.appendChild(content);
    } else if (index === 1) {
      // 2行目: IMAGING-INTELLIGENCEコピー画像 → <p class="copy"><img /></p>
      const copyPara = document.createElement('p');
      copyPara.classList.add('copy');
      copyPara.appendChild(content);
      copyBlock.appendChild(copyPara);
    } else if (index === 2) {
      // 3行目: テキストコンテンツ → <p class="txt">テキスト</p>
      const txtPara = document.createElement('p');
      txtPara.classList.add('txt');
      txtPara.innerHTML = content.innerHTML;
      copyBlock.appendChild(txtPara);
    }
  });
  
  // 最終構造を構築
  kvInner.appendChild(logoDiv);
  kvInner.appendChild(copyBlock);
  
  // ブロックをクリアして新しい構造を追加
  block.innerHTML = '';
  block.appendChild(kvInner);
}

