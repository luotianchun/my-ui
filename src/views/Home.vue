<template>
  <div class="home">
    <Button :loading="true" type="primary" @click="showDialog">快来点我</Button>
    <Button icon="heart" type="info" @click="showModal">来个对话框</Button>
  </div>
</template>

<script>
import { Button } from "@components/index";
import ModalPlugin from "@components/plugins/modal";
import Vue from "vue";

export default {
  name: "Home",
  components: {
    Button
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      Vue.use(ModalPlugin); // 使用modal插件
    },
    showDialog() {
      this.$toast({
        message: "报名成功",
        duration: 1500,
        type: "success"
      });
    },
    showModal() {
      let func1 = () => {
        this.$toast({
          message: "报名成功",
          duration: 1500,
          type: "success"
        });
      };
      let func2 = () => {
        this.$toast({
          message: "期待你下次再来",
          duration: 1500
        });
      };
      let func3 = () => {
        this.$toast({
          message: "你为什么啥都没点就跑了",
          duration: 2500,
          type: "error"
        });
      };
      this.$modal({
        title: "一个来自朋友的邀请",
        content: "今天晚上去大学城吗",
        btnConfig: {
          confirmText: "确认",
          confirmCallback: func1,
          cancelText: "取消",
          cancelCallback: func2,
          cancelModalCallback: func3
        }
      });
    }
  }
};
</script>
