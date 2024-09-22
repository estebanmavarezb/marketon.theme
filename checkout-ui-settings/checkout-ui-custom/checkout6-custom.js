window.addEventListener('load', () => {
  /* Step Bar START */
  vtexjs.checkout.getOrderForm().done(function (orderForm) {
    console.log(orderForm)

    const titleStepOne = document.querySelector('.checkout-steps_item_cart .text')
    const titleStepTwo = document.querySelector('.checkout-steps_item_identification .text')
    const titleStepThree = document.querySelector('.checkout-steps_item_shipping .text')
    const titleStepFour = document.querySelector('.checkout-steps_item_payment .text')
    const stepOne = 'v-custom-step-cart'
    const stepTwo = 'v-custom-step-email'
    const stepTwoProfile = 'v-custom-step-profile'
    const stepThree = 'v-custom-step-shipping'
    const stepFour = 'v-custom-step-payment'

    ;(function changeStepTitles() {
      titleStepOne && (titleStepOne.textContent = 'Resumen de la compra')
      titleStepTwo && (titleStepTwo.textContent = 'Datos personales')
      titleStepThree && (titleStepThree.textContent = 'Datos de envío')
      titleStepFour && (titleStepFour.textContent = 'Formas de pago')
    })()

    const mainContainer = document.getElementById('checkoutMainContainer')

    const observer = new MutationObserver(function (event) {
      let eventClass = event[0].target.className

      if (eventClass.includes(stepOne)) {
        titleStepOne.classList.add('active')
        titleStepOne.parentNode.classList.add('active')
        document.querySelector('.checkout-steps-wrap').scrollLeft = 0
      } else {
        titleStepOne.classList.remove('active')
        titleStepOne.parentNode.classList.remove('active')
      }
      if (eventClass.includes(stepTwo)) {
        titleStepTwo.classList.add('active')
        titleStepTwo.parentNode.classList.add('active')
        document.querySelector('.checkout-steps-wrap').scrollLeft = 0
      } else if (eventClass.includes(stepTwoProfile)) {
        titleStepTwo.classList.add('active')
        titleStepTwo.parentNode.classList.add('active')
        document.querySelector('.checkout-steps-wrap').scrollLeft = 0
      } else {
        titleStepTwo.classList.remove('active')
        titleStepTwo.parentNode.classList.remove('active')
      }
      if (eventClass.includes(stepThree)) {
        titleStepThree.classList.add('active')
        titleStepThree.parentNode.classList.add('active')
        document.querySelector('.checkout-steps-wrap').scrollLeft = 10000000
      } else {
        titleStepThree.classList.remove('active')
        titleStepThree.parentNode.classList.remove('active')
      }
      if (eventClass.includes(stepFour)) {
        titleStepFour.classList.add('active')
        titleStepFour.parentNode.classList.add('active')
        document.querySelector('.checkout-steps-wrap').scrollLeft = 10000000
      } else {
        titleStepFour.classList.remove('active')
        titleStepFour.parentNode.classList.remove('active')
      }
    })

    observer.observe(mainContainer, {
      attributeFilter: ['class'],
    })

    const inputEmail = document.querySelector('#client-email')
    const inputPhoneArea = document.querySelector('#client-phone1')
    const inputPhone = document.querySelector('#client-phone3')

    inputEmail.placeholder = 'su@correo.com'
    inputPhoneArea.placeholder = '11'
    inputPhone.placeholder = '51234567'
  })
  /* Step Bar END */

  const summarySelector = document.querySelectorAll('.summary-template-holder .row-fluid.summary')
  summarySelector.forEach((element) => {
    const goToHome = document.createElement('a')
    goToHome.setAttribute('href', '/')
    goToHome.setAttribute('class', 'linkGoToHome')
    goToHome.innerHTML = 'Elegir más productos'
    element.appendChild(goToHome)
  })
})

// KOIN DEVICE FINGERPRINT
!(function (t, e, i) {
  var r = t.createElement('script'),
    s = t.getElementsByTagName('body')[0]
  ;(r.type = 'text/javascript'),
    (r.src = 'https://securegtm.despegar.com/risk/fingerprint/statics/track-vtex-min.js'),
    (r.id = 'deviceId_fp'),
    r.setAttribute('org_id', 'oyYniGNr4U'),
    s.appendChild(r)
})(document)
// END KOIN DEVICE FINGERPRINT
