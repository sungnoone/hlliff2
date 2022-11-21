document.addEventListener('DOMContentLoaded', () => {
    alert('Ready');
    let myLiffId = '1657336121-pXAvePvw';
    initializeLiff(myLiffId);
});

function initializeLiff(myLiffId) {
  liff
    .init({
      liffId: myLiffId,
    })
    .then(() => {    
      setButtonHandler();
    })
    .catch(err => {
      alert(`error: ${JSON.stringify(err)}`);
    });
}

function setButtonHandler() {
  let btn1 = document.getElementById('btn1');
  let btn2 = document.getElementById('btn2');

  btn1.addEventListener('click', () => {
    window.alert('clicked: Zxing');
    liff.scanCodeV2()
    .then(function(result){
      liff
        .sendMessages([
          {
            type: 'text',
            text: result.value,
          },
        ])
        .then(() => {
          alert('message sent');
          
          liff.closeWindow();
        })
        .catch(err => {
          window.alert('Error sending message: ' + err);
        });
    }).catch(function(error){
      console.log("error" + error);
    });
  });

  btn2.addEventListener('click', () => {
    window.alert('clicked: Dynamsoft');
    liff.scanCodeV2()
    .then(function(result){
      liff
        .sendMessages([
          {
            type: 'text',
            text: result.value,
          },
        ])
        .then(() => {
          alert('message sent');
          liff.closeWindow();
        })
        .catch(err => {
          window.alert('Error sending message: ' + err);
        });
    }).catch(function(error){
      console.log("error" + error);
    });

  });

}