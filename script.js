(function(){
    emailjs.init('ppRpTNJqbTyCdrlkh');
})();

function submitForm(answer) {
    var templateParams = {
        to_name: 'Sarbbeswar',
        from_name: 'Sanchita',
        message: `Sanchita answered: ${answer}`
    };

    emailjs.send('service_rlv4jgg', 'template_pfcnd7v', templateParams)
        .then(function(response) {
           alert('Your response has been sent!');
        }, function(error) {
           alert('Failed to send your response. Please try again.');
        });
}
