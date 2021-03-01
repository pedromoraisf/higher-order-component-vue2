<template>
  <div>
    <chat-messages />
    <send-message @click="actionInChatEventHappen" />
  </div>
</template>

<script>
import ChatMessages from "@/components/chat-visualization/messages";
import SendMessage from "@/components/chat-visualization/send";

import chatConversationPresentation from "@/presentation/chat-conversation";

export default {
  components: {
    ChatMessages,
    SendMessage
  },
  methods: {
    actionInChatEventHappen(payload) {
      const setFunction = chatConversationPresentation[payload.functionName];
      setFunction(payload.value);
    }
  }
};
</script>
