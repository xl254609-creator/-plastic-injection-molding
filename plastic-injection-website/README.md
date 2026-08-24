# Haiqiang Plastic Injection Molding - International B2B Website

一个完全免费、响应式的国际外贸网站，专为中国塑料注塑厂设计，用于获取海外询盘（Lead Generation）。

## 📁 项目结构

```
plastic-injection-website/
├── index.html          # 首页 (Hero/简介/优势/服务/产品/工厂/认证/评价/CTA)
├── about.html          # 关于我们
├── services.html       # 服务
├── products.html       # 产品 (8大分类，含MOQ/交期/规格表)
├── factory.html        # 工厂
├── quality.html        # 质量控制
├── faq.html            # 常见问题
├── contact.html        # 联系/RFQ询盘表单
├── sitemap.xml         # SEO 站点地图
├── robots.txt          # SEO 爬虫规则
├── schema.json         # Schema.org 结构化数据 (需嵌入各页)
├── css/
│   └── style.css       # 全站响应式样式
├── js/
│   └── main.js         # 导航/手风琴/表单/年份
└── images/
    ├── logo.jpg        # 公司Logo (已放置)
    └── (其他占位图片后续添加)
```

## 🚀 免费部署到 GitHub Pages

1. 注册/登录 [GitHub](https://github.com)
2. 新建一个仓库（例如 `plastic-molding-website`）
3. 把本文件夹所有内容上传到仓库
4. 进入仓库 `Settings` → `Pages`
5. Source 选择 `main` 分支，点击 Save
6. 等待 1-2 分钟，访问 `https://你的用户名.github.io/plastic-molding-website/`

## 🚀 部署到 Cloudflare Pages

1. 登录 [Cloudflare](https://dash.cloudflare.com)
2. Workers & Pages → Create → Pages
3. Connect to GitHub，选择仓库
4. Build settings: Framework preset = None
5. 部署完成即获得 `https://xxx.pages.dev` 免费网址

## ✏️ 如何修改内容

### 更换 Logo
直接替换 `images/logo.jpg` 即可（已用于所有页面导航栏）。

### 替换占位图片
所有图片位置已用 `<!-- IMAGE PLACEHOLDER -->` 注释标记，将真实图片放入 `images/` 文件夹后，替换对应 HTML 中的占位 div。

### 修改联系信息
在 `contact.html` 和所有页面页脚中修改公司名称、地址、邮箱、WhatsApp、微信。

### 修改域名
全站使用 `https://yourdomain.com` 作为占位域名，部署后请替换为你的真实域名：
- 所有 HTML 的 `<link rel="canonical">`
- 所有 `<meta property="og:url">`
- `sitemap.xml`
- `robots.txt`
- `schema.json`

## 🎯 SEO 优化已内置

- ✅ 每个页面独立 Title & Meta Description & Keywords
- ✅ Open Graph (Facebook/微信分享)
- ✅ Twitter Card
- ✅ Schema.org 结构化数据
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ 所有图片 Alt 标签
- ✅ 语义化 HTML 标签 (header/nav/main/section/footer)
- ✅ 响应式移动端适配

### 上线后的额外步骤

1. **Google Search Console**：注册并提交你的网址 + sitemap.xml，让谷歌收录
2. **提交 Schema 数据**：把 `schema.json` 内容嵌入每个页面的 `<script type="application/ld+json">` 标签中（或通过 GSC 测试工具验证）
3. **联系表单**：静态站点表单默认只显示成功提示。如需真正收到询盘邮件，建议接入 [Formspree](https://formspree.io)（免费额度）或其他表单后端服务

## 📧 联系方式占位

网站默认使用以下占位信息，请替换为真实信息：
- 邮箱：sales@haiqiang-molding.com
- 电话/WhatsApp：+86 137 2555 0798
- 地址：广东省东莞市长安镇创业路88号
