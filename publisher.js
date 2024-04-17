// publisher.js
const mqtt = require("mqtt");
const client = mqtt.connect("ws://broker.hivemq.com:8000/mqtt");

client.on("connect", function () {
  setInterval(function () {
    const messageObject = {
      time: new Date().toString(),
      message: "Hello MQTT with JSON",
      arr: ["he", "you", "me"],
    };
    const message = JSON.stringify(messageObject);
    client.publish("test/topic", message);
    console.log("Message Sent:", message);
  }, 5000); // Publish every 5 seconds
});

client.on("error", function (error) {
  console.log("MQTT Client Error:", error);
});
