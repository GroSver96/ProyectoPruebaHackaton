var NurseRegistration = /** @class */ (function () {
    function NurseRegistration() {
        this.nurse = { name: '', id: '', specialty: '' };
        this.form = document.getElementById('nurse-form');
        this.addEventListeners();
    }
    NurseRegistration.prototype.addEventListeners = function () {
        var _this = this;
        if (this.form) {
            this.form.addEventListener('submit', function (event) { return _this.handleSubmit(event); });
        }
    };
    NurseRegistration.prototype.handleSubmit = function (event) {
        event.preventDefault();
        var nameInput = document.getElementById('name').value;
        var idInput = document.getElementById('id').value;
        var specialtyInput = document.getElementById('specialty').value;
        this.nurse = {
            name: nameInput,
            id: idInput,
            specialty: specialtyInput,
        };
        console.log('Registered Nurse:', this.nurse);
        alert("Nurse ".concat(this.nurse.name, " registered successfully!"));
    };
    return NurseRegistration;
}());
// Inicializa el formulario de registro cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function () {
    new NurseRegistration();
});
