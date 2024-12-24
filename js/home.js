document.getElementById('btn-blog').addEventListener('click', function () {
    window.location.href = "./pages/blog.html";
});

document.getElementById('btn-donate').addEventListener('click', function () {
    donateHistorySection('donate-section');

    buttonColor('btn-donate');
    buttonBorder('btn-history')

});

document.getElementById('btn-history').addEventListener('click', function () {
    donateHistorySection('history-section');

    buttonColor('btn-history');
    buttonBorder('btn-donate');
});

document.getElementById('btn-donation-noakhali').addEventListener('click', function () {
    const donationBlanceMain = getTextValueById('donation-amt');
    const donationBalanceNoakhali = getTextValueById('donation-amt-noakhali');
    const donationAmountNoakhali = getInputValueById('input-donation-amt-noakhali');
    const donationAmountcheck = amountCheck('input-donation-amt-noakhali');

    if (donationAmountcheck === false) {
        alert('Check your Donation amount!!!!!!');
        return;
    }

    if (donationAmountNoakhali > donationBlanceMain) {
        alert('Donation amount exceed balance amount');
        return;
    };

    const newBalanceMain = donationBlanceMain - donationAmountNoakhali;
    const newBalanceNoakhali = donationBalanceNoakhali + donationAmountNoakhali;
    document.getElementById('donation-amt').innerText = newBalanceMain;
    document.getElementById('donation-amt-noakhali').innerText = newBalanceNoakhali;

    my_modal_5.showModal();
    document.getElementById('input-donation-amt-noakhali').value = '';

    const donatePurposeNoakhali = document.getElementById('donate-purpose-noakhali').innerText;
    const currentDate = new Date();
    const div = document.createElement('div');
    div.classList.add('border-2');
    div.classList.add('p-5');
    div.classList.add('rounded-2xl');
    div.classList.add('mb-5');
    div.innerHTML = `<p class="font-bold text-xl">${donationAmountNoakhali} Taka is ${donatePurposeNoakhali}</p>
    <p class="text-base font-light mt-2">Date : ${currentDate}</p>`;
    document.getElementById('history-section').appendChild(div);
});

document.getElementById('btn-donation-feni').addEventListener('click', function () {
    const donationBlanceMain = getTextValueById('donation-amt');
    const donationBalanceFeni = getTextValueById('donation-amt-feni');
    const donationAmountFeni = getInputValueById('input-donation-amt-feni');
    const donationAmountcheck = amountCheck('input-donation-amt-feni');

    if (donationAmountcheck === false) {
        alert('Check your Donation amount!!!!!!');
        return;
    }

    if (donationAmountFeni > donationBlanceMain) {
        alert('Donation amount exceed balance amount');
        return;
    };

    const newBalanceMain = donationBlanceMain - donationAmountFeni;
    const newBalanceFeni = donationBalanceFeni + donationAmountFeni;
    document.getElementById('donation-amt').innerText = newBalanceMain;
    document.getElementById('donation-amt-feni').innerText = newBalanceFeni;

    my_modal_5.showModal();
    document.getElementById('input-donation-amt-feni').value = '';

    const donationPurposeFeni = document.getElementById('donation-purpose-feni').innerText;
    const currentDate = new Date();
    const div = document.createElement('div');
    div.classList.add('border-2');
    div.classList.add('p-5');
    div.classList.add('rounded-2xl');
    div.classList.add('mb-5');
    div.innerHTML = `<p class="font-bold text-xl">${donationAmountFeni} Taka is ${donationPurposeFeni}</p>
    <p class="text-base font-light mt-2">Date : ${currentDate}</p>`;
    document.getElementById('history-section').appendChild(div);
});

document.getElementById('btn-donation-injured').addEventListener('click', function () {
    const donationBlanceMain = getTextValueById('donation-amt');
    const donationBalanceInjured = getTextValueById('donation-amt-injured');
    const donationAmountInjured = getInputValueById('input-donation-amt-injured');
    const donationAmountcheck = amountCheck('input-donation-amt-injured');

    if (donationAmountcheck === false) {
        alert('Check your Donation amount!!!!!!');
        return;
    };

    if (donationAmountInjured > donationBlanceMain) {
        alert('Donation amount exceed balance amount');
        return;
    };

    const newBalanceMain = donationBlanceMain - donationAmountInjured;
    const newBalanceInjured = donationBalanceInjured + donationAmountInjured;
    document.getElementById('donation-amt').innerText = newBalanceMain;
    document.getElementById('donation-amt-injured').innerText = newBalanceInjured;

    my_modal_5.showModal();
    document.getElementById('input-donation-amt-injured').value = '';

    const donationPurposeInjured = document.getElementById('donation-purpose-injured').innerText;
    const currentDate = new Date();
    const div = document.createElement('div');
    div.classList.add('border-2');
    div.classList.add('p-5');
    div.classList.add('rounded-2xl');
    div.classList.add('mb-5');
    div.innerHTML = `<p class="font-bold text-xl">${donationAmountInjured} Taka is ${donationPurposeInjured}</p>
    <p class="text-base font-light mt-2">Date : ${currentDate}</p>`;
    document.getElementById('history-section').appendChild(div);
});