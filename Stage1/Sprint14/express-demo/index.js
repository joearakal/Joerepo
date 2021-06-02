const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json());

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

const courses = [
    { id: 1, name: "course1" },
    { id: 2, name: "course2" },
    { id: 3, name: "course3" },
]

app.get("/", (req, res) => {
    res.send("Hello World !!!");
});
app.get("/api/courses", (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    //    res.send(req.params);
    //    res.send(req.query);
    
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course does not exist");
    
    res.send(course);
});

app.post("/api/courses", (req,res) =>
{
    const { error } = validateCourse(req.body);   //result.error (object destructuring))

    if(error) return res.status(400).send(error.details[0].message);
    
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put("/api/courses/:id", (req,res) => {

    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send("The course with the given Id does not exist");

    //validation
    const { error } = validateCourse(req.body);   //result.error (object destructuring))

    if(error) return res.status(400).send(error.details[0].message);
        
//return updated course
    course.name = req.body.name;
    res.send(course);
});

app.delete("/api/courses/:id", (req,res) => {
    //Look up the course id
    const course = courses.find(c => c.id === parseInt(req.params.id));
    
    //Not exist, then 404
    if (!course) return res.status(404).send("The course with the given Id does not exist");
    
    //else delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    //return back the deleted course back to client
    res.send(course);
});

function validateCourse(course){
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}
