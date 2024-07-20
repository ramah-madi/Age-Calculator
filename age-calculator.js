// Selecting the Input Elements
let isValid = false;
const input_day = document.querySelector('#input-day');
const input_month = document.querySelector('#input-month');
const input_year = document.querySelector('#input-year');

// Selecting the Output Elements
const output_year = document.querySelector('.output-year');
const output_month = document.querySelector('.output-month');
const output_day = document.querySelector('.output-day');

// Selecting Label Elements
const label_day = document.querySelector('.label-day');
const label_month = document.querySelector('.label-month');
const label_year = document.querySelector('.label-year');

// Selecting Error Elements
const error_day = document.querySelector('.error-day');
const error_month = document.querySelector('.error-month');
const error_year = document.querySelector('.error-year');

// Selecting the button Element
const submit_btn = document.querySelector('.submit-button');

// Dates
const date = new Date();
const currentDay = date.getDate();
const currentMonth = date.getMonth()+1; // It results previous month hence the +1
const currentYear = date.getFullYear();

// Day Input Validation
input_day.addEventListener('input', () => {
   if(+input_day.value > 31) {
     error_day.innerHTML = 'Must be a valid day';
     label_day.classList.add('error-label');
     input_day.classList.add('error-input');
     isValid = false;

   } else if(+input_day.value < 1) {
     error_day.innerHTML = 'Must be a valid day';
     label_day.classList.add('error-label');
     input_day.classList.add('error-input');
     isValid = false;

   } else {
     error_day.innerHTML = '';
     label_day.classList.remove('error-label');
     input_day.classList.remove('error-input');
     isValid = true;
   };
});

// Month Input Validation
input_month.addEventListener('input', () => {
   if(+input_month.value > 12) {
     error_month.innerHTML = 'Must be a valid month';
     label_month.classList.add('error-label');
     input_month.classList.add('error-input');
     isValid = false;

   } else if (+input_month.value < 1) {
     error_month.innerHTML = 'Must be a valid month';
     label_month.classList.add('error-label');
     input_month.classList.add('error-input');
     isValid = false;

   } else {
    error_month.innerHTML = '';
    label_month.classList.remove('error-label');
    input_month.classList.remove('error-input');
    isValid = true;
   };
});

// Year Input Validation
input_year.addEventListener('input', () => {
    if(+input_year.value > currentYear) {
        error_year.innerHTML = `Must be in the past`;
        label_year.classList.add('error-label');
        input_year.classList.add('error-input');
        isValid = false;

    } else {
        error_year.innerHTML = '';
        label_year.classList.remove('error-label');
        input_year.classList.remove('error-input');
        isValid = true;
    };
});

function checkInputsIfEmpty() {
  if(!input_day.value) {
    error_day.innerHTML = `This field is required`;
    label_day.classList.add('error-label');
    input_day.classList.add('error-input');
    isValid = false;}

  if(!input_month.value) {
    error_month.innerHTML = `This field is required`;
    label_month.classList.add('error-label');
    input_month.classList.add('error-input');
    isValid = false;}

  if(!input_year.value) {
    error_year.innerHTML = `This field is required`;
    label_year.classList.add('error-label');
    input_year.classList.add('error-input');
    isValid = false;}
}

// Calculating the Age 
submit_btn.addEventListener('click', (e) => {
    e.preventDefault(); // To prevent the browser from refreshing
    checkInputsIfEmpty();

    if(isValid) {
        let userYear = currentYear - Number(input_year.value);
        let userMonth = currentMonth - Number(input_month.value);
        let userDay = currentDay - Number(input_day.value);

        if (userDay < 0) {
          userMonth -= 1;
          userDay += new Date(currentYear, currentMonth - 1, 0).getDate(); // Get the last day of the previous month
        };
  
        if (userMonth < 0) {
          userYear -= 1;
          userMonth += 12;
        };

        output_year.innerHTML = `${userYear}`;
        output_month.innerHTML = `${userMonth}`;
        output_day.innerHTML = `${userDay}`;
    } else {
        return;
    };
});

