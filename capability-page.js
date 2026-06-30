const data = window.CRM_DATA || {};
const crmScreenshots = data.screenshots || {};
const crmCapabilities = data.capabilities || [];
const crmHelpArticles = data.helpArticles || [];

const capabilityExtras = {
  "orientation": {
    objects: ["Sales App", "Global Search", "Favorites", "Owner", "Task"],
    outputs: ["减少重复记录", "更快找到入口", "下一步动作更清楚"],
  },
  "customer-data": {
    objects: ["Lead", "Contact", "Account", "List View", "Campaign Member"],
    outputs: ["清楚的客户池", "责任归属清楚", "能继续推进的转化记录"],
  },
  "campaign": {
    objects: ["Campaign", "Campaign Member", "Campaign Result", "Participant", "Dashboard"],
    outputs: ["统一的展会入口", "能计算的活动结果", "能复盘的展会数据"],
  },
  "email": {
    objects: ["List Email", "Activity", "Lead Status", "Campaign", "Report"],
    outputs: ["能追溯的邮件记录", "客户互动证据", "状态推进依据"],
  },
  "sample": {
    objects: ["Contact Sample Request", "SKU", "Tracking", "Request Sent", "Samples Sent"],
    outputs: ["正式送样申请", "完整配送信息", "客户确认邮件"],
  },
  "opportunity": {
    objects: ["Opportunity", "Shokz Quote", "Shokz Product", "Contact Roles", "Campaign"],
    outputs: ["可预测的商机", "按字段记录的报价和产品信息", "清楚的 Campaign 归因"],
  },
  "reporting": {
    objects: ["Dashboard", "Report", "Forecast", "Tableau", "Opportunity"],
    outputs: ["汇总趋势", "原始明细", "预测校准"],
  },
  "tools": {
    objects: ["Sales Data Audit Export", "Notes", "History", "To Do List", "Activity"],
    outputs: ["有范围的数据导出", "更快回到刚才的页面", "待办事项更清楚"],
  },
  "review": {
    objects: ["Campaign", "Activity", "Sample", "Opportunity", "ROI"],
    outputs: ["展会复盘视角", "商机归因", "后续动作清单"],
  },
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function assetPath(src) {
  if (!src) return "";
  if (src.startsWith("../") || src.startsWith("http")) return src;
  return `../${src}`;
}

function renderList(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderChips(items) {
  return items.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
}

function articleById(id) {
  return crmHelpArticles.find((article) => article.id === id);
}

function screenshotThumb(key) {
  const image = crmScreenshots[key];
  if (!image) return "";
  const [src, caption] = image;
  return `
    <button class="guide-shot" type="button" data-image="${key}">
      <img src="${assetPath(src)}" alt="${escapeHtml(caption)}" />
      <span>${escapeHtml(caption)}</span>
    </button>
  `;
}

function renderStepList(steps) {
  return `
    <ol class="step-list">
      ${steps.map((step, index) => `<li><span>${index + 1}</span><p>${escapeHtml(step)}</p></li>`).join("")}
    </ol>
  `;
}

function renderGuideArticle(article, index) {
  return `
    <article class="step-guide-card" id="guide-${escapeHtml(article.id)}">
      <div class="step-guide-heading">
        <div>
          <p class="eyebrow">${escapeHtml(article.category)} · Guide ${String(index + 1).padStart(2, "0")}</p>
          <h2>${escapeHtml(article.title)}</h2>
          <p>${escapeHtml(article.summary)}</p>
        </div>
        <a class="secondary-action compact" href="../index.html?article=${encodeURIComponent(article.id)}#help">在帮助中心打开</a>
      </div>

      <div class="guide-columns">
        <section>
          <h3>开始前</h3>
          ${renderList(article.prerequisites)}
        </section>
        <section>
          <h3>完成后确认</h3>
          ${renderList(article.verify)}
        </section>
      </div>

      <section class="guide-step-section">
        <h3>操作步骤</h3>
        ${renderStepList(article.steps)}
      </section>

      <div class="guide-columns">
        <section>
          <h3>常见卡点</h3>
          ${renderList(article.tips)}
        </section>
        <section>
          <h3>相关截图</h3>
          <div class="guide-screenshot-grid">
            ${article.screenshots.map(screenshotThumb).join("")}
          </div>
        </section>
      </div>
    </article>
  `;
}

function openImage(key) {
  const image = crmScreenshots[key];
  const modal = document.querySelector("#imageModal");
  const modalImage = document.querySelector("#modalImage");
  const modalCaption = document.querySelector("#modalCaption");
  if (!image || !modal || !modalImage || !modalCaption) return;
  modalImage.src = assetPath(image[0]);
  modalImage.alt = image[1];
  modalCaption.textContent = image[1];
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeImage() {
  const modal = document.querySelector("#imageModal");
  const modalImage = document.querySelector("#modalImage");
  if (!modal || !modalImage) return;
  modal.hidden = true;
  modalImage.removeAttribute("src");
  document.body.style.overflow = "";
}

function installInteractions() {
  document.addEventListener("click", (event) => {
    const imageButton = event.target.closest("[data-image]");
    if (imageButton) {
      openImage(imageButton.dataset.image);
      return;
    }

    if (event.target.closest("[data-close-modal]")) {
      closeImage();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeImage();
  });
}

function renderPage() {
  const id = document.body.dataset.capability;
  const capability = crmCapabilities.find((item) => item.id === id);
  const app = document.querySelector("#capabilityPage");
  if (!app || !capability) return;

  const relatedArticles = capability.articleIds
    .map(articleById)
    .filter(Boolean);
  const extras = capabilityExtras[id] || {};
  const objects = extras.objects || capability.tags || [];
  const outputs = extras.outputs || capability.solves || [];
  const [imageSrc, imageCaption] = crmScreenshots[capability.screenshot] || [];

  document.title = `${capability.title} | CRM 功能指南`;
  app.innerHTML = `
    <section class="capability-detail-hero ${capability.accent}">
      <div class="capability-detail-copy">
        <a class="back-link" href="../index.html#features">返回功能地图</a>
        <p class="eyebrow">${escapeHtml(capability.category)}</p>
        <h1>${escapeHtml(capability.title)}</h1>
        <p class="lead">${escapeHtml(capability.summary)}</p>
        <div class="capability-detail-meta">
          <span><i data-lucide="${capability.icon}" aria-hidden="true"></i>${relatedArticles.length} 篇步骤指南</span>
          <span>${objects.length} 个相关对象和工具</span>
          <span>${relatedArticles.reduce((sum, article) => sum + article.steps.length, 0)} 个操作步骤</span>
        </div>
      </div>
      <figure class="capability-detail-visual">
        <img src="${assetPath(imageSrc)}" alt="${escapeHtml(imageCaption || capability.title)}" />
        <figcaption>${escapeHtml(imageCaption || capability.title)}</figcaption>
      </figure>
    </section>

    <section class="capability-detail-section">
      <div class="capability-detail-grid">
        <article class="capability-panel">
          <h2>能解决的问题</h2>
          ${renderList(capability.solves)}
        </article>
        <article class="capability-panel">
          <h2>什么时候用</h2>
          ${renderList(capability.when)}
        </article>
        <article class="capability-panel">
          <h2>最后得到什么</h2>
          ${renderList(outputs)}
        </article>
      </div>
    </section>

    <section class="capability-detail-section compact">
      <div class="section-heading">
        <p class="eyebrow">Objects and tools</p>
        <h2>相关对象和工具</h2>
      </div>
      <div class="object-chip-row">${renderChips(objects)}</div>
    </section>

    <section class="capability-detail-section compact">
      <div class="section-heading split">
        <div>
          <p class="eyebrow">Step-by-step guides</p>
          <h2>具体操作步骤</h2>
          <p>以下内容来自 Salesforce 使用手册，并按这个功能重新组织。每篇指南都写清楚开始前要准备什么、怎么操作、做完怎么检查，以及容易卡住的地方。</p>
        </div>
        <a class="secondary-action compact" href="../index.html#help">查看全部指南</a>
      </div>

      <nav class="capability-toc" aria-label="本页指南导航">
        ${relatedArticles.map((article) => `<a href="#guide-${escapeHtml(article.id)}">${escapeHtml(article.title)}</a>`).join("")}
      </nav>

      <div class="step-guide-stack">
        ${relatedArticles.map(renderGuideArticle).join("")}
      </div>
    </section>

    <div class="image-modal" id="imageModal" hidden>
      <div class="image-modal-backdrop" data-close-modal></div>
      <figure class="image-modal-panel" role="dialog" aria-modal="true" aria-labelledby="modalCaption">
        <button class="modal-close" type="button" data-close-modal aria-label="关闭截图">关闭</button>
        <img id="modalImage" alt="" />
        <figcaption id="modalCaption"></figcaption>
      </figure>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
  installInteractions();
}

renderPage();
