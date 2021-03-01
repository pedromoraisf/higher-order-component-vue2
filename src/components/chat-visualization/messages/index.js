import HoC from "./../shared/higher-order-component";
import ChatMessages from "./Component.vue";

export default HoC({
  component: ChatMessages,
  name: "ChatMessages",
  fetch: data => data.exibeAllMessages()
});
