const screenshots = {
  fig01: ["assets/fig01-flow.png", "图 1：Salesforce 销售流程"],
  fig02: ["assets/fig02.jpg", "图 2：主页 Tableau 看板和功能区域"],
  fig03: ["assets/fig03.jpg", "图 3：点击数据点后的联动筛选"],
  fig04: ["assets/fig04.jpg", "图 4：从导航栏进入对象并创建记录"],
  fig05: ["assets/fig05.jpg", "图 5：切换不同的列表视图"],
  fig06: ["assets/fig06.jpg", "图 6：列表视图里的字段和筛选条件"],
  fig07: ["assets/fig07.jpg", "图 7：用齿轮菜单创建个人列表视图"],
  fig08: ["assets/fig08.jpg", "图 8：给当前列表里的全部记录发送邮件"],
  fig09: ["assets/fig09.jpg", "图 9：选择部分记录后发送邮件"],
  fig10: ["assets/fig10.jpg", "图 10：切换到 Kanban 看板视图"],
  fig11: ["assets/fig11.jpg", "图 11：在 Campaign 的 Files 区域上传展会图片"],
  fig12: ["assets/fig12.jpg", "图 12：预览图片并复制图片地址"],
  fig13: ["assets/fig13.jpg", "图 13：填写 Image Display URL"],
  fig14: ["assets/fig14.jpg", "图 14：Campaign 页面里的展会图片"],
  fig15: ["assets/fig15.jpg", "图 15：Campaign 详情页的数据视图和工具组件"],
  fig16: ["assets/fig16.jpg", "图 16：Lead 导入模板和展会分类说明"],
  fig17: ["assets/fig17.jpg", "图 17：Import Leads and Contacts 入口"],
  fig18: ["assets/fig18.jpg", "图 18：导入向导里的推荐配置"],
  fig19: ["assets/fig19.jpg", "图 19：导入模板里的样品数量字段"],
  fig20: ["assets/fig20.jpg", "图 20：导入后生成的 Lead / Contact Sample"],
  fig21: ["assets/fig21.jpg", "图 21：运行 Calculate Campaign Results"],
  fig22: ["assets/fig22.jpg", "图 22：Campaign Dashboard 结果和刷新入口"],
  fig23: ["assets/fig23.jpg", "图 23：手动记录 Campaign 参与人员"],
  fig24: ["assets/fig24.jpg", "图 24：Campaign Details 中的统计字段"],
  fig25: ["assets/fig25.jpg", "图 25：Activity 模块里的邮件记录"],
  fig26: ["assets/fig26.jpg", "图 26：从 Campaign 发送列表邮件"],
  fig27: ["assets/fig27.jpg", "图 27：使用合并字段起草个性化邮件"],
  fig28: ["assets/fig28.jpg", "图 28：Campaign 里的 Lead Status 看板"],
  fig29: ["assets/fig29.jpg", "图 29：通过 View Report 查看明细"],
  fig30: ["assets/fig30.jpg", "图 30：Lead 页面右上角的 Convert 操作"],
  fig31: ["assets/fig31.jpg", "图 31：转化时创建或匹配 Account、Contact 和 Opportunity"],
  fig32: ["assets/fig32.jpg", "图 32：创建 Contact Sample Request"],
  fig33: ["assets/fig33.jpg", "图 33：在 Related 页面添加样品明细"],
  fig34: ["assets/fig34.jpg", "图 34：Confirm Request 后的状态和按钮变化"],
  fig35: ["assets/fig35.jpg", "图 35：填写样品配送信息"],
  fig36: ["assets/fig36.jpg", "图 36：发送客户确认并完成 Samples Sent"],
  fig37: ["assets/fig37.jpg", "图 37：完善 Opportunity 信息并关联 Campaign"],
};

const categories = ["全部", "入门", "客户管理", "Campaign", "邮件", "送样", "商机", "报表", "工具", "复盘"];

const flowSteps = [
  {
    id: "campaign",
    title: "Campaign",
    subtitle: "展会入口",
    summary: "创建展会记录，维护展位图、现场照片、导入模板、成员和看板入口。",
    actions: ["上传展会资料", "配置 Image Display URL", "关联后续 Lead、Contact、Opportunity"],
    outputs: ["统一资料入口", "Campaign Member", "Campaign Results"],
    color: "orange",
  },
  {
    id: "lead-import",
    title: "Lead / Contact",
    subtitle: "数据导入",
    summary: "用标准模板清洗线索和联系人，导入 Campaign Members，并让样品记录按数量字段自动生成。",
    actions: ["检查邮箱和必填字段", "清洗样品数量字段", "使用 Import Leads and Contacts"],
    outputs: ["Lead / Contact", "Lead Sample / Contact Sample", "去重后的成员数据"],
    color: "blue",
  },
  {
    id: "email",
    title: "Email",
    subtitle: "客户联系",
    summary: "通过列表邮件或 Campaign 邮件联系客户，并把互动记录放进 Activity。",
    actions: ["确认筛选条件和收件人数", "使用合并字段", "发送测试邮件"],
    outputs: ["Activity 记录", "Initial contact 状态", "能回查的邮件记录"],
    color: "teal",
  },
  {
    id: "status",
    title: "Lead Status",
    subtitle: "状态推进",
    summary: "从 New 到 Initial contact、Engaged、Converted，状态会影响看板和后续转化判断。",
    actions: ["查看 Lead Status 看板", "用 View Report 查看明细", "及时转化有价值 Lead"],
    outputs: ["状态占比", "Engaged 客户池", "Converted 记录"],
    color: "green",
  },
  {
    id: "sample",
    title: "Sample",
    subtitle: "送样流程",
    summary: "在 Contact Sample Request 中提交内部申请，补齐样品、物流和外部确认信息。",
    actions: ["创建送样申请", "添加 SKU 和数量", "确认发送客户邮件"],
    outputs: ["Request Sent", "Samples Sent", "Tracking / PO 信息"],
    color: "rose",
  },
  {
    id: "opportunity",
    title: "Opportunity",
    subtitle: "商机推进",
    summary: "用统一命名、阶段、金额和关系字段管理可预测的销售机会。",
    actions: ["按 Company / 展会名 / 年份命名", "维护 Contact Roles 和 Partners", "关联 Campaign"],
    outputs: ["Stage 提醒", "商机来源", "成交结果"],
    color: "amber",
  },
  {
    id: "review",
    title: "Review",
    subtitle: "数据复盘",
    summary: "把 Campaign、客户互动、样品和 Opportunity 放在一起，回看展会投入有没有带来成交。",
    actions: ["计算 Campaign Results", "刷新嵌入式看板", "检查 Campaign 与 Opportunity 是否一致"],
    outputs: ["展会 ROI 视角", "新老客户构成", "回复和转化结果"],
    color: "teal",
  },
];

