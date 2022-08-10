# @byodian/eslit-config

```
npm install --save-dev @byodian/eslint-config eslint
```
`.eslintrc.js` 的 `extends` 字段设置
```
extends: {
  "@byodian/eslint-config"
}
```

注：本项目参考了 antfu 的开源项目 [eslint-config](https://github.com/antfu/eslint-config)

## 使用 eslint 配置文件

这里是一些有关 eslint 配置文件的笔记。

### overrides

使用关键字 `overrides` 为特定的文件添加规则，在同一个配置文件下，这些规则比常规的配置有更高的优先级。

参考 [Configuration Based on Glob Patterns](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#configuration-based-on-glob-patterns)

在 `.eslintrc.js` 文件中

```js
module.exports = {
  overrides: [
    {
      files: ['*spec.js'],
      rules: {
        quotes: ['error', 'single'],
      },
    },
    {
      files: ['**/*.md/*.*'],
      rules: {
        'import/no-unresolved': 'off',
      },
    },
  ],
}
```

### reportUnusedDisableDirectivesue

使用 `reportUnusedDisableDirectivesue` 设置，可提示有未使用的 `eslint-disable` 注释。参考 [Report unused eslint-disable comments](https://eslint.org/docs/latest/user-guide/configuring/rules#report-unused-eslint-disable-comments)

在 `.eslintrc.js` 文件中

```js
module.exports = {
  reportUnusedDisableDirectivesue: true,
}
```

### settings

在配置文件中添加 `settings`
对象，可以在每个被执行的规则中共享设置的信息。参考 [Adding Shared Settings](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#adding-shared-settings)

```js
module.exports = {
  settings: {
    'import/resolver': foo,
  },
}
```

**eslint-plugin-import**

顺便一提 [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import) 插件的 [resolvers](https://github.com/import-js/eslint-plugin-import#resolvers) 

Resolvers 可以将你的文件解析为模块，它可以解决 `import x from 'module'` ES6 模块无法被找到的问题。导致模块未找到的原因可能是现代的打包工具支持多种导入模块的语法，比如模块路径使用别名。

eslint-plugin-import 默认将 `.js` 文件作为模块解析，如果你使用 typescript (在没有`plugin:import/typescript` 插件配置的情况下)，你必须在 `settings` 中指定新的文件扩展。


```js
module.exports = {
  settings: {
    'import/extensions': ['.js', 'ts'],
  },
}

```

如果要求更加精细的控制，你可以在配置文件中添加共享设置 `import/resolver`，并指定作为模块解析的文件扩展列表，参考 [import/extensions](https://github.com/import-js/eslint-plugin-import#importextensions)。

```js
module.exports = {
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', 'ts', 'tsx', '.mjs'] },
    },
  },
}
```
