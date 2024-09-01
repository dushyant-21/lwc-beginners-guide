import { LightningElement, track } from 'lwc';

export default class FeedbackForm extends LightningElement {
    @track name = '';
    @track email = '';
    @track feedback = '';
    @track showSuccess = false;

    handleInputChange(event) {
        const field = event.target.dataset.id;
        if (field === 'name') {
            this.name = event.target.value;
        } else if (field === 'email') {
            this.email = event.target.value;
        } else if (field === 'feedback') {
            this.feedback = event.target.value;
        }
    }

    handleSubmit() {
        if (this.name && this.email && this.feedback) {
            // Here you would typically handle form submission, e.g., call Apex or an API
            // For now, just simulate success
            this.showSuccess = true;

            // Clear form after submission
            this.name = '';
            this.email = '';
            this.feedback = '';
        } else {
            alert('Please fill in all fields.');
        }
    } 
}
