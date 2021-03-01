import Vue from "vue";
import chatConversationPresentation from "@/presentation/chat-conversation";

const HoC = ({ component, name, fetch }) => {
  return Vue.component(name, {
    render(createElement) {
      return createElement(component, {
        props: {
          receivedData: this.receivedData
        },
        methods: fetch(chatConversationPresentation),
        on: { ...this.$listeners }
      });
    },
    data: () => ({
      receivedData: fetch(chatConversationPresentation)
    })
  });
};

export default HoC;
