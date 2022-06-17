const apply_elevation = (applyElevation, setApplyElevation) => {
  var reveals = document.querySelectorAll('.reveal_first_section');
  for (var i = 0; i < reveals.length; i++) {
    var elementTop = reveals[i].getBoundingClientRect().top;
    if (elementTop < 180) {
      setApplyElevation(true);
    } else {
      setApplyElevation(false);
    }
  }
};

const reveal_first_section = () => {
  var reveals = document.querySelectorAll('.reveal_first_section');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = -250;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
};

const reveal_first_section_image = () => {
  var reveals = document.querySelectorAll('.reveal_first_section_image');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = -250;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
};

const reveal_first_section_text = () => {
  var reveals = document.querySelectorAll('.reveal_first_section_text');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = -250;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
};

const reveal_second_section = () => {
  var reveals = document.querySelectorAll('.reveal_second_section');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
};

const reveal_second_section_text = () => {
  var reveals = document.querySelectorAll('.reveal_second_section_text');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
};

const reveal_second_section_card_1 = () => {
  var reveals = document.querySelectorAll('.reveal_second_section_card_1');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
};

const reveal_second_section_card_2 = () => {
  var reveals = document.querySelectorAll('.reveal_second_section_card_2');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
};

const reveal_third_section = () => {
  var reveals = document.querySelectorAll('.reveal_third_section');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
};

const reveal_third_section_text = () => {
  var reveals = document.querySelectorAll('.reveal_third_section_text');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
};

const reveal_third_section_card_1 = () => {
  var reveals = document.querySelectorAll('.reveal_third_section_card_1');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
};

const reveal_third_section_card_2 = () => {
  var reveals = document.querySelectorAll('.reveal_third_section_card_2');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
};

const reveal_third_section_card_3 = () => {
  var reveals = document.querySelectorAll('.reveal_third_section_card_3');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
};

const reveal_third_section_card_4 = () => {
  var reveals = document.querySelectorAll('.reveal_third_section_card_4');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
};

const reveal_third_section_image = () => {
  var reveals = document.querySelectorAll('.reveal_third_section_image');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
};

const reveal_fourth_section_text = () => {
  var reveals = document.querySelectorAll('.reveal_fourth_section_text');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
};

const reveal_fourth_section_image = () => {
  var reveals = document.querySelectorAll('.reveal_fourth_section_image');
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
};

export {
  apply_elevation,
  reveal_first_section,
  reveal_first_section_image,
  reveal_first_section_text,
  reveal_second_section,
  reveal_second_section_text,
  reveal_second_section_card_1,
  reveal_second_section_card_2,
  reveal_third_section,
  reveal_third_section_text,
  reveal_third_section_card_1,
  reveal_third_section_card_2,
  reveal_third_section_card_3,
  reveal_third_section_card_4,
  reveal_third_section_image,
  reveal_fourth_section_text,
  reveal_fourth_section_image,
};
