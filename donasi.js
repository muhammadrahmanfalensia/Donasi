document.getElementById('amount').addEventListener('change', function() {
    var otherAmountInput = document.getElementById('otherAmount');
    if (this.value === 'other') {
        otherAmountInput.style.display = 'block';
    } else {
        otherAmountInput.style.display = 'none';
    }
});

document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelector('.donation-form').style.display = 'none';
    document.getElementById('confirmation').classList.remove('hidden');
});

