/** @format */

const { model } = require("mongoose");
const messageSchema = require("../schemas/message");

class Message {
  getAuthor() {
    return this.author;
  }
  getContent() {
    return this.content;
  }
}

messageSchema.loadClass(Message);
module.exports = model("Message", messageSchema);
