import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * Footerブロック
 * 参照: https://www.nagase.co.jp/med-eq/index.html
 * 
 * footer.mdのオーサリング構造:
 * 
 * 1行目: 会社名
 * - 出力: <h3><a>会社名</a></h3>
 * - 例: 長瀬産業株式会社 NVC室　メディカル事業推進チーム
 * 
 * 2行目: 住所
 * - 出力: <p>住所</p>
 * - 例: 〒100-8142　東京都千代田区大手町2-6-4 常盤橋タワー
 * 
 * 3行目: --- (区切り線)
 * - アドレスセクションとナビゲーションセクションの境界
 * 
 * 4行目以降: ナビゲーションリンク（箇条書き）
 * - オーサリング: - [リンク名](URL) （箇条書き形式）
 * - 出力: <nav><ul><li><a>リンク</a></li>...</ul></nav>
 * - 表示: CSSで横並び＋パイプ区切り (| リンク1 | リンク2 | ... |)
 * - 例: - [当社からの重要なお知らせ](https://www.nagase.co.jp/important/)
 *       - [個人情報保護方針](https://www.nagase.co.jp/privacy/)
 * 
 * 最終行: コピーライト
 * - 出力: <p>コピーライト</p>
 * - 例: Copyright © 2025 NAGASE & CO., LTD. All Rights Reserved.
 * 
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // footerフラグメントを読み込み
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // フッターDOMを構築
  block.textContent = '';
  
  // フラグメントのコンテンツを取得
  const allContent = [...fragment.children];
  
  // アドレスセクションを作成
  const addrSection = document.createElement('div');
  addrSection.classList.add('addr');
  
  const addrBox = document.createElement('div');
  addrBox.classList.add('box');
  
  // 1行目: 会社名 → <h3><a>会社名</a></h3>
  const firstP = fragment.querySelector('p');
  if (firstP) {
    const h3 = document.createElement('h3');
    const a = document.createElement('a');
    a.href = 'index.html';
    a.textContent = firstP.textContent;
    h3.appendChild(a);
    addrBox.appendChild(h3);
  }
  
  // 2行目: 住所 → <p>住所</p>
  const paragraphs = fragment.querySelectorAll('p');
  if (paragraphs[1]) {
    const addrP = document.createElement('p');
    addrP.textContent = paragraphs[1].textContent;
    addrBox.appendChild(addrP);
  }
  
  addrSection.appendChild(addrBox);
  
  // ナビゲーションセクションを作成
  const navSection = document.createElement('div');
  const navBox = document.createElement('div');
  navBox.classList.add('box');
  
  // 4行目以降: ナビゲーションリンク（箇条書き） 
  // → <nav><ul><li><a>リンク</a></li>...</ul></nav>
  // → CSSで横並び＋パイプ区切り表示
  const navList = fragment.querySelector('ul');
  if (navList) {
    const nav = document.createElement('nav');
    nav.appendChild(navList.cloneNode(true));
    navBox.appendChild(nav);
  }
  
  // 最終行: コピーライト → <p>コピーライト</p>
  const lastP = paragraphs[paragraphs.length - 1];
  if (lastP && lastP.textContent.includes('Copyright')) {
    const copyP = document.createElement('p');
    copyP.textContent = lastP.textContent;
    navBox.appendChild(copyP);
  }
  
  navSection.appendChild(navBox);
  
  // フッターに追加
  block.appendChild(addrSection);
  block.appendChild(navSection);
}