const features = [
  {
    id: "quick-start",
    category: "入门",
    title: "入门和每日检查",
    summary: "先让销售用户熟悉主要对象、Owner、Activity 和状态更新这些日常习惯。",
    screenshots: ["fig01"],
    capabilities: ["先搜索后新建", "Owner 责任人", "Activity 跟进证据", "每日检查"],
    actions: ["开始工作时先看 Task、逾期提醒、重点 Opportunity 和 Key Account。", "每次客户互动后，及时更新 Lead Status 或 Opportunity Stage。", "下班前创建下一步 Task，并检查 Campaign 关联是否正确。"],
    automation: ["Owner 决定提醒和任务到达对象。", "Lead Status 与 Opportunity Stage 会影响看板和自动提醒。"],
    tags: ["Lead", "Owner", "Activity"],
    accent: "teal",
  },
  {
    id: "home-tableau",
    category: "看板",
    title: "主页与 Tableau 看板",
    summary: "在 Salesforce 主页读取 POS Sell-in、Sell-through、Sell-out 数据，并用联动筛选定位异常。",
    screenshots: ["fig02", "fig03"],
    capabilities: ["主页看板", "数据点联动", "筛选恢复", "销售数据概览"],
    actions: ["在图表中选择数据点，查看符合条件的联动结果。", "单击空白区域或清除选择，恢复整体看板。"],
    automation: ["嵌入式 Tableau 组件会根据所选条件联动刷新。"],
    tags: ["Tableau", "POS", "Sell-in"],
    accent: "blue",
  },
  {
    id: "sales-app-navigation",
    category: "导航",
    title: "Sales App 顶部导航与全局入口",
    summary: "把 Salesforce 里的 Home、Leads、Contacts、Accounts、Opportunities、Campaigns、Dashboards、Reports、Forecasts 和自定义对象整理成日常入口。",
    screenshots: ["fig04", "fig05"],
    capabilities: ["全局搜索", "对象导航", "More 更多菜单", "Edit nav items", "Favorites"],
    actions: ["先用全局搜索查找已有客户、公司或商机，避免重复创建。", "常用对象直接从顶部导航进入；不常用的对象从 More 中进入。", "把常用页面加入 Favorites，或用 Edit nav items 调整自己的导航顺序。"],
    automation: ["顶部导航只改变入口，不改数据。进入正确对象后，后续创建记录和关联关系才不容易出错。"],
    tags: ["Sales App", "Navigation", "Search"],
    accent: "green",
  },
  {
    id: "list-views",
    category: "列表",
    title: "列表视图与新建记录",
    summary: "从顶部导航进入对象，切换视图，看懂筛选条件，再创建记录。",
    screenshots: ["fig04", "fig05", "fig06", "fig07"],
    capabilities: ["对象导航", "New 新建", "视图筛选", "个人列表视图"],
    actions: ["先确认当前列表视图名称和筛选条件。", "用齿轮菜单创建或复制个人视图，保存常用字段和条件。", "带红色星号的字段必须填写。"],
    automation: ["列表视图本身不改变数据，但会影响你看到的记录范围和数量判断。"],
    tags: ["List View", "Filter", "Field"],
    accent: "teal",
  },
  {
    id: "lead-list-operations",
    category: "列表",
    title: "Leads 列表页批量操作",
    summary: "在 Leads 列表里使用 New、Import、Add to Campaign、Change Status、Change Owner、Search this list 和列排序。",
    screenshots: ["fig05", "fig06", "fig07"],
    capabilities: ["New", "Import", "Add to Campaign", "Change Status", "Change Owner", "Search this list"],
    actions: ["先确认当前 List View，例如 Recently Viewed 或团队公共视图。", "需要批量处理时先勾选目标记录，再使用 Add to Campaign、Change Status 或 Change Owner。", "用 Search this list 在当前视图内定位记录；用列标题排序或检查字段。"],
    automation: ["批量改状态或 Owner 会直接影响提醒、看板和跟进责任人；Add to Campaign 会让记录进入对应 Campaign Member 范围。"],
    tags: ["Lead", "Bulk Action", "List View"],
    accent: "orange",
  },
  {
    id: "bulk-email-kanban",
    category: "列表",
    title: "批量邮件与 Kanban 看板",
    summary: "面向 Lead 或 Contact 列表进行批量邮件联系，并用 Kanban 查看状态分布。",
    screenshots: ["fig08", "fig09", "fig10"],
    capabilities: ["列表邮件", "勾选发送", "按状态分组", "Kanban 视图"],
    actions: ["发送前再次检查筛选条件和收件人数。", "可向当前列表全部记录发送，也可只向选中记录发送。", "切换 Kanban 后按状态或阶段查看数据分布。"],
    automation: ["成功的 Campaign 列表邮件可推动符合条件的 Lead 进入 Initial contact。"],
    tags: ["Email", "Kanban", "Lead"],
    accent: "orange",
  },
  {
    id: "campaign-assets",
    category: "Campaign",
    title: "Campaign 展会资料管理",
    summary: "在 Campaign 页面上传展会布局图或现场照片，并用 Image Display URL 展示在详情页。",
    screenshots: ["fig11", "fig12", "fig13", "fig14"],
    capabilities: ["Files 上传", "图片预览", "Image Display URL", "展会图片展示"],
    actions: ["在 Files 区域上传图片。", "预览图片并复制图片地址。", "把地址粘贴到 Details 页的 Image Display URL 字段。"],
    automation: ["保存后图片会显示在 Campaign 页面，团队可直接查看展会信息。"],
    tags: ["Campaign", "Files", "Image URL"],
    accent: "orange",
  },
  {
    id: "campaign-tools",
    category: "Campaign",
    title: "展会辅助组件与数据视图",
    summary: "Campaign 详情页提供右侧辅助组件、数据视图、导入模板和展会类型指引。",
    screenshots: ["fig15", "fig16"],
    capabilities: ["数据视图", "辅助组件", "Lead 导入模板", "展会分类指引"],
    actions: ["导入前使用 Campaign 页面提供的最新模板。", "根据展会类型选择指引统一分类。"],
    automation: ["辅助组件让导入、统计和结果查看集中在 Campaign 页面。"],
    tags: ["Dashboard", "Template", "Campaign"],
    accent: "blue",
  },
  {
    id: "import-members",
    category: "导入",
    title: "线索 / 联系人导入",
    summary: "从 Campaign Members 相关列表进入导入向导，用标准模板导入 Leads 和 Contacts。",
    screenshots: ["fig17", "fig18", "fig19"],
    capabilities: ["Import Leads and Contacts", "导入向导", "模板清洗", "样品数量字段"],
    actions: ["导入前检查必填字段、邮箱格式、重复记录。", "Number of OpenComm2 sent 和 OpenMeet sent 只填写有效正数。", "按推荐配置完成导入向导。"],
    automation: ["样品数量字段为正数时，系统会自动创建 Lead Sample 或 Contact Sample。"],
    tags: ["Campaign Member", "Lead", "Contact"],
    accent: "green",
  },
  {
    id: "campaign-results",
    category: "导入",
    title: "Campaign Results 计算",
    summary: "导入完成后运行 Calculate Campaign Results，重新生成扫描量、Lead 类型和结果看板。",
    screenshots: ["fig20", "fig21", "fig22", "fig23", "fig24"],
    capabilities: ["样品记录查看", "Calculate Campaign Results", "看板刷新", "参与人员统计"],
    actions: ["导入后在对应 Lead 或 Contact 页面检查样品记录。", "返回 Campaign 单击 Calculate Campaign Results。", "如看板未更新，先确认结果已生成，再刷新页面和嵌入式看板。"],
    automation: ["系统基于最新 Campaign Members 重新生成结果，并供 Dashboard 1/2 展示。", "Campaign Participant 只用于出勤管理，不参与自动计算。"],
    tags: ["Campaign Result", "Dashboard", "Sample"],
    accent: "amber",
  },
  {
    id: "activity-email",
    category: "邮件",
    title: "邮件往来与 Activity",
    summary: "Salesforce 会记录销售和客户之间的邮件，并放在 Lead 或 Contact 的 Activity 模块里。",
    screenshots: ["fig25"],
    capabilities: ["邮件同步", "Activity 时间线", "Lead / Contact 侧边栏", "互动证据"],
    actions: ["客户互动后检查邮件是否进入 Activity。", "缺失时确认邮件同步服务和客户邮箱是否正确。"],
    automation: ["通过平台外邮箱发送并由邮件同步服务处理的邮件，也会进入 Activity。"],
    tags: ["Activity", "Email", "Contact"],
    accent: "teal",
  },
  {
    id: "campaign-email-status",
    category: "邮件",
    title: "Campaign 群发邮件与 Lead 状态",
    summary: "从 Campaign 给成员发送列表邮件，用合并字段补上客户信息，并带动 Lead Status 更新。",
    screenshots: ["fig26", "fig27", "fig28", "fig29"],
    capabilities: ["Campaign 列表邮件", "合并字段", "Lead Status 看板", "View Report 明细"],
    actions: ["发送前预览或发送测试邮件。", "使用合并字段插入客户姓名等信息。", "通过 View Report 查看明细。"],
    automation: ["成功的 Campaign 列表邮件会将符合条件的 Lead 更新为 Initial contact。", "客户非自动回复会将 New 或 Initial contact 更新为 Engaged。", "Engaged 和 Converted 不会被降级。"],
    tags: ["Initial contact", "Engaged", "Report"],
    accent: "rose",
  },
  {
    id: "lead-conversion",
    category: "转化",
    title: "Lead 转化为 Contact",
    summary: "当 Lead 已有合作意向、预算或后续价值时，把它转成 Contact、Account 和 Opportunity。",
    screenshots: ["fig30", "fig31"],
    capabilities: ["Convert", "Account 匹配", "Contact 创建", "Opportunity 创建"],
    actions: ["转化前补齐公司、联系人和跟进信息。", "在转化页新建或匹配已有 Account 和 Contact。", "Opportunity 可在转化时创建，也可暂不创建。"],
    automation: ["关联的 Lead Sample 和 Activities 会随转换关系保留到 Contact。"],
    tags: ["Convert", "Account", "Opportunity"],
    accent: "blue",
  },
  {
    id: "sample-request",
    category: "送样",
    title: "创建送样申请与样品明细",
    summary: "在 Contact Sample Request 中创建申请，并在 Related 页面补齐 SKU、数量和收件人。",
    screenshots: ["fig32", "fig33"],
    capabilities: ["Contact Sample Request", "样品明细", "SKU", "收件信息"],
    actions: ["先确认 Contact、收件信息和业务背景准确。", "创建申请后进入 Related 页面新增样品明细。"],
    automation: ["送样申请状态会控制后续按钮是否显示。"],
    tags: ["Sample Request", "SKU", "Contact"],
    accent: "green",
  },
  {
    id: "sample-confirmation",
    category: "送样",
    title: "内部提交、配送与客户确认",
    summary: "提交内部申请后补齐配送信息，最后向客户发送确认邮件并完成 Samples Sent。",
    screenshots: ["fig34", "fig35", "fig36"],
    capabilities: ["Confirm Request", "Request Sent", "Tracking", "Email Confirmation"],
    actions: ["信息填写完整后单击 Confirm Request。", "逐条填写配送日期、Tracking、PO 等信息。", "发送客户确认前核对邮箱、样品明细、Tracking 和配送日期。"],
    automation: ["北美申请发送给 lena.lu、cynthia.zhou；其他地区发送给 joan.zhang、Ada.zhang、nina.wang。", "Confirm Request 后状态由 Draft 变为 Request Sent；客户确认后变为 Samples Sent，按钮随后隐藏。"],
    tags: ["Request Sent", "Samples Sent", "Tracking"],
    accent: "orange",
  },
  {
    id: "opportunity-followup",
    category: "商机",
    title: "Opportunity 与 Key Account 跟进",
    summary: "用统一命名、阶段停留提醒、客户关系和 Campaign 关联来推进商机。",
    screenshots: ["fig37"],
    capabilities: ["统一商机命名", "阶段提醒", "Contact Roles", "Campaign 关联", "Key Account 提醒"],
    actions: ["命名规则使用 Company / 展会名 / 年份。", "维护 Contact Roles、Partners 和重要客户关系。", "Opportunity 必须关联正确 Campaign，后面才查得到来源。"],
    automation: ["Demo 阶段停留超过 14 天提醒；Quotation 超过 7 天提醒；Won 进入超过 60 天后按 60 天周期提醒。", "Rating 为 A 的 Key Account 最近 30 天无有效 Activity 时，系统周一和周五提醒 Owner。"],
    tags: ["Opportunity", "Key Account", "Stage"],
    accent: "amber",
  },
  {
    id: "reporting-forecast",
    category: "报表",
    title: "Dashboards、Reports 与 Forecasts",
    summary: "从实际 Sales App 导航进入看板、报表和预测页面，用同一标准查看销售结果、明细和预测。",
    screenshots: ["fig02", "fig22", "fig29"],
    capabilities: ["Dashboards", "Reports", "Forecasts", "View Report", "Refresh"],
    actions: ["用 Dashboards 看趋势和汇总。", "用 Reports 钻取明细，确认明细记录是否符合筛选条件。", "用 Forecasts 查看预测视角，并和 Opportunity 阶段、金额核对。"],
    automation: ["Dashboard 和 Report 的结果依赖记录字段、Campaign 关联、Owner 和筛选条件；Forecasts 依赖 Opportunity 阶段、金额和预测设置。"],
    tags: ["Dashboard", "Report", "Forecast"],
    accent: "blue",
  },
  {
    id: "sales-utility-tools",
    category: "工具",
    title: "List Emails、Quote、Product 与审计工具",
    summary: "补充实际 Salesforce 中看到的 List Emails、自定义报价与产品对象、Sales Data Audit Export，以及 Notes、History、To Do List 等底部工具。",
    screenshots: ["fig08", "fig26", "fig37"],
    capabilities: ["List Emails", "Shokz Quote", "Shokz Product", "Sales Data Audit Export", "Notes", "History", "To Do List"],
    actions: ["在 List Emails 中回看列表邮件发送记录和状态。", "报价或产品信息不能只写在备注里时，进入 Shokz Quote 或 Shokz Product。", "有明确审计任务时，从 More 进入 Sales Data Audit Export，并先确认导出范围。", "底部工具栏用于临时笔记、历史页面和待办追踪。"],
    automation: ["List Emails 与 Activity、Campaign 邮件联系有关；Quote、Product、Audit Export 和 To Do 信息需要与对应客户或商机保持一致。"],
    tags: ["List Email", "Quote", "Product", "Audit Export"],
    accent: "rose",
  },
  {
    id: "data-loop",
    category: "复盘",
    title: "展会数据复盘",
    summary: "把 Campaign、客户互动、样品和 Opportunity 放在一起，回看展会投入有没有带来成交。",
    screenshots: ["fig01", "fig22", "fig37"],
    capabilities: ["线索数量", "回复情况", "新老客户构成", "商机生成", "成交情况"],
    actions: ["检查 Opportunities 是否关联到 Campaign。", "用 Campaign 页面和相关看板汇总销售结果。", "复盘时同时看客户互动、样品和成交结果。"],
    automation: ["看板可汇总 Leads / Contacts、回复、商机和成交情况。"],
    tags: ["Campaign", "ROI", "Review"],
    accent: "teal",
  },
];

