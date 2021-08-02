const generateManager = (Manager) => {
  return `
  <div class="col-6 col-sm-3">
      <div class="card">
      <div class="card-header">
          <h2>${Manager.name}</h2>
          <h3><i class="fas fa-mug-hot"></i>Manager</h3>
      </div>
      <ul class="content">
          <li class="list-items">ID: ${Manager.id}</li>
          <li class="list-items">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
          <li class="list-items">Office Number: ${Manager.officeNumber}</li>
      </ul>
      </div>
  </div>
  `;
};

const generateIntern = (Intern) => {
  return `
  <div class="col-6 col-sm-3">
      <div class="card">
      <div class="card-header">
          <h2>${Intern.name}</h2>
          <h3><i class="fa-solid fa-user-graduate"></i>Intern</h3>
      </div>
      <ul class="content">
      <li class="list-items">ID:${Intern.id}</li>
          <li class="list-items">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
          <li class="list-group-item">School: ${Intern.school}</li>
      </ul>
      </div>
  </div>
  `;
};
const generateEngineer = (Engineer) => {
  return `
  <div class="col-6 col-sm-3">
      <div class="card">
      <div class="card-header">
          <h2>${Engineer.name}</h2>
          <h3><i class="fa-solid fa-glasses"></i> Engineer</h3>
      </div>
      <ul class="content">
         <li class="list-items">ID:${Engineer.id}</li>
          <li class="list-items">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
          <li class="list-group-item git">GitHub: <a href="https://github.com/${Engineer.github}" target="_blank">${Engineer.github}</a></li>
        
      </ul>
      </div>
  </div>
  `;
};

const generatePage = (cards) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap" rel="stylesheet">
<link rel="stylesheet" href="./style.css">
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
<div class="footer">
      <h2>Made with ❤️️ By Lakyn M Felix &copy; 2021 </h2>
  </div> 
</html>
`;
};

const generateHTML = (data) => {
  let cards = [];

  for (i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const managerCard = generateManager(employee);
      cards.push(managerCard);
    } else if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);
      cards.push(engineerCard);
    } else {
      const internCard = generateIntern(employee);
      cards.push(internCard);
    }
  }

  return generatePage(cards);
};

module.exports = generateHTML;
