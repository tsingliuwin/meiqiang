$(document).on("click","#start",function(){
    chrome.tabs.getSelected(function(tabs){
        chrome.tabs.sendRequest(tabs.id,{action:"start"},function(response){
            if(tabs.url.indexOf('detail.meizu.com') > 0){
            if (response.end == "end"){
                $("#start").css("display",'none')
                $("#end").css("display",'initial')
            }
            }else{
                alert("请进去购买详情页使用")
            }
        })
    })
})
$(document).on("click","#end",function(){
    chrome.tabs.getSelected(function(tabs){
        chrome.tabs.sendRequest(tabs.id,{action:"end"},function(response){
            if (response.start == "start"){
                $("#end").css("display",'none')
                $("#start").css("display",'initial')
            }
        })
    })
})
