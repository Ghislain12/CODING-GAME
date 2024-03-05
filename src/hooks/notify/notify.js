// import React, {useEffect, useState} from "react";

import Notify from 'simple-notify'
import 'simple-notify/dist/simple-notify.css'

function sendNotify(status, title, text, effect = 'fade', autoclose = true) {
    new Notify({
      status: status,
      title: title,
      text: text,
      effect: effect,
      speed: 1000,
      customClass: null,
      customIcon: null,
      showIcon: true,
      showCloseButton: true,
      autoclose: autoclose,
      autotimeout: 3000,
      gap: 20,
      distance: 20,
      type: 1,
      position: 'right top'
    })
  }
  export {sendNotify}