const capabilities = [
  {
    id: "orientation",
    category: "入门",
    title: "导航、搜索与个人工作台",
    summary: "让新用户先知道从哪里开始，怎样查重、找对象、收藏页面和安排每天的 CRM 节奏。",
    icon: "compass",
    accent: "green",
    screenshot: "fig04",
    solves: ["减少重复 Lead / Contact。", "快速找到 Home、Leads、Contacts、Opportunities 等入口。", "把常用页面、待办和最近访问路径整理到自己的工作方式里。"],
    when: ["新用户第一次进入 Sales App。", "创建任何客户、公司或商机之前。", "需要把常用入口加入收藏或调整导航栏时。"],
    articleIds: ["sales-app-navigation", "daily-rhythm", "open-object-create-record"],
    tags: ["Sales App", "Search", "Favorites", "Owner"],
  },
  {
    id: "customer-data",
    category: "客户管理",
    title: "客户、线索与列表视图",
    summary: "管理 Lead、Contact、Account 的查看、新建、筛选、批量操作和转化。",
    icon: "users",
    accent: "teal",
    screenshot: "fig05",
    solves: ["把客户数据按 Owner、状态、来源和字段组织起来。", "在列表页批量加入 Campaign、改状态或改 Owner。", "把有价值的 Lead 转化为 Contact / Account / Opportunity。"],
    when: ["需要日常跟进客户池。", "需要清理 Recently Viewed 或团队公共视图。", "Lead 已有明确合作意向，需要进入正式客户和商机流程时。"],
    articleIds: ["switch-list-view", "create-personal-list-view", "lead-list-bulk-actions", "kanban-view", "convert-lead"],
    tags: ["Lead", "Contact", "Account", "List View"],
  },
  {
    id: "campaign",
    category: "Campaign",
    title: "Campaign 展会管理",
    summary: "把展会资料、成员导入、样品生成、参与人员和 Campaign Results 放在同一个入口管理。",
    icon: "megaphone",
    accent: "orange",
    screenshot: "fig15",
    solves: ["统一展会资料和图片展示。", "把 Lead / Contact 导入为 Campaign Members。", "重新计算 Campaign Results 并刷新结果看板。"],
    when: ["准备展会或活动前。", "展会结束后导入扫描名单和联系人。", "需要复盘展会数据或补充现场参与人员时。"],
    articleIds: ["campaign-image-display", "campaign-tools", "import-leads-contacts", "calculate-campaign-results", "campaign-participant-stats"],
    tags: ["Campaign", "Import", "Campaign Results", "Dashboard"],
  },
  {
    id: "email",
    category: "邮件",
    title: "邮件联系与 Activity",
    summary: "从列表或 Campaign 发送邮件，并把客户互动记录到 Activity 和 Lead Status。",
    icon: "mail",
    accent: "rose",
    screenshot: "fig26",
    solves: ["给筛选后的 Lead / Contact 批量发邮件。", "用合并字段做 Campaign 个性化邮件。", "追踪邮件是否进入 Activity，以及 Lead Status 是否推进。"],
    when: ["需要第一次联系展会名单。", "需要确认客户回复是否被系统记录。", "需要回看 List Emails 的发送记录和发送范围时。"],
    articleIds: ["send-list-email", "campaign-list-email", "view-email-activity", "lead-status-report", "list-emails-object"],
    tags: ["List Email", "Activity", "Initial contact", "Engaged"],
  },
  {
    id: "sample",
    category: "送样",
    title: "样品申请与客户确认",
    summary: "从 Contact Sample Request 创建申请、添加 SKU、提交内部请求，再补齐配送并发送客户确认。",
    icon: "package-check",
    accent: "green",
    screenshot: "fig32",
    solves: ["把口头送样沟通变成系统里能追溯的记录。", "管理 SKU、数量、收件信息、Tracking 和 PO。", "用状态控制 Confirm Request 和 Email Confirmation 按钮。"],
    when: ["客户需要样品评估。", "导入字段自动生成了 Sample，需要后续正式申请。", "内部已发货，需要通知客户 Tracking 时。"],
    articleIds: ["check-sample-auto-records", "create-sample-request", "submit-sample-request", "shipping-customer-confirmation"],
    tags: ["Sample Request", "SKU", "Tracking", "Samples Sent"],
  },
  {
    id: "opportunity",
    category: "商机",
    title: "Opportunity、Quote 与 Product",
    summary: "把客户意向推进为可预测的商机，并维护报价、产品、关系人和 Campaign 归因。",
    icon: "badge-dollar-sign",
    accent: "amber",
    screenshot: "fig37",
    solves: ["用统一命名、阶段、金额和 Close Date 管理商机。", "把 Shokz Quote / Product 信息按字段记录下来。", "通过 Contact Roles、Partners 和 Campaign 关联解释商机来源。"],
    when: ["Lead 已转化或客户已有明确采购机会。", "报价和产品信息需要团队共享。", "需要检查阶段停留提醒或 Key Account 跟进时。"],
    articleIds: ["opportunity-key-account", "shokz-quote-product", "convert-lead"],
    tags: ["Opportunity", "Quote", "Product", "Key Account"],
  },
  {
    id: "reporting",
    category: "报表",
    title: "Dashboards、Reports 与 Forecasts",
    summary: "用看板看汇总，用报表查明细，用 Forecasts 核对销售预测。",
    icon: "bar-chart-3",
    accent: "blue",
    screenshot: "fig22",
    solves: ["解释 Campaign、销售和商机数字从哪里来。", "打开 Dashboard 后面的明细记录。", "检查 Forecasts 是否和 Opportunity 阶段、金额、预计成交日期一致。"],
    when: ["管理层要看汇总趋势。", "Dashboard 数字需要追到明细。", "预测结果与商机字段不一致时。"],
    articleIds: ["view-home-dashboard", "tableau-interaction", "tableau-tabs-toolbar", "dashboards-reports-forecasts"],
    tags: ["Dashboard", "Report", "Forecast", "Tableau"],
  },
  {
    id: "tools",
    category: "工具",
    title: "审计导出与底部工具栏",
    summary: "处理 Sales Data Audit Export、Notes、History、To Do List 等辅助工具。",
    icon: "wrench",
    accent: "blue",
    screenshot: "fig25",
    solves: ["找到 More 菜单里的 Sales Data Audit Export。", "在导出前确认对象、日期、Owner 和分享范围。", "用 Notes、History、To Do List 支持临时记录、返回最近页面和处理待办。"],
    when: ["有明确数据审计或导出任务。", "需要快速回到最近浏览记录。", "需要把临时笔记整理成正式 Activity 或 Task。"],
    articleIds: ["sales-data-audit-export", "utility-bar-notes-history-todo"],
    tags: ["Audit Export", "Notes", "History", "To Do List"],
  },
  {
    id: "review",
    category: "复盘",
    title: "展会数据复盘",
    summary: "把 Campaign、邮件、样品、Opportunity 和成交结果放在一起，查清展会投入有没有带来结果。",
    icon: "rotate-ccw",
    accent: "teal",
    screenshot: "fig01",
    solves: ["从展会名单追到客户互动。", "从样品发放追到商机生成。", "从 Opportunity 归因回到 Campaign 结果。"],
    when: ["展会结束后做阶段复盘。", "需要解释新老客户构成、回复、样品和成交。", "报表中的 Campaign 和 Opportunity 对不上时。"],
    articleIds: ["data-review-loop", "calculate-campaign-results", "opportunity-key-account"],
    tags: ["Review", "Campaign ROI", "Opportunity", "Sample"],
  },
];

const helpCategories = ["全部", "入门", "导航", "看板", "列表", "Campaign", "导入", "邮件", "转化", "送样", "商机", "报表", "工具", "复盘"];

