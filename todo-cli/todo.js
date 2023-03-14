/* eslint-disable */
const todoList = () => {
  var today = new Date().toISOString()
    all = []
    const add = (todoItem) => {
      all.push(todoItem)
    }
    const markAsComplete = (index) => {
      all[index].completed = true
    }
  
    const overdue = () => {
        var nv
        var overdue_lst =[]
        
        for (nv in all){
            if (all[nv].dueDate < today){
                overdue_lst.push(all[nv])
            }
        }
        return overdue_lst
      // Write the date check condition here and return the array
      // of overdue items accordingly.
    }
  
    const dueToday = () => {
        var n
        var dueToday_lst =[]
        
        for ( n in all ){
            if (all[n].dueDate === today){
                dueToday_lst.push(all[n])
            }
        }
        return dueToday_lst
      // Write the date check condition here and return the array
      // of todo items that are due today accordingly.
    }
  
    const dueLater = () => {
        var m
        var dueLater_lst =[]
        
        for ( m in all ){
            if (all[m].dueDate > today){
                dueLater_lst.push(all[m])
            }
        }
        return dueLater_lst
      // Write the date check condition here and return the array
      // of todo items that are due later accordingly.
    }
  
    const toDisplayableList = (list) => {
        var i
        var displayList = []
        for (i=0;i<list.length;i++) {
            if (list[i].completed === false) {
                if (list[i].dueDate === today) {
                    displayList.push(`[ ] ${list[i].title}`)
                }
                else {
                    displayList.push(`[ ] ${list[i].title} ${list[i].dueDate}`)
                }
            }
            else {
                if (list[i].dueDate===today) {
                    displayList.push(`[x] ${list[i].title}`)
                }
                else {
                    displayList.push(`[x] ${list[i].title} ${list[i].dueDate}`)
                }          
            }
      }

        return displayList.join('\n')

      // Format the To-Do list here, and return the output string
      // as per the format given above.
    }
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList
    };
  };

  module.exports = todoList;
  
  // ####################################### #
  // DO NOT CHANGE ANYTHING BELOW THIS LINE. #
  // ####################################### #
  
  /*const todos = todoList();
  
  const formattedDate = d => {
    return d.toISOString().split("T")[0]
  }
  
  var dateToday = new Date()
  const today = formattedDate(dateToday)
  const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
  )
  const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
  )
  
  todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
  todos.add({ title: 'Pay rent', dueDate: today, completed: true })
  todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
  todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
  todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })
  
  console.log("My Todo-list\n")
  
  console.log("Overdue")
  var overdues = todos.overdue()
  var formattedOverdues = todos.toDisplayableList(overdues)
  console.log(formattedOverdues)
  console.log("\n")
  
  console.log("Due Today")
  let itemsDueToday = todos.dueToday()
  let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
  console.log(formattedItemsDueToday)
  console.log("\n")
  
  console.log("Due Later")
  let itemsDueLater = todos.dueLater()
  let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
  console.log(formattedItemsDueLater)
  console.log("\n\n")*/
