let IT = {
    coding: "web site",
    maintenance: "all machine",
    netwarking: "network cable",
    completed: false
  
  }
  
  let finance = {
    payment: "all-workers",
    buying: "matrials",
    selling:"all things",
    completed: false
  
  }
  
  let marketting = {
    market: "all-place",
    selling: "matrials",
    advertizing: "all strategies",
    completed: false
  
  }
  
  let humanResources = {
    hiring: "all-workers",
    assigning: "tasks",
    managing: "all-Services",
    completed: false
  
  }
  // function to add tasks to  TodoList
  
  let TodoList=[];
  
  function add(task){
    TodoList.push(task);
    
  }
  
  
  
  
  add(IT);
  add(finance);
  add(marketting);
  add(humanResources);
  
  // to remove task 
  
  TodoList.pop();
  
  
  
  // function to complete IT tasks
  
  function complete(comple){
    let comp= TodoList.find(tas =>tas.coding===comple);
    comp.completed=true;
    console.log(TodoList);
  }
  
  complete("web site");