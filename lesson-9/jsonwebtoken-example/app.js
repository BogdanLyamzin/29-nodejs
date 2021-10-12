const jwt = require("jsonwebtoken");

const SECRET_KEY = "ggfdfddfgsd";

const payload = {
    id: "61609343fc47f81f9ba35bad"
};

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

const verifyToken = jwt.verify(token, SECRET_KEY);

const wrongToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjA5MzQzZmM0N2Y4MWY5YmEzNWJhZCIsImlhdCI6MTYzNDA2MTUwMiwiZXhwIjoxNjM0MDY1MTAyfQ.yK5m2sjmyuKdWHz3hb6uZOjSYiZ4TOymP60WamdEoEw"
try {
    const verifyToken2 = jwt.verify(wrongToken, SECRET_KEY);
    console.log(verifyToken2)
}
catch(error){
    console.log(error.message)
}
