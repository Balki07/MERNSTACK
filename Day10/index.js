const express = require("express");
const app = express();

app.use(express.json());
let products = [
  { id: 1, name: "Mobile", price: 10000 },
  { id: 2, name: "Laptop", price: 50000 }
];

app.get("/", (req, res) => {
  res.send("Connected Successfully");
});
app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  res.send(product);
});

app.post("/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };

  products.push(newProduct);

  res.status(201).send("Product added successfully");
});

app.put("/products/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  product.name = req.body.name;
  product.price = req.body.price;

  res.send("Product updated successfully");
});

app.delete("/products/:id", (req, res) => {
  const index = products.findIndex(p => p.id == req.params.id);

  if (index === -1) {
    return res.status(404).send("Product not found");
  }

  products.splice(index, 1);

  res.send("Product deleted successfully");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
app.use((req, res) => {
  res.status(404).send("Route Not Found");
});