const helpArticles = [
  {
    id: "daily-rhythm",
    category: "入门",
    title: "新用户每天应该检查什么",
    summary: "建立 Salesforce 的基础工作习惯，避免客户互动、责任人和下一步动作漏记。",
    screenshots: ["fig01"],
    prerequisites: ["你已经可以登录 Salesforce。", "你知道自己负责的区域、客户和 Campaign。"],
    steps: ["开始工作时，先查看待办 Task、逾期提醒、重点 Opportunity 和 Key Account。", "新建 Lead、Contact 或 Account 前，先用全局搜索确认是否已有记录。", "每次客户邮件、会议或电话后，进入对应 Lead / Contact / Account，确认 Activity 已记录。", "如果客户状态发生变化，及时更新 Lead Status 或 Opportunity Stage。", "结束工作前，为重要客户创建明确的下一步 Task，并检查 Opportunity 是否关联到正确 Campaign。"],
    verify: ["今天新增记录都有正确 Owner。", "客户互动已经进入 Activity。", "Lead Status / Opportunity Stage 是最新状态。", "重要客户有下一步 Task。"],
    tips: ["Owner 不正确会导致提醒、待办和责任归属跑偏。", "Activity 是后续复盘和交接的证据，不要只停留在个人邮箱里。"],
  },
  {
    id: "sales-app-navigation",
    category: "导航",
    title: "使用 Sales App 顶部导航与全局搜索",
    summary: "按你实际 Salesforce 页面里的 Sales App 导航，找到常用对象、全局搜索、收藏和更多菜单。",
    screenshots: ["fig04", "fig05"],
    prerequisites: ["你已经进入 Salesforce 的 Sales App。", "页面顶部能看到 Home、Leads、Contacts、Accounts、Opportunities、Campaigns 等导航项。"],
    steps: ["开始新建客户或商机前，先使用顶部全局搜索查找姓名、公司、邮箱、Campaign 或 Opportunity。", "如果搜索能找到已有记录，优先打开现有记录并继续维护，不要重复创建。", "从顶部导航进入常用对象：Home、Leads、Contacts、Accounts、Opportunities、Campaigns。", "需要看管理口径时，进入 Dashboards、Reports 或 Forecasts。", "需要处理邮件、样品、报价或产品时，进入 List Emails、Contact Sample Request、Shokz Quote 或 Shokz Product。", "找不到入口时，打开 More，查看额外导航项，例如 Sales Data Audit Export。", "常用页面可用 Favorites list / Add favorite 收藏；个人导航顺序可用 Edit nav items 调整。"],
    verify: ["你进入的是正确对象，不是相似名称的对象。", "新建前已经搜索过重复记录。", "常用入口已经收藏或排到更容易点击的位置。"],
    tips: ["Salesforce 顶部搜索会跨对象找记录。列表页里的 Search this list 只搜索当前列表视图。", "More 菜单里可能放着不常用但重要的自定义工具。"],
  },
  {
    id: "view-home-dashboard",
    category: "看板",
    title: "查看主页 Tableau 销售看板",
    summary: "在 Salesforce 主页读取 POS Sell-in、Sell-through 与 Sell-out 数据。",
    screenshots: ["fig02"],
    prerequisites: ["你已经进入 Salesforce 首页。", "页面已加载 Tableau 嵌入式看板。"],
    steps: ["打开 Salesforce 主页。", "查看页面中的 Sell-in、Sell-through、Sell-out 指标区。", "留意图表左侧或顶部的筛选器，确认当前地区、时间或对象范围。", "对比趋势图、数值卡和明细区域，定位需要跟进的异常或重点客户。"],
    verify: ["看板指标和筛选条件与你要查看的市场或时间范围一致。", "图表、数值卡和明细表能正常显示。"],
    tips: ["如果看板没有加载完整，先刷新页面。", "如果数据范围不对，先检查筛选器，不要直接判断数据缺失。"],
  },
  {
    id: "tableau-interaction",
    category: "看板",
    title: "使用 Tableau 联动筛选",
    summary: "通过点击图表数据点，让整个看板只显示所选条件下的数据。",
    screenshots: ["fig03"],
    prerequisites: ["主页 Tableau 看板已经加载完成。"],
    steps: ["在图表中选择一个数据点、柱状条或图形区域。", "观察其他图表和明细区域是否联动刷新。", "基于筛选后的结果查看对应客户、产品或时间段。", "需要恢复全量视图时，单击图表空白处或清除当前选择。"],
    verify: ["选中数据点后，其他图表只显示符合条件的数据。", "清除选择后，看板恢复原始范围。"],
    tips: ["联动筛选不是改数据，只是改变当前看板的显示范围。", "如果看板看起来少数据，先确认是否还保留着某个选中状态。"],
  },
  {
    id: "tableau-tabs-toolbar",
    category: "看板",
    title: "使用首页 Tableau 标签、筛选器和工具栏",
    summary: "覆盖实际主页中看到的 Sell In、Sell Through & Out、Customer Map 标签，以及 Refresh、Restore、Download、Full Screen 等 Tableau 工具。",
    screenshots: ["fig02", "fig03"],
    prerequisites: ["你已经在 Salesforce Home 页面。", "Tableau 看板已经加载完成。"],
    steps: ["在 Tableau 看板顶部切换 Sell In、Sell Through & Out 或 Customer Map。", "查看当前筛选器，例如 Invoice Date Slider、Invoice Date Year、Invoice Date Month 和 Country。", "调整筛选器前，先确认当前业务问题是时间、地区、客户还是产品维度。", "筛选后检查数值卡、趋势图和明细区域是否同步变化。", "如果想回到默认视角，使用 Restore 或清除筛选。", "如果数据没有刷新，使用 Refresh。", "需要汇报或临时分析时，使用 Download 导出，或 Full Screen 放大查看。", "如果保存了个人视角，使用 Save Custom View 命名并保留筛选组合。"],
    verify: ["当前标签页与分析目标一致。", "日期和国家筛选器没有残留错误条件。", "刷新或恢复后，看板结果符合预期。"],
    tips: ["Download 会把当前筛选后的视图导出，导出前务必确认筛选条件。", "Full Screen 适合演示，但不改变原始数据。"],
  },
  {
    id: "open-object-create-record",
    category: "列表",
    title: "从导航栏进入对象并新建记录",
    summary: "进入 Campaign、Lead、Contact、Account、Sample Request 等对象，再用 New 创建记录。",
    screenshots: ["fig04"],
    prerequisites: ["你知道要创建的对象类型。", "创建前已搜索确认没有重复记录。"],
    steps: ["在 Salesforce 顶部导航栏选择目标对象，例如 Campaign、Lead、Contact、Account 或 Sample Request。", "进入对象列表视图后，确认当前列表视图是否是你需要的范围。", "单击页面上的 New。", "填写弹窗或页面中的字段，带红色星号的字段为必填项。", "保存前检查 Owner、Account / Campaign 关联和重要联系方式。", "单击 Save 完成创建。"],
    verify: ["新记录可以在对象列表中找到。", "Owner 正确，重要字段不为空。", "相关对象已经正确关联。"],
    tips: ["不要为了快而跳过搜索重复记录。重复 Lead / Contact 会影响后续转化和报表。"],
  },
  {
    id: "switch-list-view",
    category: "列表",
    title: "切换列表视图并理解筛选条件",
    summary: "在对象列表中切换不同 List View，并判断为什么记录数量不同。",
    screenshots: ["fig05", "fig06"],
    prerequisites: ["你已经进入某个对象的列表页。"],
    steps: ["查看列表左上角当前 List View 名称。", "打开 List View 下拉菜单。", "选择需要的公共视图或个人视图。", "切换后查看筛选条件和显示字段。", "如果记录数量不符合预期，先检查 Owner、地区、状态、日期等筛选条件。"],
    verify: ["当前视图名称与你要查看的范围一致。", "列表列字段足够支持你判断数据。"],
    tips: ["个人视图可能与团队公共视图不同。", "列表中没有看到记录，不等于记录不存在。先换视图或用全局搜索。"],
  },
  {
    id: "create-personal-list-view",
    category: "列表",
    title: "创建个人列表视图",
    summary: "把常用筛选条件和列保存成自己的 List View，减少重复操作。",
    screenshots: ["fig07"],
    prerequisites: ["你已经知道自己常看的字段和筛选条件。"],
    steps: ["进入目标对象列表页。", "单击右上角齿轮菜单。", "选择创建新视图或复制当前视图。", "命名个人视图，建议名称包含市场、状态或用途。", "设置筛选条件，例如 Owner、地区、Lead Status 或 Opportunity Stage。", "选择显示字段和字段顺序。", "保存视图。"],
    verify: ["新视图能在 List View 下拉菜单里看到。", "下次进入该对象时，可以直接切到这个视图。"],
    tips: ["个人视图适合日常工作，团队口径报表仍应以公共视图或正式报表为准。"],
  },
  {
    id: "lead-list-bulk-actions",
    category: "列表",
    title: "使用 Leads 列表页批量操作",
    summary: "根据实际 Leads 页面，使用 New、Import、Add to Campaign、Change Status、Change Owner、Search this list、排序和显示设置。",
    screenshots: ["fig05", "fig06", "fig07"],
    prerequisites: ["你已经进入 Leads 对象列表页。", "你知道要处理的是当前列表全部记录，还是只处理勾选记录。"],
    steps: ["先看左上角 List View 名称，例如 Recently Viewed，并确认记录范围。", "用 Search this list 在当前视图里搜索关键词；如果跨对象查找，改用顶部全局搜索。", "需要新增线索时单击 New；需要导入线索时单击 Import。", "需要批量加入 Campaign 时，先勾选目标 Leads，再单击 Add to Campaign。", "需要批量推进状态时，先勾选记录，再单击 Change Status。", "需要交接或重分配时，先勾选记录，再单击 Change Owner。", "需要检查字段时，使用列标题排序，或打开列菜单查看字段操作。", "需要改变显示方式时，使用 Select list display；需要刷新数据时，单击 Refresh。"],
    verify: ["批量操作前已确认勾选数量和记录范围。", "Change Status 或 Change Owner 后，列表中的字段已更新。", "Add to Campaign 后，相关记录能在目标 Campaign Members 中找到。"],
    tips: ["Recently Viewed 不是完整工作清单，只代表最近浏览记录。", "批量修改会影响 Owner 责任、提醒、Lead Status 看板和 Campaign 统计。"],
  },
  {
    id: "send-list-email",
    category: "列表",
    title: "从 Lead / Contact 列表发送邮件",
    summary: "向当前列表全部记录或勾选记录发送列表邮件。",
    screenshots: ["fig08", "fig09"],
    prerequisites: ["目标 Lead 或 Contact 已经在列表视图中。", "你已经确认筛选条件和收件范围。"],
    steps: ["进入 Lead 或 Contact 列表视图。", "确认当前视图筛选条件正确，特别是状态、Owner、地区和活动来源。", "如果要发给全部符合条件的记录，不勾选单条记录，直接使用列表邮件入口。", "如果只发给部分记录，先勾选目标 Lead 或 Contact。", "进入邮件编辑页面后，确认收件人数和收件人列表。", "填写邮件主题和正文，必要时使用模板。", "发送前预览或发送测试邮件。", "确认无误后发送。"],
    verify: ["收件人数与你预期一致。", "成功发送的邮件进入对应记录的 Activity。"],
    tips: ["发送前一定再次检查筛选条件和收件人数。", "如果发错范围，会影响 Lead Status 和客户体验。"],
  },
  {
    id: "kanban-view",
    category: "列表",
    title: "使用 Kanban 看板视图",
    summary: "把列表切换成 Kanban，以状态或阶段查看数据分布。",
    screenshots: ["fig10"],
    prerequisites: ["对象支持 Kanban 视图。", "当前列表视图已有可分组字段，例如 Status 或 Stage。"],
    steps: ["进入目标对象列表视图。", "切换显示模式为 Kanban。", "选择按状态或阶段分组。", "查看每一列的记录数量和分布。", "根据状态分布决定下一步跟进重点。"],
    verify: ["记录按状态或阶段分列展示。", "分组结果能帮助你识别积压阶段。"],
    tips: ["Kanban 适合看分布，不适合替代正式报表口径。"],
  },
  {
    id: "campaign-image-display",
    category: "Campaign",
    title: "上传并展示 Campaign 展会图片",
    summary: "把展会布局图或现场照片上传到 Campaign，并显示在页面中。",
    screenshots: ["fig11", "fig12", "fig13", "fig14"],
    prerequisites: ["Campaign 记录已经创建。", "你已准备好展位图、现场图或其他展会资料图片。"],
    steps: ["进入目标 Campaign 记录。", "在 Files 区域上传展会布局图或现场照片。", "上传完成后打开图片预览。", "在预览中右键单击图片，选择 Copy Image Address。", "返回 Campaign 的 Details 页面。", "找到 Image Display URL 字段。", "将复制的图片地址粘贴到 Image Display URL 字段。", "保存 Campaign。", "刷新或返回页面，查看图片是否显示在 Campaign 页面中。"],
    verify: ["Campaign 页面能直接看到展会图片。", "团队成员不用再单独找附件，就能看到展会信息。"],
    tips: ["复制的是图片地址，不是页面地址。", "如果图片不显示，重新打开预览确认复制的 URL 是否来自图片本身。"],
  },
  {
    id: "campaign-tools",
    category: "Campaign",
    title: "使用 Campaign 辅助组件、模板和展会分类指引",
    summary: "在 Campaign 详情页查看展会数据、导入模板和分类说明。",
    screenshots: ["fig15", "fig16"],
    prerequisites: ["你已经进入 Campaign 详情页。"],
    steps: ["查看 Campaign 详情页右侧的数据视图和辅助组件。", "导入前找到页面提供的 Lead 导入模板。", "下载或打开最新模板，按模板字段准备 Lead / Contact 数据。", "查看展会类型说明，确认当前 Campaign 的分类。", "按模板和分类标准准备导入数据，避免字段错位。"],
    verify: ["导入使用的是 Campaign 页面提供的最新模板。", "展会类型与团队标准一致。"],
    tips: ["不要使用旧模板复制字段，字段错位会影响导入和自动样品记录。"],
  },
  {
    id: "import-leads-contacts",
    category: "导入",
    title: "导入 Leads 和 Contacts 到 Campaign",
    summary: "通过 Campaign Members 里的 Import Leads and Contacts 入口导入整理好的数据。",
    screenshots: ["fig17", "fig18", "fig19"],
    prerequisites: ["Campaign 已创建。", "Lead / Contact 数据已按最新模板整理。", "邮箱、必填字段、重复记录和样品数量字段都已检查。"],
    steps: ["进入目标 Campaign。", "找到 Campaign Members 相关列表。", "单击 Import Leads and Contacts。", "进入导入向导后，按照推荐配置选择数据类型和匹配规则。", "上传或粘贴准备好的模板数据。", "检查字段映射，确认模板字段与 Salesforce 字段正确对应。", "重点检查 Email、Company、Owner、Number of OpenComm2 sent、OpenMeet sent 等字段。", "运行导入。", "导入完成后查看成功、失败和跳过记录。"],
    verify: ["Campaign Members 中出现新导入的 Lead / Contact。", "导入失败记录已下载或记下，方便修正后重试。"],
    tips: ["样品数量字段只填写有效数字。", "导入前先查重复记录，避免后续转化和报表变乱。"],
  },
  {
    id: "check-sample-auto-records",
    category: "导入",
    title: "检查自动生成的 Lead / Contact Sample 记录",
    summary: "导入后确认系统是否根据样品数量字段生成样品记录。",
    screenshots: ["fig19", "fig20"],
    prerequisites: ["导入模板中包含 Number of OpenComm2 sent 或 OpenMeet sent。", "对应数量为正数。"],
    steps: ["导入完成后，打开其中一个已导入的 Lead 或 Contact。", "进入 Related 或相关列表区域。", "查找 Lead Sample 或 Contact Sample 记录。", "核对样品类型和数量是否与导入模板一致。", "抽查多条记录，确认自动生成逻辑正常。"],
    verify: ["正数样品数量对应生成了 Sample 记录。", "数量为 0 或空值的记录没有错误生成样品。"],
    tips: ["如果没有生成 Sample，先回到导入模板检查样品数量字段是否为有效正数。"],
  },
  {
    id: "calculate-campaign-results",
    category: "导入",
    title: "计算 Campaign Results 并刷新看板",
    summary: "导入完成后运行计算，更新 Campaign 结果和嵌入式看板。",
    screenshots: ["fig21", "fig22"],
    prerequisites: ["Campaign Members 已完成导入。", "你有运行 Calculate Campaign Results 的权限。"],
    steps: ["返回目标 Campaign 页面。", "单击右上角 Calculate Campaign Results。", "等待系统按最新 Campaign Members 重新生成结果。", "刷新 Campaign 页面。", "查看 Dashboard 1 和 Dashboard 2 是否显示最新数据。", "如果 Campaign Result 已生成但看板未更新，单击嵌入式看板右下角刷新按钮。"],
    verify: ["Campaign Result 记录已经生成。", "Dashboard 1 / Dashboard 2 展示扫描量、Lead 类型等结果。"],
    tips: ["看板刷新和记录保存之间可能会有短暂延迟。", "看板没变化时，先确认 Campaign Result 是否生成，再刷新嵌入式看板。"],
  },
  {
    id: "campaign-participant-stats",
    category: "Campaign",
    title: "记录展会参与人员，查看 Campaign 统计",
    summary: "维护 Campaign Participant，并在 Details 里查看 Existing Record Count 和样品数量统计。",
    screenshots: ["fig23", "fig24"],
    prerequisites: ["Campaign 已创建。", "需要记录展会出勤或查看统计字段。"],
    steps: ["进入目标 Campaign。", "如需记录展会出勤，手动新增或维护 Campaign Participant。", "确认参与人员信息保存成功。", "向下滚动到 Campaign Details。", "查看 Existing Record Count、OpenComm2 / OpenMeet 发放数量等统计字段。"],
    verify: ["Campaign Participant 记录能用于出勤管理。", "Campaign Details 里的统计字段可以用于展会复盘。"],
    tips: ["Campaign Participant 仅用于出勤管理，不参与 Calculate Campaign Results 自动计算。"],
  },
  {
    id: "view-email-activity",
    category: "邮件",
    title: "查看自动记录的邮件往来",
    summary: "在 Lead 或 Contact 的 Activity 模块中查看客户邮件互动。",
    screenshots: ["fig25"],
    prerequisites: ["客户邮件已经通过 Salesforce 或邮件同步服务处理。"],
    steps: ["打开对应 Lead 或 Contact。", "查看页面右侧 Activity 模块。", "找到与客户之间的邮件往来记录。", "展开邮件，检查内容、时间和发送/接收方向。", "如果刚刚发送过邮件，等待同步后刷新 Activity。"],
    verify: ["完整邮件内容显示在 Activity 中。", "客户互动能作为后续跟进证据。"],
    tips: ["通过平台外邮箱发送、但由邮件同步服务处理的邮件，也应进入 Activity。", "缺失时先确认邮箱同步和客户邮箱是否正确。"],
  },
  {
    id: "campaign-list-email",
    category: "邮件",
    title: "从 Campaign 向成员发送列表邮件",
    summary: "Campaign 成员导入后，从 Campaign 页面向相关 Lead / Contact 发送列表邮件。",
    screenshots: ["fig26", "fig27"],
    prerequisites: ["Campaign Members 已导入。", "你已经确认要联系的成员范围。"],
    steps: ["进入目标 Campaign。", "找到发送列表邮件的入口。", "选择要发送的 Lead / Contact 成员范围。", "起草邮件主题和正文。", "使用合并字段插入客户姓名等个性化内容。", "发送前预览邮件，或先发送测试邮件。", "确认无误后正式发送。"],
    verify: ["邮件成功发送。", "发送记录进入对应 Lead / Contact 的 Activity。", "符合条件的 Lead Status 会更新为 Initial contact。"],
    tips: ["合并字段发送前一定要预览，避免客户姓名或字段为空。"],
  },
  {
    id: "lead-status-report",
    category: "邮件",
    title: "理解 Lead Status 并查看明细报表",
    summary: "查看 Lead 从 New 到 Initial contact、Engaged、Converted 的状态变化。",
    screenshots: ["fig28", "fig29"],
    prerequisites: ["Campaign 中已经有 Lead。", "列表邮件或客户回复已经产生。"],
    steps: ["进入目标 Campaign。", "查看右侧 Lead Status 视图。", "理解 New 表示新导入或尚未有效联系。", "确认 Campaign 列表邮件成功发送后，相关 Lead 是否进入 Initial contact。", "客户非自动回复被识别后，确认状态是否进入 Engaged。", "完成 Lead 转化后，状态应为 Converted。", "需要查看明细时，单击 View Report 打开明细报表。"],
    verify: ["Lead Status 看板展示各状态占比。", "View Report 中能看到对应明细记录。"],
    tips: ["自动回复不会把 Lead 更新为 Engaged。", "Engaged 和 Converted 不会被系统降级。"],
  },
  {
    id: "list-emails-object",
    category: "邮件",
    title: "查看 List Emails 邮件发送记录",
    summary: "使用实际导航中的 List Emails 对象，回看列表邮件的发送记录、发送范围和后续追踪。",
    screenshots: ["fig08", "fig26", "fig27"],
    prerequisites: ["你已经通过 Lead / Contact 列表或 Campaign 发送过列表邮件。", "你能从 Sales App 顶部导航进入 List Emails。"],
    steps: ["从顶部导航进入 List Emails。", "选择合适的列表视图，或用搜索定位某次邮件发送记录。", "打开列表邮件记录，查看主题、发送范围、发送人和时间。", "回到相关 Lead / Contact 或 Campaign，检查 Activity 和状态变化是否符合预期。", "如果邮件用于 Campaign 邮件联系，再检查 Lead Status 是否进入 Initial contact 或 Engaged。"],
    verify: ["List Emails 中能找到对应邮件记录。", "相关客户记录的 Activity 中能看到邮件往来。", "Campaign 或 Lead Status 的变化与发送结果一致。"],
    tips: ["List Emails 用来查看列表邮件本身。客户层面的互动仍然要回到 Lead / Contact 的 Activity 里看。", "不要只看发送成功，还要检查收件范围和后续状态。"],
  },
  {
    id: "convert-lead",
    category: "转化",
    title: "将 Lead 转化为 Contact / Account / Opportunity",
    summary: "当 Lead 已有合作意向、预算或后续价值时执行 Convert。",
    screenshots: ["fig30", "fig31"],
    prerequisites: ["Lead 信息已补齐。", "你已经判断该 Lead 有合作意向、预算或后续推进价值。"],
    steps: ["打开目标 Lead。", "确认公司、联系人、邮箱、电话、业务背景和跟进信息完整。", "单击页面右上角 Convert。", "在转化页面选择新建 Account / Contact，或匹配已有记录。", "根据需要选择是否同时创建 Opportunity。", "确认 Lead Sample 和 Activities 的保留关系。", "提交转化。"],
    verify: ["Lead 已转化为 Contact / Account。", "相关 Activities 和 Lead Sample 随转换关系保留到 Contact。", "如创建 Opportunity，商机能在 Account 或 Contact 相关列表中找到。"],
    tips: ["转化前先搜索 Account / Contact，避免重复客户主体。", "Opportunity 可以转化时创建，也可以暂不创建。"],
  },
  {
    id: "create-sample-request",
    category: "送样",
    title: "创建 Contact Sample Request 并添加样品明细",
    summary: "为客户申请样品，创建主申请并在 Related 页面补齐 SKU、数量和收件信息。",
    screenshots: ["fig32", "fig33"],
    prerequisites: ["目标客户已经建成 Contact。", "收件信息和业务背景已确认。"],
    steps: ["进入 Contact Sample Request 对象或相关入口。", "单击 New 创建送样申请。", "选择或填写对应 Contact。", "填写收件地址、业务背景等基础信息。", "保存主申请。", "进入该申请的 Related 页面。", "新增样品明细。", "选择 SKU、数量、收件人等信息。", "保存样品明细。"],
    verify: ["Contact Sample Request 主记录已创建。", "Related 页面能看到对应样品明细。", "Contact、收件信息、SKU 和数量正确。"],
    tips: ["创建申请前先确认 Contact 和收件信息，避免内部审批或客户确认出错。"],
  },
  {
    id: "submit-sample-request",
    category: "送样",
    title: "提交内部送样申请",
    summary: "信息填完整后，单击 Confirm Request。系统会按地区发送内部申请。",
    screenshots: ["fig34"],
    prerequisites: ["Contact Sample Request 和样品明细已填写完整。"],
    steps: ["打开目标 Contact Sample Request。", "再次检查 Contact、收件信息、SKU、数量和业务背景。", "单击 Confirm Request。", "等待状态从 Draft 自动变为 Request Sent。", "确认页面按钮变为 Email Confirmation (Ext.)。"],
    verify: ["状态显示为 Request Sent。", "内部申请已按地区发送给对应同事。"],
    tips: ["北美：lena.lu@shokz.com；cynthia.zhou@shokz.com。", "其他地区：joan.zhang@shokz.com；Ada.zhang@shokz.com；nina.wang@shokz.com。"],
  },
  {
    id: "shipping-customer-confirmation",
    category: "送样",
    title: "填写配送信息并发送客户确认",
    summary: "填写 Tracking、PO 和配送日期，再通过 Email Confirmation (Ext.) 通知客户。",
    screenshots: ["fig35", "fig36"],
    prerequisites: ["送样申请状态已为 Request Sent。", "配送信息已经从内部同事或系统获得。"],
    steps: ["返回样品明细。", "逐条填写配送日期、Tracking、PO 等配送信息。", "返回主送样申请页面。", "如需向客户发送确认邮件，在 Business Confirmation Email 中填写收件邮箱。", "多个邮箱使用英文逗号分隔；留空则不发送客户邮件。", "发送前核对客户邮箱、样品明细、Tracking 和配送日期。", "单击 Email Confirmation (Ext.)。", "确认系统将状态更新为 Samples Sent。"],
    verify: ["状态显示为 Samples Sent。", "Email Confirmation (Ext.) 按钮隐藏。", "客户确认邮件已发送到正确邮箱。"],
    tips: ["Email Confirmation (Ext.) 会给外部客户发邮件，点击前要再确认一次。", "如果需要返回修改，可先将 Status 手动改回上一个阶段，对应按钮会重新出现。"],
  },
  {
    id: "opportunity-key-account",
    category: "商机",
    title: "维护 Opportunity 和 Key Account 跟进",
    summary: "使用统一命名、阶段提醒、客户关系和 Campaign 关联把商机流程补完整。",
    screenshots: ["fig37"],
    prerequisites: ["客户已经转化为 Contact / Account，或已有明确商机。"],
    steps: ["创建 Opportunity 时使用统一命名规则：Company / 展会名 / 年份。", "填写阶段、金额、Owner 和重要业务信息。", "维护终端用户 Contact Roles。", "维护 Partners 和其他重要关系字段。", "将 Opportunity 关联到对应 Campaign。", "根据当前阶段及时推进 Stage。", "对于 Rating 为 A 的 Key Account，确认最近 30 天内是否有已完成 Task、Email 或 Event。"],
    verify: ["Opportunity 名称便于搜索和区分。", "Contact Roles、Partners 和 Campaign 关联完整。", "阶段停留提醒和 Key Account 提醒会归到正确 Owner。"],
    tips: ["Demo 阶段超过 14 天提醒；Quotation 超过 7 天提醒；Won 进入超过 60 天后按 60 天周期提醒。", "提醒任务目前在每周一、周五 09:00 中国标准时间运行。"],
  },
  {
    id: "dashboards-reports-forecasts",
    category: "报表",
    title: "使用 Dashboards、Reports 和 Forecasts",
    summary: "从 Sales App 导航进入看板、报表和预测页面，分别查看汇总、明细和销售预测。",
    screenshots: ["fig02", "fig22", "fig29"],
    prerequisites: ["你已经知道要查看的是汇总趋势、明细列表还是预测结果。", "Opportunity、Campaign、Owner 等重要字段已经维护。"],
    steps: ["需要看汇总趋势时，从顶部导航进入 Dashboards。", "打开目标 Dashboard，确认日期、Owner、Campaign 或地区筛选条件。", "需要查明细记录时，从 Dashboard 或 Campaign 中打开 View Report，或直接进入 Reports。", "在 Report 中检查字段、筛选条件和记录数量。", "需要看销售预测时，从顶部导航进入 Forecasts。", "对照 Forecasts 中的预测结果，回到 Opportunities 检查 Stage、金额、Close Date 和 Owner。"],
    verify: ["Dashboard 显示的是正确时间和业务范围。", "Report 明细能解释 Dashboard 中的数字。", "Forecasts 与 Opportunity 阶段、金额、预计成交日期一致。"],
    tips: ["Dashboard 看结果，Report 查明细，Forecasts 看预测。", "数字不一致时，优先检查筛选条件和 Opportunity 字段。"],
  },
  {
    id: "shokz-quote-product",
    category: "工具",
    title: "使用 Shokz Quote 和 Shokz Product",
    summary: "在自定义对象里维护报价与产品信息，并和对应客户或商机放在一起。",
    screenshots: ["fig37"],
    prerequisites: ["你已经确认客户、Account 或 Opportunity。", "需要记录报价或产品信息，而不只是写在备注里。"],
    steps: ["从顶部导航进入 Shokz Quote 或 Shokz Product。", "新建记录前，先搜索是否已有相同报价或产品记录。", "创建 Shokz Quote 时，填写与客户、商机、金额、有效期或报价内容相关的字段。", "创建 Shokz Product 时，填写产品名称、型号、SKU 或业务需要的产品字段。", "如果页面提供相关对象字段，把 Quote / Product 关联到正确客户、Account 或 Opportunity。", "保存后，回到相关客户或商机记录检查关联是否可见。"],
    verify: ["报价或产品记录能被搜索到。", "记录与正确客户、Account 或 Opportunity 关联。", "重要信息没有只停留在个人备注或邮件里。"],
    tips: ["报价和产品对象的价值在于把信息按字段存好。字段越完整，后续报表和交接越稳。", "不确定字段口径时，先参考团队已有记录的填写方式。"],
  },
  {
    id: "sales-data-audit-export",
    category: "工具",
    title: "找到 Sales Data Audit Export 入口",
    summary: "Sales App 的 More 菜单里可以看到 Sales Data Audit Export，用于数据审计或导出相关工作。",
    screenshots: ["fig04", "fig05"],
    prerequisites: ["你有使用该工具的业务理由和相应权限。", "你已经确认导出内容不会包含不该外发的数据。"],
    steps: ["在 Sales App 顶部导航点击 More。", "在展开菜单中找到 Sales Data Audit Export。", "进入工具前，确认本次审计或导出要覆盖的对象、时间范围和 Owner。", "如果页面要求选择范围，只选择本次任务需要的数据。", "导出后按照公司数据管理要求保存、分享或删除文件。"],
    verify: ["入口位于 More 菜单中。", "导出范围与业务任务一致。", "导出文件没有被随意分享给无关人员。"],
    tips: ["数据导出属于敏感操作，导出前要明确目的和范围。", "如果权限不足或不确定口径，先联系管理员或业务负责人。"],
  },
  {
    id: "utility-bar-notes-history-todo",
    category: "工具",
    title: "使用底部 Notes、History 和 To Do List",
    summary: "Salesforce 页面底部有 Notes、History、To Do List，可以用来临时记录、回到最近页面和查看待办。",
    screenshots: ["fig25"],
    prerequisites: ["你正在 Salesforce 页面中工作。", "底部 Utility Bar 能看到 Notes、History 或 To Do List。"],
    steps: ["需要临时记录客户沟通要点时，打开 Notes。", "记录后尽量回到对应 Lead、Contact、Account 或 Opportunity，补成正式 Activity 或 Task。", "需要回到刚才浏览过的记录时，打开 History。", "需要查看或处理待办时，打开 To Do List。", "处理完待办后，回到相关记录确认下一步动作和 Activity 已更新。"],
    verify: ["临时 Notes 已被整理到正式客户记录。", "History 能帮助快速回到最近对象。", "To Do List 中的重要任务有明确截止时间和相关记录。"],
    tips: ["Notes 适合临时捕捉，不应替代 Activity、Task 或字段更新。", "To Do List 好不好用，取决于下一步动作写得是否清楚。"],
  },
  {
    id: "data-review-loop",
    category: "复盘",
    title: "从 Campaign 复盘展会投入到成交结果",
    summary: "把 Leads / Contacts、回复、样品、Opportunity 和成交结果放回同一个 Campaign 视角。",
    screenshots: ["fig01", "fig22", "fig37"],
    prerequisites: ["Campaign 已导入成员并计算结果。", "Opportunity 已关联 Campaign。"],
    steps: ["进入目标 Campaign。", "确认 Campaign Results 已计算并刷新看板。", "查看 Leads / Contacts 数量、回复情况、新老客户构成。", "检查样品发放和客户确认情况。", "查看关联 Opportunities 的生成、阶段和成交情况。", "对照 Contact Roles、Partners 和客户关系字段，解释商机来源和推进状态。", "记录复盘结论和后续动作。"],
    verify: ["Campaign 页面能汇总展会投入、客户互动、样品和商机结果。", "报表中的 Campaign 与 Opportunity 能对上。"],
    tips: ["Opportunity 必须关联正确 Campaign。", "如果报表只看到商机数量但无法解释客户关系，检查 Contact Roles 和 Partners 是否维护。"],
  },
];

