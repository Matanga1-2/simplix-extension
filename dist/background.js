(()=>{"use strict";chrome.runtime.onMessage.addListener(((e,r)=>{})),chrome.runtime.onMessage.addListener(((e,r,o)=>{if("sendFeedback"===e.action){const{email:r,feedback:s,userAgent:t}=e.data;try{fetch("https://hooks.zapier.com/hooks/catch/14134904/3pqoek3/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,feedback:s,userAgent:t})}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{console.log("Feedback sent successfully:",e),o({status:"success",data:e})})).catch((e=>{console.error("Failed to send feedback:",e),o({status:"error",error:e.toString()})}))}catch(e){console.error("Error during fetch operation:"),e instanceof Error?(console.error(e.message),o({status:"error",error:e.message})):(console.error(String(e)),o({status:"error",error:String(e)}))}}return!0}))})();