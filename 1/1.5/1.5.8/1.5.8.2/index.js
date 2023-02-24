let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let messagesRead = new WeakMap();

messagesRead.set(messages[1], new Date());
messagesRead.set(messages[2], new Date());
messagesRead.set(messages[0], new Date());
