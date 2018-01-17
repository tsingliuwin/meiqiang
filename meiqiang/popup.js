$(document).on("click", "#start", function () {
    function logTabs(tabs) {
        for (let tab of tabs) {
            // tab.url requires the `tabs` permission
            if (tab.url.indexOf('detail.meizu.com') > 0) {
                browser.tabs.sendMessage(
                    tab.id,
                    { action: "start" }
                ).then(response => {
                    if (response.action == "end") {
                        $("#start").css("display", 'none')
                        $("#end").css("display", 'initial')
                    }
                }).catch(onError);
            } else {
                alert("请进去购买详情页使用")
            }
        }
    }

    function onError(error) {
        console.log(`Error: ${error}`);
    }

    var querying = browser.tabs.query({ currentWindow: true, active: true });
    querying.then(logTabs, onError);
    // chrome.tabs.getSelected(function(tabs){
    //     chrome.tabs.sendRequest(tabs.id,{action:"start"},function(response){
    //         if(tabs.url.indexOf('detail.meizu.com') > 0){
    //         if (response.end == "end"){
    //             $("#start").css("display",'none')
    //             $("#end").css("display",'initial')
    //         }
    //         }else{
    //             alert("请进去购买详情页使用")
    //         }
    //     })
    // })
})
$(document).on("click", "#end", function () {
    var querying = browser.tabs.query({ currentWindow: true, active: true });
    querying.then(logTabs, onError);
    function logTabs(tabs) {
        for (let tab of tabs) {
            // tab.url requires the `tabs` permission
            if (tab.url.indexOf('detail.meizu.com') > 0) {
                browser.tabs.sendMessage(
                    tab.id,
                    { action: "end" }
                ).then(response => {
                    if (response.action == "start") {
                        $("#end").css("display", 'none')
                        $("#start").css("display", 'initial')
                    }
                }).catch(onError);
            } else {
                alert("请进去购买详情页使用")
            }
        }
    }

    function onError(error) {
        (`Error: ${error}`);
    }
    // chrome.tabs.getSelected(function (tabs) {
    //     chrome.tabs.sendRequest(tabs.id, { action: "end" }, function (response) {
    //         if (response.start == "start") {
    //             $("#end").css("display", 'none')
    //             $("#start").css("display", 'initial')
    //         }
    //     })
    // })
})
