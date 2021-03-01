<template>
  <section>
    <input type="text" v-model="typedMessage" />
    <button v-html="`Enviar mensagem`" @click.prevent="sendMessage(typedMessage)" />
  </section>
</template>

<script>
export default {
  data: () => ({
    typedMessage: ""
  }),
  methods: {
    sendMessage(message) {
      this.$emit(`click`, {
        functionName: `setOneMessageInMessagesList`,
        value: this.formatMessage(message)
      });
      this.$nextTick(() => (this.typedMessage = ""));
    },
    formatMessage(message) {
      return {
        date: new Date(),
        from: "Any Person",
        text: message
      };
    }
  }
};
</script>
