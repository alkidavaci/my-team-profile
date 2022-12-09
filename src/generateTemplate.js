 // creates html for manager
const generateManager = manager => {
    return `
<div class="container row justify-content-center">
    <div class="card col-4 box-profile">
        <div class="card-header">
            <h3>${manager.name}</h3>
                <h3><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>

        <div class="card-body">
            <p>ID:  ${manager.id}</p>
            <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p>Office Number: ${manager.officeNumber}</p>
        </div>
 </div>`;
};

// creates html for engineers
const generateEngineer = engineer => {
    return `
<div class="card col-4 box-profile">
    <div class="card-header">
        <h3>${engineer.name}</h3>
        <h3><i class="fas fa-glasses mr-2"></i>Engineer</h3>
    </div>

    <div class="card-body">
        <p>ID: ${engineer.id}</p>
        <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p>Github: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>
    </div>
</div>`;
};

// creates html for interns
const generateIntern = intern => {
    return `
<div class="card col-4 box-profile">
    <div class="card-header">
        <h3>${intern.name}</h3>
        <h3><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
    </div>

    <div class="card-body">
        <p>ID: ${intern.id}</p>
        <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
        <p>School: ${intern.school}</p>
    </div>
</div>`;
};
// Variables declaration
 let memberHtml = [];
 let membersCards ;

// Create html code for team members
generateFile = members => {
   
      for ( i = 0; i < members.length; i++ ) {
        
      if (members[i].getRole() === "Manager"){
        const managerHtml = generateManager(members[i]);
        memberHtml.push(managerHtml)
      }
      if (members[i].getRole() === "Engineer"){
        const engineerHtml =  generateEngineer(members[i])
        memberHtml.push(engineerHtml)
      }
      if (members[i].getRole() === "Intern"){
        const internHtml = generateIntern(members[i])
        memberHtml.push(internHtml)
      }
    } 
   
     membersCards = memberHtml.join('')
     
    const generateTeam = generatePage(membersCards); 
    return generateTeam;
  }

// creates html page
const generatePage = function (membersCards) {
    return`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <link rel="stylesheet" href="style.css" />
</head>

<body>
    <header>
        <nav class="navbar">
            <span class="navbar-brand w-100 text-center">My Team Profile</span>
        </nav>
    </header>
    <main>
    ${membersCards}
    </main>
</body>
</html>`};

// Export generatePage
module.exports = generateFile;