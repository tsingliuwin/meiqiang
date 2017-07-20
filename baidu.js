chrome.extension.onRequest.addListener(
        function (request, sender, sendResponse) {
            if (request.action == "start") {
                sendResponse({ end: "end" });
                int = setInterval("buy()",1); 
            }
            if (request.action == "end") {
                sendResponse({ start: "start" });
                document.getElementById('J_btnBuy').innerHTML = '等待开始'
                clearInterval(int)
            }
        }
);
function buy(){
    var buy = document.getElementById('J_btnBuy')
    if (buy){
    if (buy.classList.contains('disabled')){
        buy.innerHTML = '疯抢中...'
    }else{
        buy.innerHTML = '订单提交中'
        buy.click()
    }
    }
}