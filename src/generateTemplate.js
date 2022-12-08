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
 