const objects = [
  ["Campaign", "一次展会或营销活动", "管理参与者、导入、结果和关联商机", "orange"],
  ["Lead", "尚未完成资格确认的潜在客户", "首次收集、邮件培育和判断转化时机", "blue"],
  ["Contact", "已确认身份的联系人", "持续跟进、送样和维护客户关系", "teal"],
  ["Account", "联系人所属公司或客户主体", "汇总联系人、商机和客户活动", "green"],
  ["Sample Request", "一次正式送样申请", "提交内部申请、记录配送并通知客户", "rose"],
  ["Opportunity", "可推进和预测的销售机会", "管理阶段、金额、关系和成交结果", "amber"],
  ["Dashboard", "汇总看板", "查看销售趋势、Campaign 结果和管理层指标", "blue"],
  ["Report", "明细报表", "钻取看板数字背后的明细记录和筛选条件", "teal"],
  ["Forecast", "销售预测视图", "结合 Opportunity 阶段、金额和预计成交日期查看预测", "green"],
  ["List Email", "列表邮件记录", "追踪批量邮件发送、范围和后续客户互动", "orange"],
  ["Shokz Quote", "自定义报价记录", "记录客户或商机相关的报价信息", "amber"],
  ["Shokz Product", "自定义产品记录", "维护产品、型号或 SKU 相关信息", "rose"],
  ["Sales Data Audit Export", "数据审计导出工具", "按权限和业务目的导出审计所需数据", "blue"],
];

