class NurseRegistration {
    private form: HTMLFormElement;
    private successMessage: HTMLElement;

    constructor() {
        this.form = document.getElementById('nurse-form') as HTMLFormElement;
        this.successMessage = document.getElementById('success-message') as HTMLElement;

        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    private handleSubmit(event: Event) {
        event.preventDefault();
        this.registerNurse();
    }

    private registerNurse() {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const department = (document.getElementById('department') as HTMLSelectElement).value;

        console.log('Registrando enfermera:', { name, email, phone, department });

        this.successMessage.classList.remove('hidden');
        this.form.reset();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new NurseRegistration();
});
