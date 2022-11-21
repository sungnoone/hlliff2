Dynamsoft.DBR.BarcodeScanner.license = "DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAxMzk1ODcyLVRYbFhaV0pRY205cVgyUmljZyIsIm9yZ2FuaXphdGlvbklEIjoiMTAxMzk1ODcyIiwiY2hlY2tDb2RlIjotMTM2NzM1NDc0N30=";

(async function(){
    try{
        const scanner = await Dynamsoft.DBR.BarcodeScanner.createInstance();
        scanner.onFrameRead = results =>{
            console.log("Barcodes on one frame:");
            for (let result of results) {
                console.log(result.barcodeFormatString + ": " + result.barcodeText);
            }
        };
        scanner.onUniqueRead = (txt, result) => {
            alert(txt);
            console.log("Unique Code Found: ", result);
        };
        await scanner.show();
    }catch(ex){
        alert('error');
        alert(ex.message || ex);
    }    
})();

/* document.addEventListener('DOMContentLoaded', () => {
    alert('dynamsoft.js: Ready');
    //initDynamsoft();
}); */

/* function initDynamsoft(){
    let pScanner = null;
    document.getElementById('btn-scan').addEventListener('click', async () => {
        try {
            alert('initDynamsoft()');
            const scanner = await (pScanner = pScanner || Dynamsoft.DBR.BarcodeScanner.createInstance());
            
        } catch (ex) {
            alert('error');
            console.error(ex);
        }
    });
} */
