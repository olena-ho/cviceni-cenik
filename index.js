const selectPlan = (planNumber) => {
  const planElements = document.querySelectorAll('.plan');

  planElements.forEach(element => {
    element.classList.remove('plan--selected')
  });

  const planElementDefault = document.querySelector('#plan1');

  const planElementSelected = document.querySelector(`#plan${planNumber}`);
  
  if (planNumber === undefined) {
    planElementDefault.classList.add('plan--selected')
  } else {
    planElementSelected.classList.add('plan--selected')

  }
}

selectPlan(3);
selectPlan(1);
