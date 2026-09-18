const products = [
  {
  category: 'yoyo',
  name: 'ヨーヨー作品 01',
  price: '550円',
  image: 'images/yoyo01.jpeg',
  imageAlt: 'ヨーヨー作品 01 くすみ水色×ブルー',
  placeholder: '写真を差し替え',
  desc: 'くすみ水色×ブルーのヨーヨーモチーフのレジンチャームです。',
  url: '#'
},
{
  category: 'yoyo',
  name: 'ヨーヨー作品 02',
  price: '550円',
  image: 'images/yoyo02.jpeg',
  imageAlt: 'ヨーヨー作品 02 くすみブルー×クリア',
  placeholder: '写真を差し替え',
  desc: 'くすみブルー×クリアのヨーヨーモチーフのレジンチャームです。',
  url: '#'
},
{
  category: 'yoyo',
  name: 'ヨーヨー作品 03',
  price: '550円',
  image: 'images/yoyo03.jpeg',
  imageAlt: 'ヨーヨー作品 03 クリアブルー×水色',
  placeholder: '写真を差し替え',
  desc: 'クリアブルー×水色のヨーヨーモチーフのレジンチャームです。',
  url: '#'
},
{
  category: 'yoyo',
  name: 'ヨーヨー作品 04',
  price: '550円',
  image: 'images/yoyo04.jpeg',
  imageAlt: 'ヨーヨー作品 04 くすみクリア×赤（ピンク）',
  placeholder: '写真を差し替え',
  desc: 'くすみクリア×赤（ピンク）のヨーヨーモチーフのレジンチャームです。',
  url: '#'
},
{
  category: 'yoyo',
  name: 'ヨーヨー作品 05',
  price: '550円',
  image: 'images/yoyo05.jpeg',
  imageAlt: 'ヨーヨー作品 05 くすみピンク×黄色',
  placeholder: '写真を差し替え',
  desc: 'くすみピンク×黄色のヨーヨーモチーフのレジンチャームです。',
  url: '#'
},
  {
    category: 'other',
    name: 'チョコレート',
    price: '550円',
    image: 'images/chocolate.jpeg',
    imageAlt: 'チョコレートのレジン作品',
    placeholder: '写真を差し替え',
    desc: '小さなチョコレートをイメージしたレジン作品です。',
    url: '#'
  },
  {
    category: 'other',
    name: 'どんぐり',
    price: '500円',
    image: 'images/acorn.jpeg',
    imageAlt: 'どんぐりのレジン作品',
    placeholder: '写真を差し替え',
    desc: '秋の雰囲気を感じるどんぐりモチーフのレジン作品です。',
    url: '#'
  },
  {
    category: 'other',
    name: 'プリン',
    price: '550円',
    image: 'images/ice_cream.jpeg',
    imageAlt: 'プリンのレジン作品',
    placeholder: '写真を差し替え',
    desc: 'カラメルの色合いがかわいいプリンモチーフのレジン作品です。',
    url: '#'
  },
  {
    category: 'other',
    name: 'ヘアゴム',
    price: '350円',
    image: 'images/hairband.jpeg',
    imageAlt: 'レジンのヘアゴム',
    placeholder: '写真を差し替え',
    desc: '日常使いしやすいレジンのヘアゴムです。',
    url: '#'
  }
];

const yoyoRoot = document.getElementById('yoYoProducts');
const otherRoot = document.getElementById('otherProducts');
const dialog = document.getElementById('productDialog');
const dialogContent = document.getElementById('dialogContent');

function imageMarkup(product, extraClass = '') {
  if (product.image) {
    return `<img class="product-photo ${extraClass}" src="${product.image}" alt="${product.imageAlt}" loading="lazy">`;
  }
  return `<div class="product-image-placeholder ${extraClass}">${product.placeholder}</div>`;
}

function productCard(product, index) {
  const card = document.createElement('article');
  card.className = 'product-card';
  card.innerHTML = `
    <div class="product-image">${imageMarkup(product)}</div>
    <div class="product-body">
      <h4>${product.name}</h4>
      <p>${product.desc}</p>
      <div class="price">${product.price}</div>
      <div class="card-actions">
        <button type="button" data-index="${index}">詳細</button>
        <a href="purchase.html?product=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}">購入ページへ</a>
      </div>
    </div>
  `;
  return card;
}

products.forEach((product, index) => {
  const card = productCard(product, index);
  (product.category === 'yoyo' ? yoyoRoot : otherRoot).appendChild(card);
});

document.addEventListener('click', (event) => {
  const detailButton = event.target.closest('[data-index]');
  if (!detailButton) return;

  const product = products[Number(detailButton.dataset.index)];
  const isYoyo = product.category === 'yoyo';

  if (isYoyo) {
  // ヨーヨー01〜05
  dialogContent.innerHTML = `
    <p class="eyebrow">齊藤商店</p>
    <h2>${product.name}</h2>
    <p>${product.desc}</p>
    <p><strong>価格：</strong>${product.price}</p>
    <p><strong>発送目安：</strong>決済確認後、約1週間</p>
    <p><strong>送料：</strong>無料</p>
    <p><strong>購入方法：</strong>購入ページから直接ご購入いただけます。</p>
    <a class="btn primary" href="purchase.html?product=${encodeURIComponent(product.name)}&price=${encodeURIComponent(product.price)}">購入ページへ</a>
  `;
} else {
  // その他のレジン作品
  dialogContent.innerHTML = `
    <p class="eyebrow">齊藤商店</p>
    <h2>${product.name}</h2>
    <p>${product.desc}</p>
    <p><strong>価格：</strong>${product.price}</p>
    <p><strong>発送目安：</strong>決済確認後、約2週間</p>
    <p><strong>送料：</strong>無料</p>
    <p><strong>ご注文について：</strong>お問い合わせフォームから、ご希望の商品・数量・デザイン・お色などをお知らせください。</p>
    <a class="btn primary" href="#contact" onclick="dialog.close()">お問い合わせへ</a>
  `;
}

  dialog.showModal();
});

document.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());

dialog?.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  if (outside) dialog.close();
});

document.querySelector('.nav-toggle')?.addEventListener('click', () => {
  const nav = document.querySelector('.site-nav');
  const button = document.querySelector('.nav-toggle');
  nav.classList.toggle('open');
  button.setAttribute('aria-expanded', String(nav.classList.contains('open')));
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => document.querySelector('.site-nav')?.classList.remove('open'));
});