const rules = [
  {
    title: "Lead Status 自动推进",
    summary: "New、Initial contact、Engaged、Converted 构成 Lead 的主状态流。",
    bullets: ["Campaign 列表邮件成功后，符合条件的 Lead 进入 Initial contact。", "客户非自动回复后，New 或 Initial contact 进入 Engaged。", "Engaged 和 Converted 不会被降级。"],
  },
  {
    title: "样品记录自动生成",
    summary: "导入模板中的样品数量字段会触发 Sample 记录。",
    bullets: ["Number of OpenComm2 sent 和 OpenMeet sent 必须清洗为有效正数。", "导入为 Campaign Member 后，系统创建对应 Lead Sample 或 Contact Sample。"],
  },
  {
    title: "Campaign Results 计算",
    summary: "导入后需要手动运行计算，才能刷新结果记录和看板。",
    bullets: ["单击 Calculate Campaign Results 重新生成 Campaign Result。", "Dashboard 1/2 可能需要刷新嵌入式看板。"],
  },
  {
    title: "送样申请状态按钮",
    summary: "Contact Sample Request 的按钮随状态展示或隐藏。",
    bullets: ["Draft 可 Confirm Request。", "Request Sent 后显示 Email Confirmation (Ext.)。", "Samples Sent 后按钮隐藏；要修改可先回退状态。"],
  },
  {
    title: "Opportunity 阶段提醒",
    summary: "系统按阶段停留时间给 Owner 发送跟进提醒。",
    bullets: ["Demo 超过 14 天提醒。", "Quotation 超过 7 天提醒。", "Won 进入超过 60 天后，按 60 天周期提醒。", "任务在每周一、周五 09:00 中国标准时间运行。"],
  },
  {
    title: "Key Account 无活动提醒",
    summary: "Rating 为 A 的重点客户需要保持有效互动。",
    bullets: ["Account 及其 Contacts 最近 30 天无已完成 Task、Email 或 Event 时触发。", "系统周一和周五提醒 Owner，并确认存在待处理跟进任务。"],
  },
];

