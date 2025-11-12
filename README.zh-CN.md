[English](./README.md) | [简体中文](./README.zh-CN.md)

# Playwright DemoQA 端到端测试套件

本仓库是《Playwright端到端实战》系列文章的源码。项目目标是为 `demoqa.com` 构建完整的端到端测试套件，每个核心功能模块将在一篇文章中逐步实现。

---

### 系列功能路线图

该列表用于追踪系列文章的进度以及本仓库中已实现的功能。

- [x] **第一部分：登录 / 登出** - 核心认证流程、集成GitHub Actions CI/CD、安全密钥管理。
- [ ] **第二部分：图书商店** - UI与动态数据交互、API Mocking、会话状态管理。
- [ ] **第三部分：个人资料与表单** - 复杂表单处理、文件上传、高级断言。
- [ ] **(计划中) 高级交互** - 拖放、排序等。

---

### 快速上手

**1. 克隆仓库**
```bash
git clone https://github.com/your-username/demoqa-test-suite.git
cd demoqa-test-suite
```

**2. 安装依赖**
```bash
# 安装与 lock 文件一致的依赖
npm ci
```

### 运行测试

**1. 提供凭证**
你必须通过环境变量提供测试用户 `eliBug` 的密码。

**2. 执行测试**
```bash
# macOS / Linux
DEMOQA_PASSWORD="你的密码" npx playwright test

# Windows (命令提示符)
set DEMOQA_PASSWORD="你的密码"&& npx playwright test
```

**3. 查看报告**
```bash
npx playwright show-report
```

### CI/CD
GitHub Actions 工作流需要一个名为 `DEMOQA_PASSWORD` 的仓库密钥才能成功运行。

---

### 联系我

让我们一起学习，共同进步。

![微信公众号二维码](qrcode.png)
