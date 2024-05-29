const express = require('express');
const app = express();
const port = 3000;

// Middleware عشان نقدر نقرأ JSON
app.use(express.json());

// بيانات تجريبية
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

// GET /items - تجيب كل العناصر
app.get('/items', (req, res) => {
  res.json(items);
});

// GET /items/:id - تجيب عنصر معين بالـ ID
app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');
  res.json(item);
});

// POST /items - تضيف عنصر جديد
app.post('/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT /items/:id - تحدث عنصر بالـ ID
app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send('Item not found');

  
  item.name = req.body.name;
  res.json(item);
});

// DELETE /items/:id - تمسح عنصر بالـ ID
app.delete('/items/:id', (req, res) => {
  const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
  if (itemIndex === -1) return res.status(404).send('Item not found');

  items.splice(itemIndex, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`API شغالة على http://localhost:${port}`);
});
