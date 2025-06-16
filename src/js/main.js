//100vh мобайл
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var customViewportCorrectionVariable = 'vh';
function setViewportProperty(doc) {
    var prevClientHeight;
    var customVar = '--' + ( customViewportCorrectionVariable || 'vh' );
    function handleResize() {
        var clientHeight = doc.clientHeight;
        if (clientHeight === prevClientHeight) return;
        requestAnimationFrame(function updateViewportHeight(){
            doc.style.setProperty(customVar, (clientHeight * 0.01) + 'px');
            prevClientHeight = clientHeight;
        });
    }
    handleResize();
    return handleResize;
}
window.addEventListener('resize', setViewportProperty(document.documentElement));

//show modal preload
window.addEventListener('DOMContentLoaded', () => {
    const modal = new bootstrap.Modal(document.getElementById('onboardingModal'), {
      backdrop: 'static',
      keyboard: false
    });
    modal.show();
  });

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".onboarding-next-btn").forEach(button => {
    button.addEventListener("click", () => {
      const currentScreen = button.closest(".onboarding-screen");
      const nextScreen = currentScreen.nextElementSibling;

      if (nextScreen && nextScreen.classList.contains("onboarding-screen")) {
        currentScreen.classList.add("d-none");
        nextScreen.classList.remove("d-none");
        nextScreen.classList.remove("d-flex");
      }
    });
  });
});

document.querySelectorAll(".onboarding-screen__skip").forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = bootstrap.Modal.getInstance(document.getElementById("onboardingModal"));
    if (modal) modal.hide();
  });
});




document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
      const proModal = new bootstrap.Modal(document.getElementById('proModal'));
      proModal.show();
    }, 5000); // 10 секунд
  });

if(document.getElementById('topicInput')) {
  document.getElementById('topicInput').addEventListener('input', function () {
  document.getElementById('charCount').textContent = this.value.length;
});
}





// select
function updateSelect() {
  // Удаляем все текущие обработчики событий у элементов с классом '.select__trigger'
  document.querySelectorAll('.select__trigger').forEach(dropdown => {
    dropdown.removeEventListener('click', dropdownClickHandler);
    dropdown.addEventListener('click', dropdownClickHandler);
  });
 
  // Удаляем все текущие обработчики событий у элементов с классом '.select-mobile-back'
  document.querySelectorAll('.select-mobile-back').forEach(dropdownClose => {
    dropdownClose.removeEventListener('click', dropdownCloseClickHandler);
    dropdownClose.addEventListener('click', dropdownCloseClickHandler);
  });
 
  // Удаляем все текущие обработчики событий у элементов с классом '.select__options'
  document.querySelectorAll('.select__options').forEach(dropdownOption => {
    dropdownOption.removeEventListener('click', dropdownOptionClickHandler);
    dropdownOption.addEventListener('click', dropdownOptionClickHandler);
  });
 
  // Удаляем все текущие обработчики событий у элементов с классом '.select__content'
  document.querySelectorAll('.select__content').forEach(select => {
    window.addEventListener('click', function (e) {
      if (select.classList.contains('open')) {
        if (!select.contains(e.target)) {
 
          select.classList.remove('open');
          let phoneMasks = document.querySelectorAll('.phone-mask');
          phoneMasks.forEach(phone => {
            if (phone.classList.contains("js-active")) {
              phone.classList.remove('js-active')
            }
          });
        }
      }
     });
  });
 
  // Удаляем все текущие обработчики событий у элементов с классом '.select__option'
  document.querySelectorAll('.select__option').forEach(option => {
    option.removeEventListener('click', selectOptionClickHandler);
    option.addEventListener('click', selectOptionClickHandler);
  });
 
  // Удаляем все текущие обработчики событий у элементов с классом '.select__option-multiple'
  document.querySelectorAll('.select__option-multiple').forEach(optionMultiple => {
    optionMultiple.removeEventListener('click', selectOptionMultipleClickHandler);
    optionMultiple.addEventListener('click', selectOptionMultipleClickHandler);
  });
}
 
// Обработчик события click для элементов с классом '.select__trigger'
function dropdownClickHandler(e) {
  e.preventDefault();
 
  // Получение текущего элемента, на который был клик
  const currentElement = this;
 
  // Поиск ближайшего элемента с классом .select__content
  const selectContent = currentElement.closest('.select__content');
 
  // Если selectContent существует и не имеет класс disabled
  if (selectContent && !selectContent.classList.contains("disabled")) {
    // Найти все элементы с классом .select__content
    const allSelectContents = document.querySelectorAll('.select__content');
 
    // Удалить класс 'open' у всех элементов, кроме текущего
    allSelectContents.forEach(content => {
      if (content !== selectContent) {
        content.classList.remove('open');
      }
    });
 
    // Обработать текущее значение selectContent в зависимости от его класса
    if (!selectContent.classList.contains("multiple")) {
      console.log(2)
      currentElement.parentNode.classList.toggle("open");
    } else {
      currentElement.parentNode.classList.add("open");
    }
  }
}
 
// Обработчик события click для элементов с классом '.select-mobile-back'
function dropdownCloseClickHandler(e) {
  e.preventDefault();
  this.parentNode.parentNode.parentNode.classList.remove('open');
  this.parentNode.parentNode.parentNode.nextElementSibling.classList.remove('js-active');
}
 
// Обработчик события click для элементов с классом '.select__options'
function dropdownOptionClickHandler(e) {
  if (!this.parentNode.parentNode.classList.contains('multiple')) {
    this.parentNode.parentNode.classList.toggle('open');
  } else {
    this.parentNode.parentNode.classList.add('open');
  }
  console.log(3);
}
 
 
// Обработчик события click для элементов с классом '.select__option'
function selectOptionClickHandler() {
  if (!this.classList.contains('selected')) {
    let parentSelectContent = this.closest('.select__content')?.previousElementSibling;
    
    if (parentSelectContent) {
      parentSelectContent.classList.remove('empty');
    }

    let selectedOption = this;
    let previouslySelected = selectedOption.parentNode.querySelector('.select__option.selected');
    if (previouslySelected) {
      previouslySelected.classList.remove('selected');
    }

    selectedOption.classList.add('selected');
    selectedOption.closest('.select__content').querySelector('.select__trigger a').innerHTML = selectedOption.innerHTML;
    selectedOption.closest('.select__content').querySelector('.select__trigger').classList.remove('placeholder');
  }
}

 
// Обработчик события click для элементов с классом '.select__option-multiple'
function selectOptionMultipleClickHandler() {
  this.classList.toggle('selected');
  console.log(1);
}

document.addEventListener('DOMContentLoaded', function() {
  // Находим все элементы с классом .select__dropdown
  const dropdowns = document.querySelectorAll('.select__dropdown');

  dropdowns.forEach(dropdown => {

     const searchInput = dropdown.querySelector('.select__search--input');
     const options = dropdown.querySelectorAll('.select__options .select__option, .select__options .select__option-multiple');

     if(searchInput){

           searchInput.addEventListener('input', function() {
              const query = searchInput.value.toLowerCase();

              options.forEach(option => {
                 const text = option.textContent.toLowerCase();
                 if (text.includes(query)) {
                    option.style.display = 'block';
                 } else {
                    option.style.display = 'none';
                 }
              });
        });
     }

  });
});
 
 
updateSelect();
