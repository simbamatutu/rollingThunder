require('dotenv').config();
const mongo = require('mongodb');
const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://godwin:alpha2delta@fcc.wcfbn.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });


const personSchema= mongoose.Schema(
  {
    name:{
      type:String,
      require:true
    },
    age:{
      type: Number

    },
    favoriteFoods:{
      type:[String]
    }
  }
);
const Person = mongoose.model('Person', personSchema);
const createAndSavePerson = (done) => {
  const person= new Person(
    { name:'Morgan',
      age:32,
      favoriteFoods:['fish','catfish']
    }
  );

  //Create one Records with model.create()
 person.save(function(err, data) {
  if(err){
    return done(err)}else{
      return   done(null , data);
    }
  
  
});

};

const createManyPeople = (arrayOfPeople, done) => {
  //Create Many Records with model.create()
  Person.create(arrayOfPeople, (err, data) => {
 if(err) {
   done(err); 
     }
   done(null, data);
  }) 
};

const findPeopleByName = (personName, done) => {
  Person.find({name:personName},(err,data)=>{
    if(err) {
   done(err); 
     }
   done(null, data);
  })

 
};

const findOneByFood = (food, done) => {
 Person.findOne({favoriteFoods:food},(err,data)=>{
    if(err) {
   done(err); 
     }
   done(null, data);
  })
};

const findPersonById = (personId, done) => {
  Person.findOne({_id:personId},(err,data)=>{
    
    if(err) {
   done(err); 
     }
   done(null, data);
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = 'hamburger';

  // .findById() method to find a person by _id with the parameter personId as search key. 
  Person.findById(personId, (err, person) => {
    if(err) return console.log(err); 
   
    person.favoriteFoods.push(foodToAdd);
 
    person.save((err, updatedPerson) => {
      if(err) return console.log(err);
      done(null, updatedPerson)
    })
  })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate({name: personName}, {age: ageToSet}, {new: true}, (err, updatedDoc) => {
    if(err) return console.log(err);
    done(null, updatedDoc);
  })
};

const removeById = function(personId, done) {
  Person.findByIdAndRemove(
    personId,
    (err, removedDoc) => {
      if(err) return console.log(err);
      done(null, removedDoc);
    }
  ); 
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, (err, response) => {
    if(err) return console.log(err);
    done(null, response);
  })
};

var queryChain = function(done) {
  var foodToSearch = "burrito";
  Person.find({favoriteFoods:foodToSearch}).sort({name : "asc"}).limit(2).select("-age").exec((err, data) => {
     if(err)
       done(err);
    done(null, data);
  })
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
