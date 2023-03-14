/* eslint-disable */
const todoList = require('../todo');


const {all, markAsComplete, add, overdue, dueToday, dueLater } = todoList ();
describe ("Todolist Test Suite", () => {
    beforeAll(() => {
        add (
            {
                title: "Test todo" ,
                completed: false,
                dueDate: new Date () . toISOString("en-CA")
            }
        );
    });

    test ("Should add new todo", () => {
        const todoItemsCount = all. length;
        add (
            {
                title: "Test todo", 
                completed: false,
                dueDate: new Date() . toISOString("en-CA")
            }
        );
        expect (all. length). toBe (todoItemsCount + 1);
    });
    test ("Should mark a todo as complete", () => {
        expect (all [0] .completed).toBe(false)
        markAsComplete (0) 
        expect (all [0] .completed).toBe(true) 
    });
    test ("overdue", () => {
       var today = new Date()
       var yest = today
       yest.setDate(yest.getDate()-1)
        add (
            {
                title: "Test overDue", 
                completed: false,
                dueDate: yest.toISOString("en-CA")
            }
        );
        expect (overdue().length).toBe (1)
    });
    test ("due today", () => {
        var today = new Date()
        add (
            {
                title: "Test today", 
                completed: false,
                dueDate: today.toISOString("en-CA")
            }
        );
        expect (dueToday().length).toBe(0);
    });
    test ("duelater", () => {
        //var today = new Date()
        var tomor = new Date()
        tomor.setDate(tomor.getDate()+1)
        add (
            {
                title: "Test duelater", 
                completed: false,
                dueDate: tomor.toISOString("en-CA")
            }
        );
        expect (dueLater().length).toBe(4);
    });
    
});

