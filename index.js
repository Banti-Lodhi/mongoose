const mongoose = require('mongoose');

main()
.then(() => {
  console.log("Connection Successful");
})
.catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/system");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});
const Systematic = mogoose.model("Systematic", userSchema);

// const systematic1 = new Systematic({
//   name: "Preetam Singh", 
//   email: "psm123@gmail.com",
//   age: 45,
// });

// systematic1.save()
// .then((res) => {
//   console.log(res);
// })
// .catch(
//   (err) => console.log(err)
// );


// Insert Many file Data
// Systematic.insertMany([
//   {name: "Tony", email: "tony@gmail.com", age:17},
//   {name: "Tony2", email: "tony2@gmail.com", age: 18},
//   {name: "Tony3", email: "tony3@gmail.com", age: 19},
//   {name: "Tony4", email: "tony4@gmail.com", age: 20}
// ]).then((data) => {
//   console.log(data);
// })
// .catch((err) => console.log(err));

// Find One 
// Systematic.find().then((res) => {
//   console.log(res);
// })
// .catch((err) => console.log(err));

// Systematic.findOne({age: {$gte: 20}})
// .then((data) => {
//   console.log(data);
// }).catch((err) => console.log(err));


// Update Method 
// Systematic.updateOne({name: "Preetam Singh"}, {age: 34})
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => console.log(err));

Systematic.updateMany({age: {$gt: 15}}, {age: 45})
.then((res) => {
  console.log(res);
})
.catch((err) => console.log(err));
