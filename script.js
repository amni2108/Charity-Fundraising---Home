$(document).ready(function() {
  $('.dropdown-menu').click(function() {
    $('.nav-links').toggleClass('show');
  });

  // Form Validation
  $('#donationForm').submit(function(e) {
    let name = $('#donorName').val();
    let email = $('#donorEmail').val();
    let amount = $('#donationAmount').val();
    let payment = $('#paymentMethod').val();

    if (!/^[A-Za-z\s]+$/.test(name)) {
      alert('Name must be letters only!');
      e.preventDefault();
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Enter a valid email address!');
      e.preventDefault();
      return;
    }
    if (isNaN(amount) || amount.trim() == '') {
      alert('Donation amount must be a number!');
      e.preventDefault();
      return;
    }
    if (payment == '') {
      alert('Please select a payment method!');
      e.preventDefault();
      return;
    }
    alert('Thank you for your donation!');
  });

  $('#contactForm').submit(function(e) {
    let name = $('#contactName').val();
    let email = $('#contactEmail').val();

    if (!/^[A-Za-z\s]+$/.test(name)) {
      alert('Name must be letters only!');
      e.preventDefault();
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Enter a valid email!');
      e.preventDefault();
      return;
    }
    alert('Thank you for contacting us!');
  });
});
