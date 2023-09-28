const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017/users';

async function checkMongoDBConnection() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    const db = client.db(); // Get the database object

    // Example: Query a document from the 'student' collection
    const student = await db.collection('student').find({}).toArray();

    if (student) {
      console.log('Connected to MongoDB');
      console.log('Student:', student);
    } else {
      console.log('No student found');
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  } finally {
    await client.close();
  }
}

module.exports =

checkMongoDBConnection();
