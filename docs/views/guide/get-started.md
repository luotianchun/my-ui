---
title: "快速上手"
---

# 快速上手

```vue
<template>
  <div id="app">
    <l-button type="primary">点击报名</l-button>
  </div>
</template>

<script>
import { Button } from "ltc-ui";
import "ltc-ui/dist/sakura.css";

export default {
  name: "app",
  components: {
    "s-button": Button,
  },
};
</script>
```

<ClientOnly>
  <sakura-img/>
</ClientOnly>
