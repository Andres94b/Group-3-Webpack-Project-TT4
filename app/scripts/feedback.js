import './../scss/feedback.scss';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
    if(form){
        form.addEventListener('submit', (e) =>{
            e.preventDefault();
            alert('success');
        });
    }
});