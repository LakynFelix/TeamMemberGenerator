
const generateManager = Manager => {
  return `
  <div class="col-4">
      <div class="card">
      <div class="card-header">
          <h3>${Manager.name}</h3>
          <h2><i class="fas fa-mug-hot"></i>Manager</h2>
      </div>
      <ul class="">
          <li class="list-group-item">ID: ${Manager.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${Manager.email}</a></li>
          <li class="list-group-item">Office Number: ${Manager.officeNumber}</li>
      </ul>
      </div>
  </div>
  `;
}
   
const generateIntern = Intern => {
  return `
  <div class="col-4">
      <div class="card">
      <div class="card-header">
          <h3>${Intern.name}</h3>
          <h2><i class="fa-solid fa-user-graduate"></i> Intern </h2>
      </div>
      <ul class="">
          <li class="list-group-item">Email: <a href="mailto:${Intern.email}</a></li>
          <li class="list-group-item">ID: ${Intern.id}</li>
      </ul>
      </div>
  </div>
  `;
}
const generateEngineer = Engineer => {
  return `
  <div class="col-4">
      <div class="card">
      <div class="card-header">
          <h3>${Engineer.name}</h3>
          <h2><i class="fa-solid fa-glasses"></i> Engineer </h2>
      </div>
      <ul class="">
          <li class="list-group-item">Email: <a href="mailto:${Engineer.email}</a></li>
          <li class="list-group-item"> GItHub: <a href="mailto:${Engineer.github}</a></li>
          <li class="list-group-item">ID: ${Engineer.id}</li>
      </ul>
      </div>
  </div>
  `;
}
    
     