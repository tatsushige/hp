---
title: "[Next.js & Tailwind CSS] 動的にCSSを変える"
date: "2022-02-14"
---

### classnames をインストールする
```
$ npm install classnames
```

```jsx
<nav>
  <a
    className={cn(styles.tab, {
      [styles["tab-active"]]: 条件式,
    })}
  ></a>
</nav>
```

### Transition

```css
.tab {
  text-decoration: none;
  color: white;
}

.tab-active {
  color: black;
}
```
