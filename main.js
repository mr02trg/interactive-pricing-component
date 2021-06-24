const pageViewEl = document.querySelector(".pageviews");
const pricingAmountEl = document.querySelector(".pricing__amount .highlight");
const pricingCycleEl = document.querySelector(".pricing__amount .cycle");
const sliderEl = document.querySelector(".pricing__slider");
const toggleEl = document.querySelector(".toggle__checkbox");
const YEARLY_DISCOUNT = .75;

// initialise
const init = () => {
  handleSliderUpdate(20);
  handleToggleUpdate(false);
}

const handleSliderUpdate = (sliderValue) => {
  const value = parseInt(sliderValue);
  sliderEl.value = value;
  pageViewEl.textContent = `${value}k pageviews`;
  
  handleToggleUpdate(toggleEl.checked);
}

const handleToggleUpdate = (isYearlyBilling) => {
  const currPrice = parseInt(sliderEl.value);
  if (isYearlyBilling) {
    pricingCycleEl.textContent = 'year';

    const yearlyPrice = (currPrice * 12 * YEARLY_DISCOUNT).toFixed(2);
    pricingAmountEl.textContent = `$${yearlyPrice}`;
  } else {
    pricingCycleEl.textContent = 'month';
    pricingAmountEl.textContent = `$${currPrice.toFixed(2)}`;
  }
}

sliderEl.addEventListener('change', (e) => handleSliderUpdate(e.target.value))
toggleEl.addEventListener('change', (e) => handleToggleUpdate(e.target.checked))
init();

