$(document).ready(() => {
    $('#content').append(`<iframe id="contentView" src="../pages/users/users.html"></iframe>`)
});

const changeTheFrame = (page) => {
    $('#contentView').remove();
    if (page === 'user') {
        $('#content').append(`<iframe id="contentView" src="../pages/users/users.html"></iframe>`);
    } else if (page === 'admin') {
        $('#content').append(`<iframe id="contentView" src="../pages/admin/admin.html"></iframe>`);
    } else {
        $('#content').append(`<iframe id="contentView" src="../pages/contact/contact.html"></iframe>`);
    }
}
