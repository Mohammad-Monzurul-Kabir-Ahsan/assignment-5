function donateHistorySection(id) {
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
};

function buttonColor(id) {
    document.getElementById('btn-donate').classList.remove('bg-[#B4F461]');
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]');

    document.getElementById(id).classList.add('bg-[#B4F461]');

};

function buttonBorder(id) {
    document.getElementById('btn-donate').classList.remove('border-2');
    document.getElementById('btn-history').classList.remove('border-2');

    document.getElementById(id).classList.add('border-2');
};

function getTextValueById(id) {
    const amount = document.getElementById(id).innerText;
    const amountNumber = parseFloat(amount);
    return amountNumber;
};

function getInputValueById(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
};

function amountCheck(id) {
    const amount = document.getElementById(id).value;
    const numbers = /^\d+$/;
    if (amount.match(numbers)) {
        return true;
    }
    else {
        console.log('not a number')
        return false;
    }
};