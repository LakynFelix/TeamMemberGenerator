const generateManager = (Manager) => {
  return `
  <div class="col-4">
      <div class="card">
      <div class="card-header">
          <h2>${Manager.name}</h2>
          <h3>Manager</h3>
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
  <div class="col-4">
      <div class="card">
      <div class="card-header">
          <h2>${Intern.name}</h2>
          <h3> Intern</h3>
      </div>
      <ul class="content">
          <li class="list-items">ID: ${Intern.id}</li>
          <li class="list-items">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
          <li class="list-items">School: ${Intern.school}</li>
      </ul>
      </div>
  </div>
  `;
};
const generateEngineer = (Engineer) => {
  return `
  <div class="col-4">
      <div class="card">
      <div class="card-header">
          <h2>${Engineer.name}</h2>
          <h3> Engineer</h3>
      </div>
      <ul class="content">
         <li class="list-items">ID: ${Engineer.id}</li> 
          <li class="list-items">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
          <li class="list-items">GitHub: <a href="https://github.com/${Engineer.github}" target="_blank">${Engineer.github}</a></li>
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
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://kit.fontawesome.com/f175fc73c6.js" crossorigin="anonymous"></script>
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
      <p>Made with ❤️️ By Lakyn M Felix &copy; 2021 </p>
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