const faqs = [
  ["找不到某条记录", "先使用全局搜索；再确认对象和列表视图；检查筛选条件是否限制了 Owner、地区或状态；最后确认自己是否有访问权限。"],
  ["全局搜索和 Search this list 有什么区别", "全局搜索会跨对象查找记录；Search this list 只在当前对象的当前 List View 里搜索。找客户或公司先用全局搜索，清理当前列表才用 Search this list。"],
  ["列表中的记录数量不对", "确认当前视图名称、筛选条件和显示范围。个人视图可能与团队公共视图不同。"],
  ["顶部导航找不到某个入口", "先检查 More 菜单；仍找不到时用 App Launcher 或全局搜索对象名称。常用入口可以用 Edit nav items 调整到导航栏。"],
  ["Dashboard 数字和 Report 明细对不上", "先确认二者的筛选条件、日期范围、Owner、Campaign 和记录类型是否一致。Dashboard 是汇总层，Report 是明细层。"],
  ["Campaign 看板没有显示最新结果", "先运行 Calculate Campaign Results；确认 Campaign Result 已生成；刷新 Salesforce 页面及嵌入式看板。"],
  ["Lead 状态没有自动变化", "确认列表邮件已成功发送且关联 Campaign。客户回复必须被邮件同步服务识别；自动回复不会把 Lead 更新为 Engaged。"],
  ["送样按钮不见了", "按钮会根据 Status 显示。需要修改时，将 Status 调回上一个阶段后再检查按钮。"],
  ["没有收到商机或 Key Account 提醒", "确认自己是记录 Owner、邮箱有效、记录满足提醒条件，并检查垃圾邮件。提醒适用范围由管理员配置。"],
  ["什么时候使用 Sales Data Audit Export", "只有在有明确审计或导出任务、并确认权限和数据范围时使用。导出前先确认对象、日期、Owner 和分享范围。"],
  ["报表中的 Campaign 和 Opportunity 对不上", "检查 Opportunity 是否关联正确的 Campaign，并确认 Contact Roles、Partners 和客户关系字段已维护。"],
];

const glossary = [
  ["Object", "对象", "一类业务数据，例如 Lead、Contact 或 Opportunity"],
  ["Record", "记录", "某一个具体客户、联系人、展会或商机"],
  ["Field", "字段", "记录中的一项信息，例如 Email、Status 或 Owner"],
  ["Owner", "所有者 / 责任人", "负责跟进该记录的 Salesforce 用户"],
  ["List View", "列表视图", "按筛选条件显示一组记录"],
  ["Related List", "相关列表", "显示与当前记录关联的其他记录"],
  ["Activity", "活动", "邮件、Task、Event 等客户互动记录"],
  ["Task", "任务", "需要执行的跟进行动及到期日"],
  ["Stage", "阶段", "Opportunity 当前所处的销售阶段"],
  ["Status", "状态", "Lead 或 Sample Request 当前所处状态"],
  ["Campaign Member", "Campaign 成员", "参与该 Campaign 的 Lead 或 Contact"],
  ["Dashboard", "看板", "由多个图表或指标组成的汇总页面"],
  ["Report", "报表", "可筛选、分组和导出的明细记录明细"],
  ["Forecast", "预测", "基于商机金额、阶段和预计成交日期形成的销售预测"],
  ["List Email", "列表邮件", "面向多个 Lead 或 Contact 发送并能追溯的邮件记录"],
  ["Global Search", "全局搜索", "跨对象查找客户、公司、商机或其他记录"],
  ["Utility Bar", "底部工具栏", "页面底部的 Notes、History、To Do List 等快捷工具"],
];

const state = {
  category: "全部",
  helpCategory: "全部",
  selectedArticle: new URLSearchParams(window.location.search).get("article") || "daily-rhythm",
  selectedWorkflow: "campaign",
};

