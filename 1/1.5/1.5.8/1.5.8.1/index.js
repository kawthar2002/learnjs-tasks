let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let messagesRead = new WeakSet();

messagesRead.add(messages[0]);
messagesRead.add(messages[1]);
messagesRead.add(messages[2]);

alert(messagesRead.has(messages[0]));
