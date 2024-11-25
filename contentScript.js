//@ts-check

// This runs multiple times at different points of the webpage loading cycle to maximize success


function optOutsLocalStorage() {
    window.localStorage.setItem('umami.disabled', "1");
    window.localStorage.setItem('plausible_ignore', "true");
}

function optOutsGlobalScope(){
    try{
        posthog.opt_out_capturing()
    }
    try {
        fathom.blockTrackingForMe();
    }
}

optOutsLocalStorage();
optOutsGlobalScope();
setTimeout(optOutsGlobalScope, 1000);   

console.log("Analytics opt out extension run")
