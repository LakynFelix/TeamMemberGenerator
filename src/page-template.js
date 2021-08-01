
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
          <h2><i class="fa-solid fa-user-graduate"></i>Intern</h2>
      </div>
      <ul class="">
          <li class="list-group-item">Email: <a href="mailto:${Intern.email}</a></li>
          <li class="list-group-item">ID:${Intern.id}</li>
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
          <h2><i class="fa-solid fa-glasses"></i>Engineer</h2>
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
    
const generatePage = cards => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="dist/style.css">
    <title> My Employee List </title>
</head>
<body>
    <header>
        <h1> My Crew </h1>
    </header>
    <div class="row">
        ${cards}
    </div>
</body>
</html>
`;
};

const generateHtml = (Manager, Intern, Engineer) => {
    return generatePage(
        generateManager(Manager),
        generateIntern(Intern),
        generateEngineer(Engineer)
    );
}   

module.exports = generateHTML;