const els = {
  workflowGrid: document.querySelector("#workflowGrid"),
  workflowDetail: document.querySelector("#workflowDetail"),
  helpFilterbar: document.querySelector("#helpFilterbar"),
  helpArticleList: document.querySelector("#helpArticleList"),
  helpArticleDetail: document.querySelector("#helpArticleDetail"),
  helpCount: document.querySelector("#helpCount"),
  filterbar: document.querySelector("#filterbar"),
  featureGrid: document.querySelector("#featureGrid"),
  featureCount: document.querySelector("#featureCount"),
  objectGrid: document.querySelector("#objectGrid"),
  rulesGrid: document.querySelector("#rulesGrid"),
  faqList: document.querySelector("#faqList"),
  termGrid: document.querySelector("#termGrid"),
  showAllTerms: document.querySelector("#showAllTerms"),
  modal: document.querySelector("#imageModal"),
  modalImage: document.querySelector("#modalImage"),
  modalCaption: document.querySelector("#modalCaption"),
  backTop: document.querySelector("#backTop"),
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function list(items) {
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function tag(text, color = "") {
  return `<span class="tag ${color}">${escapeHtml(text)}</span>`;
}

function screenshotTitle(caption) {
  return caption.replace(/^图\s*\d+：/, "");
}

function screenshotInline(key) {
  const image = screenshots[key];
  if (!image) return "";
  const [src, caption] = image;
  const title = screenshotTitle(caption);
  return `
    <button class="guide-shot guide-inline-shot" type="button" data-image="${key}" aria-label="打开截图：${escapeHtml(title)}">
      <img src="${src}" alt="${escapeHtml(caption)}" />
      <span>
        <strong>界面参考</strong>
        <small>${escapeHtml(title)}</small>
      </span>
    </button>
  `;
}

function screenshotsByStep(screenshotKeys, stepCount) {
  const buckets = Array.from({ length: stepCount }, () => []);
  const shotCount = screenshotKeys.length;
  if (!stepCount || !shotCount) return buckets;

  screenshotKeys.forEach((key, index) => {
    const target = shotCount === 1
      ? Math.min(1, stepCount - 1)
      : Math.min(stepCount - 1, Math.max(0, Math.round(((index + 1) * stepCount) / (shotCount + 1)) - 1));
    buckets[target].push(key);
  });

  return buckets;
}

function renderArticleStepList(article) {
  const screenshotBuckets = screenshotsByStep(article.screenshots, article.steps.length);
  return `
    <ol class="step-list">
      ${article.steps.map((step, index) => `
        <li>
          <span>${index + 1}</span>
          <div class="step-copy">
            <p>${escapeHtml(step)}</p>
            ${screenshotBuckets[index].map(screenshotInline).join("")}
          </div>
        </li>
      `).join("")}
    </ol>
  `;
}

function matchesFeature(feature) {
  return state.category === "全部" || feature.category === state.category;
}

function matchesArticle(article) {
  return state.helpCategory === "全部" || article.category === state.helpCategory;
}

function renderWorkflow() {
  els.workflowGrid.innerHTML = flowSteps
    .map((step, index) => `
      <button class="workflow-card ${state.selectedWorkflow === step.id ? "is-active" : ""}" type="button" data-workflow="${step.id}">
        <span class="step-number">${index + 1}</span>
        <span>
          <strong>${escapeHtml(step.title)}</strong>
          <span>${escapeHtml(step.subtitle)}</span>
        </span>
      </button>
    `)
    .join("");

  const step = flowSteps.find((item) => item.id === state.selectedWorkflow) || flowSteps[0];
  els.workflowDetail.innerHTML = `
    <div>
      <div class="detail-meta">${tag(step.title, step.color)}${tag(step.subtitle)}</div>
      <h3>${escapeHtml(step.title)}：${escapeHtml(step.subtitle)}</h3>
      <p>${escapeHtml(step.summary)}</p>
      <h4>要做的事</h4>
      ${list(step.actions)}
    </div>
    <div class="detail-block">
      <h4>留下的数据</h4>
      ${list(step.outputs)}
    </div>
  `;
}

function renderHelpFilters() {
  els.helpFilterbar.innerHTML = helpCategories
    .map((category) => `<button type="button" class="${state.helpCategory === category ? "is-active" : ""}" data-help-category="${category}">${category}</button>`)
    .join("");
}

function renderHelpArticleDetail(article) {
  if (!article) {
    els.helpArticleDetail.innerHTML = `
      <div class="no-results">当前分类下没有操作指南。请切换分类查看。</div>
    `;
    return;
  }

  els.helpArticleDetail.innerHTML = `
    <div class="article-hero">
      <div>
        <div class="detail-meta">${tag(article.category, "teal")}${tag(`${article.steps.length} 个步骤`)}${tag(`${article.screenshots.length} 张截图`)}</div>
        <h3>${escapeHtml(article.title)}</h3>
        <p>${escapeHtml(article.summary)}</p>
      </div>
    </div>

    <section class="article-section">
      <h4>开始前</h4>
      ${list(article.prerequisites)}
    </section>

    <section class="article-section">
      <h4>操作步骤</h4>
      ${renderArticleStepList(article)}
    </section>

    <section class="article-section">
      <h4>完成后确认</h4>
      ${list(article.verify)}
    </section>

    <section class="article-section">
      <h4>常见卡点</h4>
      ${list(article.tips)}
    </section>
  `;
}

function renderHelpCenter() {
  const filtered = helpArticles.filter(matchesArticle);
  els.helpCount.textContent = `${filtered.length} 篇指南`;
  if (!filtered.length) {
    els.helpArticleList.innerHTML = `<div class="no-results">没有匹配的指南。</div>`;
    renderHelpArticleDetail(null);
    return;
  }

  if (!state.selectedArticle || !filtered.some((article) => article.id === state.selectedArticle)) {
    state.selectedArticle = filtered[0].id;
  }

  const selected = filtered.find((article) => article.id === state.selectedArticle) || filtered[0];
  renderHelpArticleDetail(selected);

  els.helpArticleList.innerHTML = filtered
    .map((article) => `
      <button class="help-card ${selected.id === article.id ? "is-active" : ""}" type="button" data-select-article="${article.id}">
        <span class="help-card-category">${escapeHtml(article.category)}</span>
        <strong>${escapeHtml(article.title)}</strong>
        <span>${escapeHtml(article.summary)}</span>
      </button>
    `)
    .join("");
}

function renderFilters() {
  els.filterbar.innerHTML = categories
    .map((category) => `<button type="button" class="${state.category === category ? "is-active" : ""}" data-category="${category}">${category}</button>`)
    .join("");
}

function renderFeatures() {
  const filtered = capabilities.filter(matchesFeature);
  els.featureCount.textContent = `${filtered.length} 个功能`;
  if (!filtered.length) {
    els.featureGrid.innerHTML = `<div class="no-results">当前分类下没有功能。请切换分类查看。</div>`;
    return;
  }

  els.featureGrid.innerHTML = filtered
    .map((feature) => {
      const [src, caption] = screenshots[feature.screenshot];
      const previewTitle = caption.replace(/^图\s*\d+：/, "");
      return `
        <article class="capability-card ${feature.accent}">
          <div class="capability-top">
            <span class="capability-icon ${feature.accent}"><i data-lucide="${feature.icon}" aria-hidden="true"></i></span>
            ${tag(feature.category, feature.accent)}
          </div>
          <h3>${escapeHtml(feature.title)}</h3>
          <div class="capability-story">
            <p>${escapeHtml(feature.summary)}</p>
            <button class="capability-inline-shot" type="button" data-image="${feature.screenshot}" aria-label="打开截图：${escapeHtml(previewTitle)}">
              <img src="${src}" alt="${escapeHtml(caption)}" />
              <span>
                <strong>页面预览</strong>
                <small>${escapeHtml(previewTitle)}</small>
              </span>
            </button>
            <p class="capability-context-line">常用对象和入口：${feature.tags.slice(0, 4).map(escapeHtml).join("、")}</p>
          </div>
          <div class="story-points">${feature.tags.slice(0, 4).map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
          <div class="capability-actions">
            <span>${feature.articleIds.length} 篇相关指南</span>
            <a href="capabilities/${feature.id}.html">打开功能页</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderObjects() {
  els.objectGrid.innerHTML = objects
    .map(([name, meaning, usage, color]) => `
      <article class="object-card">
        <div class="object-top">
          <strong>${escapeHtml(name)}</strong>
          ${tag(color === "rose" ? "送样" : name, color)}
        </div>
        <p>${escapeHtml(meaning)}</p>
        <div class="detail-block">
          <h4>什么时候用</h4>
          <p>${escapeHtml(usage)}</p>
        </div>
      </article>
    `)
    .join("");
}

function renderRules() {
  els.rulesGrid.innerHTML = rules
    .map((rule) => `
      <article class="rule-card">
        <h3>${escapeHtml(rule.title)}</h3>
        <p>${escapeHtml(rule.summary)}</p>
        ${list(rule.bullets)}
      </article>
    `)
    .join("");
}

function renderFaqs() {
  els.faqList.innerHTML = faqs
    .map(([question, answer], index) => `
      <article class="faq-item ${index === 0 ? "is-open" : ""}">
        <button type="button" aria-expanded="${index === 0 ? "true" : "false"}">
          <span>${escapeHtml(question)}</span>
          <i data-lucide="chevron-down" aria-hidden="true"></i>
        </button>
        <div class="answer">${escapeHtml(answer)}</div>
      </article>
    `)
    .join("");
}

function renderTerms(limit = 9) {
  const items = limit ? glossary.slice(0, limit) : glossary;
  els.termGrid.innerHTML = items
    .map(([en, zh, meaning]) => `
      <article class="term-card">
        <strong>${escapeHtml(en)}</strong>
        <p>${escapeHtml(zh)}：${escapeHtml(meaning)}</p>
      </article>
    `)
    .join("");
}

function openImage(key) {
  const image = screenshots[key];
  if (!image) return;
  els.modalImage.src = image[0];
  els.modalImage.alt = image[1];
  els.modalCaption.textContent = image[1];
  els.modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeImage() {
  els.modal.hidden = true;
  els.modalImage.removeAttribute("src");
  document.body.style.overflow = "";
}

function updateSidebarActive() {
  const links = [...document.querySelectorAll(".sidebar a")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const current = sections
    .filter((section) => section.getBoundingClientRect().top < 180)
    .pop();
  links.forEach((link) => {
    link.classList.toggle("active", current && link.getAttribute("href") === `#${current.id}`);
  });
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function renderAll() {
  renderWorkflow();
  renderHelpFilters();
  renderHelpCenter();
  renderFilters();
  renderFeatures();
  renderObjects();
  renderRules();
  renderFaqs();
  renderTerms();
  refreshIcons();
}

els.workflowGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-workflow]");
  if (!button) return;
  state.selectedWorkflow = button.dataset.workflow;
  renderWorkflow();
});

els.helpFilterbar.addEventListener("click", (event) => {
  const button = event.target.closest("[data-help-category]");
  if (!button) return;
  state.helpCategory = button.dataset.helpCategory;
  renderHelpFilters();
  renderHelpCenter();
  refreshIcons();
});

els.filterbar.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderFilters();
  renderFeatures();
  refreshIcons();
});

document.addEventListener("click", (event) => {
  const imageButton = event.target.closest("[data-image]");
  if (imageButton) {
    openImage(imageButton.dataset.image);
    return;
  }

  const jumpArticleButton = event.target.closest("[data-jump-article]");
  if (jumpArticleButton) {
    const article = helpArticles.find((item) => item.id === jumpArticleButton.dataset.jumpArticle);
    if (!article) return;
    state.category = "全部";
    state.helpCategory = "全部";
    state.selectedArticle = article.id;
    renderFilters();
    renderFeatures();
    renderHelpFilters();
    renderHelpCenter();
    renderTerms();
    refreshIcons();
    document.querySelector("#help").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const articleButton = event.target.closest("[data-select-article]");
  if (articleButton) {
    state.selectedArticle = articleButton.dataset.selectArticle;
    renderHelpCenter();
    refreshIcons();
    document.querySelector("#helpArticleDetail").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const faqButton = event.target.closest(".faq-item button");
  if (faqButton) {
    const item = faqButton.closest(".faq-item");
    const open = item.classList.toggle("is-open");
    faqButton.setAttribute("aria-expanded", String(open));
  }
});

els.showAllTerms.addEventListener("click", () => {
  renderTerms(0);
});

els.modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) {
    closeImage();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !els.modal.hidden) {
    closeImage();
  }
});

els.backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  els.backTop.classList.toggle("is-visible", window.scrollY > 640);
  updateSidebarActive();
}, { passive: true });

renderAll();
updateSidebarActive();
