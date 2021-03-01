const messagesList = [];

export default {
  exibeAllMessages() {
    return messagesList;
  },
  setOneMessageInMessagesList(message) {
    messagesList.push(message);
  }
};
