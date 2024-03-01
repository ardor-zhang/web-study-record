import type { DefaultTheme } from 'vitepress';

export const nav: DefaultTheme.Config['nav'] = [
  { text: '起源', link: '/fate/' },
  { text: 'Git', link: '/git/' },
  { text: '包管理器', link: '/package-manager/' },
  { text: 'Linter', link: '/linter/' },
];

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/fate/': [
    {
      text: '缘起',
      items: [
        { text: '一切的起点', link: '/fate/' },
        { text: '查看目录', link: '/fate/catalog' },
      ],
    },
  ],
  '/git/': [
    {
      text: 'Git',
      collapsed: true,
      link: '/git/',
      items: [
        {
          text: 'git 基础',
          items: [
            { text: '01-起步', link: '/git/pro-git/01-起步.md' },
            { text: '02-git基础', link: '/git/pro-git/02-git基础.md' },
            { text: '03-git分支', link: '/git/pro-git/03-git分支.md' },
            { text: '04-git配置', link: '/git/pro-git/04-git配置.md' },
            { text: '05-git常用命令汇总', link: '/git/pro-git/05-git常用命令汇总.md' },
          ],
        },
        {
          text: '常见问题',
          items: [
            { text: 'git fetch 和 git pull 的区别', link: '/git/faq/fetch-pull-diff.md' },
            { text: 'git reset 和 git revert 的区别', link: '/git/faq/reset-revert-diff.md' },
            { text: 'git submodule', link: '/git/faq/git-submodule.md' },
          ],
        },
      ],
    },
  ],
  '/linter/': [
    {
      text: 'Linter',
      link: '/linter/',
    },
    {
      text: 'ESLint',
      items: [
        {
          text: 'ESLint 简述',
          link: '/linter/eslint/index.md',
        },
        {
          text: 'ESLint 使用',
          link: '/linter/eslint/use.md',
        },
      ],
      // collapsed: true,
    },
    {
      text: 'StyleLint',
      items: [
        {
          text: 'StyleLint 简述',
          link: '/linter/stylelint/index.md',
        },
        {
          text: 'StyleLint 使用',
          link: '/linter/stylelint/use.md',
        },
      ],
      // collapsed: true,
    },
    {
      text: 'Prettier',
      items: [
        {
          text: 'Prettier 简述',
          link: '/linter/prettier/index.md',
        },
        {
          text: 'Prettier 使用',
          link: '/linter/prettier/use.md',
        },
      ],
      // collapsed: true,
    },
    {
      text: 'TSLint',
      items: [
        {
          text: 'TSLint 简述',
          link: '/linter/tslint/index.md',
        },
      ],
    },
    {
      text: 'Commitlint',
      items: [
        {
          text: 'Commitlint 简述',
          link: '/linter/commitlint/index.md',
        },
      ],
    },
    {
      text: 'husky',
      items: [
        {
          text: 'husky 简述',
          link: '/linter/husky/index.md',
        },
      ],
    },
  ],
  '/project-config/': [
    {
      text: '搭建一个项目需要做的事情',
      items: [
        {
          text: 'Configuring Vite',
          link: '/project-config/',
        },
      ],
    },
  ],
};
