<template>
  <div class="about">
    <h1>Layout</h1>
    <s-row class="row-bg">
      <s-col span="4">
        <div class="demo-col" style="backgroundColor:#d4b1b5"></div>
      </s-col>
      <s-col span="4">
        <div class="demo-col" style="backgroundColor:#E3CBA8"></div>
      </s-col>
      <s-col span="4">
        <div class="demo-col" style="backgroundColor:#BF827E"></div>
      </s-col>
      <s-col span="4">
        <div class="demo-col" style="backgroundColor:#f69e9f"></div>
      </s-col>
      <s-col span="4">
        <div class="demo-col" style="backgroundColor:#fce6e6"></div>
      </s-col>
      <s-col span="4">
        <div class="demo-col" style="backgroundColor:#5f4d58"></div>
      </s-col>
    </s-row>
  </div>
</template>
<script>
import { Row, Col } from "@components/index";

export default {
  components: {
    "s-col": Col,
    "s-row": Row
  }
};
</script>

<style lang='scss'>
.demo-col {
  height: 20px;
}
</style>