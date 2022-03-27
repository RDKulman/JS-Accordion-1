initAccordion();
window.addEventListener('resize', initAccordion);

function initAccordion() {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((item, index) => {
    let accrdContent = item.querySelector('.accordion__content');
    let accrdDescr = item.querySelector('.accordion__descr');

    if (index == 0) {
      item.classList.add('accordion--active');
      item.setAttribute('aria-expended', true);
      item.setAttribute('data-openlist', true);

      accrdContent.style.maxHeight = `${accrdContent.scrollHeight}px`;
      accrdDescr.setAttribute('aria-hidden', false);
    }
    else {
      item.setAttribute('aria-expended', false);
      item.setAttribute('data-openlist', false);

      accrdContent.style.maxHeight = '0';
      accrdDescr.setAttribute('aria-hidden', true);
    }

    item.addEventListener('click', (e) => {
      handleAccordion(e);
    });
  });
}

function handleAccordion (e) {
  let currentItem = e.currentTarget;
  let currentAccrdContent = currentItem.querySelector('.accordion__content');
  let currentAccrdDescr = currentItem.querySelector('.accordion__descr');
  
  if (currentItem.dataset.openlist !== 'true') {
    currentItem.removeAttribute('aria-expanded');
    currentItem.setAttribute('aria-expanded', 'true');
    currentItem.classList.add('accordion--active');
    currentItem.dataset.openlist = "true";

    currentAccrdContent.style.maxHeight = `${currentAccrdContent.scrollHeight}px`;

    currentAccrdDescr.removeAttribute('aria-hidden');
    currentAccrdDescr.setAttribute('aria-hidden', 'false');   
  }
  else {
    currentItem.removeAttribute('aria-expanded');
    currentItem.setAttribute('aria-expanded', 'false');
    currentItem.classList.remove('accordion--active');
    currentItem.dataset.openlist = "false";

    currentAccrdContent.style.maxHeight = `0`;

    currentAccrdDescr.removeAttribute('aria-hidden');
    currentAccrdDescr.setAttribute('aria-hidden', 'true');
  }
}