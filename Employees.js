const employees = [
    { id: 11, name: 'Name_1', managerId: 24 },
    { id: 12, name: 'Name_2', managerId: 24 },
    { id: 13, name: 'Name_3', managerId: 11 },
    { id: 14, name: 'Name_4', managerId: 22 },
    { id: 15, name: 'Name_5', managerId: 24 },
    { id: 16, name: 'Name_6', managerId: 30 },
    { id: 17, name: 'Name_7', managerId: 19 },
    { id: 18, name: 'Name_8', managerId: 24 },
    { id: 19, name: 'Name_9', managerId: 12 },
    { id: 20, name: 'Name_10', managerId: 12 },
    { id: 21, name: 'Name_11', managerId: 25 },
    { id: 22, name: 'Name_12', managerId: 26 },
    { id: 23, name: 'Name_13', managerId: 27 },
    { id: 24, name: 'Name_14', managerId: 11 },
    { id: 25, name: 'Name_15', managerId: 13 },
    { id: 26, name: 'Name_16', managerId: 15 },
    { id: 27, name: 'Name_17', managerId: 15 },
    { id: 28, name: 'Name_18', managerId: 29 },
    { id: 29, name: 'Name_19', managerId: 30 },
    { id: 30, name: 'Name_20', managerId: 24 },
  ]

function getUserById(users) {
 for(let i = 0; i < employees.length; i++){
   if(employees[i].id === users){
      console.log(employees[i]);
    }
 }
}
getUserById(28)


function getEmplyeesMap(users) {
    let arr = []
      for(let i = 0; i < employees.length;i++){
        if(employees[i].managerId === users){
            arr.push(employees[i])
        }
      }console.log(arr);
  }
  getEmplyeesMap(23)



function getEmplyeesMap(users) {
    let arr = []
      for(let i = 0; i < employees.length; i++){
        if(employees[i].managerId === users){
            arr.push(employees[i])
        }
      }
      console.log(`${users}: `, arr);

  }
  for(let i = 0; i < employees.length; i++){
      getEmplyeesMap(employees[i].id )
  }
