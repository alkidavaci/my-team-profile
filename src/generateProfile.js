 // html for manager
const generateManager = manager => {
    return `
<div class="container row justify-content-center">
    <div class="card col-4 box-profile">
        <div class="card-header">
            <h3>${manager.getName()}</h3>
                <h3><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
        </div>

        <div class="card-body">
            <p>ID:  ${manager.getId()}</p>
            <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p>Office Number: ${manager.getOfficeNumber()}</p>
        </div>
 </div>`;
};

// html for engineers
const generateEngineer = engineer => {
    return `
<div class="card col-4 box-profile">
    <div class="card-header">
        <h3>${engineer.getName()}</h3>
        <h3><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>

    <div class="card-body">
        <p>ID: ${engineer.getId()}</p>
        <p>Email: <a href="mailto:${engineer.getRole()}">${engineer.getRole()}</a></p>
        <p>Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
    </div>
</div>`;
};

// html for interns
const generateIntern = intern => {
    return `
<div class="card col-4 box-profile">
    <div class="card-header">
        <h3>${intern.getName()}</h3>
        <h3><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>

    <div class="card-body">
        <p>ID: ${intern.getId()}</p>
        <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
        <p>School: ${intern.getSchool()}</p>
    </div>
</div>`;
};
