const mongoose = require('mogoose');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParse: true,
    useUnifiedTopology: true
});