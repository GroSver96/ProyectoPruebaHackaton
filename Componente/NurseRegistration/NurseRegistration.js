var NurseRegistration = /** @class */ (function () {
    function NurseRegistration() {
        this.form = document.getElementById('nurse-form');
        this.successMessage = document.getElementById('success-message');
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }
    NurseRegistration.prototype.handleSubmit = function (event) {
        event.preventDefault();
        this.registerNurse();
    };
    NurseRegistration.prototype.registerNurse = function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var department = document.getElementById('department').value;
        console.log('Registrando enfermera:', { name: name, email: email, phone: phone, department: department });
        this.successMessage.classList.remove('hidden');
        this.form.reset();
    };
    return NurseRegistration;
}());
document.addEventListener('DOMContentLoaded', function () {
    new NurseRegistration();
});
