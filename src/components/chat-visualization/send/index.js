import HoC from "../shared/higher-order-component";
import SendMessage from "./Component.vue";

export default HoC({
  component: SendMessage,
  name: "SendMessage",
  fetch: () => ({})
});
