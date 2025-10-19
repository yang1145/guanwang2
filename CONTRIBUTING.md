# 贡献指南

感谢您有兴趣为 TechCorp 企业官网项目做贡献！

## 开发环境设置

1. 确保您已安装 Node.js (版本 >= 16.0.0)
2. Fork 项目仓库
3. 克隆您的 Fork:
   ```bash
   git clone https://github.com/your-username/techcorp-website.git
   ```
4. 安装依赖:
   ```bash
   cd techcorp-website
   npm install
   ```
5. 启动开发服务器:
   ```bash
   npm run dev
   ```

## 代码规范

### Git 提交信息

我们使用约定式提交格式，请遵循以下规则：

- `feat:` 新功能
- `fix:` 修复 bug
- `chore:` 构建过程或辅助工具的变动
- `docs:` 文档更新
- `style:` 代码格式调整（不影响代码运行的变动）
- `refactor:` 重构（即不是新增功能，也不是修改 bug 的代码变动）
- `perf:` 性能优化
- `test:` 增加测试

示例：
```
feat: 添加产品详情页面
fix: 修复联系表单提交问题
docs: 更新 README 文档
```

### 代码风格

- 使用 ESLint 检查 JavaScript 和 Vue 文件
- 使用 Prettier 格式化代码
- 遵循项目中已有的代码风格

运行代码检查：
```bash
npm run lint
```

自动修复代码问题：
```bash
npm run lint:fix
```

格式化代码：
```bash
npm run format
```

## 目录结构

```
src/
├── assets/           # 静态资源文件
├── components/       # 可复用的组件
├── router/           # 路由配置
├── views/            # 页面组件
├── App.vue           # 根组件
├── main.js           # 入口文件
└── style.css         # 全局样式
```

## Pull Request 流程

1. Fork 项目并创建您的分支 (`git checkout -b feature/amazing-feature`)
2. 提交您的更改 (`git commit -m 'feat: add some amazing feature'`)
3. 推送到分支 (`git push origin feature/amazing-feature`)
4. 开启 Pull Request

## 报告 Bug

如果您发现 bug，请在 GitHub 上创建一个 Issue，包含以下信息：

1. 问题的清晰描述
2. 重现步骤
3. 预期行为
4. 实际行为
5. 浏览器和操作系统信息
6. 屏幕截图（如果适用）

## 建议新功能

我们欢迎新功能建议！请在 GitHub 上创建一个 Issue，描述：

1. 您想要的功能
2. 为什么您认为这个功能有用
3. 可能的实现方式（如果有的话）

## 许可证

通过贡献此项目，您同意您的贡献将根据 MIT 许可证进行许可。