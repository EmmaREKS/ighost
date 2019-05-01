// var paymentForm = document.getElementById('paymentForm');
// paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(x){
    
      var client_email=document.forms[x]['email'].value;
      var client_domain=document.forms[x]['pwd'].value;
      var client_plan=document.forms[x]['plan'].value;
      var client_price=document.forms[x]['price'].value;
    //   console.log(`${client_email} ${client_domain} ${client_plan} ${client_price} `)
    var handler = PaystackPop.setup({
      key: 'pk_test_e3f3b8aba94f3c4be213aff318c7a26ec40a9462',
      email: client_email,
      amount: Number(client_price)*100,
      ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      metadata: {
         custom_fields: [
            {
                plan: client_price,
                domain_name:client_domain,
            }
         ]
      },
      callback: function(response){
          alert('success. transaction ref is ' + response.reference);
      },
      onClose: function(){
          alert('window closed');
      }
    });
    console.log(handler.openIframe());
    handler.openIframe();
  }

  